import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Instagram, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroCinematic from "@/assets/hero-indian-elegance.jpg";
import hero from "@/assets/hero-editorial.jpg";
import ivory from "@/assets/look-ivory.jpg";
import maroon from "@/assets/look-maroon.jpg";
import sage from "@/assets/look-sage.jpg";
import moodFestive from "@/assets/mood-festive.jpg";
import moodBridal from "@/assets/mood-bridal.jpg";
import moodContemporary from "@/assets/mood-contemporary.jpg";
import moodTraditional from "@/assets/mood-traditional.jpg";
import moodEvening from "@/assets/mood-evening.jpg";
import moodEveryday from "@/assets/mood-everyday.jpg";
import wovenCraftImg from "@/assets/woven-story-craft.jpg";
import collectionNewArrivals from "@/assets/collection-new-arrivals.jpg";
import collectionFestiveEdit from "@/assets/collection-festive-edit.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionSignature from "@/assets/collection-signature.jpg";
import collectionEveningEdit from "@/assets/collection-evening-edit.jpg";

import bridalPunjab from "@/assets/bridal-punjab.jpg";
import bridalRajasthan from "@/assets/bridal-rajasthan.jpg";
import bridalGujarat from "@/assets/bridal-gujarat.jpg";
import bridalBengal from "@/assets/bridal-bengal.jpg";
import bridalTamilnadu from "@/assets/bridal-tamilnadu.jpg";
import bridalKashmir from "@/assets/bridal-kashmir.jpg";
import bridalKerala from "@/assets/bridal-kerala.jpg";
import bridalAssam from "@/assets/bridal-assam.jpg";
import bridalMaharashtra from "@/assets/bridal-maharashtra.jpg";
import bridalLucknow from "@/assets/bridal-lucknow.jpg";
import bridalHeroPortrait from "@/assets/bridal-hero-portrait.jpg";
import bridalHeroPortrait2 from "@/assets/bridal-hero-portrait-2.jpg";
import bridalHeroPortrait3 from "@/assets/bridal-hero-portrait-3.jpg";

import indoWesternPalazzo from "@/assets/indo-western-palazzo.png";
import indoWesternSareeJumpsuit from "@/assets/indo-western-saree-jumpsuit.png";

import attentionFeatured from "@/assets/attention-featured.jpg";
import attentionCard1 from "@/assets/attention-card-1.jpg";
import attentionCard2 from "@/assets/attention-card-2.jpg";
import attentionCard3 from "@/assets/attention-card-3.jpg";
import attentionCard4 from "@/assets/attention-card-4.jpg";
import attentionCard5 from "@/assets/attention-card-5.jpg";
import attentionCard6 from "@/assets/attention-card-6.jpg";

import { MagneticElement } from "@/components/storefront";
import { CinematicFrameSequence } from "@/components/cinematic-frame-sequence";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Aavya — The Art of Indian Elegance" },
    { name: "description", content: "Discover an editorial collection of contemporary Indian occasionwear, from heirloom silk sarees to regal embroidered lehengas." },
    { property: "og:title", content: "Aavya — The Art of Indian Elegance" },
    { property: "og:description", content: "Heirloom craftsmanship woven with modern grace. Discover our Autumn Winter 2026 collection." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const sixMoods = [
  {
    id: "festive",
    title: "Festive",
    subtitle: "Luminous silks & celebratory brocades for joyous gatherings.",
    image: moodFestive,
    category: "Lehengas",
    tag: "01",
  },
  {
    id: "bridal",
    title: "Bridal",
    subtitle: "Heirloom crimson zardozi crafted for timeless royal vows.",
    image: moodBridal,
    category: "Lehengas",
    tag: "02",
  },
  {
    id: "contemporary",
    title: "Contemporary",
    subtitle: "Architectural drapes and sculptured modern silhouettes.",
    image: moodContemporary,
    category: "Anarkalis",
    tag: "03",
  },
  {
    id: "traditional",
    title: "Traditional",
    subtitle: "Classic Banarasi weaves and heritage temple motifs.",
    image: moodTraditional,
    category: "Sarees",
    tag: "04",
  },
  {
    id: "evening",
    title: "Evening",
    subtitle: "Midnight noir velvets & twilight metallic shimmer.",
    image: moodEvening,
    category: "Sarees",
    tag: "05",
  },
  {
    id: "everyday",
    title: "Everyday",
    subtitle: "Breezy hand-spun chanderi sets for effortless grace.",
    image: moodEveryday,
    category: "Kurta Sets",
    tag: "06",
  },
];

function SixMoodsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="moods-section" aria-label="Explore Our Moods">
      <div className="moods-header-wrap">
        <div>
          <p className="eyebrow">01 / CURATED OCCASIONS</p>
          <h2 className="moods-main-title">
            Explore Our <em>Moods.</em>
          </h2>
        </div>
      </div>

      <div className="moods-carousel-container" ref={scrollContainerRef}>
        <div className="moods-grid">
          {sixMoods.map((mood) => (
            <Link
              key={mood.id}
              to="/shop"
              search={{ category: mood.category }}
              className="mood-card"
            >
              <div className="mood-card-image-wrap">
                <img
                  src={mood.image}
                  alt={`${mood.title} Indian occasionwear`}
                  loading="lazy"
                  width={600}
                  height={800}
                  className="mood-card-img"
                />
                <div className="mood-card-overlay" />
                <span className="mood-tag">{mood.tag}</span>
              </div>

              <div className="mood-card-content">
                <div className="mood-card-text">
                  <span className="mood-card-kicker">MOOD / {mood.tag}</span>
                  <h3 className="mood-card-title">{mood.title}</h3>
                  <p className="mood-card-desc">{mood.subtitle}</p>
                </div>
                <div className="mood-explore-btn">
                  <span>Explore</span>
                  <ArrowRight size={14} strokeWidth={1.3} className="mood-explore-icon" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const featuredSixBridalLooks = [
  {
    state: "Punjab",
    title: "Punjab Royal Zardozi Velvet Lehenga",
    region: "North India",
    craft: "Pure Bullion Zardozi & Kalire",
    price: "₹1,35,000",
    image: bridalPunjab,
    slug: "punjab-zardozi-bridal-lehenga",
    desc: "Crimson micro-velvet adorned with antique gold zardozi needlework, traditional red chooda, and hanging golden kalire.",
  },
  {
    state: "Rajasthan",
    title: "Rajasthan Royal Rajputi Poshak Lehenga",
    region: "West India",
    craft: "Archival Gota Patti & Borla Setting",
    price: "₹1,48,000",
    image: bridalRajasthan,
    slug: "rajasthan-rajputi-poshak-lehenga",
    desc: "Rani pink & burnished gold Rajputi Poshak with hand-pressed gota patti, circular borla, and gossamer odhna veil.",
  },
  {
    state: "Gujarat",
    title: "Gujarat Heritage Panetar Silk Saree",
    region: "West India",
    craft: "Panetar Bandhani & Seedha Pallu",
    price: "₹88,500",
    image: bridalGujarat,
    slug: "gujarat-panetar-bandhani-saree",
    desc: "Ivory mulberry silk body with rich vermilion bandhani front-draped seedha pallu and pure gold zari borders.",
  },
  {
    state: "West Bengal",
    title: "Bengal Rajbari Benarasi Bridal Saree",
    region: "East India",
    craft: "Real Gold Floral Jaal & Sholar Mukut",
    price: "₹94,000",
    image: bridalBengal,
    slug: "bengal-rajbari-benarasi-saree",
    desc: "Royal red Katan Benarasi silk woven with gold floral jaal, traditional white Sholar Mukut crown, and sacred chandan artistry.",
  },
  {
    state: "Tamil Nadu",
    title: "Tamil Nadu Kanchipuram Temple Saree",
    region: "South India",
    craft: "Korvai Weave & Temple Border Architecture",
    price: "₹98,000",
    image: bridalTamilnadu,
    slug: "tamilnadu-kanchipuram-silk-saree",
    desc: "Maroon & mustard gold pure Kanchipuram silk with interlocking korvai temple borders and 22k gold oddiyanam waist belt styling.",
  },
  {
    state: "Kashmir",
    title: "Kashmir Royal Sapphire Tilla Pheran",
    region: "North India",
    craft: "24k Pure Gold Tilla & Taranga Headdress",
    price: "₹1,38,000",
    image: bridalKashmir,
    slug: "kashmir-tilla-velvet-pheran",
    desc: "Midnight sapphire velvet bridal Pheran with pure 24k gold Tilla needlework, Taranga crown, and hanging Dejhoor ear jewels.",
  },
];

function PanIndianBridalSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeState, setActiveState] = useState<string>("All");

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const displayedLooks =
    activeState === "All"
      ? featuredSixBridalLooks
      : featuredSixBridalLooks.filter((look) => look.state === activeState);

  return (
    <section className="bridal-heritage-section" aria-label="Featured Indian States Bridal Fashion">
      <div className="bridal-heritage-container">
        {/* Editorial Section Heading */}
        <div className="bridal-heritage-header-wrap">
          <div>
            <p className="eyebrow">02 / PAN-INDIAN BRIDAL HERITAGE</p>
            <h2 className="bridal-heritage-title">
              Wedding Looks.
            </h2>
          </div>

          <div className="bridal-nav-controls">
            <button
              type="button"
              onClick={() => scrollBy(-380)}
              className="bridal-arrow-btn"
              aria-label="Scroll bridal looks left"
            >
              <ChevronLeft size={20} strokeWidth={1.3} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(380)}
              className="bridal-arrow-btn"
              aria-label="Scroll bridal looks right"
            >
              <ChevronRight size={20} strokeWidth={1.3} />
            </button>
          </div>
        </div>

        {/* State Filter Pills */}
        <div className="bridal-state-pills" role="tablist" aria-label="Select Indian State">
          <button
            type="button"
            className={`bridal-state-pill-btn ${activeState === "All" ? "active" : ""}`}
            onClick={() => setActiveState("All")}
          >
            All
          </button>
          {featuredSixBridalLooks.map((look) => (
            <button
              key={look.state}
              type="button"
              className={`bridal-state-pill-btn ${activeState === look.state ? "active" : ""}`}
              onClick={() => setActiveState(look.state)}
            >
              {look.state}
            </button>
          ))}
        </div>

        {/* Horizontal Reel Viewport */}
        <div className="bridal-heritage-reel-viewport" ref={scrollRef}>
          <div className="bridal-heritage-track">
            {displayedLooks.map((look) => (
              <Link
                key={look.state}
                to="/product/$slug"
                params={{ slug: look.slug }}
                className="bridal-card"
              >
                <div className="bridal-card-media">
                  <img
                    src={look.image}
                    alt={`${look.state} traditional bridal fashion: ${look.title}`}
                    loading="lazy"
                    width={800}
                    height={1067}
                    className="bridal-card-img"
                  />
                  <div className="bridal-card-overlay" />
                  <span className="bridal-state-badge">
                    {look.state} · {look.region}
                  </span>
                  <div className="bridal-craft-chip">
                    <Sparkles size={13} className="text-amber-300" />
                    <span>{look.craft}</span>
                  </div>
                </div>

                <div className="bridal-card-content">
                  <span className="bridal-card-kicker">BRIDAL HERITAGE / {look.state.toUpperCase()}</span>
                  <h3 className="bridal-card-name">{look.title}</h3>
                  <p className="bridal-card-desc">{look.desc}</p>

                  <div className="bridal-card-footer">
                    <span className="bridal-card-price">{look.price}</span>
                    <span className="bridal-card-link-btn">
                      Explore Look <ArrowRight size={14} strokeWidth={1.4} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const curvedBridalGalleryItems = [
  {
    slug: "tamilnadu-kanchipuram-silk-saree",
    title: "Ruhani Temple Silk",
    subtitle: "KANCHIPURAM / TEMPLE WEAVE",
    state: "Tamil Nadu",
    price: "₹98,000",
    image: bridalTamilnadu,
  },
  {
    slug: "bengal-rajbari-benarasi-saree",
    title: "Saanjh Maroon Banarasi",
    subtitle: "BENGAL / KATAN SILK",
    state: "West Bengal",
    price: "₹94,000",
    image: bridalBengal,
  },
  {
    slug: "gujarat-panetar-bandhani-saree",
    title: "Prerna Panetar Silk",
    subtitle: "GUJARAT / TIE-DYE BANDHANI",
    state: "Gujarat",
    price: "₹88,500",
    image: bridalGujarat,
  },
  {
    slug: "kerala-kasavu-gold-zari-saree",
    title: "Kavya Courtyard Silk",
    subtitle: "KERALA / GOLD KASAVU",
    state: "Kerala",
    price: "₹64,500",
    image: bridalKerala,
  },
  {
    slug: "maharashtra-paithani-nauvari-saree",
    title: "Tara Peacock Paithani",
    subtitle: "MAHARASHTRA / NAUVARI SILK",
    state: "Maharashtra",
    price: "₹86,000",
    image: bridalMaharashtra,
  },
  {
    slug: "rajasthan-rajputi-poshak-lehenga",
    title: "Aavanya Royal Rajputi",
    subtitle: "RAJASTHAN / GOTA PATTI",
    state: "Rajasthan",
    price: "₹1,48,000",
    image: bridalRajasthan,
  },
  {
    slug: "punjab-zardozi-bridal-lehenga",
    title: "Noor Velvet Zardozi",
    subtitle: "PUNJAB / BULLION NEEDLEWORK",
    state: "Punjab",
    price: "₹1,35,000",
    image: bridalPunjab,
  },
  {
    slug: "kashmir-tilla-velvet-pheran",
    title: "Meher Sapphire Tilla",
    subtitle: "KASHMIR / ROYAL PHERAN",
    state: "Kashmir",
    price: "₹1,38,000",
    image: bridalKashmir,
  },
  {
    slug: "assam-golden-muga-silk-mekhela",
    title: "Inaya Wild Muga Silk",
    subtitle: "ASSAM / MEKHELA CHADOR",
    state: "Assam",
    price: "₹79,000",
    image: bridalAssam,
  },
  {
    slug: "lucknow-chikankari-mukaish-lehenga",
    title: "Zoya Awadh Chikankari",
    subtitle: "LUCKNOW / MUKAISH EMBROIDERY",
    state: "Uttar Pradesh",
    price: "₹1,65,000",
    image: bridalLucknow,
  },
];

function CurvedBridalGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const isHoveredRef = useRef(false);
  const hoveredIndexRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const currentScalesRef = useRef<number[]>(new Array(40).fill(1));

  // Duplicated array of items for seamless infinite wrap
  const galleryItems = [
    ...curvedBridalGalleryItems,
    ...curvedBridalGalleryItems,
  ];

  useEffect(() => {
    let animId: number;
    const speed = 1.45; // Faster, fluid continuous right-to-left glide
    const totalCount = galleryItems.length;

    const tick = () => {
      const container = containerRef.current;
      if (container) {
        const viewportWidth = container.offsetWidth || window.innerWidth;
        const centerX = viewportWidth / 2;

        // Responsive card dimensions
        const isMobile = viewportWidth < 640;
        const isTablet = viewportWidth >= 640 && viewportWidth < 1024;
        const cardWidth = isMobile ? 185 : isTablet ? 215 : 245;
        const cardGap = isMobile ? 12 : 16;
        const step = cardWidth + cardGap;
        const halfTotalWidth = (totalCount / 2) * step;

        if (!isHoveredRef.current && !isDraggingRef.current) {
          offsetRef.current += speed;
          if (offsetRef.current >= halfTotalWidth) {
            offsetRef.current -= halfTotalWidth;
          }
        }

        for (let i = 0; i < totalCount; i++) {
          const el = cardRefs.current[i];
          if (!el) continue;

          let cardX = i * step - offsetRef.current;
          while (cardX < -step * 2) {
            cardX += halfTotalWidth * 2;
          }
          while (cardX > viewportWidth + step * 2) {
            cardX -= halfTotalWidth * 2;
          }

          // Distance from center of viewport
          const cardCenterX = cardX + cardWidth / 2;
          const distFromCenter = cardCenterX - centerX;
          const norm = distFromCenter / (viewportWidth * 0.50);

          // Pronounced 3D Cylindrical Arc Formula:
          // Center card is highest and closest (norm = 0, curveY = 0)
          // Side cards drop smoothly downwards (curveY up to 36px) and rotate inward (up to 30deg)
          const absNorm = Math.min(Math.abs(norm), 1.85);
          const curveY = Math.pow(absNorm, 1.85) * (isMobile ? 22 : 36);
          const rotY = Math.max(-30, Math.min(30, norm * -24));
          const transZ = -Math.pow(absNorm, 1.45) * (isMobile ? 50 : 90);

          const isThisHovered = hoveredIndexRef.current === i;
          const targetScale = isThisHovered ? 1.16 : 1.0;
          currentScalesRef.current[i] = (currentScalesRef.current[i] || 1) + (targetScale - (currentScalesRef.current[i] || 1)) * 0.22;
          const scale = currentScalesRef.current[i] || 1;

          // Dynamic elevation and depth projection during zoom
          const hoverElevate = (scale - 1) * -85;
          const hoverZ = (scale - 1) * 320;
          // Zoomed card straightens its angle to face the viewer proudly
          const straightRotY = rotY * Math.max(0, 1 - (scale - 1) * 3);

          el.style.width = `${cardWidth}px`;
          el.style.left = `${cardX}px`;
          el.style.transform = `perspective(1050px) translateY(${curveY + hoverElevate}px) translateZ(${transZ + hoverZ}px) rotateY(${straightRotY}deg) scale(${scale})`;
          el.style.zIndex = isThisHovered
            ? "50"
            : String(Math.round(20 - Math.min(absNorm, 2) * 8));

          if (isThisHovered) {
            el.classList.add("is-active-card");
          } else {
            el.classList.remove("is-active-card");
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [galleryItems.length]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    offsetRef.current = dragStartOffsetRef.current - delta * 1.2;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="curved-arch-section" aria-label="Curved Signature Bridal Gallery">
      <div className="curved-arch-container">
        {/* Header matching user reference image */}
        <div className="curved-arch-header">
          <div className="curved-arch-header-left">
            <span className="curved-arch-kicker">THE SUITE / SIGNATURE</span>
            <h2 className="curved-arch-heading">
              Woven to Be <span className="curved-script-gold">Remembered</span>
            </h2>
          </div>

          <div className="curved-arch-header-right">
            <Link
              to="/shop"
              search={{ category: "Bridal Heritage" }}
              className="curved-arch-suite-link"
            >
              <span>EXPLORE THE SUITE</span>
              <span className="curved-arch-diamond">✦</span>
            </Link>
          </div>
        </div>

        {/* Curved Viewport */}
        <div
          ref={containerRef}
          className="curved-arch-viewport"
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
            hoveredIndexRef.current = null;
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Subtle lateral edge scrims for cinematic fading */}
          <div className="curved-arch-edge-fade curved-arch-fade-left" aria-hidden="true" />
          <div className="curved-arch-edge-fade curved-arch-fade-right" aria-hidden="true" />

          <div className="curved-arch-stage">
            {galleryItems.map((item, index) => (
              <Link
                key={`${item.slug}-${index}`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                to="/product/$slug"
                params={{ slug: item.slug }}
                className="curved-arch-card"
                onMouseEnter={() => {
                  isHoveredRef.current = true;
                  hoveredIndexRef.current = index;
                }}
                onMouseLeave={() => {
                  if (hoveredIndexRef.current === index) {
                    hoveredIndexRef.current = null;
                  }
                  isHoveredRef.current = false;
                }}
                onTouchStart={() => {
                  isHoveredRef.current = true;
                  hoveredIndexRef.current = index;
                }}
                onTouchEnd={() => {
                  setTimeout(() => {
                    if (hoveredIndexRef.current === index) {
                      hoveredIndexRef.current = null;
                    }
                    isHoveredRef.current = false;
                  }, 1800);
                }}
                onPointerDown={() => {
                  isHoveredRef.current = true;
                  hoveredIndexRef.current = index;
                }}
                aria-label={`${item.title} — ${item.price}`}
              >
                <div className="curved-arch-card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={896}
                    height={1200}
                    className="curved-arch-card-img"
                  />
                  <div className="curved-arch-card-scrim" />
                </div>

                <div className="curved-arch-card-meta">
                  <span className="curved-arch-card-sub">{item.subtitle}</span>
                  <h3 className="curved-arch-card-title">{item.title}</h3>
                  <span className="curved-arch-card-price">{item.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const bridalHeroSlides = [
  {
    image: bridalHeroPortrait,
    tag: "THE SACRED RED EDIT",
    title: "Imperial Handcrafted Bridal Lehenga",
  },
  {
    image: bridalHeroPortrait2,
    tag: "ROYAL PALACE COUTURE",
    title: "Noor Zardozi Crimson Ensemble",
  },
  {
    image: bridalHeroPortrait3,
    tag: "HERITAGE BENARASI SILKS",
    title: "Rajbari Scarlet Katan Bridal Drape",
  },
  {
    image: collectionBridal,
    tag: "ARCHIVAL CRIMSON VELVET",
    title: "Darbar Heirloom Needlecraft",
  },
  {
    image: moodBridal,
    tag: "TEMPLE GOLD & VERMILION",
    title: "Shringar Traditional Bridal Saree",
  },
];

const luxuryBridalCards = [
  {
    slug: "punjab-zardozi-bridal-lehenga",
    title: "Gulnoor Crimson Velvet Lehenga",
    tag: "HAUTE ZARDOZI · PUNJAB",
    price: "₹1,85,000",
    image: bridalPunjab,
  },
  {
    slug: "bengal-rajbari-benarasi-saree",
    title: "Saanjh Rajbari Benarasi Saree",
    tag: "KATAN SILK JAAL · BENGAL",
    price: "₹1,45,000",
    image: bridalBengal,
  },
  {
    slug: "rajasthan-rajputi-poshak-lehenga",
    title: "Padmavati Royal Rajputi Poshak",
    tag: "ARCHIVAL GOTA PATTI · RAJASTHAN",
    price: "₹2,10,000",
    image: bridalRajasthan,
  },
  {
    slug: "lucknow-chikankari-mukaish-lehenga",
    title: "Zoya Awadh Chikankari Lehenga",
    tag: "MUKAISH & PEARL · LUCKNOW",
    price: "₹1,95,000",
    image: bridalLucknow,
  },
  {
    slug: "kashmir-tilla-velvet-pheran",
    title: "Meher Sapphire Tilla Pheran",
    tag: "24K GOLD TILLA · KASHMIR",
    price: "₹1,65,000",
    image: bridalKashmir,
  },
];

function TheBridalCollectionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSlideHovered, setIsSlideHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const offsetRef = useRef(0);

  // 3-second auto-changing slideshow for left portrait
  useEffect(() => {
    if (isSlideHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bridalHeroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isSlideHovered]);

  // Triple set of 5 cards for infinite smooth loop
  const loopedCards = [
    ...luxuryBridalCards,
    ...luxuryBridalCards,
    ...luxuryBridalCards,
  ];

  useEffect(() => {
    let animId: number;
    const speed = 0.85; // smooth right-to-left glide

    const tick = () => {
      const track = trackRef.current;
      if (track) {
        const firstCard = track.children[0] as HTMLElement | undefined;
        const sixthCard = track.children[5] as HTMLElement | undefined;
        const setWidth =
          firstCard && sixthCard
            ? sixthCard.offsetLeft - firstCard.offsetLeft
            : 5 * 270;

        if (!isHoveredRef.current && !isDraggingRef.current) {
          offsetRef.current += speed;
          if (offsetRef.current >= setWidth) {
            offsetRef.current -= setWidth;
          }
        }

        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    offsetRef.current = Math.max(0, dragStartOffsetRef.current - delta);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const nudgeLeft = () => {
    offsetRef.current = Math.max(0, offsetRef.current - 260);
  };

  const nudgeRight = () => {
    offsetRef.current += 260;
  };

  return (
    <section className="luxury-bridal-section" aria-label="The Bridal Collection">
      {/* Top curved wavy edge */}
      <div className="luxury-bridal-wave-top" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0,0 C320,65 580,12 860,55 C1140,95 1320,25 1440,50 L1440,0 L0,0 Z"
            fill="var(--background, #faf7f2)"
          />
        </svg>
      </div>

      {/* Layered ambient wavy background decorative lines */}
      <div className="luxury-bridal-wave-ambient" aria-hidden="true">
        <svg
          className="luxury-bridal-ambient-svg"
          viewBox="0 0 1440 700"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-40,160 C280,260 520,70 820,180 C1120,290 1320,120 1500,200"
            stroke="rgba(212, 175, 55, 0.16)"
            strokeWidth="1.8"
          />
          <path
            d="M-20,320 C320,440 600,220 900,350 C1200,480 1380,290 1520,370"
            stroke="rgba(168, 24, 58, 0.28)"
            strokeWidth="2.2"
          />
          <path
            d="M-50,490 C260,590 560,390 860,520 C1160,650 1360,460 1530,540"
            stroke="rgba(212, 175, 55, 0.12)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="luxury-bridal-container">
        <div className="luxury-bridal-grid">
          {/* Left Column: Large Portrait with 3s Auto-Changing Slideshow */}
          <div className="luxury-bridal-left">
            <div
              className="luxury-bridal-portrait-wrapper"
              onMouseEnter={() => setIsSlideHovered(true)}
              onMouseLeave={() => setIsSlideHovered(false)}
            >
              {bridalHeroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`luxury-bridal-slide ${index === currentSlide ? "is-active" : ""}`}
                  aria-hidden={index !== currentSlide}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="luxury-bridal-portrait-img"
                    loading={index === 0 ? "eager" : "lazy"}
                    width={800}
                    height={1100}
                  />
                </div>
              ))}

              <div className="luxury-bridal-portrait-scrim" />

              <div className="luxury-bridal-portrait-badge">
                <span className="luxury-bridal-badge-diamond">✦</span>
                <span>THE COUTURE BRIDE</span>
              </div>

              <div className="luxury-bridal-portrait-caption">
                <span className="luxury-bridal-portrait-tag">
                  {bridalHeroSlides[currentSlide]?.tag}
                </span>
                <h3 className="luxury-bridal-portrait-title">
                  {bridalHeroSlides[currentSlide]?.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & 5 Vertical Rectangular Bridal Outfit Cards */}
          <div className="luxury-bridal-right">
            <div className="luxury-bridal-header">
              <div className="luxury-bridal-header-left">
                <div className="luxury-bridal-kicker">
                  <span>✦</span>
                  <span>HAUTE COUTURE HEIRLOOMS</span>
                  <span>✦</span>
                </div>
                <h2 className="luxury-bridal-heading">The Bridal Collection</h2>
                <p className="luxury-bridal-desc">
                  Sculpted in sacred scarlet silks, antique bullion zardozi, and archival needlework for the modern heirloom bride.
                </p>
              </div>

              <div className="luxury-bridal-header-right">
                <button
                  type="button"
                  onClick={nudgeLeft}
                  className="luxury-bridal-nav-btn"
                  aria-label="Previous bridal outfits"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={nudgeRight}
                  className="luxury-bridal-nav-btn"
                  aria-label="Next bridal outfits"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Horizontal cards viewport with smooth right-to-left glide */}
            <div
              className="luxury-bridal-viewport"
              onMouseEnter={() => {
                isHoveredRef.current = true;
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false;
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <div className="luxury-bridal-edge-fade luxury-bridal-fade-left" aria-hidden="true" />
              <div className="luxury-bridal-edge-fade luxury-bridal-fade-right" aria-hidden="true" />

              <div ref={trackRef} className="luxury-bridal-track">
                {loopedCards.map((card, idx) => (
                  <Link
                    key={`${card.slug}-${idx}`}
                    to="/product/$slug"
                    params={{ slug: card.slug }}
                    className="luxury-bridal-card"
                    aria-label={`${card.title} — ${card.price}`}
                  >
                    <div className="luxury-bridal-card-media">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="luxury-bridal-card-img"
                        loading="lazy"
                        width={600}
                        height={780}
                      />
                      <div className="luxury-bridal-card-scrim" />
                    </div>

                    <div className="luxury-bridal-card-body">
                      <div className="luxury-bridal-card-meta">
                        <span className="luxury-bridal-card-tag">{card.tag}</span>
                        <h4 className="luxury-bridal-card-name">{card.title}</h4>
                        <span className="luxury-bridal-card-price">{card.price}</span>
                      </div>

                      {/* Small Gold Button at bottom */}
                      <span className="luxury-bridal-gold-btn">
                        <span>View Piece</span>
                        <span className="luxury-bridal-gold-btn-icon">✦</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curved wavy edge */}
      <div className="luxury-bridal-wave-bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path
            d="M0,35 C260,75 520,10 780,60 C1040,110 1260,20 1440,45 L1440,80 L0,80 Z"
            fill="var(--background, #faf7f2)"
          />
        </svg>
      </div>
    </section>
  );
}



const showcaseCollections = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    subtitle: "Autumn Winter 2026 · Sculptural Drapes",
    number: "01",
    tag: "THE COUTURE EDIT",
    image: collectionNewArrivals,
    aspectClass: "card-asym-1",
    linkSearch: { category: "All" },
  },
  {
    id: "festive-edit",
    title: "Festive Edit",
    subtitle: "Emerald Brocades & Luminous Gota Patti",
    number: "02",
    tag: "ROYAL SOIRÉE",
    image: collectionFestiveEdit,
    aspectClass: "card-asym-2",
    linkSearch: { category: "Lehengas" },
  },
  {
    id: "bridal-collection",
    title: "Bridal Collection",
    subtitle: "Crimson Velvet & Hand-Guided Zardozi",
    number: "03",
    tag: "SACRED HEIRLOOMS",
    image: collectionBridal,
    aspectClass: "card-asym-3",
    linkSearch: { category: "Lehengas" },
  },
  {
    id: "signature-collection",
    title: "Signature Collection",
    subtitle: "Tissue Gold Silks & Sculptural Pearl Work",
    number: "04",
    tag: "ATELIER ICONS",
    image: collectionSignature,
    aspectClass: "card-asym-4",
    linkSearch: { category: "Sarees" },
  },
  {
    id: "evening-edit",
    title: "Evening Edit",
    subtitle: "Midnight Noir Velvets & Metallic Twilight",
    number: "05",
    tag: "NOCTURNE SERIES",
    image: collectionEveningEdit,
    aspectClass: "card-asym-5",
    linkSearch: { category: "Sarees" },
  },
];

function CollectionShowcaseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section className="collection-showcase-section" aria-label="Discover the Collection">
      <div className="collection-showcase-header">
        <div>
          <div className="showcase-eyebrow">
            <span className="showcase-diamond">✦</span>
            <span>CURATED SERIES</span>
            <span className="showcase-line" />
          </div>
          <h2 className="collection-showcase-title">
            Discover the <em>Collection.</em>
          </h2>
        </div>

        <div className="collection-showcase-controls">
          <span className="showcase-scroll-hint">DRAG OR SCROLL TO EXPLORE</span>
          <div className="showcase-nav-btns">
            <button
              type="button"
              onClick={() => scrollBy(-460)}
              className="showcase-arrow-btn"
              aria-label="Scroll collections left"
            >
              <ChevronLeft size={18} strokeWidth={1.3} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(460)}
              className="showcase-arrow-btn"
              aria-label="Scroll collections right"
            >
              <ChevronRight size={18} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`collection-gallery-viewport ${isDragging ? "is-dragging" : ""}`}
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="collection-gallery-track">
          {showcaseCollections.map((item) => (
            <Link
              key={item.id}
              to="/shop"
              search={item.linkSearch}
              className={`collection-asym-card ${item.aspectClass}`}
            >
              <div className="collection-asym-media">
                <img
                  src={item.image}
                  alt={`${item.title} — Aavya Couture`}
                  loading="lazy"
                  className="collection-asym-img"
                />
                <div className="collection-asym-scrim" />
                <span className="collection-kicker-tag">{item.tag}</span>

                <div className="collection-hover-pill">
                  <span>Explore</span>
                  <ArrowUpRight size={16} strokeWidth={1.4} className="collection-arrow-icon" />
                </div>
              </div>

              <div className="collection-asym-info">
                <div className="collection-meta-top">
                  <span className="collection-num">{item.number}</span>
                  <span className="collection-sep">/</span>
                  <span className="collection-series">SERIES</span>
                </div>
                <h3 className="collection-card-title">{item.title}</h3>
                <p className="collection-card-sub">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const worthCards = [
  {
    id: "01",
    num: "01",
    label: "01 · THE SISTERHOOD",
    title: "The Modern Sisterhood",
    detail: "Ivory & Sage Silk Ensemble",
    price: "From ₹42,000",
    image: attentionFeatured,
    position: "center 18%",
    slug: "the-modern-sisterhood-trio",
  },
  {
    id: "02",
    num: "02",
    label: "02 · GULABI RESHAM",
    title: "Gulabi Resham Suit",
    detail: "Blush Georgette & Palazzo",
    price: "₹38,500",
    image: attentionCard1,
    position: "center 18%",
    slug: "gulabi-resham-georgette-suit",
  },
  {
    id: "03",
    num: "03",
    label: "03 · ZAMARRUD SHARARA",
    title: "Zamarrud Sharara Set",
    detail: "Emerald Tilla Silk & Jacket",
    price: "₹46,000",
    image: attentionCard2,
    position: "center 18%",
    slug: "zamarrud-emerald-sharara-suit",
  },
  {
    id: "04",
    num: "04",
    label: "04 · ZAFRAN ATELIER",
    title: "Zafran Contemporary Trio",
    detail: "Honey-Gold Raw Silk",
    price: "₹52,000",
    image: attentionCard3,
    position: "center 18%",
    slug: "zafran-gold-silk-trouser-set",
  },
  {
    id: "05",
    num: "05",
    label: "05 · SURMAI SAPPHIRE",
    title: "Surmai Sapphire Draped Suit",
    detail: "Midnight Navy Cape Sharara",
    price: "₹44,500",
    image: attentionCard4,
    position: "center 18%",
    slug: "surmai-sapphire-cape-suit",
  },
  {
    id: "06",
    num: "06",
    label: "06 · JAMUNI COWL",
    title: "Jamuni Kalidar & Cowl Kurti",
    detail: "Plum Resham & Sheer Cape",
    price: "₹49,000",
    image: attentionCard5,
    position: "center 18%",
    slug: "jamuni-cowl-kalidar-anarkali",
  },
];

function WorthYourAttentionSection() {
  const [activeId, setActiveId] = useState<string>("01");

  return (
    <section className="worth-attention-section" aria-label="Worth Your Attention Editorial Fashion">
      <div className="worth-attention-inner">
        {/* Editorial Section Header */}
        <div className="worth-attention-header">
          <div>
            <div className="worth-attention-eyebrow">
              <span className="worth-attention-diamond">✦</span>
              <span>CONTEMPORARY OCCASIONWEAR</span>
              <span className="mx-2">·</span>
              <span>THE EDITORIAL SERIES</span>
            </div>
            <h2 className="worth-attention-title">
              Worth Your <em>Attention.</em>
            </h2>
          </div>

          <div className="hidden md:flex flex-col items-end gap-2 text-right">
            <p className="worth-attention-subtitle">
              Sculpted shararas, tiered anarkalis, and modern occasion silhouettes created for unforgettable gatherings.
            </p>
            <div className="worth-attention-hint">
              <span>HOVER TO EXPLORE SILHOUETTES</span>
              <span className="worth-attention-diamond">✦</span>
            </div>
          </div>
        </div>

        {/* Single Unified Horizontal Row of Expanding Cards (Hover-Driven) */}
        <div className="worth-accordion-row" role="tablist" aria-label="Fashion Collection Showcase">
          {worthCards.map((card) => {
            const isExpanded = card.id === activeId;
            return (
              <div
                key={card.id}
                role="button"
                tabIndex={0}
                aria-selected={isExpanded}
                onMouseEnter={() => setActiveId(card.id)}
                onClick={() => setActiveId(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(card.id);
                  }
                }}
                style={{
                  flexGrow: isExpanded ? 5 : 1,
                  flexShrink: 1,
                  flexBasis: "0%",
                }}
                className={`worth-accordion-card ${isExpanded ? "is-expanded" : "is-collapsed"}`}
                title={card.title}
              >
                <div className="worth-accordion-img-wrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    width={800}
                    height={1000}
                    style={{ objectPosition: card.position }}
                    className="worth-accordion-img"
                  />
                  <div className="worth-accordion-vignette" />

                  {/* Vertical label & number on collapsed cards */}
                  <span className="worth-vertical-label-wrap">{card.label}</span>
                  <span className="worth-accordion-num">{card.num}</span>

                  {/* Minimal 2-Line Bottom Overlay - Images Full and Unobscured */}
                  <Link
                    to="/shop"
                    search={{ category: "Kurta Sets" }}
                    className="worth-expanded-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="worth-card-clean-title">{card.title}</h3>
                    <p className="worth-card-clean-sub">
                      <span>{card.detail}</span>
                      <span>·</span>
                      <span className="worth-sub-accent">{card.price}</span>
                      <ArrowRight size={13} className="worth-card-clean-arrow" />
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const forHerCategories = [
  {
    id: "sarees",
    tag: "01",
    name: "Sarees",
    title: "Sculptured Sarees",
    subtitle: "Architectural drapes in handwoven tissue & mulberry silk.",
    image: collectionNewArrivals,
    layoutClass: "for-her-card-hero",
    searchCategory: "Sarees",
  },
  {
    id: "lehengas",
    tag: "02",
    name: "Lehengas",
    title: "Heirloom Lehengas",
    subtitle: "Opulent brocades & zardozi for grand celebratory nights.",
    image: collectionFestiveEdit,
    layoutClass: "for-her-card-lehengas",
    searchCategory: "Lehengas",
  },
  {
    id: "anarkalis",
    tag: "03",
    name: "Anarkalis",
    title: "Regal Anarkalis",
    subtitle: "Cascading volume with delicate tonal needlework.",
    image: ivory,
    layoutClass: "for-her-card-anarkalis",
    searchCategory: "Anarkalis",
  },
  {
    id: "dresses",
    tag: "04",
    name: "Dresses",
    title: "Occasion Dresses",
    subtitle: "Fluid Indo-western silhouettes tailored for global galas.",
    image: moodContemporary,
    layoutClass: "for-her-card-dresses",
    searchCategory: "Women",
  },
  {
    id: "co-ords",
    tag: "05",
    name: "Co-ord Sets",
    title: "Atelier Co-ords",
    subtitle: "Breezy hand-spun chanderi sets with effortless poise.",
    image: moodEveryday,
    layoutClass: "for-her-card-coords",
    searchCategory: "Kurta Sets",
  },
];

function ForHerSection() {
  return (
    <section className="for-her-section" aria-label="Women's Editorial: For Her">
      <div className="for-her-container">
        {/* Editorial Heading and CTA Header */}
        <div className="for-her-header">
          <div className="for-her-header-left">
            <div className="for-her-eyebrow">
              <span className="for-her-diamond">✦</span>
              <span>WOMEN’S EDITORIAL</span>
              <span className="for-her-line" />
            </div>
            <h2 className="for-her-title">
              For <em>Her.</em>
            </h2>
            <p className="for-her-lead">
              A celebration of modern Indian femininity. Discover sculptural sarees, heirloom lehengas, and fluid contemporary silhouettes crafted for moments that endure.
            </p>
            <div className="for-her-cta-wrap">
              <MagneticElement strength={0.22}>
                <Link
                  to="/shop"
                  search={{ category: "Women" }}
                  className="for-her-cta-btn"
                >
                  <span>Shop Women</span>
                  <ArrowRight size={16} strokeWidth={1.3} className="for-her-arrow" />
                </Link>
              </MagneticElement>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Mosaic Grid */}
        <div className="for-her-asym-mosaic">
          {forHerCategories.map((item) => (
            <Link
              key={item.id}
              to="/shop"
              search={{ category: item.searchCategory }}
              className={`for-her-card ${item.layoutClass}`}
            >
              <div className="for-her-card-media">
                <img
                  src={item.image}
                  alt={`${item.name} — ${item.title}`}
                  loading="lazy"
                  className="for-her-card-img"
                />
                <div className="for-her-card-overlay" />
                <span className="for-her-tag">
                  {item.tag} / {item.name.toUpperCase()}
                </span>
                <div className="for-her-hover-action">
                  <span>Explore</span>
                  <ArrowUpRight size={15} strokeWidth={1.3} className="for-her-hover-icon" />
                </div>
              </div>

              <div className="for-her-card-caption">
                <h3 className="for-her-card-title">{item.title}</h3>
                <p className="for-her-card-sub">{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CinematicBrandStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollYOffset, setScrollYOffset] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.top <= vh && rect.bottom >= 0) {
        const progress = (vh - rect.top) / (vh + rect.height);
        setScrollYOffset((progress - 0.5) * 70);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`cinematic-story-section ${isInView ? "is-in-view" : ""}`}
      aria-label="Cinematic Brand Story"
    >
      {/* Background Campaign Visual with Slow Parallax & Subtle Floating Movement */}
      <div className="cinematic-story-media-layer">
        <div
          className="cinematic-story-parallax-box"
          style={{ transform: `translate3d(0, ${scrollYOffset}px, 0)` }}
        >
          <img
            src={heroCinematic}
            alt="Aavya campaign — Tradition, Reimagined"
            className="cinematic-story-image"
          />
        </div>
        <div className="cinematic-story-top-vignette" />
        <div className="cinematic-story-bottom-vignette" />
        <div className="cinematic-story-radial-scrim" />
      </div>

      {/* Visually Immersive Minimal UI & Typographic Narrative */}
      <div className="cinematic-story-container">
        <div className="cinematic-story-inner">
          <p className="cinematic-story-eyebrow">
            <span>A MODERN ODE TO HERITAGE</span>
            <span className="cinematic-diamond">✦</span>
            <span>THE ATELIER ESSAY</span>
          </p>

          <h2 className="cinematic-story-title">
            Tradition, <em>Reimagined.</em>
          </h2>

          <p className="cinematic-story-lead">
            Rooted in the timeless artisan guilds of Jaipur, Varanasi, and Kanchipuram, Aavya was conceived as an ode to Indian craftsmanship liberated from rigidity. We collaborate directly with generational master weavers and zardozi artisans to sculpt contemporary silhouettes that honor ancient looms while moving weightlessly in the modern world.
          </p>

          <div className="cinematic-story-signature-row">
            <div className="cinematic-pillar">
              <span className="cinematic-pillar-num">100%</span>
              <span className="cinematic-pillar-label">Artisanal Loom Heritage</span>
            </div>
            <div className="cinematic-divider" />
            <div className="cinematic-pillar">
              <span className="cinematic-pillar-num">300+</span>
              <span className="cinematic-pillar-label">Generational Craft Families</span>
            </div>
            <div className="cinematic-divider" />
            <div className="cinematic-pillar">
              <span className="cinematic-pillar-num">PURE</span>
              <span className="cinematic-pillar-label">Mulberry & Chanderi Silks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const instagramPosts = [
  {
    id: "insta-1",
    image: bridalBengal,
    handle: "@aavyacouture",
    tag: "#BengalHeritage",
    caption: "Sacred Sholar Mukut & scarlet Katan Benarasi weave under chandelier glow.",
  },
  {
    id: "insta-2",
    image: indoWesternSareeJumpsuit,
    handle: "@aavyacouture",
    tag: "#IndoWesternCouture",
    caption: "Pre-draped floral saree jumpsuit with embroidered sweetheart bustier and belt.",
  },
  {
    id: "insta-3",
    image: bridalGujarat,
    handle: "@aavyacouture",
    tag: "#PanetarTradition",
    caption: "Traditional Panetar Bandhani seedha pallu draped in heritage havelis.",
  },
  {
    id: "insta-4",
    image: indoWesternPalazzo,
    handle: "@aavyacouture",
    tag: "#IndoWesternPalazzo",
    caption: "Ombre lime-olive sequin palazzo trousers with hand-beaded crop top and cape.",
  },
  {
    id: "insta-5",
    image: bridalKerala,
    handle: "@aavyacouture",
    tag: "#SacredKasavu",
    caption: "Ivory Kasavu pure gold zari amidst serene ancestral Nalukettu courtyards.",
  },
  {
    id: "insta-6",
    image: bridalAssam,
    handle: "@aavyacouture",
    tag: "#MugaSilkLegend",
    caption: "Rare natural golden wild Muga silk woven with auspicious Kingkhap motifs.",
  },
];

function InstagramGallerySection() {
  return (
    <section className="insta-gallery-section" aria-label="Instagram Fashion Gallery">
      <div className="insta-header">
        <div className="insta-header-left">
          <p className="eyebrow">THE DIGITAL SALON</p>
          <h2 className="insta-heading">Follow the Story</h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-handle-badge"
          aria-label="Follow @aavyacouture on Instagram"
        >
          <Instagram size={17} strokeWidth={1.4} />
          <span className="insta-handle-text">@aavyacouture</span>
        </a>
      </div>

      <div className="insta-grid">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-card"
            aria-label={`${post.caption} on Instagram`}
          >
            <div className="insta-card-frame">
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="insta-card-img"
              />
              <div className="insta-card-overlay">
                <div className="insta-overlay-center">
                  <div className="insta-icon-circle">
                    <Instagram size={24} strokeWidth={1.4} />
                  </div>
                  <span className="insta-post-tag">{post.tag}</span>
                  <p className="insta-post-caption">{post.caption}</p>
                </div>
                <div className="insta-overlay-bottom">
                  <span>VIEW POST ↗</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="insta-cta-wrap">
        <MagneticElement strength={0.22}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-follow-btn"
          >
            <Instagram size={15} strokeWidth={1.5} />
            <span>Follow Us</span>
            <ArrowRight size={14} strokeWidth={1.3} />
          </a>
        </MagneticElement>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first?.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubscribed(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`newsletter-section ${isInView ? "is-in-view" : ""}`}
      aria-label="Newsletter Subscription"
    >
      <div className="newsletter-card">
        <div className="newsletter-content">
          <p className="eyebrow newsletter-eyebrow">PRIVATE PRIVILEGES</p>
          <h2 className="newsletter-heading">
            Be the First <em>to Know</em>
          </h2>
          <p className="newsletter-subtext">
            Discover new collections, exclusive stories and private previews.
          </p>

          {subscribed ? (
            <div className="newsletter-success-state">
              <div className="newsletter-success-icon">
                <Check size={20} strokeWidth={1.8} />
              </div>
              <p className="newsletter-success-title">You are on the preview list.</p>
              <p className="newsletter-success-msg">
                We look forward to sharing private salon viewings, artisanal essays, and collection arrivals with you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-submit-btn">
                  <span>Subscribe</span>
                  <ArrowRight size={14} strokeWidth={1.4} />
                </button>
              </div>
              <p className="newsletter-disclaimer">
                We honor your privacy. Unsubscribe at any time with a single click.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function useLuxuryScrollReveal() {
  useEffect(() => {
    const selector =
      ".section-wrap, .section-heading, .editorial-product-card, .mood-editorial-card, .for-her-mosaic-item, .craftsmanship-story-card, .collection-asym-card, .lookbook-masonry-item, .insta-card, .closing-line, .woven-story-section, .craftsmanship-reel-section";
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Index() {
  useLuxuryScrollReveal();

  return <main className="luxury-experience-page">
    <CinematicFrameSequence />
    <section className="hero-luxury-wrap" aria-label="Hero Section">
      <div className="hero-media-container">
        <img
          className="hero-cinematic-img"
          src={heroCinematic}
          alt="Indian model wearing royal wine and gold embroidered ethnic couture in a heritage palace courtyard"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="hero-scrim-gradient" />
      </div>

      <div className="hero-content-wrap">
        <div className="hero-text-block">
          <p className="hero-collection-label">
            <span>AUTUMN WINTER 2026</span>
            <span className="hero-diamond">✦</span>
            <span>THE COUTURE EDIT</span>
          </p>

          <h1 className="hero-title">
            The Art of<br />
            <em>Indian Elegance</em>
          </h1>

          <p className="hero-subtitle">
            Heirloom zardozi, handwoven silk, and silhouettes sculpted for the moments that transcend time.
          </p>

          <div className="hero-cta-group">
            <MagneticElement strength={0.25}>
              <Link to="/shop" className="hero-cta-btn">
                <span>Explore Collection</span>
                <span className="hero-cta-icon">
                  <ArrowRight size={17} strokeWidth={1.3} />
                </span>
              </Link>
            </MagneticElement>
          </div>
        </div>

        <div className="hero-meta-bottom">
          <div className="hero-scroll-prompt">
            <span className="hero-scroll-line" />
            <span className="hero-scroll-text">SCROLL</span>
          </div>
          <div className="hero-edition-tag">01 / 04 — COUTURE EDITION</div>
        </div>
      </div>
    </section>
    <div className="marquee-line"><span>AN EXPRESSION OF MODERN HERITAGE</span><span className="marquee-diamond">✦</span><span>CRAFTED TO BE REMEMBERED</span><span className="marquee-diamond">✦</span><span>AN EXPRESSION OF MODERN HERITAGE</span></div>
    <SixMoodsSection />
    <PanIndianBridalSection />
    <CurvedBridalGallerySection />
    <TheBridalCollectionSection />
    <ForHerSection />
    <CollectionShowcaseSection />
    <WorthYourAttentionSection />
    <CinematicBrandStorySection />
    <InstagramGallerySection />
    <NewsletterSection />
  </main>;
}
