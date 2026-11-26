"use client";

import { track } from "@vercel/analytics";
import { CONTACT, BRAND } from "@/lib/content";
import { Icon } from "./Icon";

type Props = {
  channel: "instagram" | "whatsapp";
  // Lugar del sitio donde está el botón (para comparar qué sección convierte más)
  location: string;
  variant?: "primary" | "secondary";
  className?: string;
};

// Botón de llamado a la acción con medición de clics en Vercel Analytics.
// Sirve para comparar a las 4 semanas: PROCESO por Instagram vs WhatsApp.
export function CtaButton({ channel, location, variant, className = "" }: Props) {
  const isIg = channel === "instagram";
  const v = variant ?? (isIg ? "primary" : "secondary");
  const href = isIg ? CONTACT.instagramDm : CONTACT.whatsapp;
  const label = isIg ? BRAND.cta : "Prefiero WhatsApp";

  const handleClick = () => {
    try {
      track("cta_click", { channel, location });
    } catch {
      // Si la medición falla, el enlace debe seguir funcionando
    }
  };

  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac";
  const styles =
    v === "primary"
      ? "bg-white px-7 py-4 text-ink shadow-[0_10px_40px_-8px_rgba(142,107,255,0.8)] hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-8px_rgba(142,107,255,1)]"
      : "border border-lilac/30 bg-white/5 px-6 py-4 text-mist hover:border-lilac/70 hover:bg-white/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`${base} ${styles} ${className}`}
      aria-label={isIg ? `${BRAND.cta} por mensaje directo en Instagram ${CONTACT.instagramHandle}` : "Escribir por WhatsApp"}
    >
      <Icon name={isIg ? "instagram" : "whatsapp"} className="h-5 w-5" />
      {isIg ? (
        <span className="whitespace-nowrap">
          Escríbeme <span className="font-mono font-bold tracking-wide text-royal">PROCESO</span>
        </span>
      ) : (
        <span className="whitespace-nowrap">{label}</span>
      )}
      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}
