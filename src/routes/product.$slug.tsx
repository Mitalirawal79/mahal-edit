import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductTile } from "@/components/storefront";
import { useBag } from "@/lib/bag";
import { formatPrice, products } from "@/lib/catalog";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => { const product = products.find((item) => item.slug === params.slug); if (!product) throw notFound(); return product; },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.name} — Aavya` : "Piece not found — Aavya" },
    { name: "description", content: loaderData?.description ?? "Explore the Aavya collection." },
    { property: "og:title", content: loaderData ? `${loaderData.name} — Aavya` : "Piece not found — Aavya" },
    { property: "og:description", content: loaderData?.description ?? "Explore the Aavya collection." },
    { property: "og:type", content: "product" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const { addItem } = useBag();
  const [size, setSize] = useState<string>(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  return <main><div className="product-page page-wrap"><div className="breadcrumbs"><Link to="/shop"><ArrowLeft size={14} /> Back to collection</Link><span>/</span><span>{product.category}</span><span>/</span><span>{product.name}</span></div><div className="product-detail"><div className="detail-gallery"><div className="detail-primary-image"><img src={product.image} alt={product.name} width={1024} height={1408} /></div><div className="detail-secondary-image"><img src={product.image} alt={`${product.name} garment detail`} loading="lazy" width={1024} height={1408} /></div></div><div className="detail-info"><p className="eyebrow">THE AAVYA COLLECTION / {product.category.toUpperCase()}</p><h1>{product.name}</h1><p className="detail-price">{formatPrice(product.price)}</p><div className="detail-rule" /><p className="detail-description">{product.description}</p><div className="size-block"><div className="size-label"><span>SELECT SIZE</span><span>{product.sizes.length === 1 ? "One size fits all" : "Choose your fit"}</span></div><div className="size-options">{product.sizes.map((option) => <Button key={option} variant="outline" className={size === option ? "size-option selected" : "size-option"} onClick={() => setSize(option)}>{option}</Button>)}</div></div><div className="quantity-block"><span>QUANTITY</span><div className="quantity"><Button variant="ghost" size="icon" disabled={quantity <= 1} aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}><Minus size={15} /></Button><span>{quantity}</span><Button variant="ghost" size="icon" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}><Plus size={15} /></Button></div></div><Button className="add-bag-button" onClick={() => { for (let i = 0; i < quantity; i += 1) addItem(product, size); setQuantity(1); }}>Add to bag <ArrowRight size={18} /></Button><div className="product-notes"><p><Check size={15} /> Complimentary shipping across India</p><p><Check size={15} /> A considered piece, made for your moments</p></div><div className="detail-accordion"><details><summary>Details & care <Plus size={17} /></summary><p>{product.fabric}. Dry clean recommended. Store in a cool, dry place away from direct sunlight.</p></details><details><summary>About this piece <Plus size={17} /></summary><p>Part of the Aavya concept collection. Product details and availability are illustrative.</p></details></div></div></div></div><section className="section-wrap related-section"><div className="section-heading section-heading-inline"><div><p className="eyebrow">EXPLORE FURTHER</p><h2>More to <em>love.</em></h2></div><Link to="/shop" className="text-link">View all pieces <ArrowRight size={17} /></Link></div><div className="product-grid related-grid">{related.map((item) => <ProductTile key={item.slug} product={item} />)}</div></section></main>;
}
