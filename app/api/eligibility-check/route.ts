import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  age: number;
  weight: number;
  lastDonationDays: number | null;
  hasChronicIllness: boolean;
  isPregnantOrRecent: boolean;
  hadRecentTattoo: boolean;
  hemoglobin: number | null;
};

export async function POST(req: NextRequest) {
  const body: Payload = await req.json();
  const reasons: string[] = [];
  let eligible = true;

  if (body.age < 18 || body.age > 65) {
    eligible = false;
    reasons.push("Donor age should be between 18 and 65 years.");
  }
  if (body.weight < 50) {
    eligible = false;
    reasons.push("Minimum body weight for donation is 50kg.");
  }
  if (body.lastDonationDays !== null && body.lastDonationDays < 90) {
    eligible = false;
    reasons.push(`You should wait at least 90 days between whole-blood donations (${90 - body.lastDonationDays} day(s) remaining).`);
  }
  if (body.hasChronicIllness) {
    eligible = false;
    reasons.push("Certain chronic conditions require medical clearance before donating — please check with the blood bank's doctor.");
  }
  if (body.isPregnantOrRecent) {
    eligible = false;
    reasons.push("Pregnancy and the 6 months after delivery/breastfeeding period typically require a deferral.");
  }
  if (body.hadRecentTattoo) {
    eligible = false;
    reasons.push("A tattoo, piercing, or acupuncture in the last 6 months usually requires a temporary deferral.");
  }
  if (body.hemoglobin !== null && body.hemoglobin < 12.5) {
    eligible = false;
    reasons.push("Haemoglobin below 12.5 g/dL is generally below the safe donation threshold.");
  }

  const score = Math.max(0, 100 - reasons.length * 22);

  return NextResponse.json({
    eligible,
    confidenceScore: score,
    reasons: reasons.length ? reasons : ["You meet the general baseline criteria for blood donation."],
    disclaimer:
      "This is an automated pre-check, not a medical diagnosis. Final eligibility is always confirmed by the blood bank's medical officer at the time of donation.",
  });
}
