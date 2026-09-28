import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-editorial.jpg";
import ivory from "@/assets/look-ivory.jpg";
import maroon from "@/assets/look-maroon.jpg";
import sage from "@/assets/look-sage.jpg";
import { ProductTile } from "@/components/storefront";
import { products } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Aavya — Contemporary Indian Occasionwear" },
    { name: "description", content: "Discover an editorial collection of imagined Indian occasionwear, from silk sarees to embroidered lehengas and effortless sets." },
    { property: "og:title", content: "Aavya — Contemporary Indian Occasionwear" },
    { property: "og:description", content: "A considered collection for the moments that matter." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <main>
    <section className="hero"><img className="hero-image" src={hero} alt="Model wearing a deep wine silk saree in a sunlit heritage courtyard" width={1536} height={1024} /><div className="hero-shade" /><div className="hero-content"><p className="hero-kicker">THE ART OF OCCASION DRESSING · 2026</p><h1>Worn for the<br /><em>moments that matter.</em></h1><p>Timeless Indian silhouettes, made to feel entirely your own.</p><Link to="/shop" className="hero-link">Explore the collection <ArrowRight size={19} strokeWidth={1.4} /></Link></div><div className="hero-index">01 / 04 — THE AAVYA EDIT</div></section>
    <div className="marquee-line"><span>AN EXPRESSION OF MODERN HERITAGE</span><span className="marquee-diamond">✦</span><span>CRAFTED TO BE REMEMBERED</span><span className="marquee-diamond">✦</span><span>AN EXPRESSION OF MODERN HERITAGE</span></div>
    <section className="section-wrap collection-section"><div className="section-heading"><div><p className="eyebrow">01 / DISCOVER</p><h2>Find your <em>story.</em></h2></div><p>Considered pieces for every celebration, every gathering, every version of you.</p></div><div className="category-grid"><Link to="/shop" search={{ category: "Sarees" }} className="category-tile category-tile-wide"><img src={hero} alt="Deep wine saree" loading="lazy" width={1536} height={1024} /><span><span>Sarees</span><ArrowUpRight size={22} strokeWidth={1.2} /></span></Link><Link to="/shop" search={{ category: "Lehengas" }} className="category-tile"><img src={maroon} alt="Embroidered burgundy lehenga" loading="lazy" width={1024} height={1408} /><span><span>Lehengas</span><ArrowUpRight size={22} strokeWidth={1.2} /></span></Link><Link to="/shop" search={{ category: "Kurta Sets" }} className="category-tile"><img src={sage} alt="Sage kurta set" loading="lazy" width={1024} height={1408} /><span><span>Everyday elegance</span><ArrowUpRight size={22} strokeWidth={1.2} /></span></Link></div></section>
    <section className="section-wrap edit-section"><div className="section-heading section-heading-inline"><div><p className="eyebrow">02 / THE EDIT</p><h2>Pieces to <em>treasure.</em></h2></div><Link to="/shop" className="text-link">View all pieces <ArrowRight size={17} /></Link></div><div className="product-grid home-product-grid">{products.slice(0, 4).map((product) => <ProductTile key={product.slug} product={product} />)}</div></section>
    <section className="story-feature"><div className="story-feature-image"><img src={ivory} alt="Ivory embroidered anarkali in a heritage courtyard" loading="lazy" width={1024} height={1408} /></div><div className="story-feature-content"><p className="eyebrow">03 / OUR POINT OF VIEW</p><span className="story-ornament">✦</span><h2>Rooted in tradition.<br /><em>Made for now.</em></h2><p>There is beauty in the details we carry forward. Aavya is an invitation to dress with intention, to honour where we come from, and to make every moment our own.</p><Link to="/story" className="text-link">The story of Aavya <ArrowRight size={17} /></Link></div></section>
    <section className="closing-line"><p>THE FINER THINGS ARE FELT, NOT SAID.</p><h2>Something beautiful <em>begins here.</em></h2><Link to="/shop" className="text-link">Explore the collection <ArrowRight size={17} /></Link></section>
  </main>;
}
