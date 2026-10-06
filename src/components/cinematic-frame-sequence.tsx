import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowDown, Sparkles } from "lucide-react";

const TOTAL_FRAMES = 240;
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
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  // Animation and scrubbing state
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastRenderedFrameRef = useRef<number>(-1);
  const hasDrawnInitialRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);

  // UI state
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Draw a frame onto canvas with cover aspect-ratio
  const drawFrame = useCallback((frameIndex: number): boolean => {
    const canvas = canvasRef.current;
    if (!canvas) return false;
    const ctx = canvas.getContext("2d");
    if (!ctx) return false;

    // Find requested or nearest available loaded frame
    let frameToRender: HTMLImageElement | null = null;
    let actualIndex = frameIndex;

    const requested = imagesRef.current[frameIndex];
    if (requested && requested.complete && requested.naturalWidth > 0) {
      frameToRender = requested;
    } else {
      // Search closest loaded frame (prefer previous, then next)
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = frameIndex - offset;
        if (prev >= 0) {
          const pImg = imagesRef.current[prev];
          if (pImg && pImg.complete && pImg.naturalWidth > 0) {
            frameToRender = pImg;
            actualIndex = prev;
            break;
          }
        }
        const next = frameIndex + offset;
        if (next < TOTAL_FRAMES) {
          const nImg = imagesRef.current[next];
          if (nImg && nImg.complete && nImg.naturalWidth > 0) {
            frameToRender = nImg;
            actualIndex = next;
            break;
          }
        }
      }
    }

    if (!frameToRender || !frameToRender.complete || frameToRender.naturalWidth === 0) {
      return false;
    }

    const canvasW = canvas.width;
    const canvasH = canvas.height;
    if (canvasW === 0 || canvasH === 0) return false;

    const imgW = frameToRender.naturalWidth || 2560;
    const imgH = frameToRender.naturalHeight || 1440;
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

    ctx.drawImage(frameToRender, offsetX, offsetY, drawW, drawH);
    lastRenderedFrameRef.current = actualIndex;
    hasDrawnInitialRef.current = true;
    return true;
  }, []);

  // Resize canvas to match display size multiplied by Device Pixel Ratio
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const width = rect.width || window.innerWidth || 1920;
    const height = rect.height || window.innerHeight || 1080;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const newWidth = Math.round(width * dpr);
    const newHeight = Math.round(height * dpr);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
      // Canvas resize clears the canvas bitmap, immediately redraw current frame
      drawFrame(Math.round(currentFrameRef.current));
    }
  }, [drawFrame]);

  // Preload frames efficiently without strict mode bugs
  useEffect(() => {
    if (imagesRef.current.length !== TOTAL_FRAMES) {
      imagesRef.current = new Array(TOTAL_FRAMES).fill(null);
    }

    const ensureLoaded = (index: number) => {
      if (imagesRef.current[index]) return;
      const img = new Image();
      img.src = getFrameUrl(index);
      img.onload = () => {
        const curTarget = Math.round(currentFrameRef.current);
        if (!hasDrawnInitialRef.current || Math.abs(curTarget - index) <= 1) {
          drawFrame(curTarget);
        }
      };
      imagesRef.current[index] = img;
    };

    // Load first 10 frames immediately for quick startup
    for (let i = 0; i < Math.min(10, TOTAL_FRAMES); i++) {
      ensureLoaded(i);
    }

    // If frame 0 is already cached in memory, draw it right away
    if (imagesRef.current[0]?.complete && imagesRef.current[0]?.naturalWidth > 0) {
      drawFrame(0);
    }

    // Preload remaining frames
    const timer = setTimeout(() => {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        ensureLoaded(i);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [drawFrame]);

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
      } else {
        currentFrameRef.current = target;
      }

      const roundedIndex = Math.min(
        Math.max(Math.round(currentFrameRef.current), 0),
        TOTAL_FRAMES - 1
      );

      // Keep attempting to draw until initial frame rendered, or whenever frame changes
      if (!hasDrawnInitialRef.current || roundedIndex !== lastRenderedFrameRef.current) {
        drawFrame(roundedIndex);
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

      // Map progress to exact frame index (0 to TOTAL_FRAMES - 1)
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

        {/* Ambient Film Scrim */}
        <div className="cinematic-vignette-overlay" />

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
      </div>
    </section>
  );
}
