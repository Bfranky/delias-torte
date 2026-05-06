import { NextResponse } from "next/server";

export interface Review {
  id: number;
  author: string;
  role: string;
  stars: number;
  text: string;
  date: string;
  verified: boolean;
  source: "google" | "direct";
}

const reviews: Review[] = [
  {
    id: 1,
    author: "Chiamaka Enyinna",
    role: "Google Local Guide · 43 Reviews",
    stars: 5,
    text: "When it comes to cakes, small chops and birthday surprises in Owerri and environs, Delia's Torte is your best plug.",
    date: "2020-01-01",
    verified: true,
    source: "google",
  },
  {
    id: 2,
    author: "Adaeze O.",
    role: "Regular Customer · Owerri",
    stars: 5,
    text: "Absolutely stunning cakes every single time. The photo-print birthday cake was breathtaking — everyone at the party was amazed.",
    date: "2024-03-15",
    verified: true,
    source: "direct",
  },
  {
    id: 3,
    author: "Chisom N.",
    role: "Event Planner · Imo State",
    stars: 5,
    text: "The small chops platter was the highlight of our event. Fresh, perfectly seasoned and beautifully presented.",
    date: "2024-06-10",
    verified: false,
    source: "direct",
  },
];

export async function GET() {
  const avg = reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length;
  return NextResponse.json({
    reviews,
    total: reviews.length,
    averageRating: Math.round(avg * 10) / 10,
    fiveStarCount: reviews.filter(r => r.stars === 5).length,
  });
}
