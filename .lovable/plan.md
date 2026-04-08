

# Reorganización: Landing en 5 Bloques

## Resumen

Consolidar las 12 secciones actuales en 5 bloques con jerarquía clara, elementos interactivos, y líneas divisorias. Eliminar NumbersSection, ObjectionsSection, DifferentiatorsSection, TestimonialsSection, e InvestorsSection como componentes independientes — su contenido relevante se absorbe en los FAQ o se descarta.

## Estructura Final

```text
BLOQUE 1: HeroSection (sin cambios)
─────────── línea divisoria ───────────
BLOQUE 2: ProblemSolutionSection (NUEVO — fusiona Problem + Solution)
─────────── línea divisoria ───────────
BLOQUE 3: ProductsSection (refactor — botones grandes + card interactiva)
─────────── línea divisoria ───────────
BLOQUE 4: TrustSection (NUEVO — FAQ en acordeón)
─────────── línea divisoria ───────────
BLOQUE 5: RequirementsCTASection (refactor Requirements)
```

## Cambios por archivo

### 1. Nuevo: `src/components/ProblemSolutionSection.tsx`
Fusiona ProblemSection + SolutionSection en un solo bloque continuo:
- Etiqueta verde "💡 El problema" arriba
- Título: "El diésel no espera 30 días."
- Texto breve del problema (condensar las 3 sub-secciones actuales en ~4 líneas)
- Luego etiqueta "✨ La solución"
- "Conoce a Lupita" + subtítulo
- 4 pasos genéricos en fila horizontal (💬 Le escribes, 🤝 Te guía, ✅ Te aprueba, 💵 Tu lana llega)
- Mantener WhatsApp mockup debajo de los pasos
- Eliminar el closer "Así. Sin apps..."

### 2. Refactor: `src/components/ProductsSection.tsx`
- Etiqueta verde "📦 Tu situación"
- DOS BOTONES GRANDES lado a lado (no las cards actuales):
  - "Ya tengo mi factura" → Anticipo de Factura
  - "Voy a hacer el flete" → Crédito Rotativo
- Al tocar, aparece abajo una card con: nombre del producto, comisión, quién responde, velocidad
- Simplificar eliminando el flow de pasos (ya está en Bloque 2)
- Absorber el contenido de NumbersSection (ejemplo de $50,000) dentro de la card de Anticipo

### 3. Nuevo: `src/components/TrustSection.tsx`
- Etiqueta verde "🤝 Preguntas frecuentes"
- Acordeón con solo-una-abierta-a-la-vez (reusar lógica actual de FAQSection)
- Preguntas (fusionar FAQ + Objections):
  1. ¿Y si la empresa no me paga?
  2. ¿Cuánto cobran de comisión?
  3. ¿Reportan a Buró de Crédito?
  4. ¿En cuánto tiempo me depositan?
  5. ¿Necesito bajar una app?

### 4. Refactor: `src/components/RequirementsSection.tsx`
- Etiqueta verde "📄 Requisitos"
- Tabs: "Hombre camión" | "Empresa" (mantener como está)
- Lista de documentos (mantener)
- CTA final grande: "Escribirle a Lupita" (mantener)

### 5. `src/pages/Index.tsx`
- Reducir a 5 imports + Footer + FloatingWhatsApp:
  ```
  HeroSection
  ProblemSolutionSection
  ProductsSection
  TrustSection
  RequirementsSection
  FooterSection
  FloatingWhatsApp
  ```

### 6. Líneas divisorias
Cada bloque termina con un `<div>` de 1px con gradiente sutil (`from-transparent via-border/30 to-transparent`).

### 7. Etiquetas de bloque
Componente inline: `<span className="text-xs uppercase tracking-widest text-primary font-semibold">` con emoji + texto, centrado arriba de cada título.

### Archivos a eliminar (dejar de importar)
- NumbersSection.tsx
- ObjectionsSection.tsx
- DifferentiatorsSection.tsx
- TestimonialsSection.tsx
- InvestorsSection.tsx
- ProblemSection.tsx
- SolutionSection.tsx
- FAQSection.tsx

Los archivos físicos se dejan pero ya no se importan.

