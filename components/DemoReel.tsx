"use client";

import { useEffect, useState } from "react";
import { AgendaPreview, LivePreview, BeoordelingPreview, CorveePreview } from "./AppPreview";

const SCHERMEN = [
  { naam: "Agenda", Beeld: AgendaPreview },
  { naam: "Live wedstrijd", Beeld: LivePreview },
  { naam: "Beoordeling", Beeld: BeoordelingPreview },
  { naam: "Corvee", Beeld: CorveePreview },
];

export default function DemoReel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SCHERMEN.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const { naam, Beeld } = SCHERMEN[index];

  return (
    <div className="flex flex-col items-center">
      <p className="text-cream/50 text-sm font-semibold uppercase tracking-wide mb-4">{naam}</p>
      <div key={index} style={{ animation: "demoreel-fadein 0.5s ease" }}>
        <Beeld />
      </div>
      <div className="flex gap-2 mt-8">
        {SCHERMEN.map((s, i) => (
          <button
            key={s.naam}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Toon ${s.naam}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-gold" : "bg-cream/25"}`}
          />
        ))}
      </div>
    </div>
  );
}
