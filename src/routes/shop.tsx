import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductTile } from "@/components/storefront";
import { products } from "@/lib/catalog";

const categories = ["All", "Sarees", "Lehengas", "Anarkalis", "Kurta Sets"] as const;
export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>) => ({ category: typeof search.category === "string" ? search.category : "All" }),
  head: () => ({ meta: [
    { title: "Shop the Collection — Aavya" },
    { name: "description", content: "Browse Aavya's imagined edit of sarees, lehengas, anarkalis and kurta sets for every occasion." },
    { property: "og:title", content: "Shop the Collection — Aavya" },
    { property: "og:description", content: "Discover considered Indian occasionwear for the moments that matter." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Shop,
});

function Shop() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState("");
  const [occasion, setOccasion] = useState("All occasions");
  const filtered = products.filter((product) => (category === "All" || product.category === category) && (occasion === "All occasions" || product.occasion === occasion) && `${product.name} ${product.category} ${product.occasion}`.toLowerCase().includes(query.toLowerCase()));
  return <main className="shop-page page-wrap"><div className="shop-intro"><p className="eyebrow">THE AAVYA COLLECTION / 2026</p><h1>An edit of <em>beautiful things.</em></h1><p>Distinctive pieces for moments worth remembering.</p></div><div className="shop-toolbar"><div className="category-tabs" role="group" aria-label="Filter by category">{categories.map((item) => <Button key={item} variant="ghost" className={category === item ? "category-tab selected" : "category-tab"} onClick={() => navigate({ search: { category: item } })}>{item}</Button>)}</div><div className="shop-tools"><label className="shop-search"><Search size={17} /><input aria-label="Search products" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pieces" />{query && <Button variant="ghost" size="icon" aria-label="Clear search" onClick={() => setQuery("")}><X size={15} /></Button>}</label><select value={occasion} onChange={(event) => setOccasion(event.target.value)} aria-label="Filter by occasion"><option>All occasions</option><option>Celebration</option><option>Wedding</option><option>Everyday</option></select></div></div><div className="shop-count">SHOWING {filtered.length} {filtered.length === 1 ? "PIECE" : "PIECES"}</div>{filtered.length ? <div className="product-grid shop-product-grid">{filtered.map((product) => <ProductTile key={product.slug} product={product} />)}</div> : <div className="no-results"><h2>No pieces found.</h2><p>Try another search or explore the full collection.</p><Button variant="outline" onClick={() => { setQuery(""); setOccasion("All occasions"); navigate({ search: { category: "All" } }); }}>View all pieces</Button></div>}</main>;
}
