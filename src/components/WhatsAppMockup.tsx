import { useEffect, useState, useRef } from 'react';

interface Message {
  sender: 'lupita' | 'transportista';
  text: string;
  delay: number;
}

const messages: Message[] = [
  { sender: 'lupita', text: '¡Hola! Soy Lupita, tu compañera de viaje en LANNA 👋', delay: 0 },
  { sender: 'lupita', text: 'Aquí ayudamos a que no te quedes sin lana mientras esperas que te paguen tus fletes. Te adelantamos tu pago para que sigas rodando 🚛', delay: 1200 },
  { sender: 'transportista', text: 'Y eso como funciona?', delay: 2000 },
  { sender: 'lupita', text: 'Bien fácil: tú me pasas tu factura, yo te consigo el adelanto en chinga, y cuando te paguen, nos liquidas. Sin vueltas 💪', delay: 1500 },
  { sender: 'lupita', text: '¡Quihúbole! Tu flete de $80,000 con Transportes del Norte ya está confirmado ✅', delay: 2000 },
  { sender: 'lupita', text: '¿Quieres recibir $75,200 ahorita mismo?', delay: 1000 },
  { sender: 'transportista', text: 'SÍ', delay: 800 },
  { sender: 'lupita', text: '¡Listo! $75,200 ya van a tu cuenta. Gracias por jalar con nosotros 🤝', delay: 1500 },
];

const WhatsAppMockup = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const startAnimation = () => {
    let totalDelay = 500;

    messages.forEach((msg, index) => {
      totalDelay += msg.delay;

      // Show typing before each Lupita message
      if (msg.sender === 'lupita') {
        setTimeout(() => setIsTyping(true), totalDelay - 800);
      }

      setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, index]);
      }, totalDelay);

      totalDelay += 400; // gap between messages
    });
  };

  const getTime = (index: number) => {
    const baseHour = 14;
    const baseMin = 23;
    const min = baseMin + Math.floor(index * 0.8);
    return `${baseHour}:${min < 10 ? '0' + min : min}`;
  };

  return (
    <div ref={containerRef} className="w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-border/30">
        {/* WhatsApp Header */}
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-9 h-9 rounded-full bg-primary/40 flex items-center justify-center text-white text-sm font-bold">
            V
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">Lupita · LANNA</p>
            <p className="text-white/60 text-xs">en línea</p>
          </div>
          <div className="flex gap-4 text-white/70">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </div>
        </div>

        {/* Chat area */}
        <div className="bg-[#0B141A] min-h-[420px] max-h-[480px] overflow-y-auto px-3 py-4 space-y-2"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {/* Date separator */}
          <div className="flex justify-center mb-3">
            <span className="bg-[#1D2831] text-[#8696A0] text-xs px-3 py-1 rounded-lg">HOY</span>
          </div>

          {messages.map((msg, index) => {
            if (!visibleMessages.includes(index)) return null;

            const isLupita = msg.sender === 'lupita';

            return (
              <div
                key={index}
                className={`flex ${isLupita ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm relative ${
                    isLupita
                      ? 'bg-[#1D2831] text-[#E9EDEF]'
                      : 'bg-[#005C4B] text-[#E9EDEF]'
                  }`}
                >
                  {isLupita && index === visibleMessages.filter((_, i) => messages[i]?.sender === 'lupita')[0] && (
                    <p className="text-[#25D366] text-xs font-semibold mb-1">Lupita · LANNA</p>
                  )}
                  <p className="leading-relaxed">{msg.text}</p>
                  <p className={`text-[10px] mt-1 text-right ${isLupita ? 'text-[#8696A0]' : 'text-[#7DB8A5]'}`}>
                    {getTime(index)}
                    {!isLupita && (
                      <span className="ml-1">✓✓</span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-[#1D2831] px-4 py-3 rounded-lg flex gap-1.5">
                <span className="w-2 h-2 bg-[#8696A0] rounded-full typing-dot-1" />
                <span className="w-2 h-2 bg-[#8696A0] rounded-full typing-dot-2" />
                <span className="w-2 h-2 bg-[#8696A0] rounded-full typing-dot-3" />
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="bg-[#1B2B34] px-3 py-2 flex items-center gap-2">
          <div className="flex gap-2 text-[#8696A0]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
          </div>
          <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 text-[#8696A0] text-sm">
            Mensaje
          </div>
          <div className="text-[#8696A0]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;
