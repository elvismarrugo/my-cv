import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { BRAND, CONTACT } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "800"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["700"], variable: "--font-jetbrains", display: "swap" });

const SITE_URL = "https://www.elvismarrugo.com";
const DESCRIPTION =
  "Apps y automatizaciones a la medida para pymes colombianas. Le quito de encima los procesos manuales: de días a minutos, con menos errores de digitación. Diagnóstico gratis de 30 minutos.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND.name} · ${BRAND.title}`,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: BRAND.name,
    title: BRAND.title,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: BRAND.title, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1e0f4a",
  width: "device-width",
  initialScale: 1,
};

// Datos estructurados para Google (empresa y servicio)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Visual BI S.A.S.",
  alternateName: BRAND.name,
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.whatsappDisplay,
  areaServed: "CO",
  address: { "@type": "PostalAddress", addressLocality: "Cartagena", addressCountry: "CO" },
  description: DESCRIPTION,
  sameAs: [CONTACT.instagram, CONTACT.youtube, CONTACT.linkedin, CONTACT.company],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        {/* Marca el documento cuando hay JavaScript para activar las animaciones de aparición */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
