

# LANNA — Landing Page

## Visión General
Landing page informativa de una sola página para LANNA, fintech mexicana que adelanta pagos de fletes a transportistas vía WhatsApp + SPEI. Mobile-first, español mexicano, sin registro ni login.

## Identidad Visual
- **Logo**: Wordmark "LANNA" en tipografía bold industrial tipo señalización de carretera. La doble N con tratamiento especial (conectadas o con detalle focal). Elemento sutil de ruta/movimiento.
- **Paleta**: Verde carretero (#1B7A3D) como primario, negro/gris asfalto (#1A1A1A, #2D2D2D) como secundario, ámbar/dorado (#D4942A) como acento. Alto contraste.
- **Tipografía**: Headlines bold/industrial (tipo señalización), body limpia y legible. Nada delgado ni elegante.
- **Estética**: Mexicana, industrial, cálida. Carretera nocturna, no Silicon Valley.

## Secciones

### 1. Hero
- Logo LANNA grande
- "Tu jale, tu lana." como headline principal
- "Ya trabajaste. Ya entregaste. Ya te toca cobrar."
- Visual evocando carretera mexicana de noche (gradiente oscuro con luces de carretera, silueta de camión en CSS/SVG)
- CTA "Así funciona →" que hace scroll suave a sección 2

### 2. El Problema (sección más grande y con más peso visual)
- **Bloque 1 — El Viaje**: Frases cortas tipo verso con fade-in al scroll. Tipografía grande, una debajo de otra.
- **Bloque 2 — La Espera**: Fondo más oscuro, espacio comprimido, sensación de peso acumulándose. Lista de necesidades urgentes.
- **Bloque 3 — Las "Alternativas"**: Tono de indignación tranquila. Factoraje, gota a gota, o aguantar.
- **Bloque 4 — El Quiebre**: "Hasta ahora." — frase sola, grande, en color ámbar acento, con mucho espacio.

### 3. La Solución — Cómo Funciona
- Contraste visual: más luz, aire, espacio (fondo más claro)
- "Conoce a Valentina" con subtítulo
- 4 pasos con íconos simples: Terminas flete → Valentina escribe → Dices SÍ → Tu lana llega
- **Mockup de WhatsApp** como elemento central: conversación realista con animación de typing y mensajes apareciendo secuencialmente (Intersection Observer). Burbujas verdes/blancas estilo WhatsApp real.
- Frase cierre: "Así. Sin apps. Sin papeleo. Sin ir al banco. Sin rogarle a nadie."

### 4. Por Qué LANNA
- "Pa' los que jalan"
- Cards con íconos y diferenciadores clave (WhatsApp+SPEI, minutos no semanas, sin apps, asegurada, Valentina te avisa)

### 5. Para Inversionistas
- "Capital que trabaja tan duro como ellos"
- Tono profesional pero cálido
- Lógica del negocio primero, luego datos clave (20.7% anual, capital rotativo, seguro de crédito)
- Visual de 3 etapas de inversión con milestones
- CTA "Hablemos" con mailto placeholder

### 6. Footer
- Logo, tagline, texto legal LANNA SAPI de CV, placeholders redes/contacto

## Animaciones
- Scroll-triggered fade-in y slide-up sutiles (Intersection Observer)
- Sección Problema: frases aparecen secuencialmente al scrollear
- Mockup WhatsApp: animación typing + mensajes secuenciales al entrar en viewport
- Sin librerías pesadas — CSS animations + Intersection Observer

## Técnico
- React + Tailwind CSS, componentes por sección
- Mobile-first responsive
- Sin dependencias adicionales pesadas
- Logo como componente SVG inline (funciona en cualquier fondo/tamaño)

