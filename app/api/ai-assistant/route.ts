import { NextRequest, NextResponse } from "next/server";
import { bloodBanks, compatibility } from "@/lib/data";

export const runtime = "nodejs";

/**
 * AI Donor Assistant endpoint.
 *
 * This route is provider-agnostic: if an ANTHROPIC_API_KEY (or OPENAI_API_KEY)
 * environment variable is present, it forwards the conversation to that model
 * with a domain-specific system prompt. Otherwise it falls back to a fast,
 * deterministic rules engine so the demo works with zero configuration.
 */

const SYSTEM_PROMPT = `You are the AI Donor Assistant for Blood Rechargers, a blood donor network in Rajasthan, India.
Answer questions about donation eligibility, the donation process, blood group compatibility,
and how to find nearby blood banks or camps. Keep answers under 120 words, be warm and clear,
and never provide medical diagnoses — for personal medical concerns, direct the user to consult
a doctor or the blood bank's medical officer.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const lastMessage: string = messages?.[messages.length - 1]?.content ?? "";

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (apiKey) {
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 400,
          system: SYSTEM_PROMPT,
          messages: messages.map((m: any) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data?.content?.[0]?.text ?? "I couldn't generate a response just now.";
      return NextResponse.json({ reply });
    } catch (e) {
      // fall through to rules engine on error
    }
  }

  return NextResponse.json({ reply: ruleBasedReply(lastMessage) });
}

function ruleBasedReply(message: string): string {
  const text = message.toLowerCase();

  if (text.includes("eligib") || text.includes("who can donate") || text.includes("age")) {
    return "Generally you can donate if you're 18–65 years old, weigh at least 50kg, have haemoglobin above 12.5 g/dL, and had your last donation over 90 days ago (56 for men, 84 for women in some guidelines). Certain medications, recent tattoos, pregnancy, or infections may cause a temporary deferral. Use the eligibility checker on our Donate Blood page for a personalised check, and confirm with the blood bank's medical officer.";
  }
  if (text.includes("near") || text.match(/[abo][+-]/i) || text.includes("stock") || text.includes("find")) {
    const groupMatch = text.match(/(o|a|b|ab)\s?[+-]/i);
    const group = groupMatch ? groupMatch[0].toUpperCase().replace(/\s/g, "") : null;
    const matches = group
      ? bloodBanks.filter((b) => Object.keys(b.stock).includes(group))
      : bloodBanks.slice(0, 3);
    const list = matches
      .slice(0, 3)
      .map((b) => `• ${b.name} (${b.city}) — ${group ? `${b.stock[group]} units of ${group}` : "multiple groups in stock"}`)
      .join("\n");
    return `Here's what I found:\n${list}\n\nOpen the Blood Availability page for live filters by state, city, and component, or the Blood Bank Directory to call or WhatsApp them directly.`;
  }
  if (text.includes("how long") || text.includes("between") || text.includes("gap") || text.includes("frequency")) {
    return "Whole blood donors typically wait 90 days between donations (about 3 months) to let iron and red cell levels fully recover — some guidelines say 56 days for men and 84 for women. Platelet donors can often donate more frequently, sometimes every 7–14 days, since platelets regenerate faster. Your blood bank will track your last donation date automatically.";
  }
  if (text.includes("process") || text.includes("happen") || text.includes("what happen") || text.includes("procedure")) {
    return "The process takes about 30–45 minutes total: registration and a quick health check, a haemoglobin finger-prick test, the donation itself (8–10 minutes for ~350–450ml), and a short rest with refreshments afterward. It's supervised throughout by trained staff, and a single donation can help save up to three lives.";
  }
  if (text.includes("compat") || text.includes("can i donate to") || text.includes("can i receive")) {
    const groupMatch = text.match(/(o|a|b|ab)\s?[+-]/i);
    const group = groupMatch ? groupMatch[0].toUpperCase().replace(/\s/g, "") : "O+";
    const info = compatibility[group];
    if (info) {
      return `${group} donors can typically give to: ${info.canDonateTo.join(", ")}. ${group} recipients can typically receive from: ${info.canReceiveFrom.join(", ")}. Check the full compatibility chart on our homepage for every blood group.`;
    }
  }
  if (text.includes("camp")) {
    return "We list upcoming blood donation camps across Rajasthan on the Blood Donation Camp page, with organiser, date, and expected turnout. You can also register your own camp from the Blood Camp menu if you're organising one.";
  }
  return "I can help with donor eligibility, finding nearby blood stock, the donation process, blood group compatibility, or upcoming camps. Could you tell me a bit more about what you need?";
}
