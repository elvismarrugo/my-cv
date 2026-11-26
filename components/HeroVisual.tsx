// Ilustración de la portada: "antes" (Excel a mano) y "ahora" (tablero claro).
// Todo es SVG/CSS para que cargue rápido y no muestre datos reales.
export function HeroVisual() {
  const bars = [38, 55, 47, 70, 62, 84, 92];
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Resplandor de fondo */}
      <div className="animate-glow absolute -inset-10 rounded-full bg-vivid/30 blur-3xl" aria-hidden="true" />

      {/* Tarjeta "antes" */}
      <div className="glass absolute -left-2 top-0 z-0 w-[62%] rotate-[-6deg] rounded-2xl p-4 opacity-70 sm:-left-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-lilac/80">Antes</span>
          <span className="font-mono text-[11px] text-lilac/70">8:00 → 16:00</span>
        </div>
        <div className="grid grid-cols-5 gap-1" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`h-3.5 rounded-[3px] ${i === 17 ? "animate-blink bg-red-400/80" : "bg-white/10"}`}
            />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-mist/80">ventas.xlsx · cartera.xlsx · export.csv</p>
      </div>

      {/* Tarjeta "ahora" (tablero) */}
      <div className="animate-float relative z-10 ml-auto mt-32 w-[82%] rounded-3xl border border-lilac/20 bg-ink/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-lilac">Ahora</span>
          <span className="rounded-full bg-vivid/20 px-2.5 py-1 font-mono text-[11px] text-lilac">en minutos</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Ventas", "+18 %"],
            ["Cartera", "-12 %"],
            ["Caja", "OK"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white/5 p-2.5">
              <p className="text-[10px] text-lilac/70">{k}</p>
              <p className="font-mono text-sm font-bold text-white">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-end gap-4">
          <div className="flex h-28 flex-1 items-end gap-1.5" aria-hidden="true">
            {bars.map((h, i) => (
              <div
                key={i}
                className="animate-grow flex-1 rounded-t-md bg-gradient-to-t from-royal to-lilac"
                style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
              />
            ))}
          </div>
          {/* Dona de tres colores, como el logo de Visual BI */}
          <svg viewBox="0 0 42 42" className="h-24 w-24 shrink-0 -rotate-90" aria-hidden="true">
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#c9b8ff" strokeWidth="6" strokeDasharray="45 55" />
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#8e6bff" strokeWidth="6" strokeDasharray="33 67" strokeDashoffset="-45" />
            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#f5b83d" strokeWidth="6" strokeDasharray="22 78" strokeDashoffset="-78" />
          </svg>
        </div>
      </div>

      {/* Insignia flotante */}
      <div className="glass absolute -bottom-6 left-2 z-20 flex items-center gap-3 rounded-2xl px-4 py-3 sm:left-0">
        <span className="font-mono text-2xl font-bold text-vivid">{"{$}"}</span>
        <div>
          <p className="text-sm font-semibold leading-tight">De días a minutos</p>
          <p className="text-xs text-lilac/80">Menos errores de digitación</p>
        </div>
      </div>
    </div>
  );
}
