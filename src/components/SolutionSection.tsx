import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WhatsAppMockup from "./WhatsAppMockup";
import { Check, MessageCircle, Send, DollarSign } from "lucide-react";

const steps = [
  { icon: Check, label: "Terminas tu flete", desc: "Factura y cumplido listos" },
  { icon: MessageCircle, label: "Valentina te escribe", desc: "Por WhatsApp, al tiro" },
  { icon: Send, label: 'Dices "SÍ"', desc: "Un mensaje y listo" },
  { icon: DollarSign, label: "Tu lana llega", desc: "En minutos, vía SPEI" },
];

const SolutionSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  return (
    <section className="relative bg-gradient-to-b from-[hsl(145,63%,8%)] via-[hsl(145,40%,10%)] to-background py-20 sm:py-28 px-4 overflow-hidden">
      {/* Subtle green ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div ref={headerRef} className={`scroll-fade-in ${headerVisible ? "visible" : ""} text-center mb-16`}>
          <h2 className="font-highway text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            Conoce a Valentina
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-body max-w-lg mx-auto">
            Tu comadre en LANNA. Te escribe cuando tu jale está listo y te deposita en minutos.
          </p>
        </div>

        {/* 4 Steps */}
        <div ref={stepsRef} className={`scroll-fade-in ${stepsVisible ? "visible" : ""} grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16`}>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`scroll-fade-in-delay-${i + 1} text-center p-4 sm:p-6 rounded-xl bg-card/50 border border-primary/10`}
              style={stepsVisible ? { opacity: 1, transform: "translateY(0)" } : {}}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-highway text-sm sm:text-base text-foreground mb-1">{step.label}</p>
              <p className="text-xs sm:text-sm text-muted-foreground font-body">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp Mockup */}
        <WhatsAppMockup />

        {/* Closing phrase */}
        <div ref={footerRef} className={`scroll-fade-in ${footerVisible ? "visible" : ""} text-center mt-14`}>
          <p className="font-highway text-xl sm:text-2xl md:text-3xl text-foreground/80 leading-relaxed">
            Así. Sin apps. Sin papeleo.<br className="sm:hidden" /> Sin ir al banco. Sin rogarle a nadie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
