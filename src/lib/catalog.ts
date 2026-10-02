import bridalPunjab from "@/assets/bridal-punjab.jpg";
import bridalRajasthan from "@/assets/bridal-rajasthan.jpg";
import bridalGujarat from "@/assets/bridal-gujarat.jpg";
import bridalBengal from "@/assets/bridal-bengal.jpg";
import bridalTamilnadu from "@/assets/bridal-tamilnadu.jpg";
import bridalKerala from "@/assets/bridal-kerala.jpg";
import bridalMaharashtra from "@/assets/bridal-maharashtra.jpg";
import bridalKashmir from "@/assets/bridal-kashmir.jpg";
import bridalAssam from "@/assets/bridal-assam.jpg";
import bridalLucknow from "@/assets/bridal-lucknow.jpg";

import indoWesternPalazzo from "@/assets/indo-western-palazzo.png";
import indoWesternSareeJumpsuit from "@/assets/indo-western-saree-jumpsuit.png";
import indoWesternJacketSkirt from "@/assets/indo-western-jacket-skirt.png";
import indoWesternPeplumLehenga from "@/assets/indo-western-peplum-lehenga.png";

import moodTraditional from "@/assets/mood-traditional.jpg";
import lookIvory from "@/assets/look-ivory.jpg";
import lookSage from "@/assets/look-sage.jpg";
import moodEvening from "@/assets/mood-evening.jpg";
import collectionBridal from "@/assets/collection-bridal.jpg";
import collectionSignature from "@/assets/collection-signature.jpg";
import collectionNewArrivals from "@/assets/collection-new-arrivals.jpg";
import collectionFestiveEdit from "@/assets/collection-festive-edit.jpg";
import lookMaroon from "@/assets/look-maroon.jpg";
import moodContemporary from "@/assets/mood-contemporary.jpg";

export type ProductCategory =
  | "All"
  | "Bridal Heritage"
  | "Indo Western Dresses"
  | "Sarees"
  | "Lehengas"
  | "Anarkalis"
  | "Kurta Sets";

export type Product = {
  slug: string;
  name: string;
  category: "Bridal Heritage" | "Indo Western Dresses" | "Sarees" | "Lehengas" | "Anarkalis" | "Kurta Sets";
  state?: string;
  collectionTag: string;
  occasion: "Celebration" | "Wedding" | "Everyday";
  price: number;
  image: string;
  secondaryImage: string;
  description: string;
  fabric: string;
  sizes: string[];
  features?: string[];
};

export const products: Product[] = [
  // --- 10 INDIAN STATES BRIDAL FASHION ---
  {
    slug: "punjab-zardozi-bridal-lehenga",
    name: "Punjab Royal Zardozi Velvet Lehenga",
    category: "Bridal Heritage",
    state: "Punjab",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 135000,
    image: bridalPunjab,
    secondaryImage: lookMaroon,
    description: "An opulent expression of Punjabi regal heritage, featuring hundred-hour antique gold zardozi bullion needlework on crimson micro-velvet, paired with traditional red chooda, hanging kalire, and an embroidered gossamer veil.",
    fabric: "Royal crimson micro-velvet with pure metallic bullion zardozi & silk net veil",
    sizes: ["Custom Fit", "S", "M", "L", "XL"],
    features: ["Antique Zardozi Needlework", "Pure Velvet Foundation", "Traditional Chooda & Kalire Styling"],
  },
  {
    slug: "rajasthan-rajputi-poshak-lehenga",
    name: "Rajasthan Royal Rajputi Poshak Lehenga",
    category: "Bridal Heritage",
    state: "Rajasthan",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 148000,
    image: bridalRajasthan,
    secondaryImage: collectionBridal,
    description: "Inspired by the royal courts of Amber and Mewar, this heirloom Rani pink and burnished gold Rajputi Poshak features hand-pressed gota patti jaal, kundan border accents, a circular borla headpiece styling, and a sheer embroidered odhna.",
    fabric: "Pure handwoven Katan silk with gold gota patti and tissue odhna",
    sizes: ["Custom Fit", "S", "M", "L", "XL"],
    features: ["Archival Gota Patti", "Circular Borla Setting", "Jaipur Royal Court Styling"],
  },
  {
    slug: "gujarat-panetar-bandhani-saree",
    name: "Gujarat Heritage Panetar Silk Saree",
    category: "Bridal Heritage",
    state: "Gujarat",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 88500,
    image: bridalGujarat,
    secondaryImage: collectionFestiveEdit,
    description: "A sacred Gujarati bridal masterpiece featuring a pristine ivory-white mulberry silk body and a deep vermilion red bandhani pallu draped in seedha pallu style, embellished with fine gold zari and kundan borders.",
    fabric: "Pure mulberry silk with authentic Jamnagar tie-dye bandhani and antique gold zari",
    sizes: ["One Size"],
    features: ["Seedha Pallu Drape", "Authentic Tie-Dye Bandhani", "Ivory & Vermilion Contrast"],
  },
  {
    slug: "bengal-rajbari-benarasi-saree",
    name: "Bengal Rajbari Benarasi Bridal Saree",
    category: "Bridal Heritage",
    state: "West Bengal",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 94000,
    image: bridalBengal,
    secondaryImage: moodTraditional,
    description: "Classic Bengali wedding grandeur with a royal scarlet Katan Benarasi silk saree richly woven with gold zari floral motifs, styled with the iconic white Sholar Mukut crown, chandan forehead artistry, and gold paati haar.",
    fabric: "Pure handloom Katan silk with 24k gold zari weave",
    sizes: ["One Size"],
    features: ["Real Gold Floral Jaal", "Traditional Sholar Mukut Setting", "Chandan Artistry Heritage"],
  },
  {
    slug: "tamilnadu-kanchipuram-silk-saree",
    name: "Tamil Nadu Kanchipuram Temple Saree",
    category: "Bridal Heritage",
    state: "Tamil Nadu",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 98000,
    image: bridalTamilnadu,
    secondaryImage: collectionSignature,
    description: "Woven in sacred temple towns, this deep maroon and mustard gold pure Kanchipuram silk saree features authentic korvai interlocking temple borders, heavy gold zari pallu, paired with temple gold oddiyanam waist belt styling.",
    fabric: "Three-ply twisted mulberry silk with real gold silver zari korvai weave",
    sizes: ["One Size"],
    features: ["Authentic Korvai Weave", "Temple Border Architecture", "Oddiyanam Waist Drape"],
  },
  {
    slug: "kerala-kasavu-gold-zari-saree",
    name: "Kerala Sacred Kasavu Gold Zari Saree",
    category: "Bridal Heritage",
    state: "Kerala",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 64500,
    image: bridalKerala,
    secondaryImage: lookIvory,
    description: "An ode to serene South Indian beauty, this ivory Kasavu wedding saree is handwoven with pure gold metallic zari borders, styled with layered Mullamottu and Kasu mala necklaces amidst an ancestral Tharavadu courtyard.",
    fabric: "Unbleached organic hand-spun cotton-silk with pure metallic gold zari border",
    sizes: ["One Size"],
    features: ["Pure Kasavu Gold Zari", "Mullamottu Mala Styling", "Tharavadu Heritage Serenity"],
  },
  {
    slug: "maharashtra-paithani-nauvari-saree",
    name: "Maharashtra Royal Paithani Nauvari Saree",
    category: "Bridal Heritage",
    state: "Maharashtra",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 86000,
    image: bridalMaharashtra,
    secondaryImage: collectionNewArrivals,
    description: "A nine-yard royal Nauvari Paithani silk saree in luminous peacock green and gold, draped in the iconic kashta dhoti style with kaleidoscopic mor-bangadi peacock motifs, pearl Brahmi nath, and mundavalya headpieces.",
    fabric: "Generational handloom Paithani silk with interlocking tapestry gold weave",
    sizes: ["One Size"],
    features: ["Authentic Kashta Dhoti Drape", "Peacock Mor-Bangadi Pallu", "Pearl Brahmi Nath Setting"],
  },
  {
    slug: "kashmir-tilla-velvet-pheran",
    name: "Kashmir Royal Sapphire Tilla Pheran",
    category: "Bridal Heritage",
    state: "Kashmir",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 138000,
    image: bridalKashmir,
    secondaryImage: lookMaroon,
    description: "A breathtaking Kashmiri bridal Pheran in midnight sapphire and crimson velvet, embellished with royal 24k dipped gold Tilla needlework, paired with the regal Taranga crown headpiece and long hanging Dejhoor ear jewels.",
    fabric: "Heavy silk velvet with 24k gold-dipped pure silver Tilla needle embroidery",
    sizes: ["Custom Fit", "S", "M", "L", "XL"],
    features: ["Authentic Kashmiri Tilla Work", "Taranga Crown Headdress", "Heritage Dejhoor Ornaments"],
  },
  {
    slug: "assam-golden-muga-silk-mekhela",
    name: "Assam Golden Muga Silk Mekhela Chador",
    category: "Bridal Heritage",
    state: "Assam",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 79000,
    image: bridalAssam,
    secondaryImage: lookSage,
    description: "Crafted from rare golden Muga silk—the naturally golden wild silk exclusive to Assam—this two-piece Mekhela Chador features sacred red and black Kingkhap geometric motifs and traditional crescent Junbiri jewelry.",
    fabric: "100% authentic GI-tagged wild Muga silk with Eri silk woven borders",
    sizes: ["One Size"],
    features: ["Natural Golden Muga Silk", "Sacred Kingkhap Motifs", "Two-Piece Mekhela Chador"],
  },
  {
    slug: "lucknow-chikankari-mukaish-lehenga",
    name: "Awadh Royal Chikankari & Mukaish Lehenga",
    category: "Bridal Heritage",
    state: "Uttar Pradesh",
    collectionTag: "Bridal Heritage of India",
    occasion: "Wedding",
    price: 165000,
    image: bridalLucknow,
    secondaryImage: lookIvory,
    description: "From the Nawabi ateliers of Lucknow, this ethereal ivory-blush bridal lehenga combines 32 distinct hand Chikankari stitches with shimmering beaten-gold Mukaish metal dots, completed with a side-pinned jhumar paasa and pearls.",
    fabric: "Mulberry silk georgette with hand Chikankari & 24k gold Mukaish metalwork",
    sizes: ["Custom Fit", "S", "M", "L", "XL"],
    features: ["32 Hand Chikankari Stitches", "Beaten Gold Mukaish", "Jhumar Paasa Royal Styling"],
  },

  // --- INDO-WESTERN DRESSES COLLECTION ---
  {
    slug: "ivory-olive-sequin-palazzo-set",
    name: "Ivory & Olive Sequin Crop Top & Ombre Palazzo Set",
    category: "Indo Western Dresses",
    collectionTag: "Indo-Western Couture",
    occasion: "Celebration",
    price: 46500,
    image: indoWesternPalazzo,
    secondaryImage: indoWesternPalazzo,
    description: "A quintessential Indo-Western silhouette pairing a hand-embroidered sweetheart crop top with a tasseled chevron pearl hem, high-waisted ombre lime-olive flared palazzo pants, and a fluid draped cape dupatta.",
    fabric: "Georgette with all-over micro-sequin hand embroidery and organza cape dupatta",
    sizes: ["XS", "S", "M", "L", "XL"],
    features: ["Chevron Pearl Hemming", "High-Waist Ombre Palazzo", "Draped Cape Scarf"],
  },
  {
    slug: "emerald-botanical-saree-jumpsuit",
    name: "Emerald Botanical Pre-Draped Saree Jumpsuit",
    category: "Indo Western Dresses",
    collectionTag: "Indo-Western Couture",
    occasion: "Celebration",
    price: 52000,
    image: indoWesternSareeJumpsuit,
    secondaryImage: indoWesternSareeJumpsuit,
    description: "Seamlessly fusing Indian saree aesthetics with contemporary jumpsuit ease, this look features wide-flare sharara pants, an attached pre-pleated palla drape, and an intricately hand-worked floral waist belt.",
    fabric: "Crêpe de chine with botanical print, embroidered sweetheart bodice & waist belt",
    sizes: ["XS", "S", "M", "L"],
    features: ["Pre-Draped Palla Drape", "Hand-Embroidered Belt", "Flared Sharara Jumpsuit"],
  },
  {
    slug: "champagne-embroidered-jacket-skirt-set",
    name: "Champagne Sheer Embroidered Shrug & Tiered Skirt",
    category: "Indo Western Dresses",
    collectionTag: "Indo-Western Couture",
    occasion: "Celebration",
    price: 58000,
    image: indoWesternJacketSkirt,
    secondaryImage: indoWesternJacketSkirt,
    description: "Regal yet effortlessly modern, this fusion look combines an ankle-length sheer organza shrug jacket with resham and zardozi border embroidery over a fitted bustier and tiered crinkled skirt.",
    fabric: "Tissue organza cape jacket, hand-embroidered crop top & crushed silk skirt",
    sizes: ["XS", "S", "M", "L", "XL"],
    features: ["Floor-Length Sheer Shrug", "Resham & Zardozi Borders", "Tiered Crushed Skirt"],
  },
  {
    slug: "dusty-rose-peplum-jacket-lehenga",
    name: "Dusty Rose Scalloped Peplum Jacket & Lehenga",
    category: "Indo Western Dresses",
    collectionTag: "Indo-Western Couture",
    occasion: "Celebration",
    price: 62000,
    image: indoWesternPeplumLehenga,
    secondaryImage: indoWesternPeplumLehenga,
    description: "A structured Indo-Western masterpiece featuring a scalloped sweetheart neckline peplum jacket with architectural waist flare, paired with an opulent flared lehenga skirt and gossamer veil.",
    fabric: "Embroidered raw silk peplum jacket with sheer organza dupioni flared lehenga",
    sizes: ["XS", "S", "M", "L"],
    features: ["Scalloped Sweetheart Neckline", "Architectural Peplum Flare", "Panelled Brocade Skirt"],
  },

  // --- TRADITIONAL OCCASIONWEAR CLASSICS ---
  {
    slug: "the-meher-saree",
    name: "Banarasi Heritage Katan Silk Saree",
    category: "Sarees",
    collectionTag: "Handwoven Collection",
    occasion: "Celebration",
    price: 38500,
    image: moodTraditional,
    secondaryImage: collectionSignature,
    description: "A quietly luminous Banarasi silk drape finished with an antique zari border. Woven for celebrations that linger in memory.",
    fabric: "Pure handloom silk with antique metallic zari border",
    sizes: ["One Size"],
    features: ["Handloom Katan Silk", "Antique Metallic Zari", "Timeless Festive Drape"],
  },
  {
    slug: "the-noor-anarkali",
    name: "Ivory Pearl Embroidered Anarkali",
    category: "Anarkalis",
    collectionTag: "Signature Collection",
    occasion: "Celebration",
    price: 34200,
    image: lookIvory,
    secondaryImage: moodContemporary,
    description: "Layers of ivory georgette and delicate tonal needlework move with effortless grace. An heirloom feeling, reimagined for today.",
    fabric: "Embroidered georgette with soft silk lining",
    sizes: ["XS", "S", "M", "L", "XL"],
    features: ["Tonal Thread Embroidery", "Flared Multi-Kali Skirt", "Gossamer Dupatta"],
  },
  {
    slug: "the-inaya-set",
    name: "Chanderi Mint Silk Kurta Set",
    category: "Kurta Sets",
    collectionTag: "Everyday Luxury",
    occasion: "Everyday",
    price: 21900,
    image: lookSage,
    secondaryImage: collectionNewArrivals,
    description: "Soft chanderi silk, considered zari embroidery and a weightless silhouette. A timeless piece for days both ordinary and extraordinary.",
    fabric: "Hand-spun chanderi silk with embroidered organza dupatta",
    sizes: ["XS", "S", "M", "L", "XL"],
    features: ["Hand-Spun Chanderi", "Organza Border Accents", "Weightless Daytime Poise"],
  },
];

export const statesList = [
  "Punjab",
  "Rajasthan",
  "Gujarat",
  "West Bengal",
  "Tamil Nadu",
  "Kerala",
  "Maharashtra",
  "Kashmir",
  "Assam",
  "Uttar Pradesh",
] as const;

export const formatPrice = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;
