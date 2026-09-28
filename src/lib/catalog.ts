import hero from "@/assets/hero-editorial.jpg";
import ivory from "@/assets/look-ivory.jpg";
import maroon from "@/assets/look-maroon.jpg";
import sage from "@/assets/look-sage.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Sarees" | "Lehengas" | "Anarkalis" | "Kurta Sets";
  occasion: "Celebration" | "Wedding" | "Everyday";
  price: number;
  image: string;
  description: string;
  fabric: string;
  sizes: string[];
};

export const products: Product[] = [
  { slug: "the-meher-saree", name: "The Meher Saree", category: "Sarees", occasion: "Celebration", price: 28500, image: hero, description: "A quietly luminous drape in deep wine, finished with an antique-inspired border. Made for moments that stay with you.", fabric: "Silk blend with woven zari border", sizes: ["One Size"] },
  { slug: "the-noor-anarkali", name: "The Noor Anarkali", category: "Anarkalis", occasion: "Celebration", price: 34200, image: ivory, description: "Layers of ivory and delicate tonal embroidery move with effortless grace. An heirloom feeling, reimagined for today.", fabric: "Embroidered georgette with soft lining", sizes: ["XS", "S", "M", "L", "XL"] },
  { slug: "the-zoya-lehenga", name: "The Zoya Lehenga", category: "Lehengas", occasion: "Wedding", price: 68500, image: maroon, description: "A poetic expression of occasion dressing, with intricate floral motifs and a sweeping silhouette in a rich wine hue.", fabric: "Embroidered silk blend with net dupatta", sizes: ["XS", "S", "M", "L", "XL"] },
  { slug: "the-inaya-set", name: "The Inaya Set", category: "Kurta Sets", occasion: "Everyday", price: 18900, image: sage, description: "Soft sage, considered embroidery and an easy silhouette. A piece to reach for on days both ordinary and extraordinary.", fabric: "Silk blend with embroidered dupatta", sizes: ["XS", "S", "M", "L", "XL"] },
];

export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
