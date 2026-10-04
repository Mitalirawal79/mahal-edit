import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const TOTAL_FRAMES = 120;
const FRAME_PREFIX = "/frames/ezgif-frame-";
const FRAME_PAD = 3;
const FRAME_EXT = ".jpg";

function getFrameUrl(index: number): string {
  const frameNumber = String(index + 1).padStart(FRAME_PAD, "0");
  return `${FRAME_PREFIX}${frameNumber}${FRAME_EXT}`;
}

export function CinematicFrameSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cached HTMLImageElements
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const loadedFlagsRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));

  // Animation and scrubbing state
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastRenderedFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  // UI state
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Draw a frame onto canvas with cover aspect-ratio
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Find requested or nearest available loaded frame
    let frameToRender: HTMLImageElement | null = null;
    let actualIndex = frameIndex;

    if (loadedFlagsRef.current[frameIndex] && imagesRef.current[frameIndex]) {
      frameToRender = imagesRef.current[frameIndex];
    } else {
      // Search closest loaded frame (prefer previous, then next)
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = frameIndex - offset;
        if (prev >= 0 && loadedFlagsRef.current[prev] && imagesRef.current[prev]) {
          frameToRender = imagesRef.current[prev];
          actualIndex = prev;
          break;
        }
        const next = frameIndex + offset;
        if (next < TOTAL_FRAMES && loadedFlagsRef.current[next] && imagesRef.current[next]) {
          frameToRender = imagesRef.current[next];
          actualIndex = next;
          break;
        }
      }
    }

    if (!frameToRender || !frameToRender.complete || frameToRender.naturalWidth === 0) {
      return;
    }

    const { width: canvasW, height: canvasH } = canvas;
    if (canvasW === 0 || canvasH === 0) return;

    const imgW = frameToRender.naturalWidth;
    const imgH = frameToRender.naturalHeight;
    const imgRatio = imgW / imgH;
    const canvasRatio = canvasW / canvasH;

    let drawW: number;
    let drawH: number;
    let offsetX: number;
    let offsetY: number;

    // Object-fit: cover logic
    if (canvasRatio > imgRatio) {
      drawW = canvasW;
      drawH = canvasW / imgRatio;
      offsetX = 0;
      offsetY = (canvasH - drawH) / 2;
    } else {
      drawH = canvasH;
      drawW = canvasH * imgRatio;
      offsetX = (canvasW - drawW) / 2;
      offsetY = 0;
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(frameToRender, offsetX, offsetY, drawW, drawH);
    lastRenderedFrameRef.current = actualIndex;
  }, []);

  // Resize canvas to match display size multiplied by Device Pixel Ratio
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const newWidth = Math.round(rect.width * dpr);
    const newHeight = Math.round(rect.height * dpr);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
      const target = Math.round(currentFrameRef.current);
      drawFrame(target);
    }
  }, [drawFrame]);

  // Preload frames efficiently
  useEffect(() => {
    let isCancelled = false;
    let loaded = 0;

    // Load first frame with priority
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    imagesRef.current[0] = firstImg;

    firstImg.onload = () => {
      if (isCancelled) return;
      loadedFlagsRef.current[0] = true;
      loaded += 1;
      setLoadedCount(loaded);
      setIsInitialReady(true);
      updateCanvasDimensions();
      drawFrame(0);
    };

    // Load remaining frames
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      imagesRef.current[i] = img;

      img.onload = () => {
        if (isCancelled) return;
        loadedFlagsRef.current[i] = true;
        loaded += 1;
        setLoadedCount(loaded);

        // If target frame happens to be this frame or near it, redraw
        const currentTarget = Math.round(currentFrameRef.current);
        if (Math.abs(currentTarget - i) <= 1) {
          drawFrame(currentTarget);
        }
      };

      img.onerror = () => {
        if (isCancelled) return;
        console.warn(`[CinematicFrameSequence] Failed to load frame ${i}`);
      };
    }

    return () => {
      isCancelled = true;
    };
  }, [drawFrame, updateCanvasDimensions]);

  // Handle Resize
  useEffect(() => {
    updateCanvasDimensions();
    const handleResize = () => {
      updateCanvasDimensions();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [updateCanvasDimensions]);

  // Render loop using lerp for buttery smooth transitions
  useEffect(() => {
    let isRunning = true;

    const renderLoop = () => {
      if (!isRunning) return;

      const target = targetFrameRef.current;
      const current = currentFrameRef.current;
      const diff = target - current;

      // Smooth interpolation (spring-like responsiveness without jitter)
      if (Math.abs(diff) > 0.001) {
        currentFrameRef.current = current + diff * 0.22;
        const roundedIndex = Math.min(
          Math.max(Math.round(currentFrameRef.current), 0),
          TOTAL_FRAMES - 1
        );

        if (roundedIndex !== lastRenderedFrameRef.current) {
          drawFrame(roundedIndex);
        }
      } else if (currentFrameRef.current !== target) {
        currentFrameRef.current = target;
        const roundedIndex = Math.min(
          Math.max(Math.round(target), 0),
          TOTAL_FRAMES - 1
        );
        if (roundedIndex !== lastRenderedFrameRef.current) {
          drawFrame(roundedIndex);
        }
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isRunning = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawFrame]);

  // Scroll mapping
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollableDistance = rect.height - window.innerHeight;

      if (totalScrollableDistance <= 0) return;

      // Scroll progress from 0 (at top of container) to 1 (at bottom of container)
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollableDistance, 0), 1);

      setScrollProgress(progress);

      // Map progress to exact frame index (0 to 119)
      const mappedFrame = progress * (TOTAL_FRAMES - 1);
      targetFrameRef.current = mappedFrame;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Skip / Scroll down past animation
  const handleSkip = () => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const targetY = window.scrollY + rect.bottom;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  // Narrative phase thresholds
  const isPhase1 = scrollProgress >= 0.02 && scrollProgress < 0.32;
  const isPhase2 = scrollProgress >= 0.35 && scrollProgress < 0.68;
  const isPhase3 = scrollProgress >= 0.72 && scrollProgress <= 0.98;

  return (
    <section
      ref={containerRef}
      className="cinematic-scroll-section"
      aria-label="Cinematic Atelier Scroll Film"
    >
      <div ref={stickyRef} className="cinematic-sticky-viewport">
        {/* Full-screen HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="cinematic-canvas"
          aria-label="Interactive frame by frame Indian couture atelier animation"
        />

        {/* Ambient Film Vignette & Scrims */}
        <div className="cinematic-vignette-overlay" />
        <div className="cinematic-grain-overlay" />

        {/* Top HUD: Editorial Header */}
        <div className="cinematic-hud-top">
          <div className="cinematic-badge">
            <span className="cinematic-badge-dot" />
            <span className="cinematic-badge-text">ATELIER ARCHIVES</span>
            <span className="cinematic-badge-sep">/</span>
            <span className="cinematic-badge-sub">AUTUMN WINTER 2026</span>
          </div>
        </div>

        {/* Center Editorial Narrative Cards (fades based on frame phase) */}
        <div className="cinematic-narrative-container">
          <div
            className={`cinematic-narrative-card ${
              isPhase1 ? "is-active" : ""
            }`}
          >
            <p className="cinematic-narrative-tag">
              <Sparkles size={12} className="inline mr-1 text-[var(--gold,#d4af37)]" />
              GENESIS OF GRACE
            </p>
            <h2 className="cinematic-narrative-title">
              The Sacred <em>Weave</em>
            </h2>
            <p className="cinematic-narrative-desc">
              Pure handspun mulberry silk bathed in antique crimson, interwoven with pure silver and gold zari motifs.
            </p>
          </div>

          <div
            className={`cinematic-narrative-card ${
              isPhase2 ? "is-active" : ""
            }`}
          >
            <p className="cinematic-narrative-tag">
              <Sparkles size={12} className="inline mr-1 text-[var(--gold,#d4af37)]" />
              ROYAL ATELIER
            </p>
            <h2 className="cinematic-narrative-title">
              Sanctuary of <em>Craft</em>
            </h2>
            <p className="cinematic-narrative-desc">
              Where heritage archways guard timeless silhouettes sculpted for royal vows and immortal celebrations.
            </p>
          </div>

          <div
            className={`cinematic-narrative-card ${
              isPhase3 ? "is-active" : ""
            }`}
          >
            <p className="cinematic-narrative-tag">
              <Sparkles size={12} className="inline mr-1 text-[var(--gold,#d4af37)]" />
              HEIRLOOM COUTURE
            </p>
            <h2 className="cinematic-narrative-title">
              The Royal <em>Grandeur</em>
            </h2>
            <p className="cinematic-narrative-desc">
              Intricate zardozi needlework and hand-pressed dabka kalis that drape effortlessly in motion.
            </p>
          </div>
        </div>

        {/* Bottom HUD: Scroll direction prompt & Skip button */}
        <div className="cinematic-hud-bottom">
          <div className="cinematic-scroll-indicator">
            <div className="cinematic-mouse-pill">
              <span className="cinematic-wheel" />
            </div>
            <div className="cinematic-scroll-labels">
              <span className="cinematic-scroll-title">SCROLL TO EXPERIENCE</span>
              <span className="cinematic-scroll-hint">
                {scrollProgress < 0.95 ? "Scroll down to advance • Scroll up to rewind" : "Scroll to enter the collection"}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSkip}
            className="cinematic-skip-btn"
            aria-label="Skip frame sequence to collection"
          >
            <span>Skip to Collection</span>
            <ArrowDown size={14} className="cinematic-skip-icon" />
          </button>
        </div>

        {/* Preload Status Bar (shows subtly until ready) */}
        {!isInitialReady && (
          <div className="cinematic-loader-overlay">
            <div className="cinematic-loader-box">
              <div className="cinematic-loader-spinner" />
              <p className="cinematic-loader-title">AAVYA COUTURE</p>
              <p className="cinematic-loader-subtitle">Loading Cinematic Experience...</p>
              <div className="cinematic-loader-track">
                <div
                  className="cinematic-loader-fill"
                  style={{ width: `${Math.round((loadedCount / TOTAL_FRAMES) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
