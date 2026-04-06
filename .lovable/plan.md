

# LANNA — Landing Page Completa

## Visión General
Landing page premium de una sola página para LANNA. Dark theme nocturno, animaciones generativas en hero, mockup de WhatsApp animado, mobile-first. Español mexicano. Sin registro ni login.

## Identidad Visual

**Paleta (HSL para CSS variables):**
- Background: `0 0% 7%` (negro profundo asfalto)
- Surface: `0 0% 12%` (cards/secciones elevadas)
- Primary: `145 63% 29%` (verde carretero — señales de autopista MX)
- Accent: `36 69% 50%` (ámbar — luces de camión nocturno)
- Foreground: `0 0% 95%` (texto principal)
- Muted: `0 0% 55%` (texto secundario)

**Tipografía:** Archivo Black (headlines), Inter (body) — via Google Fonts CDN

**Logo:** SVG wordmark "LANNA" con tracking amplio, tipografía bold industrial. La doble NN con un sutil tratamiento de conexión. Isotipo geométrico abstracto (dos flechas/flujo) que funcione como favicon.

## Arquitectura de Archivos

```
src/
  pages/Index.tsx              — Orquesta todas las secciones
  components/
    LannaLogo.tsx              — Logo SVG inline (wordmark + isotipo)
    HeroSection.tsx            — Hero con canvas animado de carretera nocturna
    ProblemSection.tsx         — Narrativa emocional con scroll animations
    SolutionSection.tsx        — Valentina + mockup WhatsApp animado
    DifferentiatorsSection.tsx — Cards con diferenciadores
    InvestorsSection.tsx       — Sección profesional para inversionistas
    FooterSection.tsx          — Footer con logo y legal
    WhatsAppMockup.tsx         — Conversación animada con typing indicator
    AnimatedCounter.tsx        — Contador numérico animado
    useScrollAnimation.ts     — Hook para Intersection Observer
  hooks/
    useScrollAnimation.ts     — Fade-in/slide-up al entrar en viewport
```

## Secciones

### 1. Hero
- Canvas/CSS animación generativa: líneas de luz moviéndose como luces de carretera nocturna (partículas horizontales con glow verde/ámbar sobre fondo oscuro)
- Logo LANNA grande, centrado
- "Tu jale, tu lana." — headline en Archivo Black
- Subheadline emocional directo al transportista
- CTA "Así funciona ↓" con scroll suave
- Sutil parallax en capas

### 2. El Problema (sección protagonista)
- Más espacio vertical que cualquier otra sección
- Narrativa en bloques con scroll-triggered fade-in:
  - **El Viaje**: Frases cortas tipo verso, tipografía grande, aparecen una a una
  - **La Espera**: Fondo se oscurece más, espacio se comprime visualmente, lista de necesidades urgentes
  - **Las Alternativas**: Tono de indignación tranquila, cada alternativa mala se presenta y se descarta
  - **El Quiebre**: "Hasta ahora." — frase sola en color ámbar acento, con mucho espacio
- Dato emocional del journey: la transformación de escéptico a primera vez con acceso financiero
- Transición de mood: sección muy oscura que gradualmente abre hacia la luz

### 3. La Solución — Valentina
- Contraste visual fuerte: más luminosa, verde primario más presente, sensación de alivio
- "Conoce a Valentina" con presentación de la agente
- 4 pasos ilustrados con íconos SVG custom y animación secuencial
- **Mockup de WhatsApp** (elemento central):
  - Diseño pixel-perfect de interfaz WhatsApp (header verde oscuro, burbujas verdes/blancas, timestamps)
  - Combinación de las opciones de diálogo: onboarding breve → cobro de flete
  - Animación: typing indicator (tres puntos rebotando) → mensaje aparece → pausa → siguiente mensaje
  - Se activa con Intersection Observer al entrar en viewport
- Cierre: "Sin apps. Sin papeleo. Sin ir al banco. Sin rogarle a nadie."

### 4. Diferenciadores
- "Pa' los que jalan" como headline
- 6 cards con íconos SVG custom, hover con micro-animación (scale + glow sutil)
- Layout: grid 2x3 en desktop, stack en mobile
- WhatsApp+SPEI, dinero en minutos, Valentina te busca, registro por WhatsApp, buen historial = mejores condiciones, seguro de crédito

### 5. Para Inversionistas
- Cambio de tono visual: más limpio, tipografía más formal pero mismo dark theme
- Lógica del negocio explicada con claridad (flujo: flete → CFDI → adelanto → cobro)
- Pilares de protección del capital en cards o grid
- Tecnología real: agentes IA, WhatsApp Business API, SPEI
- "No es venture, es capital sobre cuentas por cobrar reales"
- CTA "Hablemos" → mailto placeholder
- SIN montos, tasas, porcentajes ni estructura de inversión

### 6. Footer
- Logo + "Tu jale, tu lana."
- "LANNA SAPI de CV"
- Placeholders: WhatsApp, email, redes sociales

## Animaciones (sin dependencias pesadas)

- **Hero canvas**: CSS animation con múltiples `div` absolutas que se mueven horizontalmente con blur y glow (simula luces de carretera). Puro CSS keyframes.
- **Scroll animations**: Hook `useScrollAnimation` con Intersection Observer → clases CSS de fade-in/slide-up
- **WhatsApp mockup**: `useState` + `useEffect` + `setTimeout` secuencial activado por Intersection Observer. Typing dots con CSS animation.
- **Contadores**: `requestAnimationFrame` loop activado por viewport entry
- **Hover effects**: Tailwind `hover:scale-105`, `transition-transform`

## Técnico

- Actualizar CSS variables en `index.css` con la nueva paleta LANNA
- Google Fonts: Archivo Black + Inter via `<link>` en `index.html`
- Todo en un solo route `/`, componentes modulares
- Mobile-first: base styles para mobile, `md:` y `lg:` para desktop
- Performance: sin librerías de animación externas, todo CSS + Intersection Observer + RAF

## Pasos de Implementación

1. Actualizar `index.html` (título, meta, Google Fonts)
2. Actualizar `index.css` con paleta LANNA dark theme
3. Actualizar `tailwind.config.ts` con colores custom y keyframes de animación
4. Crear hook `useScrollAnimation`
5. Crear `LannaLogo` (SVG)
6. Crear las 6 secciones como componentes
7. Crear `WhatsAppMockup` con animación de mensajes
8. Crear `AnimatedCounter`
9. Integrar todo en `Index.tsx`

