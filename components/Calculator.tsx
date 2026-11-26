"use client";

import { useMemo, useState } from "react";
import { CtaButton } from "./CtaButton";

// Semanas laborales de referencia al año (4 semanas × 12 meses, igual que el reel 3)
const WEEKS_PER_YEAR = 48;
const HOURS_PER_DAY = 8;

// Formato colombiano: separador de miles con punto
const cop = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });

// Convierte lo que escribe el usuario en un número válido dentro de un rango
function clamp(value: string, min: number, max: number): number {
  const n = Number(value.replace(/[^\d]/g, ""));
  if (!Number.isFinite(n)) return min;
  return Math.min(Math.max(n, min), max);
}

function Field({
  id, label, hint, value, onChange, min, max, step, suffix,
}: {
  id: string; label: string; hint: string; value: number;
  onChange: (n: number) => void; min: number; max: number; step: number; suffix: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-mist">{label}</label>
        <div className="flex items-baseline gap-1">
          <input
            id={`${id}-n`}
            type="number"
            inputMode="numeric"
            value={value}
            min={min}
            max={max}
            onChange={(e) => onChange(clamp(e.target.value, min, max))}
            className="w-28 rounded-lg border border-lilac/20 bg-white/5 px-2 py-1 text-right font-mono text-lg font-bold text-white outline-none focus:border-vivid"
            aria-label={label}
          />
          <span className="text-xs text-lilac/70">{suffix}</span>
        </div>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[#8e6bff]"
      />
      <p className="mt-1 text-xs text-lilac/60">{hint}</p>
    </div>
  );
}

export function Calculator() {
  const [hours, setHours] = useState(2);
  const [people, setPeople] = useState(1);
  const [rate, setRate] = useState(25000);

  // Cálculo de referencia: horas al año, días de trabajo y costo en pesos
  const result = useMemo(() => {
    const yearHours = hours * people * WEEKS_PER_YEAR;
    return {
      yearHours,
      days: yearHours / HOURS_PER_DAY,
      cost: yearHours * rate,
    };
  }, [hours, people, rate]);

  return (
    <div className="glass grid gap-8 rounded-3xl p-4 sm:p-10 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-8">
        <Field id="horas" label="Horas por semana en la tarea" hint="Ejemplo: armar un informe, cuadrar caja, digitar pedidos."
          value={hours} onChange={setHours} min={1} max={40} step={1} suffix="h" />
        <Field id="personas" label="Personas que la hacen" hint="Cuente a todos los que repiten la misma tarea."
          value={people} onChange={setPeople} min={1} max={20} step={1} suffix="pers." />
        <Field id="costo" label="Costo de una hora de trabajo" hint="Valor de referencia; ponga el de su empresa."
          value={rate} onChange={setRate} min={5000} max={300000} step={1000} suffix="COP" />
      </div>

      <div className="flex flex-col justify-between rounded-2xl bg-brand p-6 sm:p-8" aria-live="polite">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-lilac">Al año, hecho a mano</p>
          <p className="mt-3 font-mono text-5xl font-bold tracking-tight sm:text-6xl">
            {num.format(result.yearHours)}<span className="ml-3 font-sans text-2xl text-lilac">horas</span>
          </p>
          <p className="mt-2 text-mist">
            Son unos <strong className="text-white">{num.format(result.days)} días</strong> de trabajo de una persona.
          </p>
          <div className="mt-6 border-t border-white/15 pt-6">
            <p className="text-sm text-lilac">Lo que le cuesta</p>
            <p className="mt-1 font-mono text-3xl font-bold text-amber sm:text-4xl">{cop.format(result.cost)}</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="mb-4 text-sm text-mist">¿Quiere saber si ese tiempo se puede recuperar?</p>
          <CtaButton channel="instagram" location="calculadora" className="w-full" />
          <p className="mt-3 text-xs text-lilac/60">Cálculo de referencia con {WEEKS_PER_YEAR} semanas laborales al año.</p>
        </div>
      </div>
    </div>
  );
}
