import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Eye, Facebook, Heart, Instagram, Menu, Minus, Plus, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useBag } from "@/lib/bag";
import { formatPrice, products, type Product } from "@/lib/catalog";
import footerCampaignImg from "@/assets/footer-panoramic-campaign.png";

export function MagneticElement({
  children,
  className = "",
  strength = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-wrap ${className}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition:
          pos.x === 0 && pos.y === 0
            ? "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)"
            : "transform 0.12s ease-out",
      }}
    >
      {children}
    </div>
  );
}

export function Header() {
  const { count, setIsOpen } = useBag();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navCategories = [
    { label: "Bridal Heritage", to: "/shop" as const, search: { category: "Bridal Heritage" } },
    { label: "Indo Western Dresses", to: "/shop" as const, search: { category: "Indo Western Dresses" } },
    { label: "Sarees", to: "/shop" as const, search: { category: "Sarees" } },
    { label: "Lehengas", to: "/shop" as const, search: { category: "Lehengas" } },
    { label: "All Collections", to: "/shop" as const, search: { category: "All" } },
    { label: "Our Story", to: "/story" as const },
  ];

  const searchResults = searchQuery.trim()
    ? products.filter((p) =>
        `${p.name} ${p.category} ${p.occasion} ${p.fabric}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchOpen(false);
      navigate({ to: "/shop" });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar" role="region" aria-label="Announcement">
        <span className="announcement-text">New Collection — Autumn Winter 2026</span>
      </div>

      {/* Main Navigation Container */}
      <header className={`site-header-wrapper ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="site-header-main">
          {/* Left: Menu trigger */}
          <div className="header-side header-left">
            <button
              type="button"
              className="menu-button"
              aria-label="Open menu navigation"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={18} strokeWidth={1.2} />
              <span className="menu-button-label">Menu</span>
            </button>
          </div>

          {/* Center: Luxury brand logo */}
          <div className="header-center">
            <Link to="/" className="luxury-logo" aria-label="Aavya home">
              <span className="luxury-logo-title">AAVYA</span>
              <span className="luxury-logo-subtitle">NEW DELHI · EST. 2026</span>
            </Link>
          </div>

          {/* Right: Search, Account, Shopping Bag */}
          <div className="header-side header-right">
            <button
              type="button"
              className="header-icon-btn search-trigger"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={18} strokeWidth={1.2} />
            </button>

            <button
              type="button"
              className="header-icon-btn account-trigger"
              aria-label="Account details"
              onClick={() => setAccountOpen(true)}
            >
              <User size={18} strokeWidth={1.2} />
            </button>

            <button
              type="button"
              className="header-icon-btn bag-trigger"
              aria-label={`Open shopping bag, ${count} items`}
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag size={18} strokeWidth={1.2} />
              {count > 0 && <span className="bag-badge">{count}</span>}
            </button>
          </div>
        </div>

        {/* Desktop Horizontal Navigation */}
        <nav className="desktop-category-nav" aria-label="Category navigation">
          {navCategories.map((item) =>
            item.search ? (
              <Link
                key={item.label}
                to={item.to}
                search={item.search}
                className={`category-nav-link ${pathname === item.to ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`category-nav-link ${pathname === item.to ? "active" : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </header>

      {/* Slide-out Editorial Menu Drawer */}
      {menuOpen && (
        <div className="editorial-menu-backdrop" onClick={() => setMenuOpen(false)}>
          <aside
            className="editorial-menu-drawer"
            aria-label="Navigation Menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="editorial-menu-header">
              <span className="editorial-menu-title">AAVYA</span>
              <button
                type="button"
                className="close-drawer-btn"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={20} strokeWidth={1.2} />
              </button>
            </div>

            <div className="editorial-menu-content">
              <p className="editorial-kicker">AUTUMN WINTER 2026</p>
              <nav className="editorial-main-links">
                {navCategories.map((item) =>
                  item.search ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      search={item.search}
                      onClick={() => setMenuOpen(false)}
                      className="editorial-link"
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} strokeWidth={1.2} />
                    </Link>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="editorial-link"
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} strokeWidth={1.2} />
                    </Link>
                  )
                )}
              </nav>

              <div className="editorial-divider" />

              <div className="editorial-secondary-links">
                <p className="editorial-subheading">CLIENT SERVICES</p>
                <button
                  type="button"
                  className="editorial-text-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    setAccountOpen(true);
                  }}
                >
                  My Account / Sign In
                </button>
                <Link
                  to="/story"
                  onClick={() => setMenuOpen(false)}
                  className="editorial-text-btn"
                >
                  Our Heritage & Atelier
                </Link>
                <a href="mailto:concierge@aavya.example" className="editorial-text-btn">
                  Bespoke Styling Inquiries
                </a>
              </div>

              <div className="editorial-menu-footer">
                <div className="footer-meta">
                  <span>REGION: INDIA (INR ₹)</span>
                  <span>COMPLIMENTARY SHIPPING</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Interactive Search Overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-panel" onClick={(e) => e.stopPropagation()}>
            <div className="search-header">
              <form onSubmit={handleSearchSubmit} className="search-form">
                <Search size={20} strokeWidth={1.2} className="search-input-icon" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search sarees, lehengas, anarkalis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  aria-label="Search collection"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear query"
                  >
                    <X size={16} strokeWidth={1.2} />
                  </button>
                )}
              </form>
              <button
                type="button"
                className="search-close-btn"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={22} strokeWidth={1.2} />
              </button>
            </div>

            <div className="search-body">
              {searchQuery.trim() === "" ? (
                <div className="search-suggestions">
                  <p className="search-section-title">SUGGESTED COLLECTIONS</p>
                  <div className="search-chips">
                    {["Sarees", "Lehengas", "Anarkalis", "Kurta Sets", "Wedding"].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="search-chip"
                        onClick={() => {
                          setSearchOpen(false);
                          navigate({
                            to: "/shop",
                            search: {
                              category: ["Sarees", "Lehengas", "Anarkalis", "Kurta Sets"].includes(tag)
                                ? tag
                                : "All",
                            },
                          });
                        }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="search-results">
                  <p className="search-section-title">FOUND {searchResults.length} PIECES</p>
                  <div className="search-grid">
                    {searchResults.map((product) => (
                      <Link
                        key={product.slug}
                        to="/product/$slug"
                        params={{ slug: product.slug }}
                        onClick={() => setSearchOpen(false)}
                        className="search-result-card"
                      >
                        <img src={product.image} alt={product.name} width={70} height={90} />
                        <div className="search-result-info">
                          <span className="search-result-category">{product.category}</span>
                          <span className="search-result-name">{product.name}</span>
                          <span className="search-result-price">{formatPrice(product.price)}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="search-empty">
                  <p>No results found for &ldquo;{searchQuery}&rdquo;.</p>
                  <span>Explore our curated occasionwear collection.</span>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchOpen(false);
                      navigate({ to: "/shop" });
                    }}
                  >
                    View All Pieces
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Account Modal */}
      {accountOpen && (
        <div className="account-overlay" onClick={() => setAccountOpen(false)}>
          <div className="account-modal" onClick={(e) => e.stopPropagation()}>
            <div className="account-header">
              <div>
                <p className="account-kicker">CLIENT SERVICES</p>
                <h3 className="account-title">My Account</h3>
              </div>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setAccountOpen(false)}
                aria-label="Close account modal"
              >
                <X size={20} strokeWidth={1.2} />
              </button>
            </div>

            <div className="account-body">
              <p className="account-intro">
                Sign in to your private client profile to view custom orders, bridal fittings, and saved pieces.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setAccountOpen(false);
                }}
                className="account-form"
              >
                <label className="account-label">
                  <span>EMAIL ADDRESS</span>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="account-input"
                  />
                </label>

                <Button type="submit" className="account-submit-btn">
                  Continue with Email <ArrowRight size={15} strokeWidth={1.3} />
                </Button>
              </form>

              <div className="account-footer-links">
                <Link
                  to="/story"
                  onClick={() => setAccountOpen(false)}
                  className="account-link"
                >
                  About the Aavya Atelier
                </Link>
                <a
                  href="mailto:atelier@aavya.example"
                  className="account-link"
                >
                  Private Bridal Concierge
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function ProductTile({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "One Size");
  const [activeModalImg, setActiveModalImg] = useState<"primary" | "secondary">("primary");
  const { addItem } = useBag();

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickViewOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  const handleAddToBag = () => {
    addItem(product, selectedSize);
    setQuickViewOpen(false);
  };

  return (
    <>
      <article className="editorial-product-card">
        <div className="product-media-frame">
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="product-media-link"
            aria-label={`View ${product.name}`}
          >
            {/* Single fixed image - does not change on click or hover */}
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              width={1024}
              height={1408}
              className="product-img product-img-fixed"
            />
            <div className="product-media-scrim" />
          </Link>

          {/* State Tag for Bridal Outfits */}
          {product.state && (
            <span className="product-state-badge">
              {product.state}
            </span>
          )}

          {/* Wishlist Heart Icon */}
          <button
            type="button"
            className={`product-wishlist-btn ${isWishlisted ? "is-wishlisted" : ""}`}
            aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            onClick={handleToggleWishlist}
          >
            <Heart
              size={17}
              strokeWidth={1.3}
              className={`product-heart-icon ${isWishlisted ? "is-filled" : ""}`}
            />
          </button>

          {/* Quick View Button */}
          <button
            type="button"
            className="product-quick-view-trigger"
            aria-label={`Quick look at ${product.name}`}
            onClick={handleQuickViewOpen}
          >
            <span>Quick View</span>
          </button>
        </div>

        {/* Clean Editorial Meta (No marketplace clutter) */}
        <div className="editorial-product-meta">
          <div className="product-meta-kicker">
            <span className="product-collection-label">{product.collectionTag || "Handwoven Collection"}</span>
            <span className="product-kicker-sep">·</span>
            <span className="product-category-label">{product.category}</span>
          </div>

          <h3 className="editorial-product-name">
            <Link to="/product/$slug" params={{ slug: product.slug }}>
              {product.name}
            </Link>
          </h3>

          <div className="editorial-product-price">
            {formatPrice(product.price)}
          </div>
        </div>
      </article>

      {/* Luxury Quick View Dialog */}
      {quickViewOpen && (
        <div className="quickview-overlay" onClick={() => setQuickViewOpen(false)}>
          <div
            className="quickview-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Quick View: ${product.name}`}
          >
            <button
              type="button"
              className="quickview-close-btn"
              onClick={() => setQuickViewOpen(false)}
              aria-label="Close Quick View"
            >
              <X size={20} strokeWidth={1.3} />
            </button>

            <div className="quickview-grid">
              {/* Single fixed image showcase */}
              <div className="quickview-gallery">
                <div className="quickview-main-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="quickview-main-img"
                  />
                </div>
              </div>

              {/* Right: Product information & purchase */}
              <div className="quickview-details">
                <div className="quickview-eyebrow">
                  <span>{product.collectionTag || "HANDWOVEN"}</span>
                  <span>·</span>
                  <span>{product.category}</span>
                </div>

                <h2 className="quickview-title">{product.name}</h2>
                <div className="quickview-price">{formatPrice(product.price)}</div>

                <div className="quickview-divider" />

                <p className="quickview-desc">{product.description}</p>
                <p className="quickview-fabric">
                  <strong>Fabric & Craft:</strong> {product.fabric}
                </p>

                {/* Size options */}
                <div className="quickview-sizes-block">
                  <span className="quickview-sizes-label">SELECT SIZE</span>
                  <div className="quickview-sizes-row">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`quickview-size-btn ${selectedSize === size ? "selected" : ""}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="quickview-actions">
                  <Button
                    type="button"
                    onClick={handleAddToBag}
                    className="quickview-add-bag-btn"
                  >
                    <span>Add to Bag</span>
                    <ShoppingBag size={16} strokeWidth={1.3} />
                  </Button>

                  <Link
                    to="/product/$slug"
                    params={{ slug: product.slug }}
                    className="quickview-view-full-btn"
                    onClick={() => setQuickViewOpen(false)}
                  >
                    <span>View Complete Atelier Details</span>
                    <ArrowRight size={14} strokeWidth={1.3} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const PinterestIcon = ({ size = 14, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.372 12-12 0-6.62-5.373-12-12-12z" />
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setSubscribed(true);
    }
  };

  return (
    <footer
      ref={footerRef}
      className={`footer-luxury-cream ${isInView ? "is-in-view" : ""}`}
      aria-label="Website Footer"
    >
      {/* Top / Content Area */}
      <div className="footer-cream-container">
        <div className="footer-cream-grid">
          {/* Brand Column (Left) */}
          <div className="footer-cream-brand-col">
            <Link to="/" className="footer-cream-logo-link" aria-label="Aavya Homepage">
              <span className="footer-cream-logo">AAVYA</span>
            </Link>
            <p className="footer-cream-tagline">
              Handwoven silks, draped for every celebration.
            </p>
          </div>

          {/* Shop Column */}
          <div className="footer-cream-col">
            <h4 className="footer-cream-heading">Shop</h4>
            <ul className="footer-cream-links">
              <li>
                <Link to="/shop" search={{ category: "All" }} className="footer-cream-link">
                  New arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "Sarees" }} className="footer-cream-link">
                  Silk sarees
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "Lehengas" }} className="footer-cream-link">
                  Bridal edit
                </Link>
              </li>
              <li>
                <Link to="/shop" search={{ category: "All" }} className="footer-cream-link">
                  Best sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div className="footer-cream-col">
            <h4 className="footer-cream-heading">Explore</h4>
            <ul className="footer-cream-links">
              <li>
                <Link to="/story" className="footer-cream-link">
                  Our story
                </Link>
              </li>
              <li>
                <Link to="/story" className="footer-cream-link">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/shop" className="footer-cream-link">
                  Lookbook
                </Link>
              </li>
              <li>
                <Link to="/story" className="footer-cream-link">
                  Stores
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-cream-col">
            <h4 className="footer-cream-heading">Support</h4>
            <ul className="footer-cream-links">
              <li>
                <a href="mailto:concierge@aavya.example" className="footer-cream-link">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#shipping"
                  className="footer-cream-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Complimentary white-glove worldwide shipping on all orders.");
                  }}
                >
                  Shipping & delivery
                </a>
              </li>
              <li>
                <a
                  href="#returns"
                  className="footer-cream-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Complimentary 14-day boutique returns and atelier exchanges.");
                  }}
                >
                  Returns & exchanges
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="footer-cream-link"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("For assistance with orders and bridal consultations, reach our private salon.");
                  }}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Inspired Column (Newsletter) */}
          <div className="footer-cream-col footer-cream-stay-col">
            <h4 className="footer-cream-heading">Stay Inspired</h4>
            <p className="footer-cream-stay-desc">
              Subscribe for new collections, private offers and styling notes from the atelier.
            </p>
            {subscribed ? (
              <div className="footer-cream-subscribed-badge">
                <Check size={15} strokeWidth={2} />
                <span>You are on our private list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-cream-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="footer-cream-input"
                  aria-label="Your email address"
                />
                <button type="submit" className="footer-cream-submit-btn">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Panoramic Indian Fashion Campaign Background Image along the bottom */}
      <div className="footer-panoramic-wrap">
        <div className="footer-panoramic-gradient-overlay" />
        <img
          src={footerCampaignImg}
          alt="Aavya luxury Indian fashion campaign with models in sarees and lehengas and flowing red fabric at sunset palace"
          className="footer-panoramic-img"
          loading="lazy"
        />
        <div className="footer-panoramic-bottom-gradient" />
      </div>

      {/* Bottom Bar: Copyright on left with social icons, Legal links on right */}
      <div className="footer-cream-bottom-bar">
        <div className="footer-cream-bottom-left">
          <span className="footer-cream-copyright">
            © {new Date().getFullYear()} AAVYA. All rights reserved.
          </span>
          <div className="footer-cream-social-row">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cream-social-btn"
              aria-label="Instagram"
            >
              <Instagram size={14} strokeWidth={1.5} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cream-social-btn"
              aria-label="Pinterest"
            >
              <PinterestIcon size={14} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cream-social-btn"
              aria-label="Facebook"
            >
              <Facebook size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="footer-cream-bottom-right">
          <a
            href="#terms"
            className="footer-cream-legal-link"
            onClick={(e) => {
              e.preventDefault();
              alert("Terms & Conditions: Heirloom garments are certified authentic handcrafted pieces.");
            }}
          >
            Terms & Conditions
          </a>
          <span className="footer-cream-dot">·</span>
          <a
            href="#privacy"
            className="footer-cream-legal-link"
            onClick={(e) => {
              e.preventDefault();
              alert("Privacy Policy: All client data is kept strictly confidential.");
            }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export function BagDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, count } = useBag();
  return <>{isOpen && <div className="drawer-overlay" onClick={() => setIsOpen(false)} />}<aside className={`bag-drawer ${isOpen ? "open" : ""}`} aria-label="Shopping bag" aria-hidden={!isOpen}><div className="drawer-head"><div><p className="eyebrow">YOUR SELECTION</p><h2>Shopping bag <span>({count})</span></h2></div><Button variant="ghost" size="icon" aria-label="Close shopping bag" onClick={() => setIsOpen(false)}><X size={22} /></Button></div><div className="drawer-body">{items.length === 0 ? <div className="empty-bag"><ShoppingBag size={29} strokeWidth={1} /><p>Your bag is waiting.</p><span>Something beautiful is just around the corner.</span><Button asChild variant="outline" onClick={() => setIsOpen(false)}><Link to="/shop">Explore the collection</Link></Button></div> : items.map((item) => { const product = products.find((entry) => entry.slug === item.slug); if (!product) return null; return <div className="bag-item" key={`${item.slug}-${item.size}`}><Link to="/product/$slug" params={{ slug: product.slug }} onClick={() => setIsOpen(false)}><img src={product.image} alt={product.name} /></Link><div className="bag-item-info"><p className="eyebrow">{product.category}</p><Link to="/product/$slug" params={{ slug: product.slug }} onClick={() => setIsOpen(false)} className="bag-item-name">{product.name}</Link><span>Size: {item.size}</span><strong>{formatPrice(product.price)}</strong><div className="bag-item-actions"><div className="quantity"><Button variant="ghost" size="icon" aria-label={`Decrease ${product.name} quantity`} disabled={item.quantity <= 1} onClick={() => updateQuantity(item.slug, item.size, item.quantity - 1)}><Minus size={14} /></Button><span>{item.quantity}</span><Button variant="ghost" size="icon" aria-label={`Increase ${product.name} quantity`} onClick={() => updateQuantity(item.slug, item.size, item.quantity + 1)}><Plus size={14} /></Button></div><Button variant="link" onClick={() => removeItem(item.slug, item.size)}>Remove</Button></div></div></div>; })}</div>{items.length > 0 && <div className="drawer-foot"><div className="subtotal"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Taxes and shipping are calculated at checkout.</p><div className="demo-notice">This is a sample storefront. Checkout is not available.</div><Button asChild variant="outline" className="continue-button" onClick={() => setIsOpen(false)}><Link to="/shop">Continue exploring <ArrowRight size={16} /></Link></Button></div>}</aside></>;
}
