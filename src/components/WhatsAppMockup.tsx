import { useEffect, useRef, useState } from 'react';

interface Message {
  sender: 'valentina' | 'transportista';
  text: string;
  delay: number;
}

const messages: Message[] = [
  {
    sender: 'valentina',
    text: '¡Quihúbole! Tu flete de $80,000 con Transportes del Norte ya está confirmado. ¿Quieres recibir $75,200 ahorita mismo?',
    delay: 1200,
  },
  {
    sender: 'transportista',
    text: 'SÍ',
    delay: 2000,
  },
  {
    sender: 'valentina',
    text: '¡Listo! $75,200 ya van a tu cuenta. Gracias por jalar con nosotros. 🤝',
    delay: 1500,
  },
];

const WhatsAppMockup = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let totalDelay = 500;

    messages.forEach((msg, index) => {
      // Show typing
      setTimeout(() => setIsTyping(true), totalDelay);
      totalDelay += msg.delay;

      // Show message
      setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, index]);
      }, totalDelay);
      totalDelay += 400;
    });
  }, [started]);

  const currentTime = "3:47 AM";

  return (
    <div ref={containerRef} className="w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-border/30">
        {/* WhatsApp header */}
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
            V
          </div>
          <div>
            <p className="text-white text-sm font-semibold">Valentina · LANNA</p>
            <p className="text-white/60 text-xs">en línea</p>
          </div>
        </div>

        {/* Chat area */}
        <div className="bg-[#0B141A] min-h-[320px] p-4 space-y-3 relative">
          {/* WhatsApp background pattern (subtle) */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="relative z-10 space-y-3">
            {visibleMessages.map((msgIndex) => {
              const msg = messages[msgIndex];
              const isValentina = msg.sender === 'valentina';
              return (
                <div
                  key={msgIndex}
                  className={`flex ${isValentina ? 'justify-start' : 'justify-end'} animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-3 py-2 ${
                      isValentina
                        ? 'bg-[#1F2C33] text-white rounded-tl-none'
                        : 'bg-[#005C4B] text-white rounded-tr-none'
                    }`}
                  >
                    {isValentina && (
                      <p className="text-[#25D366] text-xs font-semibold mb-1">Valentina</p>
                    )}
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p className="text-[10px] text-white/40 text-right mt-1">{currentTime}</p>
                  </div>
                </div>
              );
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-[#1F2C33] rounded-lg rounded-tl-none px-4 py-3 flex gap-1.5">
                  <div className="w-2 h-2 bg-white/50 rounded-full typing-dot-1" />
                  <div className="w-2 h-2 bg-white/50 rounded-full typing-dot-2" />
                  <div className="w-2 h-2 bg-white/50 rounded-full typing-dot-3" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;
