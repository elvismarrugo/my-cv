// Contenido del sitio en un solo lugar para editarlo sin tocar el diseño.
// Reglas de marca: trato de usted, frases cortas, "menos errores de digitación"
// (nunca "sin errores" a secas), sin la palabra "médico" ni datos personales.

// --- Contacto público (únicos datos permitidos en piezas públicas) ---
export const CONTACT = {
  instagramHandle: "@visualbi.co",
  // ig.me abre directo el chat de Instagram de la cuenta
  instagramDm: "https://ig.me/m/visualbi.co",
  instagram: "https://www.instagram.com/visualbi.co/",
  whatsappDisplay: "+57 311 564 4229",
  whatsapp:
    "https://wa.me/573115644229?text=" +
    encodeURIComponent("Hola, quiero el diagnóstico gratis de mi PROCESO."),
  email: "elvix@visualbi.co",
  youtube: "https://www.youtube.com/@visualbico",
  linkedin: "https://www.linkedin.com/in/elvismarrugo/",
  company: "https://www.visualbi.co",
} as const;

export const BRAND = {
  name: "Elvix │ VBI",
  symbol: "{$}",
  title: "Alivio los dolores de cabeza de las pymes",
  support: "De días a minutos, con menos errores de digitación.",
  cta: "Escríbeme PROCESO",
} as const;

export const NAV = [
  { href: "#que-hago", label: "Qué hago" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#apps", label: "Apps" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#trayectoria", label: "Trayectoria" },
] as const;

// --- Dolores (tomados de los guiones de los reels) ---
export const PAINS = [
  {
    icon: "excel",
    title: "El Excel del lunes",
    text: "Exportar del sistema, pegar en Excel, cuadrar a mano. Se le va el día en un solo informe.",
    stat: "8 a. m. → 4 p. m.",
  },
  {
    icon: "paper",
    title: "La pila de papel",
    text: "Pedidos, facturas y planillas que alguien vuelve a digitar. Todo pasa dos veces.",
    stat: "300 hojas al mes",
  },
  {
    icon: "error",
    title: "El número mal digitado",
    text: "Basta un dato mal copiado para que el informe diga otra cosa y nadie lo note a tiempo.",
    stat: "1 error = 1 mala decisión",
  },
] as const;

// --- Lo que hago (servicios) ---
export const SERVICES = [
  {
    icon: "bolt",
    title: "Le quito de encima lo repetitivo",
    text: "Informes, conciliaciones, cuentas de cobro, consolidados de ventas. Lo que hoy se hace a mano, se hace solo.",
    tags: ["Procesos", "Flujos", "Alertas"],
  },
  {
    icon: "app",
    title: "Apps a la medida",
    text: "Herramientas web hechas para su forma de trabajar. Pantallas claras que su equipo entiende el primer día.",
    tags: ["Web", "Celular", "Multiusuario"],
  },
  {
    icon: "chart",
    title: "Tableros con sus cifras clave",
    text: "Ventas, cartera, gastos y flujo de caja en un tablero que se actualiza sin copiar y pegar.",
    tags: ["Power BI", "Dashboards", "KPI"],
  },
  {
    icon: "link",
    title: "Conecto lo que ya usa",
    text: "Tomo lo que exporta de Siigo, Alegra o World Office, sus Excel y formatos, y lo convierto en información lista.",
    tags: ["Siigo", "Alegra", "World Office", "Excel"],
  },
] as const;

// --- Vitrina de apps aprobadas para mostrar ---
// OJO: las descripciones son un borrador para que Elvix las corrija.
// Se mantienen en una línea y sin detalles que permitan copiar la solución.
export type AppItem = {
  name: string;
  area: "Impuestos" | "Contabilidad" | "Cartera" | "Operación" | "Legal" | "Datos";
  text: string;
  tutorial?: boolean; // tiene tutorial publicado en YouTube
};

export const APPS: AppItem[] = [
  { name: "Cuadrex", area: "Contabilidad", text: "Cuadres y conciliaciones en minutos.", tutorial: true },
  { name: "KredixMoney", area: "Cartera", text: "Créditos y cartera bajo control.", tutorial: true },
  { name: "Liquidador Abogado", area: "Legal", text: "Liquidaciones listas para el despacho.", tutorial: true },
  { name: "TaxCalendar", area: "Impuestos", text: "Vencimientos tributarios con recordatorio." },
  { name: "Exógena Cartagena", area: "Impuestos", text: "Información exógena distrital, lista." },
  { name: "SuperContable", area: "Contabilidad", text: "Apoyo al trabajo contable del día a día." },
  { name: "Visual BI Alegra", area: "Datos", text: "Informes a partir de sus datos de Alegra." },
  { name: "Validador Cifin", area: "Cartera", text: "Archivos validados antes de reportar." },
  { name: "Arriendix", area: "Operación", text: "Arriendos, cobros y pagos en orden." },
  { name: "Contratox", area: "Legal", text: "Contratos organizados en un solo lugar." },
  { name: "MantTIX", area: "Operación", text: "Mantenimientos y solicitudes al día." },
  { name: "Orderly", area: "Operación", text: "Pedidos de principio a fin." },
  { name: "DiaryGym", area: "Operación", text: "El día a día del gimnasio, simple." },
];

// --- Cómo funciona el diagnóstico (lo único que se promete) ---
export const STEPS = [
  {
    n: "01",
    title: "Escríbame PROCESO",
    text: "Por mensaje directo a @visualbi.co. Si prefiere, por WhatsApp.",
  },
  {
    n: "02",
    title: "Cuénteme qué le quita tiempo",
    text: "Le hago unas preguntas cortas para entender su proceso y preparar la llamada.",
  },
  {
    n: "03",
    title: "Diagnóstico gratis de 30 minutos",
    text: "Le digo con claridad si su proceso se puede automatizar o no. Sin compromiso.",
  },
] as const;

// --- Preguntas frecuentes ---
export const FAQ = [
  {
    q: "¿El diagnóstico tiene algún costo?",
    a: "No. Son 30 minutos gratis para saber si su proceso se puede automatizar o no. Si se puede, usted decide si quiere seguir.",
  },
  {
    q: "¿Tengo que cambiar mi sistema contable?",
    a: "No. Trabajo con lo que ya usa: Siigo, Alegra, World Office, Excel o incluso papel. La idea es aliviar el proceso, no cambiarle todo.",
  },
  {
    q: "¿Trabaja con cualquier tipo de empresa?",
    a: "Con pymes de cualquier sector que tengan procesos financieros, contables o administrativos repetitivos. Si un proceso se puede digitalizar, se puede aliviar.",
  },
  {
    q: "¿Qué pasa después del diagnóstico?",
    a: "Si su proceso se puede automatizar, le propongo el siguiente paso: un Consultorio de Procesos con el mapa del proceso y una propuesta, que se le abona si contrata.",
  },
] as const;

// --- Trayectoria (la hoja de vida, resumida) ---
export const TIMELINE = [
  {
    period: "Hoy",
    title: "Fundador de Visual BI S.A.S.",
    text: "Apps y automatizaciones a la medida para pymes colombianas.",
  },
  {
    period: "2014 – hoy",
    title: "Director de Contabilidad",
    text: "Lidera la implementación de software de negocio y contable, y automatiza cálculos clave como la capacidad de endeudamiento.",
  },
  {
    period: "2018 – 2022",
    title: "Desarrollador de software",
    text: "Formación en Platzi y Platzi Master: React, Next.js, bases de datos y despliegue de aplicaciones.",
  },
  {
    period: "2020 – hoy",
    title: "Especialista en Power BI",
    text: "Formación continua en inteligencia de negocios con Acadevor, 4GO Academy y DataEDU.",
  },
  {
    period: "2008 – 2015",
    title: "Docente universitario",
    text: "Docente investigador en impuestos y Excel para los negocios.",
  },
] as const;

export const CREDENTIALS = [
  { title: "Contador Público", place: "Universidad de Cartagena" },
  { title: "Especialista en Gerencia de Impuestos", place: "Universidad Externado de Colombia" },
  { title: "Analista Programador de Computadores", place: "Celdecap" },
] as const;

export const STACK = [
  "Power BI",
  "SQL Server",
  "Next.js",
  "React",
  "FastAPI",
  "Supabase",
  "n8n",
  "Excel VBA",
  "WhatsApp API",
  "Siigo",
  "Alegra",
  "World Office",
] as const;

export const STATS = [
  { value: "+35", label: "años entre números y código" },
  { value: "13", label: "apps propias" },
  { value: "30 min", label: "de diagnóstico gratis" },
] as const;
