"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Sparkles, Loader2 } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Am I eligible to donate blood?",
  "Find O+ blood near Jaipur",
  "How long between two donations?",
  "What happens during donation?",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm the Blood Rechargers AI Assistant. Ask me about donor eligibility, nearby blood stock, or how the donation process works.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    const next: Message[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry, I couldn't reach the assistant right now. Please try again shortly." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI assistant"
        className="focus-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-crimson-500 text-white shadow-lg shadow-crimson-500/40 transition hover:bg-crimson-600 hover:scale-105"
      >
        {open ? <X size={22} /> : <Bot size={24} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[22rem] max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-2xl dark:border-ink-700 dark:bg-ink-800">
          <div className="flex items-center gap-2 bg-ink-900 px-4 py-3.5 text-white">
            <Sparkles size={16} className="text-crimson-400" />
            <div>
              <p className="text-sm font-semibold">AI Donor Assistant</p>
              <p className="text-[11px] text-ink-300">Guidance, not a medical diagnosis</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-crimson-500 px-3.5 py-2.5 text-sm text-white"
                    : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-ink-50 px-3.5 py-2.5 text-sm text-ink-800 dark:bg-ink-700 dark:text-ink-50"
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto flex items-center gap-2 rounded-2xl rounded-bl-sm bg-ink-50 px-3.5 py-2.5 text-sm text-ink-500 dark:bg-ink-700 dark:text-ink-300">
                <Loader2 size={14} className="animate-spin" /> thinking…
              </div>
            )}
          </div>

          {messages.length < 3 && (
            <div className="flex flex-wrap gap-2 px-4 pb-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-ink-200 px-2.5 py-1 text-[11px] text-ink-600 hover:border-crimson-300 hover:text-crimson-600 dark:border-ink-600 dark:text-ink-200"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-ink-100 p-3 dark:border-ink-700"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about eligibility, stock, camps…"
              className="input-field !py-2"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-crimson-500 text-white hover:bg-crimson-600"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
