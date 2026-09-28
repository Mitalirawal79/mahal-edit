import hero from "@/assets/hero-editorial.jpg";
import ivory from "@/assets/look-ivory.jpg";
import maroon from "@/assets/look-maroon.jpg";
import sage from "@/assets/look-sage.jpg";
import moodTraditional from "@/assets/mood-traditional.jpg";
import collectionSignature from "@/assets/collection-signature.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import moodBridal from "@/assets/mood-bridal.jpg";
import moodContemporary from "@/assets/mood-contemporary.jpg";
import moodEveryday from "@/assets/mood-everyday.jpg";

export type Product = {
  slug: string;
  name: string;
  category: "Sarees" | "Lehengas" | "Anarkalis" | "Kurta Sets";
  collectionTag: string;
  occasion: "Celebration" | "Wedding" | "Everyday";
  price: number;
  image: string;
  secondaryImage: string;
  description: string;
  fabric: string;
  sizes: string[];
};

export const products: Product[] = [
  {
    slug: "the-meher-saree",
    name: "Banarasi Silk Saree",
    category: "Sarees",
    collectionTag: "Handwoven Collection",
    occasion: "Celebration",
    price: 18500,
    image: moodTraditional,
    secondaryImage: collectionSignature,
    description: "A quietly luminous Banarasi silk drape finished with an antique zari border. Woven for celebrations that linger in memory.",
    fabric: "Pure handloom silk with antique metallic zari border",
    sizes: ["One Size"],
  },
  {
    slug: "the-zoya-lehenga",
    name: "Royal Zardozi Lehenga",
    category: "Lehengas",
    collectionTag: "Bridal Collection",
    occasion: "Wedding",
    price: 68500,
    image: collectionBridal,
    secondaryImage: moodBridal,
    description: "A regal expression of bridal couture, featuring hundred-hour hand embroidery, deep crimson velvet, and a luminous sheer veil.",
    fabric: "Embroidered heritage velvet with pure silk net dupatta",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "the-noor-anarkali",
    name: "Ivory Embroidered Anarkali",
    category: "Anarkalis",
    collectionTag: "Signature Collection",
    occasion: "Celebration",
    price: 34200,
    image: ivory,
    secondaryImage: moodContemporary,
    description: "Layers of ivory georgette and delicate tonal needlework move with effortless grace. An heirloom feeling, reimagined for today.",
    fabric: "Embroidered georgette with soft silk lining",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "the-inaya-set",
    name: "Chanderi Silk Kurta Set",
    category: "Kurta Sets",
    collectionTag: "Everyday Luxury",
    occasion: "Everyday",
    price: 18900,
    image: sage,
    secondaryImage: moodEveryday,
    description: "Soft chanderi silk, considered zari embroidery and a weightless silhouette. A timeless piece for days both ordinary and extraordinary.",
    fabric: "Hand-spun chanderi silk with embroidered organza dupatta",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
