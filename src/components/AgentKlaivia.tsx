"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Mail, RotateCcw, Sparkles } from "lucide-react";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const quickReplies = [
  { label: "Créer un site", value: "Je veux créer un site web" },
  {
    label: "Automatiser mon business",
    value: "Je veux automatiser mon business",
  },
  { label: "Agent IA", value: "Je veux un agent IA sur mesure" },
  { label: "Parler à un humain", value: "Je veux parler à quelqu'un" },
];

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Salut 👋 Je suis le Chatbot IA de Klaivia, dispo 24h/24 et 7j/7. Je peux t'aider à créer un site premium, automatiser ton business ou déployer un agent IA sur mesure. Dis-moi tout !",
};

const STORAGE_KEY = "klaivia-agent-chat-v3";

function loadMessages(): Message[] {
  if (typeof window === "undefined") return [WELCOME_MESSAGE];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return [WELCOME_MESSAGE];
}

export default function AgentKlaivia() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => loadMessages());
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Hide on legacy #cta-final path (route now removed but keep guard)
  const hidden = pathname?.startsWith("#cta-final");

  // Persist messages
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  // Focus input on open
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Auto-resize textarea
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  }, [input]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isStreaming) return;

      const userMsg: Message = { role: "user", content: text.trim() };
      const updatedMessages = [...messages, userMsg];
      setMessages(updatedMessages);
      setInput("");
      setShowQuickReplies(false);
      setIsStreaming(true);

      // Add empty assistant message to fill in as stream arrives
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok || !res.body) {
          throw new Error("Stream failed");
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          accumulated += chunk;
          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = {
              role: "assistant",
              content: accumulated,
            };
            return next;
          });
        }
      } catch {
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = {
            role: "assistant",
            content:
              "Oups, une erreur est survenue. Remplis le formulaire ici #cta-final et on te répond vite !",
          };
          return next;
        });
      } finally {
        setIsStreaming(false);
      }
    },
    [messages, isStreaming],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setShowQuickReplies(true);
    localStorage.removeItem(STORAGE_KEY);
  };

  function renderContent(text: string) {
    const parts = text.split(/(https?:\/\/[^\s]+|\/[a-z][a-z0-9-/]*)/gi);
    return parts.map((part, i) => {
      if (part?.match(/^https?:\/\//)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-violet-glow hover:text-violet-principal transition-colors"
          >
            {part}
          </a>
        );
      }
      if (part?.match(/^\/[a-z]/i)) {
        return (
          <a
            key={i}
            href={part}
            className="underline text-violet-glow hover:text-violet-principal transition-colors font-semibold"
          >
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  }

  if (hidden) return null;

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-violet-principal flex items-center justify-center cursor-pointer"
        style={{
          boxShadow:
            "0 0 20px rgba(124,58,237,0.5), 0 0 60px rgba(124,58,237,0.2)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(124,58,237,0.4)",
            "0 0 40px rgba(124,58,237,0.7), 0 0 80px rgba(124,58,237,0.3)",
            "0 0 20px rgba(124,58,237,0.4)",
          ],
        }}
        transition={{
          boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        aria-label="Chatbot IA Klaivia"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-blanc" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Bot className="w-6 h-6 text-blanc" />
            </motion.div>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-noir-profond animate-pulse" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] flex flex-col rounded-3xl overflow-hidden"
            style={{
              background: "rgba(10, 10, 10, 0.8)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(124,58,237,0.2)",
              boxShadow:
                "0 0 30px rgba(124,58,237,0.2), 0 25px 50px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-gris-border flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-violet-principal to-violet-glow flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-noir-profond" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-blanc font-sora flex items-center gap-1.5">
                  Chatbot IA Klaivia
                  <Sparkles className="w-3 h-3 text-violet-glow" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gris-texte">
                    Disponible 24h/24 · 7j/7
                  </span>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="text-gris-texte hover:text-violet-glow transition-colors"
                aria-label="Nouvelle conversation"
                title="Nouvelle conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-gris-texte hover:text-blanc transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
            >
              {messages.map((msg, i) => {
                const isLast = i === messages.length - 1;
                const isStreamingThis =
                  isLast && msg.role === "assistant" && isStreaming;
                const isEmpty = !msg.content;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === "user"
                          ? "bg-violet-principal/20 text-blanc border border-violet-principal/30 rounded-br-md"
                          : "bg-noir-surface text-gris-texte border border-gris-border rounded-bl-md"
                      }`}
                    >
                      {isStreamingThis && isEmpty ? (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full bg-violet-glow/60 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          />
                          <span
                            className="w-2 h-2 rounded-full bg-violet-glow/60 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <span
                            className="w-2 h-2 rounded-full bg-violet-glow/60 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </span>
                      ) : (
                        <>
                          {renderContent(msg.content)}
                          {isStreamingThis && (
                            <span className="inline-block w-1.5 h-4 ml-0.5 bg-violet-glow/70 align-middle animate-pulse" />
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* Quick replies */}
              {showQuickReplies && messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2"
                >
                  {quickReplies.map((qr) => (
                    <button
                      key={qr.value}
                      onClick={() => sendMessage(qr.value)}
                      className="px-3 py-2 rounded-full text-xs bg-violet-subtil border border-violet-principal/30 text-violet-glow hover:bg-violet-principal/20 transition-all cursor-pointer"
                    >
                      {qr.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Contact shortcut */}
            <div className="px-5 py-2 border-t border-gris-border">
              <a
                href="#cta-final"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-violet-subtil border border-violet-principal/20 text-violet-glow text-xs hover:bg-violet-principal/15 transition-all"
              >
                <Mail className="w-4 h-4" />
                Lancer mon projet
              </a>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-5 py-3 border-t border-gris-border flex items-end gap-2"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Écris ton message..."
                rows={1}
                className="flex-1 bg-transparent text-sm text-blanc placeholder:text-gris-texte/50 outline-none font-inter resize-none max-h-[120px] py-1.5"
                disabled={isStreaming}
              />
              <button
                type="submit"
                disabled={!input.trim() || isStreaming}
                className="w-9 h-9 shrink-0 rounded-full bg-violet-subtil border border-violet-principal/40 flex items-center justify-center text-violet-glow hover:bg-violet-principal/30 transition-colors disabled:opacity-30 cursor-pointer"
                aria-label="Envoyer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
