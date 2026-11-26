import { Calculator } from "@/components/Calculator";
import { CtaButton } from "@/components/CtaButton";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon, type IconName } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { ElvixMark, VisualBiMark } from "@/components/Brand";
import {
  APPS, BRAND, CONTACT, CREDENTIALS, FAQ, NAV, PAINS, SERVICES, STACK, STATS, STEPS, TIMELINE,
} from "@/lib/content";

// Encabezado de cada sección: etiqueta, título y línea acento
function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-vivid">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      <div className={`accent-line mt-5 ${center ? "mx-auto" : ""}`} />
      {text ? <p className="mt-6 text-lg text-mist/85">{text}</p> : null}
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- Navegación ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Principal">
          <a href="#inicio" aria-label="Inicio"><ElvixMark /></a>
          <ul className="hidden items-center gap-7 text-sm text-mist/80 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href} className="transition-colors hover:text-white">{n.label}</a></li>
            ))}
          </ul>
          <a
            href={CONTACT.instagramDm}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-mist"
          >
            Diagnóstico gratis
          </a>
        </nav>
      </header>

      <main id="inicio">
        {/* ---------- Portada ---------- */}
        <section className="relative overflow-hidden bg-brand pt-28 pb-24 sm:pt-36 sm:pb-32">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          {/* Marca de agua del símbolo al 7 % */}
          <span className="pointer-events-none absolute -right-10 top-10 select-none font-mono text-[22rem] font-bold leading-none text-white opacity-[0.07]" aria-hidden="true">
            {"{$}"}
          </span>
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-lilac/25 bg-white/5 px-4 py-1.5 text-sm text-mist">
                <span className="h-2 w-2 animate-pulse rounded-full bg-amber" />
                Apps y automatizaciones para pymes colombianas
              </p>
              <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-gradient">{BRAND.title}</span>
              </h1>
              <div className="accent-line mt-6" />
              <p className="mt-6 max-w-xl text-lg text-mist sm:text-xl">
                Lo que su equipo hace a mano en Excel, en papel o copiando del sistema contable, se puede hacer solo.
                <strong className="text-white"> {BRAND.support}</strong>
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CtaButton channel="instagram" location="portada" />
                <CtaButton channel="whatsapp" location="portada" />
              </div>
              <p className="mt-4 text-sm text-lilac/80">
                Diagnóstico gratis de 30 minutos: le digo si su proceso se puede automatizar o no.
              </p>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-mono text-2xl font-bold text-white sm:text-3xl">{s.value}</dd>
                    <dd className="mt-1 text-xs text-lilac/80 sm:text-sm">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <HeroVisual />
          </div>
        </section>

        {/* ---------- Franja de herramientas ---------- */}
        <div className="overflow-hidden border-y border-white/5 bg-ink/60 py-5" aria-label="Herramientas con las que trabajo">
          <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-mono text-sm text-lilac/70">
            {[...STACK, ...STACK].map((s, i) => (
              <span key={i} className="flex items-center gap-12">{s}<span className="text-vivid">{"{$}"}</span></span>
            ))}
          </div>
        </div>

        {/* ---------- Dolores ---------- */}
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <SectionTitle
            eyebrow="¿Le suena?"
            title="Su equipo pierde días en tareas que se repiten"
            text="No importa el sector. Si su empresa tiene procesos manuales, seguramente reconoce alguno de estos."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {PAINS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} as="article" className="glass group rounded-3xl p-7 transition hover:-translate-y-1 hover:border-vivid/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-400/10 text-red-300">
                  <Icon name={p.icon as IconName} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-mist/80">{p.text}</p>
                <p className="mt-6 font-mono text-sm font-bold text-lilac">{p.stat}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">
              Si se puede digitalizar, <span className="text-vivid">se puede aliviar.</span>
            </p>
          </Reveal>
        </section>

        {/* ---------- Qué hago ---------- */}
        <section id="que-hago" className="relative scroll-mt-20 overflow-hidden bg-ink/50 py-24 sm:py-32">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              eyebrow="Qué hago"
              title="Programador que entiende de finanzas"
              text="Convierto procesos financieros, contables y administrativos en herramientas que trabajan por usted."
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 100} as="article" className="glass relative overflow-hidden rounded-3xl p-8">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-vivid/15 blur-2xl" aria-hidden="true" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-vivid/20 text-lilac">
                    <Icon name={s.icon as IconName} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-mist/80">{s.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full border border-lilac/20 px-3 py-1 font-mono text-xs text-lilac">{t}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Calculadora ---------- */}
        <section id="calculadora" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
          <SectionTitle
            eyebrow="Haga la cuenta"
            title="¿Cuánto le cuesta hacerlo a mano?"
            text="Mueva los valores y vea cuántas horas y cuántos pesos se le van al año en una sola tarea repetitiva."
          />
          <Reveal><Calculator /></Reveal>
        </section>

        {/* ---------- Apps ---------- */}
        <section id="apps" className="relative scroll-mt-20 overflow-hidden bg-brand py-24 sm:py-32">
          <span className="pointer-events-none absolute -left-16 bottom-0 select-none font-mono text-[18rem] font-bold leading-none text-white opacity-[0.07]" aria-hidden="true">{"{$}"}</span>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <SectionTitle
              eyebrow="Apps de Visual BI"
              title="Herramientas que ya alivian procesos"
              text="Cada app nació de un dolor real de una empresa. Algunas ya tienen tutorial en YouTube."
            />
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
              {APPS.map((a, i) => (
                <Reveal key={a.name} delay={(i % 3) * 80} as="article" className="glass flex flex-col rounded-2xl p-4 transition hover:border-lilac/50 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-lilac">{a.area}</span>
                    {a.tutorial ? (
                      <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-amber hover:underline">
                        <Icon name="play" className="h-3 w-3" /> Tutorial
                      </a>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-base font-bold sm:mt-4 sm:text-lg">{a.name}</h3>
                  <p className="mt-1 text-sm text-mist/80">{a.text}</p>
                </Reveal>
              ))}
              {/* Tarjeta de cierre de la vitrina: invita a contar su proceso */}
              <Reveal as="article" className="flex flex-col justify-between gap-4 rounded-2xl border border-dashed border-lilac/40 bg-white/5 p-5 col-span-2">
                <div>
                  <p className="font-mono text-sm font-bold text-amber">¿La próxima app?</p>
                  <p className="mt-2 text-lg font-bold">Puede salir del proceso que hoy le quita más tiempo a su equipo.</p>
                </div>
                <CtaButton channel="instagram" location="apps" className="self-start" />
              </Reveal>
            </div>
            <Reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold hover:bg-white/10">
                <Icon name="youtube" className="h-5 w-5" /> Ver tutoriales en YouTube
              </a>
              <a href={CONTACT.company} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-2 py-3 text-mist hover:text-white">
                <Icon name="globe" className="h-5 w-5" /> Conocer Visual BI
              </a>
            </Reveal>
          </div>
        </section>

        {/* ---------- Cómo funciona ---------- */}
        <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32">
          <SectionTitle
            eyebrow="Cómo funciona"
            title="Tres pasos y sale de dudas"
            text="Sin compromiso y sin letra pequeña: el diagnóstico solo le dice si su proceso se puede automatizar o no."
            center
          />
          <ol className="relative grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 150} className="glass relative rounded-3xl p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand font-mono text-lg font-bold text-white shadow-lg shadow-vivid/30">{s.n}</span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-mist/80">{s.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <CtaButton channel="instagram" location="como-funciona" />
            <CtaButton channel="whatsapp" location="como-funciona" />
          </Reveal>
        </section>

        {/* ---------- Trayectoria (hoja de vida resumida) ---------- */}
        <section id="trayectoria" className="scroll-mt-20 bg-ink/50 py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <SectionTitle
                eyebrow="Trayectoria"
                title="Más de 35 años entre números y código"
                text="Soy Elvis Marrugo. Empecé programando computadores, me hice contador y hoy uno las dos cosas para que las pymes trabajen menos a mano."
              />
              <Reveal className="space-y-3">
                {CREDENTIALS.map((c) => (
                  <div key={c.title} className="glass flex items-start gap-3 rounded-2xl p-4">
                    <span className="mt-0.5 text-vivid"><Icon name="check" className="h-5 w-5" /></span>
                    <div>
                      <p className="font-semibold">{c.title}</p>
                      <p className="text-sm text-lilac/80">{c.place}</p>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
            <ol className="relative space-y-8 border-l border-vivid/30 pl-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.title} as="li" delay={i * 100} className="relative">
                  <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-night bg-vivid" aria-hidden="true" />
                  <p className="font-mono text-sm font-bold text-vivid">{t.period}</p>
                  <h3 className="mt-1 text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-mist/80">{t.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Preguntas frecuentes ---------- */}
        <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
          <SectionTitle eyebrow="Preguntas" title="Lo que suelen preguntarme" center />
          <div className="space-y-3">
            {FAQ.map((f) => (
              <Reveal key={f.q}>
                <details className="glass group rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                    {f.q}
                    <span className="font-mono text-vivid transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-mist/85">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Cierre ---------- */}
        <section className="px-4 pb-24 sm:px-6 sm:pb-32">
          <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand px-6 py-16 text-center sm:px-16 sm:py-24">
            <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
            <span className="pointer-events-none absolute -right-6 -top-10 select-none font-mono text-[14rem] font-bold leading-none text-white opacity-[0.07]" aria-hidden="true">{"{$}"}</span>
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl">
                Deje de hacerlo a mano.
                <span className="block text-lilac">Empiece con un diagnóstico gratis.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-mist">
                Escríbame <strong className="font-mono text-white">PROCESO</strong> por mensaje directo a {CONTACT.instagramHandle} y en 30 minutos le digo si su proceso se puede automatizar o no.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <CtaButton channel="instagram" location="cierre" />
                <CtaButton channel="whatsapp" location="cierre" />
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ---------- Pie de página ---------- */}
      <footer className="border-t border-white/5 bg-night">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div className="space-y-4">
            <ElvixMark />
            <p className="max-w-xs text-sm text-lilac/80">{BRAND.title}.</p>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lilac/70">Contacto</p>
            <ul className="space-y-3 text-sm">
              <li><a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 text-mist hover:text-white"><Icon name="mail" className="h-4 w-4" />{CONTACT.email}</a></li>
              <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-mist hover:text-white"><Icon name="whatsapp" className="h-4 w-4" />{CONTACT.whatsappDisplay}</a></li>
              <li><a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-mist hover:text-white"><Icon name="instagram" className="h-4 w-4" />{CONTACT.instagramHandle}</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lilac/70">Contenido</p>
            <p className="mb-4 text-sm text-mist/80">Reel nuevo martes, jueves y sábado.</p>
            <div className="flex gap-3">
              {([
                ["instagram", CONTACT.instagram, "Instagram"],
                ["youtube", CONTACT.youtube, "YouTube"],
                ["linkedin", CONTACT.linkedin, "LinkedIn"],
                ["globe", CONTACT.company, "visualbi.co"],
              ] as const).map(([icon, href, label]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-lilac/20 text-lilac transition hover:border-vivid hover:text-white">
                  <Icon name={icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-6 text-xs text-lilac/60 sm:flex-row sm:items-center sm:px-6">
            <p>© {new Date().getFullYear()} VISUAL BI S.A.S. · NIT 901.751.095-1 · Cartagena, Colombia</p>
            <VisualBiMark />
          </div>
        </div>
      </footer>
    </>
  );
}
