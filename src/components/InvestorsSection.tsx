import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  {
    stage: "Etapa A",
    amount: "US$250K",
    type: "Equity",
    desc: "Constitución, licencias, tech, primeras operaciones piloto",
  },
  {
    stage: "Etapa B",
    amount: "US$200K",
    type: "Pool de pruebas",
    desc: "Primeras 50 operaciones reales, validación de modelo, métricas de repago",
  },
  {
    stage: "Tramo 2",
    amount: "US$1-2M",
    type: "Escala",
    desc: "Pool operativo completo, crecimiento de volumen, expansión geográfica",
  },
];

const InvestorsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: dataRef, isVisible: dataVisible } = useScrollAnimation();
  const { ref: milestonesRef, isVisible: milestonesVisible } = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-background to-highway-dark">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className={`scroll-fade-in ${headerVisible ? "visible" : ""} max-w-3xl mb-16`}>
          <h2 className="font-highway text-4xl sm:text-5xl text-foreground mb-6">
            Capital que trabaja tan duro como ellos
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Cada flete completado genera una cuenta por cobrar confirmada. LANNA adelanta el pago al transportista y cobra a la empresa contratante en su ciclo normal. Es un flujo de caja real, respaldado y asegurado.
          </p>
        </div>

        {/* Key metrics */}
        <div ref={dataRef} className={`scroll-fade-in ${dataVisible ? "visible" : ""} grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16`}>
          {[
            { value: "20.7%", label: "Efectivo anual fijo" },
            { value: "8-17x", label: "Rotación de capital/año" },
            { value: "80-90%", label: "Cobertura de seguro" },
            { value: "CFDI", label: "Cuentas por cobrar verificadas" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-card border border-border/50 text-center"
            >
              <p className="font-highway text-3xl sm:text-4xl text-highway-amber mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Investment milestones */}
        <div ref={milestonesRef} className={`scroll-fade-in ${milestonesVisible ? "visible" : ""}`}>
          <h3 className="font-highway text-2xl text-foreground mb-8">Inversión escalonada con milestones</h3>
          
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl bg-card border border-border/50"
              >
                <div className="flex items-center gap-4 sm:w-64 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-highway text-sm text-primary">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-highway text-lg text-foreground">{m.stage}</p>
                    <p className="text-sm text-highway-amber font-semibold">{m.amount} · {m.type}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-body sm:border-l sm:border-border/50 sm:pl-6">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="mailto:inversionistas@lanna.mx"
            className="inline-flex items-center gap-3 bg-highway-amber text-accent-foreground hover:brightness-110 transition-all duration-300 px-8 py-4 rounded-full font-highway text-lg"
          >
            Hablemos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
