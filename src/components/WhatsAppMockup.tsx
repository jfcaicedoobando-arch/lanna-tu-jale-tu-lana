import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Message {
  sender: "valentina" | "user";
  text: string;
  delay: number;
}

const messages: Message[] = [
  {
    sender: "valentina",
    text: "¡Quihúbole! 👋 Tu flete de $80,000 con Transportes del Norte ya está confirmado. ¿Quieres recibir $75,200 ahorita mismo?",
    delay: 800,
  },
  {
    sender: "user",
    text: "SÍ",
    delay: 2200,
  },
  {
    sender: "valentina",
    text: "¡Listo! $75,200 ya van a tu cuenta. Gracias por jalar con nosotros. 🤝",
    delay: 3800,
  },
];

const TypingIndicator = () => (
  <div className="wa-bubble-received inline-flex items-center gap-1.5 px-4 py-3">
    <span className="wa-typing-dot w-2 h-2 bg-gray-400 rounded-full inline-block" />
    <span className="wa-typing-dot w-2 h-2 bg-gray-400 rounded-full inline-block" />
    <span className="wa-typing-dot w-2 h-2 bg-gray-400 rounded-full inline-block" />
  </div>
);

const WhatsAppMockup = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (!isVisible || animationStarted) return;
    setAnimationStarted(true);

    messages.forEach((msg, index) => {
      // Show typing before each message
      const typingDelay = msg.delay - 600;
      if (typingDelay > 0 && msg.sender === "valentina") {
        setTimeout(() => setShowTyping(true), typingDelay);
      }

      setTimeout(() => {
        setShowTyping(false);
        setVisibleMessages((prev) => [...prev, index]);
      }, msg.delay);
    });
  }, [isVisible, animationStarted]);

  return (
    <div ref={ref} className="w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/40">
        {/* WhatsApp header */}
        <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/80 flex items-center justify-center text-sm font-bold text-primary-foreground">
            V
          </div>
          <div>
            <p className="text-sm font-semibold text-[#e9edef]">Valentina · LANNA</p>
            <p className="text-xs text-[#8696a0]">en línea</p>
          </div>
        </div>

        {/* Chat area */}
        <div className="bg-[#0b141a] px-3 py-4 min-h-[320px] flex flex-col justify-end gap-2"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {messages.map((msg, index) => (
            visibleMessages.includes(index) && (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div
                  className={`${
                    msg.sender === "user" ? "wa-bubble-sent" : "wa-bubble-received"
                  } max-w-[85%] px-3 py-2 text-sm leading-relaxed`}
                >
                  {msg.text}
                  <span className="text-[10px] text-gray-400 ml-2 float-right mt-1">
                    {msg.sender === "user" ? "✓✓" : ""}
                    {index === 0 ? "10:23" : index === 1 ? "10:24" : "10:24"}
                  </span>
                </div>
              </div>
            )
          ))}

          {showTyping && (
            <div className="flex justify-start">
              <TypingIndicator />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;
