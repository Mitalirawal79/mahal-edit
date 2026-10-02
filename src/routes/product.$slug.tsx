import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Minus, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductTile } from "@/components/storefront";
import { useBag } from "@/lib/bag";
import { formatPrice, products } from "@/lib/catalog";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} — Aavya` : "Piece not found — Aavya" },
      { name: "description", content: loaderData?.description ?? "Explore the Aavya collection." },
      { property: "og:title", content: loaderData ? `${loaderData.name} — Aavya` : "Piece not found — Aavya" },
      { property: "og:description", content: loaderData?.description ?? "Explore the Aavya collection." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const { addItem } = useBag();
  const [size, setSize] = useState<string>(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <div className="product-page page-wrap">
        <div className="breadcrumbs">
          <Link to="/shop">
            <ArrowLeft size={14} /> Back to collection
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          {product.state && (
            <>
              <span>/</span>
              <span>{product.state}</span>
            </>
          )}
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-detail">
          <div className="detail-gallery">
            <div className="detail-primary-image">
              <img src={product.image} alt={`${product.name} full view`} width={1024} height={1408} />
            </div>
            {product.secondaryImage && product.secondaryImage !== product.image && product.category !== "Bridal Heritage" && product.category !== "Indo Western Dresses" && (
              <div className="detail-secondary-image">
                <img
                  src={product.secondaryImage}
                  alt={`${product.name} craft and drape detail`}
                  loading="lazy"
                  width={1024}
                  height={1408}
                />
              </div>
            )}
          </div>

          <div className="detail-info">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <p className="eyebrow m-0">THE AAVYA COLLECTION / {product.category.toUpperCase()}</p>
              {product.state && (
                <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-medium tracking-wide">
                  <Sparkles size={11} /> {product.state.toUpperCase()} TRADITION
                </span>
              )}
            </div>

            <h1>{product.name}</h1>
            <p className="detail-price">{formatPrice(product.price)}</p>
            <div className="detail-rule" />
            <p className="detail-description">{product.description}</p>

            {product.features && product.features.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {product.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded border border-stone-200"
                  >
                    ✦ {feat}
                  </span>
                ))}
              </div>
            )}

            <div className="size-block">
              <div className="size-label">
                <span>SELECT SIZE</span>
                <span>{product.sizes.length === 1 ? "One size fits all" : "Choose your fit"}</span>
              </div>
              <div className="size-options">
                {product.sizes.map((option) => (
                  <Button
                    key={option}
                    variant="outline"
                    className={size === option ? "size-option selected" : "size-option"}
                    onClick={() => setSize(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div className="quantity-block">
              <span>QUANTITY</span>
              <div className="quantity">
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                >
                  <Minus size={15} />
                </Button>
                <span>{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((value) => value + 1)}
                >
                  <Plus size={15} />
                </Button>
              </div>
            </div>

            <Button
              className="add-bag-button"
              onClick={() => {
                for (let i = 0; i < quantity; i += 1) addItem(product, size);
                setQuantity(1);
              }}
            >
              Add to bag <ArrowRight size={18} />
            </Button>

            <div className="product-notes">
              <p>
                <Check size={15} /> Complimentary insured shipping across India & Worldwide
              </p>
              <p>
                <Check size={15} /> Generational handcraft made to become a timeless heirloom
              </p>
            </div>

            <div className="detail-accordion">
              <details>
                <summary>
                  Details & craft <Plus size={17} />
                </summary>
                <p>
                  {product.fabric}. Handcrafted with generational techniques. Dry clean only. Store wrapped in pure muslin cloth in a cool, dry setting.
                </p>
              </details>
              <details>
                <summary>
                  About this regional tradition <Plus size={17} />
                </summary>
                <p>
                  {product.state
                    ? `This piece pays homage to the centuries-old bridal heritage of ${product.state}, celebrating the master artisans, indigenous weaves, and sacred celebratory symbols native to the region.`
                    : "Sculpted with a modern architectural sensibility, blending clean contemporary lines with the highest standard of couture craftsmanship."}
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>

      <section className="section-wrap related-section">
        <div className="section-heading section-heading-inline">
          <div>
            <p className="eyebrow">EXPLORE FURTHER</p>
            <h2>
              More to <em>love.</em>
            </h2>
          </div>
          <Link to="/shop" className="text-link">
            View all pieces <ArrowRight size={17} />
          </Link>
        </div>
        <div className="product-grid related-grid">
          {related.map((item) => (
            <ProductTile key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
