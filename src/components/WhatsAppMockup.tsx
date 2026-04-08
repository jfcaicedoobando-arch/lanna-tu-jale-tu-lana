import { useEffect, useState, useRef, useCallback } from 'react';

interface Message {
  sender: 'lupita' | 'trucker';
  text: string;
  delay: number;
}

const onboardingMessages: Message[] = [
  { sender: 'lupita',  text: '¡Quiubo! Soy Lupita de LANNA 👋 ¿Te llegó mi mensaje por CANACAR?', delay: 0 },
  { sender: 'trucker', text: 'Sí, algo vi. ¿De qué se trata?', delay: 1800 },
  { sender: 'lupita',  text: 'Te adelantamos el pago de tus facturas de flete al instante. Sin esperar 30, 45 o 60 días 🚛', delay: 1400 },
  { sender: 'lupita',  text: '¿Tienes troca propia y facturas pendientes de cobro ahorita?', delay: 900 },
  { sender: 'trucker', text: 'Sí, tengo dos que me deben de la semana pasada', delay: 1600 },
  { sender: 'lupita',  text: '¡Perfecto, sí calificas! Te pido unos docs para darte de alta. Nada del otro mundo, te lo prometo 😄', delay: 1200 },
  { sender: 'lupita',  text: 'Mándame por aquí mismo:\n1. Tu INE (ambos lados)\n2. Título del troca\n3. Tu RFC\n4. Una factura reciente', delay: 1000 },
  { sender: 'trucker', text: '[Foto INE frente]', delay: 2200 },
  { sender: 'lupita',  text: '¡Recibida! Me mandas el otro lado? 📋', delay: 900 },
  { sender: 'trucker', text: '[Foto INE reverso]', delay: 1400 },
  { sender: 'lupita',  text: 'INE completa ✅ Van 1 de 4, vas volando 💪', delay: 800 },
];

const requestMessages: Message[] = [
  { sender: 'lupita',  text: '¡Quiubo! ¿Cómo va la carretera? ¿Tienes facturas nuevas esta semana? 🚛', delay: 0 },
  { sender: 'trucker', text: 'Sí, acabo de entregar en Guadalajara. Factura de $85,000 con Materiales del Norte', delay: 2000 },
  { sender: 'lupita',  text: '¡Sale! Mándame la factura y los datos del que te debe 📄', delay: 1200 },
  { sender: 'trucker', text: '[Foto factura CFDI]', delay: 1800 },
  { sender: 'lupita',  text: 'Recibida. Es con Materiales del Norte otra vez, ¿verdad?', delay: 1100 },
  { sender: 'trucker', text: 'Sí, la misma empresa', delay: 1000 },
  { sender: 'lupita',  text: 'Perfecto, ya la tengo. Le echo un ojo y te aviso rápido ⚡', delay: 900 },
  { sender: 'lupita',  text: '¡Listo compa! Tu flete de $85,000 con Materiales del Norte está confirmado ✅', delay: 2800 },
  { sender: 'lupita',  text: '¿Quieres recibir $80,325 ahorita mismo vía SPEI?', delay: 800 },
  { sender: 'trucker', text: '¡SÍ! 🙌', delay: 900 },
  { sender: 'lupita',  text: '$80,325 ya van a tu cuenta. En 2-5 minutos caen 💸 ¡Buen camino!', delay: 1200 },
];

const AGENT_NAME = 'Lupita · LANNA';

interface ChatProps {
  messages: Message[];
  active: boolean;
}

const Chat = ({ messages, active }: ChatProps) => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const startAnimation = useCallback(() => {
    setVisibleMessages([]);
    setIsTyping(false);
    clearTimers();

    let totalDelay = 600;

    messages.forEach((msg, index) => {
      totalDelay += msg.delay;

      if (msg.sender === 'lupita') {
        const t = setTimeout(() => setIsTyping(true), totalDelay - 700);
        timers.current.push(t);
      }

      const t2 = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages(prev => [...prev, index]);
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }, totalDelay);
      timers.current.push(t2);

      totalDelay += 350;
    });
  }, [messages]);

  useEffect(() => {
    if (active) {
      startAnimation();
    } else {
      clearTimers();
      setVisibleMessages([]);
      setIsTyping(false);
    }
    return clearTimers;
  }, [active, startAnimation]);

  const getTime = (index: number) => {
    const base = 14 * 60 + 23 + Math.floor(index * 1.2);
    const h = Math.floor(base / 60);
    const m = base % 60;
    return `${h}:${m < 10 ? '0' + m : m}`;
  };

  const firstLupitaVisible = visibleMessages.find(i => messages[i]?.sender === 'lupita');

  return (
    <div
      ref={chatRef}
      className="bg-[#0B141A] min-h-[420px] max-h-[460px] overflow-y-auto px-3 py-4 space-y-2 scroll-smooth"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="flex justify-center mb-3">
        <span className="bg-[#1D2831] text-[#8696A0] text-xs px-3 py-1 rounded-lg">HOY</span>
      </div>

      {messages.map((msg, index) => {
        if (!visibleMessages.includes(index)) return null;
        const isLupita = msg.sender === 'lupita';

        return (
          <div key={index} className={`flex ${isLupita ? 'justify-start' : 'justify-end'} animate-fade-in`}>
            <div className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${isLupita ? 'bg-[#1D2831] text-[#E9EDEF]' : 'bg-[#005C4B] text-[#E9EDEF]'}`}>
              {isLupita && index === firstLupitaVisible && (
                <p className="text-[#25D366] text-xs font-semibold mb-1">{AGENT_NAME}</p>
              )}
              <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
              <p className={`text-[10px] mt-1 text-right ${isLupita ? 'text-[#8696A0]' : 'text-[#7DB8A5]'}`}>
                {getTime(index)}{!isLupita && <span className="ml-1">✓✓</span>}
              </p>
            </div>
          </div>
        );
      })}

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
  );
};

type Tab = 'onboarding' | 'request';

const WhatsAppMockup = () => {
  const [activeTab, setActiveTab] = useState<Tab>('onboarding');

  const tabs: { id: Tab; label: string; sublabel: string }[] = [
    { id: 'onboarding', label: 'Registro', sublabel: 'Primera vez con LANNA' },
    { id: 'request',    label: 'Pedir lana', sublabel: 'Ya eres cliente' },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex gap-2 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-3 rounded-xl border text-left transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-primary/10 border-primary/40'
                : 'bg-surface/30 border-border/20 hover:border-border/40'
            }`}
          >
            <p className={`text-sm font-heading leading-tight ${activeTab === tab.id ? 'text-foreground' : 'text-muted-foreground'}`}>
              {tab.label}
            </p>
            <p className={`text-xs font-body mt-0.5 ${activeTab === tab.id ? 'text-primary' : 'text-muted-foreground/40'}`}>
              {tab.sublabel}
            </p>
          </button>
        ))}
      </div>

      <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border border-border/30">
        <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white/30" />
          <div className="w-9 h-9 rounded-full bg-primary/40 flex items-center justify-center text-white text-sm font-bold">L</div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">{AGENT_NAME}</p>
            <p className="text-white/60 text-xs">en línea</p>
          </div>
          <div className="flex gap-4 text-white/70">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </div>
        </div>

        <div className={activeTab === 'onboarding' ? 'block' : 'hidden'}>
          <Chat messages={onboardingMessages} active={activeTab === 'onboarding'} />
        </div>
        <div className={activeTab === 'request' ? 'block' : 'hidden'}>
          <Chat messages={requestMessages} active={activeTab === 'request'} />
        </div>

        <div className="bg-[#1B2B34] px-3 py-2 flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#8696A0]"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
          <div className="flex-1 bg-[#2A3942] rounded-full px-4 py-2 text-[#8696A0] text-sm">Mensaje</div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-[#8696A0]"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground/30 font-body mt-3">
        Toca otra pestaña para ver el otro flujo
      </p>
    </div>
  );
};

export default WhatsAppMockup;
