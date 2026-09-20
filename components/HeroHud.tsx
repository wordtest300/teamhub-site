"use client";

import { useEffect, useState } from "react";

const LABELS = [
  { text: "OPKOMST 96", pos: "top-6 left-6 sm:top-10 sm:left-10" },
  { text: "SNELHEID 24.3 KM/U", pos: "top-6 right-6 sm:top-10 sm:right-10" },
  { text: "BEOORDELING LIVE", pos: "bottom-6 left-6 sm:bottom-10 sm:left-10" },
  { text: "DOELPUNTEN 9", pos: "bottom-6 right-6 sm:bottom-10 sm:right-10" },
  { text: "OP TIJD 100", pos: "top-6 left-6 sm:top-10 sm:left-10" },
];

function CornerBracket({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`absolute w-8 h-8 sm:w-10 sm:h-10 ${className}`}>
      <path d="M2 14 V2 H14" fill="none" stroke="#d9a441" strokeWidth="2.5" />
    </svg>
  );
}

export default function HeroHud() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % LABELS.length), 4000);
    return () => clearInterval(id);
  }, []);

  const label = LABELS[index];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <CornerBracket className="top-6 left-6 sm:top-10 sm:left-10" />
      <CornerBracket className="top-6 right-6 sm:top-10 sm:right-10 rotate-90" />
      <CornerBracket className="bottom-6 left-6 sm:bottom-10 sm:left-10 -rotate-90" />
      <CornerBracket className="bottom-6 right-6 sm:bottom-10 sm:right-10 rotate-180" />

      <div className="absolute left-0 right-0 h-px bg-gold/40 animate-[heroscan_5s_linear_infinite]" />

      <div
        key={index}
        className={`absolute ${label.pos} text-[11px] sm:text-xs font-mono text-gold bg-ink/60 border border-gold/50 px-2.5 py-1 rounded`}
        style={{ animation: "herohud-fadein 0.4s ease" }}
      >
        {label.text}
      </div>
    </div>
  );
}
