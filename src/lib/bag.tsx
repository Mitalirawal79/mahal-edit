import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { products, type Product } from "./catalog";

export type BagItem = { slug: string; size: string; quantity: number };
type BagContextValue = {
  items: BagItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (slug: string, size: string) => void;
  updateQuantity: (slug: string, size: string, quantity: number) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  count: number;
  subtotal: number;
};
const BagContext = createContext<BagContextValue | null>(null);
const storageKey = "aavya-demo-bag";

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) setItems(parsed.filter((item) => item && typeof item.slug === "string" && typeof item.size === "string" && Number.isInteger(item.quantity) && item.quantity > 0 && products.some((product) => product.slug === item.slug)));
      }
    } catch { /* An unavailable or stale bag begins empty. */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) window.localStorage.setItem(storageKey, JSON.stringify(items)); }, [items, ready]);
  const addItem = (product: Product, size: string) => {
    setItems((current) => {
      const existing = current.find((item) => item.slug === product.slug && item.size === size);
      return existing ? current.map((item) => item === existing ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { slug: product.slug, size, quantity: 1 }];
    });
    setIsOpen(true);
  };
  const removeItem = (slug: string, size: string) => setItems((current) => current.filter((item) => !(item.slug === slug && item.size === size)));
  const updateQuantity = (slug: string, size: string, quantity: number) => setItems((current) => current.map((item) => item.slug === slug && item.size === size ? { ...item, quantity: Math.max(1, quantity) } : item));
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (products.find((product) => product.slug === item.slug)?.price ?? 0) * item.quantity, 0);
  return <BagContext.Provider value={{ items, addItem, removeItem, updateQuantity, isOpen, setIsOpen, count, subtotal }}>{children}</BagContext.Provider>;
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) throw new Error("BagProvider is missing");
  return context;
}
