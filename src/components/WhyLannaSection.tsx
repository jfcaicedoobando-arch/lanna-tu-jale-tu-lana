import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Zap, Smartphone, Shield, Bell } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp + SPEI",
    desc: "Donde ya estás, como ya cobras. Sin apps nuevas.",
  },
  {
    icon: Zap,
    title: "Tu dinero en minutos",
    desc: "No en semanas. No en meses. En minutos.",
  },
  {
    icon: Smartphone,
    title: "Sin apps raras",
    desc: "Sin papeleo, sin bancos, sin complicaciones.",
  },
  {
    icon: Shield,
    title: "Cada operación asegurada",
    desc: "Tu lana está protegida con seguro de crédito.",
  },
  {
    icon: Bell,
    title: "Valentina te avisa",
    desc: "No tienes que perseguir a nadie por tu pago.",
  },
];

const WhyLannaSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={`scroll-fade-in ${isVisible ? "visible" : ""} text-center mb-14`}>
          <h2 className="font-highway text-4xl sm:text-5xl text-foreground mb-4">
            Pa' los que jalan
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);
            return (
              <div
                key={i}
                ref={cardRef}
                className={`scroll-fade-in ${cardVisible ? "visible" : ""} p-6 sm:p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-highway text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyLannaSection;
