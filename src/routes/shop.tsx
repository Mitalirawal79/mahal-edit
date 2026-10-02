import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductTile } from "@/components/storefront";
import { products } from "@/lib/catalog";

const categories = [
  "All",
  "Bridal Heritage",
  "Indo Western Dresses",
  "Sarees",
  "Lehengas",
  "Anarkalis",
  "Kurta Sets",
] as const;

export const Route = createFileRoute("/shop")({
  validateSearch: (
    search: Record<string, unknown>
  ): { category?: string | undefined; state?: string | undefined } => ({
    category: typeof search["category"] === "string" ? (search["category"] as string) : undefined,
    state: typeof search["state"] === "string" ? (search["state"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop the Collection — Aavya" },
      {
        name: "description",
        content:
          "Browse Aavya's luxury edit of bridal heritage from 10 Indian states, contemporary Indo-Western dresses, sarees, and couture ensembles.",
      },
      { property: "og:title", content: "Shop the Collection — Aavya" },
      {
        property: "og:description",
        content:
          "Discover 10-state authentic Indian bridal fashion and modern Indo-Western dresses curated for momentous occasions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  const searchParams = Route.useSearch();
  const navigate = Route.useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>(searchParams.category || "All");
  const [query, setQuery] = useState("");
  const [occasion, setOccasion] = useState("All occasions");

  useEffect(() => {
    setActiveCategory(searchParams.category || "All");
  }, [searchParams.category]);

  const filtered = products.filter((product) => {
    // 1. Strict Category Isolation:
    // If "Bridal Heritage" selected, ONLY return Bridal Heritage items (no western dresses)
    // If "Western Dresses" selected, ONLY return Western Dresses items (no bridal looks)
    const matchesCategory =
      activeCategory === "All"
        ? true
        : product.category.toLowerCase() === activeCategory.toLowerCase();

    // 2. Occasion Filter:
    const matchesOccasion =
      occasion === "All occasions" || product.occasion === occasion;

    // 3. Search Query:
    const searchableText = `${product.name} ${product.category} ${product.state || ""} ${product.fabric} ${product.description}`.toLowerCase();
    const matchesQuery = !query.trim() || searchableText.includes(query.toLowerCase());

    return matchesCategory && matchesOccasion && matchesQuery;
  });

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    navigate({
      search: {
        category: cat !== "All" ? cat : undefined,
      },
    });
  };

  const clearAllFilters = () => {
    setQuery("");
    setOccasion("All occasions");
    setActiveCategory("All");
    navigate({ search: { category: undefined } });
  };

  return (
    <main className="shop-page page-wrap">
      {/* Editorial Header */}
      <div className="shop-intro">
        <p className="eyebrow">
          <span>THE AAVYA EDIT</span>
          <span className="mx-2">✦</span>
          <span>AUTUMN WINTER 2026</span>
        </p>
        <h1>
          Curated for the <em>Moments that Matter.</em>
        </h1>
        <p className="shop-intro-desc">
          From the sacred bridal looms of 10 Indian states to the sculptural lines of modern Indo-Western eveningwear—each piece is crafted with unhurried intention and authentic artisan devotion.
        </p>
      </div>

      {/* Category Tabs & Search Toolbar */}
      <div className="shop-toolbar">
        <div className="category-tabs" role="group" aria-label="Filter by category">
          {categories.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className={activeCategory === item ? "category-tab selected" : "category-tab"}
              onClick={() => handleCategoryChange(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="shop-tools">
          <label className="shop-search">
            <Search size={17} />
            <input
              aria-label="Search products"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by state, craft, or silhouette..."
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Clear search"
                onClick={() => setQuery("")}
              >
                <X size={15} />
              </Button>
            )}
          </label>

          <select
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
            aria-label="Filter by occasion"
            className="shop-select"
          >
            <option>All occasions</option>
            <option>Wedding</option>
            <option>Celebration</option>
            <option>Everyday</option>
          </select>
        </div>
      </div>

      {/* Filter Summary & Count */}
      <div className="shop-count-bar">
        <div className="shop-count">
          SHOWING {filtered.length} {filtered.length === 1 ? "PIECE" : "PIECES"}
          {activeCategory !== "All" && (
            <span className="active-tag-chip">
              Category: {activeCategory}
              <button
                type="button"
                onClick={() => handleCategoryChange("All")}
                aria-label="Remove category filter"
              >
                ×
              </button>
            </span>
          )}
        </div>

        {(activeCategory !== "All" || query || occasion !== "All occasions") && (
          <button type="button" onClick={clearAllFilters} className="clear-filters-link">
            Reset Filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filtered.length ? (
        <div className="product-grid shop-product-grid">
          {filtered.map((product) => (
            <ProductTile key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h2>No matching pieces found.</h2>
          <p>
            No pieces match your selected combination of filters. Try changing or clearing your filters.
          </p>
          <Button variant="outline" onClick={clearAllFilters}>
            View All Pieces
          </Button>
        </div>
      )}
    </main>
  );
}
