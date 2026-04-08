

# Navbar Sticky con Anchor Navigation

## Resumen
Crear un componente `Navbar.tsx` sticky con logo, 3 anchor links, CTA de WhatsApp, menú hamburguesa en móvil, y detección de sección activa via Intersection Observer.

## Cambios

### 1. Crear `src/components/Navbar.tsx`
- Logo "LANNA" a la izquierda (scroll to top al click)
- 3 links centrados: Productos (#productos), Requisitos (#requisitos), Preguntas (#preguntas)
- CTA "💬 Escribir a Lupita" a la derecha (pill verde, enlace WhatsApp)
- `useState` para `scrolled` (fondo blur cuando scroll > 20px) y `activeSection`
- `useState` para `mobileMenuOpen` — hamburguesa que muestra links en dropdown vertical
- `useEffect` con `IntersectionObserver` (threshold 0.3) observando las 3 secciones para actualizar `activeSection`
- Links inactivos: `text-muted-foreground`, activos: `text-primary`
- Fondo: transparente arriba, `bg-background/90 backdrop-blur-md` al scrollear
- Altura ~60px, `fixed top-0 w-full z-50`
- En móvil: ocultar links desktop, mostrar hamburguesa + CTA siempre visible
- Click en link móvil cierra el menú

### 2. Agregar `id="preguntas"` a `TrustSection.tsx`
- La sección de FAQ necesita el anchor id (productos y requisitos ya lo tienen)

### 3. Agregar `scroll-margin-top` a las 3 secciones
- En `ProductsSection`, `TrustSection`, `RequirementsSection`: añadir clase `scroll-mt-[70px]` al `<section>`

### 4. Actualizar `Index.tsx`
- Importar y renderizar `<Navbar />` antes de `<HeroSection />`

### 5. Agregar `scroll-behavior: smooth` en `index.css`
- `html { scroll-behavior: smooth; }`

## Archivos tocados
1. **Nuevo**: `src/components/Navbar.tsx`
2. **Editar**: `src/components/TrustSection.tsx` — agregar `id="preguntas"` y `scroll-mt-[70px]`
3. **Editar**: `src/components/ProductsSection.tsx` — agregar `scroll-mt-[70px]`
4. **Editar**: `src/components/RequirementsSection.tsx` — agregar `scroll-mt-[70px]`
5. **Editar**: `src/pages/Index.tsx` — importar Navbar
6. **Editar**: `src/index.css` — `scroll-behavior: smooth`

