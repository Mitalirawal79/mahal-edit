import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Instagram, Maximize2, X } from "lucide-react";
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
import { MagneticElement, ProductTile } from "@/components/storefront";
import { products } from "@/lib/catalog";

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

  const scrollBy = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="moods-section" aria-label="Explore Our Moods">
      <div className="moods-header-wrap">
        <div>
          <p className="eyebrow">01 / CURATED OCCASIONS</p>
          <h2 className="moods-main-title">
            Explore Our <em>Moods.</em>
          </h2>
        </div>
        <div className="moods-header-right">
          <p className="moods-lead">
            From quiet celebrations to resplendent bridal moments, dress for how you wish to feel.
          </p>
          <div className="moods-nav-arrows">
            <button
              type="button"
              onClick={() => scrollBy(-320)}
              className="moods-arrow-btn"
              aria-label="Scroll moods left"
            >
              <ChevronLeft size={18} strokeWidth={1.3} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(320)}
              className="moods-arrow-btn"
              aria-label="Scroll moods right"
            >
              <ChevronRight size={18} strokeWidth={1.3} />
            </button>
          </div>
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

function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.18 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`brand-statement-section ${isVisible ? "is-visible" : ""}`}
      aria-label="Brand Introduction"
    >
      <div className="brand-statement-inner">
        <p className="brand-statement-eyebrow">
          <span className="brand-statement-ornament">✦</span>
          <span>THE AAVYA PHILOSOPHY</span>
          <span className="brand-statement-ornament">✦</span>
        </p>

        <h2 className="brand-statement-title">
          Rooted in tradition.<br />
          <em>Designed for the modern world.</em>
        </h2>

        <div className="brand-statement-divider">
          <span className="divider-line" />
          <span className="divider-symbol">❖</span>
          <span className="divider-line" />
        </div>

        <p className="brand-statement-description">
          Born from a deep reverence for India&rsquo;s sacred textile heritage, Aavya reimagines classic occasionwear through a contemporary architectural lens. Every piece is an homage to master weavers and zardozi artisans—honouring centuries of handcraft while sculpting effortless, fluid silhouettes tailored for modern celebrations across the world.
        </p>

        <div className="brand-statement-footer">
          <span className="brand-statement-origin">HAUTE COUTURE · NEW DELHI</span>
        </div>
      </div>
    </section>
  );
}

function WovenStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
              const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
              // Subtle parallax shift between -28px and +28px
              const offset = (progress - 0.5) * 56;
              setParallaxY(offset);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`editorial-story-section ${isInView ? "is-in-view" : ""}`}
      aria-label="Storytelling: Woven to Be Remembered"
    >
      <div className="editorial-story-container">
        {/* Large fashion & craft image with reveal and parallax */}
        <div className="editorial-story-media-col">
          <div className="editorial-story-frame">
            <div
              className="editorial-story-parallax-img"
              style={{
                transform: `translate3d(0, ${parallaxY}px, 0) scale(1.08)`,
              }}
            >
              <img
                src={wovenCraftImg}
                alt="Artisan hand-embroidering regal burgundy velvet with pure gold zardozi on a heritage wooden loom"
                loading="lazy"
                width={1024}
                height={1365}
                className="editorial-story-img"
              />
            </div>
            <div className="editorial-story-badge">
              <span className="badge-tag">FIG. 03 / ATELIER ARCHIVE</span>
              <span className="badge-desc">HANDCRAFTED IN NEW DELHI</span>
            </div>
          </div>
        </div>

        {/* Editorial Text Column */}
        <div className="editorial-story-text-col">
          <div className="editorial-story-header">
            <div className="editorial-story-eyebrow">
              <span className="story-eyebrow-diamond">✦</span>
              <span className="story-eyebrow-label">THE STORY</span>
              <span className="story-eyebrow-line" />
            </div>

            <h2 className="editorial-story-title">
              Woven to Be<br />
              <em>Remembered.</em>
            </h2>
          </div>

          <div className="editorial-story-body">
            <p className="story-lead">
              Across India’s ancient textile sanctuaries—from the sacred looms of Varanasi to the sun-drenched courtyards of Chanderi—weaving is an act of storytelling. Every warp and weft preserves memories, songs, and ancestral pride.
            </p>

            <p className="story-paragraph">
              At Aavya, each silhouette begins in conversation with master artisans. Pure silk threads meet hand-beaten gold zari, while intricate zardozi needlework is painstakingly guided by hand over weeks of devotion. We refuse the haste of modern production, honouring the cadence of timeless craftsmanship where perfection is measured stitch by deliberate stitch.
            </p>

            <p className="story-paragraph">
              Yet tradition is never static. We translate this profound heritage into fluid, sculptural silhouettes with modern ease—garments designed not for display, but to become treasured heirlooms in the life stories of those who wear them.
            </p>
          </div>

          {/* Pillars of Craft */}
          <div className="editorial-story-pillars">
            <div className="story-pillar-item">
              <span className="pillar-num">01</span>
              <span className="pillar-title">Heritage Looms</span>
              <span className="pillar-desc">Authentic Banarasi & Chanderi silks woven by generational masters.</span>
            </div>
            <div className="story-pillar-item">
              <span className="pillar-num">02</span>
              <span className="pillar-title">Zardozi Devotion</span>
              <span className="pillar-desc">Hundred-hour hand embroidery using genuine metallic wires and beads.</span>
            </div>
            <div className="story-pillar-item">
              <span className="pillar-num">03</span>
              <span className="pillar-title">Modern Silhouettes</span>
              <span className="pillar-desc">Architectural drapes and weightless ease tailored for the contemporary world.</span>
            </div>
          </div>

          <div className="editorial-story-actions">
            <Link to="/story" className="editorial-story-btn">
              <span>Read Our Full Story</span>
              <ArrowRight size={16} strokeWidth={1.3} className="story-btn-icon" />
            </Link>
          </div>
        </div>
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

const craftDisciplines = [
  {
    id: "hand-embroidery",
    discipline: "01 / PURE ZARDOZI & MARODI",
    title: "Hand Embroidery",
    headline: "The Language of the Needle",
    description: "Guided entirely by hand with fine wooden adda frames, master karigars spend over 160 hours placing metallic bullion wires, dabka, and micro-sequins onto royal velvet foundations.",
    specs: ["160+ Craft Hours", "Pure Metallic Bullion", "Velvet Foundation"],
    label: "Artisan Crafted",
    image: moodBridal,
    imgCropClass: "crop-embroidery",
  },
  {
    id: "textile-weaving",
    discipline: "02 / THE HERITAGE PIT LOOM",
    title: "Textile Weaving",
    headline: "The Rhythm of Varanasi Looms",
    description: "Generational master weavers synchronize pedal, reed, and wooden shuttle—interleaving mulberry silk warp with genuine beaten gold zari to yield luminous, heirloom brocades.",
    specs: ["Varanasi Looms", "3 Weeks per Saree", "Mulberry Silk Warp"],
    label: "Handwoven",
    image: wovenCraftImg,
    imgCropClass: "crop-weaving",
  },
  {
    id: "fabric-details",
    discipline: "03 / TISSUE & CHANDERI TEXTURES",
    title: "Fabric Details",
    headline: "Lustrous Fluidity & Natural Fibers",
    description: "Spun from unhurried cotton-silk filaments and pressed gold leaf, each yard delivers a weightless, tactile drape that responds to the wearer's movement with effortless grace.",
    specs: ["Hand-Spun Filaments", "Beaten Gold Leaf", "Natural Vegetable Dyes"],
    label: "Made in India",
    image: collectionSignature,
    imgCropClass: "crop-fabric",
  },
  {
    id: "artisan-craftsmanship",
    discipline: "04 / ATELIER DEVOTION",
    title: "Artisan Craftsmanship",
    headline: "Generational Karigar Hands",
    description: "Honouring ancient craft guilds passed down across centuries. Every tension of thread and angle of tailoring reflects an intuitive, generational understanding of beauty.",
    specs: ["Delhi & Lucknow Guilds", "Generational Masters", "Zero Mechanization"],
    label: "Artisan Crafted",
    image: wovenCraftImg,
    imgCropClass: "crop-artisan",
  },
  {
    id: "embroidery-patterns",
    discipline: "05 / MOTIF ARCHIVE",
    title: "Embroidery Patterns",
    headline: "Sacred Temple Jaal & Paisley Motifs",
    description: "Archival mughal floral jaals and sacred temple kalash motifs are drafted by hand on tracing parchment before being brought to three-dimensional life in shimmering gota patti.",
    specs: ["Archival Motifs", "Gota Patti Jaal", "Geometric Symmetry"],
    label: "Handwoven",
    image: collectionFestiveEdit,
    imgCropClass: "crop-patterns",
  },
];

function CraftsmanshipStorySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const scrollBy = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollX(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section className="craftsmanship-section" aria-label="Craftsmanship: Made by Hand. Made to Last.">
      <div className="craftsmanship-header-wrap">
        <div>
          <div className="craftsmanship-eyebrow">
            <span className="craftsmanship-diamond">✦</span>
            <span>ATELIER ARCHIVES</span>
            <span className="craftsmanship-line" />
          </div>
          <h2 className="craftsmanship-title">
            Made by Hand.<br />
            <em>Made to Last.</em>
          </h2>
        </div>

        <div className="craftsmanship-controls">
          <p className="craftsmanship-lead">
            An intimate look into our atelier—where centuries-old Indian handloom and embroidery techniques become living works of art.
          </p>
          <div className="craftsmanship-nav-arrows">
            <button
              type="button"
              onClick={() => scrollBy(-460)}
              className="craftsmanship-arrow-btn"
              aria-label="Scroll craftsmanship left"
            >
              <ChevronLeft size={18} strokeWidth={1.3} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(460)}
              className="craftsmanship-arrow-btn"
              aria-label="Scroll craftsmanship right"
            >
              <ChevronRight size={18} strokeWidth={1.3} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Storytelling Strip */}
      <div
        className={`craftsmanship-reel-viewport ${isDragging ? "is-dragging" : ""}`}
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="craftsmanship-reel-track">
          {craftDisciplines.map((item, index) => {
            // Subtle scroll-based parallax translation calculation
            const parallaxShift = Math.sin((scrollX / 300) + index) * 18;

            return (
              <div key={item.id} className="craftsmanship-story-card">
                <div className="craftsmanship-media-frame">
                  <div
                    className="craftsmanship-parallax-inner"
                    style={{
                      transform: `translate3d(${parallaxShift}px, 0, 0) scale(1.08)`,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} — ${item.headline}`}
                      loading="lazy"
                      className={`craftsmanship-img ${item.imgCropClass}`}
                    />
                  </div>
                  <div className="craftsmanship-img-scrim" />

                  {/* Small Craftsmanship Label */}
                  <span className="craftsmanship-pill-label">
                    {item.label}
                  </span>

                  <span className="craftsmanship-corner-code">
                    FIG. 0{index + 1}
                  </span>
                </div>

                <div className="craftsmanship-card-content">
                  <span className="craftsmanship-discipline-tag">{item.discipline}</span>
                  <h3 className="craftsmanship-card-heading">{item.headline}</h3>
                  <p className="craftsmanship-card-desc">{item.description}</p>

                  <div className="craftsmanship-specs-list">
                    {item.specs.map((spec) => (
                      <span key={spec} className="craftsmanship-spec-chip">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const lookbookItems = [
  {
    id: "look-01",
    index: "01",
    title: "Velvet Crimson Lehenga",
    category: "COUTURE DRAPES",
    aspect: "tall",
    image: maroon,
    description: "Deep burgundy micro-velvet embroidered with intricate antique zardozi, hand-beaten gold wire, and finished with a gossamer organza veil.",
    specs: "320 Artisan Hours • Hand Zardozi • Pure Silk Velvet",
  },
  {
    id: "look-02",
    index: "02",
    title: "The Royal Bridal Heirloom",
    category: "ROYAL BRIDAL",
    aspect: "classic",
    image: collectionBridal,
    description: "Heirloom scarlet silk adorned with heritage architectural motifs, hand-beaded borders, and a scalloped gold tissue dupatta.",
    specs: "Kashi Weave • Resham Embroidery • Heritage Red",
  },
  {
    id: "look-03",
    index: "03",
    title: "Emerald Sculptural Silhouette",
    category: "CONTEMPORARY",
    aspect: "landscape",
    image: moodContemporary,
    description: "Sculptured modern anarkali silhouette in jewel-toned emerald silk, juxtaposing fluid drapes with geometric zari geometry.",
    specs: "Fluid Chanderi Silk • Modern Silhouette • Minimalist Zari",
  },
  {
    id: "look-04",
    index: "04",
    title: "Atelier Gilded Kurta Ensemble",
    category: "ATELIER GOLD",
    aspect: "tall",
    image: collectionSignature,
    description: "Finely woven gold thread motifs rendered on unbleached raw silk, finished with hand-hammered sequin piping and flared trousers.",
    specs: "Raw Silk Weave • Gilded Motifs • Couture Tailoring",
  },
  {
    id: "look-05",
    index: "05",
    title: "Saffron Brocade Festive Set",
    category: "PALACE FESTIVE",
    aspect: "square",
    image: moodFestive,
    description: "Luminous royal saffron silk with woven gold flora inspired by royal Mughal miniature murals and courtyards.",
    specs: "Banarasi Katan Silk • Real Silver Zari • Festive Edit",
  },
  {
    id: "look-06",
    index: "06",
    title: "Varanasi Heritage Handloom",
    category: "HEIRLOOM WEAVE",
    aspect: "landscape",
    image: wovenCraftImg,
    description: "Close-up macro study of master weavers at work, interlacing pure mulberry silk warp and weft with authentic gold zari thread.",
    specs: "Master Guild • Traditional Pit Loom • Pure Mulberry Silk",
  },
  {
    id: "look-07",
    index: "07",
    title: "Midnight Noir Evening Drape",
    category: "TWILIGHT NOIR",
    aspect: "tall",
    image: moodEvening,
    description: "Midnight noir sheer georgette with subtle gunmetal foil highlights and a dramatic architectural pallu for twilight galas.",
    specs: "Fine Georgette • Gunmetal Foil • Evening Occasionwear",
  },
  {
    id: "look-08",
    index: "08",
    title: "Chanderi Mint Gossamer",
    category: "CHANDERI POISE",
    aspect: "classic",
    image: sage,
    description: "Whisper-light sage chanderi with delicate floral booti drapes and sheer organza border accents for sunlit ceremonies.",
    specs: "Chanderi Cotton Silk • Hand Booti • Daytime Soirée",
  },
];

function FashionLookbookSection() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [hoveredLookId, setHoveredLookId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);

  // Keyboard navigation and body scroll lock for Lightbox
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : lookbookItems.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) => (prev !== null && prev < lookbookItems.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeLightboxIndex]);

  const activeItem = activeLightboxIndex !== null ? lookbookItems[activeLightboxIndex] : null;

  return (
    <section className="lookbook-section" aria-label="Fashion Lookbook">
      {/* Header */}
      <div className="lookbook-header">
        <div className="lookbook-header-left">
          <p className="eyebrow">EDITORIAL ARCHIVE / VOLUME IV</p>
          <h2 className="lookbook-heading">THE LOOKBOOK</h2>
        </div>
        <p className="lookbook-subheading">
          A visual chronicle of modern Indian silhouettes, poised between architectural grandeur and heirloom textile traditions.
        </p>
      </div>

      {/* Masonry Editorial Gallery */}
      <div className="lookbook-masonry-grid">
        {lookbookItems.map((item, index) => (
          <div
            key={item.id}
            className={`lookbook-masonry-item item-aspect-${item.aspect}`}
            onClick={() => setActiveLightboxIndex(index)}
            onMouseEnter={() => setHoveredLookId(item.id)}
            onMouseLeave={() => {
              setHoveredLookId(null);
              setCursorPos(null);
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            role="button"
            tabIndex={0}
            aria-label={`View look ${item.index}: ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveLightboxIndex(index);
              }
            }}
          >
            <div className="lookbook-media-wrap">
              <img
                src={item.image}
                alt={`${item.title} — ${item.category}`}
                loading="lazy"
                className="lookbook-image"
              />
              <div className="lookbook-image-scrim" />

              {/* Minimal category label */}
              <div className="lookbook-category-tag">
                <span className="lookbook-index-dot" />
                <span>{item.category}</span>
              </div>

              {/* Look number corner indicator */}
              <span className="lookbook-corner-index">LOOK {item.index}</span>

              {/* Floating cursor interaction pill */}
              <div
                className={`lookbook-cursor-indicator ${hoveredLookId === item.id ? "is-visible" : ""}`}
                style={
                  cursorPos && hoveredLookId === item.id
                    ? { left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }
                    : undefined
                }
              >
                <Maximize2 size={13} strokeWidth={1.5} />
                <span>EXPAND LOOK</span>
              </div>
            </div>

            {/* Bottom editorial title caption */}
            <div className="lookbook-item-meta">
              <span className="lookbook-item-index">{item.index} /</span>
              <h3 className="lookbook-item-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Interactive Lightbox */}
      {activeLightboxIndex !== null && activeItem && (
        <div
          className="lookbook-lightbox-backdrop"
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Lookbook Image Lightbox"
        >
          <div
            className="lookbook-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Topbar */}
            <div className="lookbook-lightbox-topbar">
              <div className="lightbox-topbar-left">
                <span className="lightbox-brand-label">AAVYA EDITORIAL</span>
                <span className="lightbox-diamond">✦</span>
                <span className="lightbox-archive-label">ARCHIVE 2026</span>
              </div>

              <div className="lightbox-counter">
                LOOK [ {String(activeLightboxIndex + 1).padStart(2, "0")} / {String(lookbookItems.length).padStart(2, "0")} ]
              </div>

              <button
                className="lightbox-close-btn"
                onClick={() => setActiveLightboxIndex(null)}
                aria-label="Close Lightbox"
              >
                <span>CLOSE</span>
                <X size={18} strokeWidth={1.4} />
              </button>
            </div>

            {/* Lightbox Stage */}
            <div className="lookbook-lightbox-stage">
              <button
                className="lightbox-nav-btn prev-btn"
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : lookbookItems.length - 1
                  )
                }
                aria-label="Previous Look"
              >
                <ChevronLeft size={24} strokeWidth={1.2} />
              </button>

              <div className="lookbook-lightbox-frame">
                <img
                  key={activeItem.id}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="lookbook-lightbox-img"
                />
              </div>

              <button
                className="lightbox-nav-btn next-btn"
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null && prev < lookbookItems.length - 1 ? prev + 1 : 0
                  )
                }
                aria-label="Next Look"
              >
                <ChevronRight size={24} strokeWidth={1.2} />
              </button>
            </div>

            {/* Lightbox Info Drawer & Thumbnails */}
            <div className="lookbook-lightbox-footer">
              <div className="lightbox-footer-content">
                <div className="lightbox-title-group">
                  <span className="lightbox-category-chip">{activeItem.category}</span>
                  <h3 className="lightbox-look-title">{activeItem.title}</h3>
                  <p className="lightbox-look-desc">{activeItem.description}</p>
                  <p className="lightbox-look-specs">{activeItem.specs}</p>
                </div>

                <div className="lightbox-actions">
                  <Link
                    to="/shop"
                    className="lightbox-action-btn"
                    onClick={() => setActiveLightboxIndex(null)}
                  >
                    <span>Inquire About Look</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Thumbnails strip */}
              <div className="lookbook-lightbox-thumbs">
                {lookbookItems.map((item, idx) => (
                  <button
                    key={item.id}
                    className={`lightbox-thumb-btn ${idx === activeLightboxIndex ? "is-active" : ""}`}
                    onClick={() => setActiveLightboxIndex(idx)}
                    aria-label={`Jump to look ${item.index}`}
                  >
                    <img src={item.image} alt={item.title} />
                    <span className="lightbox-thumb-idx">{item.index}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
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
    image: ivory,
    handle: "@aavyacouture",
    tag: "#AavyaArchive",
    caption: "Ivory silk whispered under morning courtyard light.",
  },
  {
    id: "insta-2",
    image: moodFestive,
    handle: "@aavyacouture",
    tag: "#FestiveNocturne",
    caption: "Royal saffron brocade woven with miniature floral motifs.",
  },
  {
    id: "insta-3",
    image: moodBridal,
    handle: "@aavyacouture",
    tag: "#TheBridalSuite",
    caption: "Centuries of zardozi craft in one unforgettable silhouette.",
  },
  {
    id: "insta-4",
    image: moodContemporary,
    handle: "@aavyacouture",
    tag: "#ModernHeritage",
    caption: "Architectural flutes cut in pure emerald Chanderi silk.",
  },
  {
    id: "insta-5",
    image: moodTraditional,
    handle: "@aavyacouture",
    tag: "#ArtisanHands",
    caption: "From ancient Varanasi pit looms directly to the modern atelier.",
  },
  {
    id: "insta-6",
    image: moodEvening,
    handle: "@aavyacouture",
    tag: "#TwilightGala",
    caption: "Midnight noir sheer georgette with subtle gunmetal zari.",
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
    <BrandStatement />
    <div className="marquee-line"><span>AN EXPRESSION OF MODERN HERITAGE</span><span className="marquee-diamond">✦</span><span>CRAFTED TO BE REMEMBERED</span><span className="marquee-diamond">✦</span><span>AN EXPRESSION OF MODERN HERITAGE</span></div>
    <SixMoodsSection />
    <section className="section-wrap edit-section" aria-label="Selected Pieces">
      <div className="section-heading section-heading-inline">
        <div>
          <p className="eyebrow">02 / CURATED PIECES</p>
          <h2>Selected <em>Pieces.</em></h2>
        </div>
        <Link to="/shop" className="text-link">
          View all pieces <ArrowRight size={17} />
        </Link>
      </div>
      <div className="product-grid home-product-grid">
        {products.slice(0, 4).map((product) => (
          <ProductTile key={product.slug} product={product} />
        ))}
      </div>
    </section>
    <ForHerSection />
    <CraftsmanshipStorySection />
    <WovenStorySection />
    <CollectionShowcaseSection />
    <FashionLookbookSection />
    <CinematicBrandStorySection />
    <InstagramGallerySection />
    <NewsletterSection />
    <section className="closing-line"><p>THE FINER THINGS ARE FELT, NOT SAID.</p><h2>Something beautiful <em>begins here.</em></h2><Link to="/shop" className="text-link">Explore the collection <ArrowRight size={17} /></Link></section>
  </main>;
}
