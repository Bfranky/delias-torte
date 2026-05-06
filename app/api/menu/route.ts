import { NextResponse } from "next/server";

export interface MenuItem {
  id: number;
  emoji: string;
  name: string;
  description: string;
  startingPrice: number | null;
  priceLabel: string;
  category: "cakes" | "chops" | "gifts" | "custom";
  featured: boolean;
  tags: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 1, emoji: "🎂", name: "Birthday Cakes",
    description: "Personalised, tiered masterpieces for every age. Photo prints, fondant art, fresh flowers & more.",
    startingPrice: 8000, priceLabel: "From ₦8,000",
    category: "cakes", featured: true,
    tags: ["photo-print", "custom", "tiered"],
  },
  {
    id: 2, emoji: "💍", name: "Wedding Cakes",
    description: "Architectural, multi-tiered cakes designed around your love story.",
    startingPrice: 45000, priceLabel: "From ₦45,000",
    category: "cakes", featured: true,
    tags: ["wedding", "tiered", "fondant"],
  },
  {
    id: 3, emoji: "🧁", name: "Cupcakes",
    description: "Individually decorated cupcakes for events, showers, and corporate gatherings.",
    startingPrice: 2500, priceLabel: "From ₦2,500",
    category: "cakes", featured: false,
    tags: ["cupcakes", "events"],
  },
  {
    id: 4, emoji: "🍢", name: "Small Chops",
    description: "Crowd-pleasing finger food: puff puff, samosas, mini spring rolls, chicken skewers.",
    startingPrice: 5000, priceLabel: "From ₦5,000",
    category: "chops", featured: false,
    tags: ["small-chops", "events", "parties"],
  },
  {
    id: 5, emoji: "🎁", name: "Surprise Packages",
    description: "Curated gift hampers and surprise cake deliveries across Owerri.",
    startingPrice: 12000, priceLabel: "From ₦12,000",
    category: "gifts", featured: false,
    tags: ["gift", "delivery", "surprise"],
  },
  {
    id: 6, emoji: "✨", name: "Custom Creations",
    description: "Sculpted novelty cakes, theme designs, character cakes — anything imaginable.",
    startingPrice: null, priceLabel: "Call Us",
    category: "custom", featured: false,
    tags: ["custom", "bespoke", "sculpted"],
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");

  let items = menuItems;
  if (category) items = items.filter(i => i.category === category);
  if (featured === "true") items = items.filter(i => i.featured);

  return NextResponse.json({
    items,
    count: items.length,
    categories: ["cakes", "chops", "gifts", "custom"],
  });
}
