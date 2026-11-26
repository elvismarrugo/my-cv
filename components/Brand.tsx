import { BRAND } from "@/lib/content";

// Ruta del logo oficial de Visual BI (versión blanca para fondo oscuro).
// Cuando Elvix suba el archivo a /public/logos/, poner aquí la ruta, por ejemplo:
// "/logos/vbi-logo-horizontal-blanco.svg". Mientras sea null se muestra solo el texto.
// Regla de marca: no redibujar ni recolorear el logo.
const VBI_LOGO_SRC: string | null = null;

// Marca personal: {$} protagonista + "Elvix │ VBI"
export function ElvixMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="font-mono text-xl font-bold text-vivid">{BRAND.symbol}</span>
      <span className="text-base font-bold tracking-tight">
        Elvix <span className="text-lilac/60">│</span> VBI
      </span>
    </span>
  );
}

// Logo de Visual BI: nunca va solo, siempre con "Visual BI" y "Apps a la medida"
export function VisualBiMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {VBI_LOGO_SRC ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={VBI_LOGO_SRC} alt="Visual BI" className="h-9 w-auto" />
      ) : null}
      <span className="leading-tight">
        <span className="block text-sm font-bold">Visual BI</span>
        <span className="block text-xs text-lilac/70">Apps a la medida</span>
      </span>
    </span>
  );
}
