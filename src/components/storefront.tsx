import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Instagram, Menu, Minus, Plus, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useBag } from "@/lib/bag";
import { formatPrice, products, type Product } from "@/lib/catalog";

export function Header() {
  const { count, setIsOpen } = useBag();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const links = [{ label: "Shop All", to: "/shop" as const }, { label: "Our Story", to: "/story" as const }];
  return <>
    <div className="announcement">Complimentary shipping on all orders across India</div>
    <header className="site-header">
      <div className="header-side header-left">
        <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu /></Button>
        <nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => <Link key={link.to} to={link.to} className={pathname === link.to ? "nav-link active" : "nav-link"}>{link.label}</Link>)}</nav>
      </div>
      <Link to="/" className="wordmark" aria-label="Aavya home">AAVYA<span>EST. 2026</span></Link>
      <div className="header-side header-right"><Link to="/shop" className="header-search" aria-label="Search the collection"><Search size={19} strokeWidth={1.4} /></Link><Button variant="ghost" size="icon" className="bag-trigger" aria-label={`Open shopping bag, ${count} items`} onClick={() => setIsOpen(true)}><ShoppingBag size={19} strokeWidth={1.4} />{count > 0 && <span className="bag-count">{count}</span>}</Button></div>
    </header>
    {menuOpen && <div className="mobile-nav-backdrop" onClick={() => setMenuOpen(false)}><nav className="mobile-nav" aria-label="Mobile navigation" onClick={(event) => event.stopPropagation()}><div className="mobile-nav-top"><span className="wordmark">AAVYA</span><Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X /></Button></div><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}</nav></div>}
  </>;
}

export function ProductTile({ product }: { product: Product }) {
  return <article className="product-tile"><Link to="/product/$slug" params={{ slug: product.slug }} className="product-image-wrap"><img src={product.image} alt={product.name} loading="lazy" width={1024} height={1408} /><span className="product-view">Discover piece <ArrowRight size={15} /></span></Link><div className="product-meta"><div><p className="eyebrow">{product.category}</p><h3><Link to="/product/$slug" params={{ slug: product.slug }}>{product.name}</Link></h3></div><span>{formatPrice(product.price)}</span></div></article>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-top"><div><Link to="/" className="footer-wordmark">AAVYA</Link><p>For the art of being you.</p></div><div className="footer-links"><Link to="/shop">Shop the collection</Link><Link to="/story">Our story</Link><a href="mailto:hello@aavya.example">Contact</a></div></div><div className="footer-bottom"><span>© 2026 Aavya. A fictional concept store.</span><span>Thoughtfully imagined in India</span></div></footer>;
}

export function BagDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, count } = useBag();
  return <>{isOpen && <div className="drawer-overlay" onClick={() => setIsOpen(false)} />}<aside className={`bag-drawer ${isOpen ? "open" : ""}`} aria-label="Shopping bag" aria-hidden={!isOpen}><div className="drawer-head"><div><p className="eyebrow">YOUR SELECTION</p><h2>Shopping bag <span>({count})</span></h2></div><Button variant="ghost" size="icon" aria-label="Close shopping bag" onClick={() => setIsOpen(false)}><X size={22} /></Button></div><div className="drawer-body">{items.length === 0 ? <div className="empty-bag"><ShoppingBag size={29} strokeWidth={1} /><p>Your bag is waiting.</p><span>Something beautiful is just around the corner.</span><Button asChild variant="outline" onClick={() => setIsOpen(false)}><Link to="/shop">Explore the collection</Link></Button></div> : items.map((item) => { const product = products.find((entry) => entry.slug === item.slug); if (!product) return null; return <div className="bag-item" key={`${item.slug}-${item.size}`}><Link to="/product/$slug" params={{ slug: product.slug }} onClick={() => setIsOpen(false)}><img src={product.image} alt={product.name} /></Link><div className="bag-item-info"><p className="eyebrow">{product.category}</p><Link to="/product/$slug" params={{ slug: product.slug }} onClick={() => setIsOpen(false)} className="bag-item-name">{product.name}</Link><span>Size: {item.size}</span><strong>{formatPrice(product.price)}</strong><div className="bag-item-actions"><div className="quantity"><Button variant="ghost" size="icon" aria-label={`Decrease ${product.name} quantity`} disabled={item.quantity <= 1} onClick={() => updateQuantity(item.slug, item.size, item.quantity - 1)}><Minus size={14} /></Button><span>{item.quantity}</span><Button variant="ghost" size="icon" aria-label={`Increase ${product.name} quantity`} onClick={() => updateQuantity(item.slug, item.size, item.quantity + 1)}><Plus size={14} /></Button></div><Button variant="link" onClick={() => removeItem(item.slug, item.size)}>Remove</Button></div></div></div>; })}</div>{items.length > 0 && <div className="drawer-foot"><div className="subtotal"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Taxes and shipping are calculated at checkout.</p><div className="demo-notice">This is a sample storefront. Checkout is not available.</div><Button asChild variant="outline" className="continue-button" onClick={() => setIsOpen(false)}><Link to="/shop">Continue exploring <ArrowRight size={16} /></Link></Button></div>}</aside></>;
}
