# elvismarrugo.com · Elvix │ VBI

Landing de la marca personal de Elvix (Visual BI). Objetivo: que dueños y gerentes de pymes
escriban **PROCESO** por mensaje directo a @visualbi.co (WhatsApp como segunda vía).

## Stack
- Next.js 15 (App Router) + TypeScript + Tailwind CSS 4
- Vercel (proyecto `my-cv`) con Vercel Web Analytics

## Cómo correrlo
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # compilación de producción
```

## Dónde se edita
- Textos, apps, trayectoria y contacto: `lib/content.ts`
- Logo de Visual BI: `components/Brand.tsx` (`VBI_LOGO_SRC`) y archivos en `public/logos/`
- Colores y animaciones: `app/globals.css`

## Medición
Cada botón envía el evento `cta_click` con `channel` (instagram | whatsapp) y `location`
(portada, calculadora, apps, como-funciona, cierre). Se ve en Vercel → Analytics → Events
(requiere activar Web Analytics; los eventos personalizados solo funcionan en el plan Pro de Vercel. En el plan gratis el código no falla, pero no registra los clics).
