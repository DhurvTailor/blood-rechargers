import { NextRequest, NextResponse } from "next/server";
import { bloodBanks } from "@/lib/data";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const state = searchParams.get("state");
  const city = searchParams.get("city");
  const group = searchParams.get("group");

  let results = bloodBanks;

  if (state) results = results.filter((b) => b.state.toLowerCase() === state.toLowerCase());
  if (city) results = results.filter((b) => b.city.toLowerCase() === city.toLowerCase());
  if (group) results = results.filter((b) => (b.stock[group] ?? 0) > 0);

  // Smart ranking: verified + higher stock + rating first (simple relevance model)
  const ranked = [...results].sort((a, b) => {
    const stockA = group ? a.stock[group] ?? 0 : Object.values(a.stock).reduce((s: number, n) => s + (n ?? 0), 0);
    const stockB = group ? b.stock[group] ?? 0 : Object.values(b.stock).reduce((s: number, n) => s + (n ?? 0), 0);
    const scoreA = stockA * 2 + a.rating * 5 + (a.verified ? 10 : 0);
    const scoreB = stockB * 2 + b.rating * 5 + (b.verified ? 10 : 0);
    return scoreB - scoreA;
  });

  return NextResponse.json({ count: ranked.length, results: ranked });
}
