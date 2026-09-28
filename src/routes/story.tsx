import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ivory from "@/assets/look-ivory.jpg";
import sage from "@/assets/look-sage.jpg";
export const Route = createFileRoute("/story")({ head: () => ({ meta: [
  { title: "Our Story — Aavya" },
  { name: "description", content: "Aavya is an imagined expression of modern Indian occasionwear, inspired by the beauty of dressing with intention." },
  { property: "og:title", content: "Our Story — Aavya" },
  { property: "og:description", content: "Rooted in tradition. Made for now. Discover the point of view behind Aavya." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
] }), component: Story });
function Story() { return <main className="story-page"><div className="story-intro"><p className="eyebrow">OUR STORY / AAVYA</p><h1>For the art of <em>being you.</em></h1><p>An ode to the moments we carry with us, and the beauty we choose to wear along the way.</p></div><div className="story-banner"><img src={ivory} alt="Ivory occasionwear in a heritage setting" width={1024} height={1408} /></div><section className="story-text"><p className="eyebrow">THE AAVYA POINT OF VIEW</p><h2>Old stories. <em>New chapters.</em></h2><div><p>Some clothes become part of our story. They hold a celebration, an embrace, an afternoon we wish we could revisit. Aavya is imagined for those moments.</p><p>Inspired by India's rich language of colour, craft and silhouette, our collection brings a contemporary eye to the pieces we have always loved. It is not about dressing for someone else. It is about feeling unmistakably yourself.</p></div></section><section className="story-end"><div><p className="eyebrow">MADE FOR YOUR MOMENTS</p><h2>A little more <em>meaning.</em></h2><p>For every gathering, every beginning, and every story still to come.</p><Link to="/shop" className="text-link">Explore the collection <ArrowRight size={17} /></Link></div><img src={sage} alt="Sage green embroidered kurta set" loading="lazy" width={1024} height={1408} /></section></main>; }
