function Frame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-cream text-ink shadow-2xl shadow-black/30 overflow-hidden border border-black/5">
      <div className="flex items-center gap-3 px-5 py-4 bg-ink">
        <span className="flex flex-col gap-[3px]">
          <span className="block w-4 h-[2px] bg-cream rounded-full" />
          <span className="block w-4 h-[2px] bg-cream rounded-full" />
          <span className="block w-4 h-[2px] bg-cream rounded-full" />
        </span>
        <span className="font-display font-extrabold uppercase text-cream text-sm tracking-wide">
          {title}
        </span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export function AgendaPreview() {
  const sessies = [
    { dag: "Di 16 sep", info: "18:30 · Training · Veld 2", notitie: "Passing onder druk", badge: null },
    { dag: "Vr 18 sep", info: "19:00 · Wedstrijd · Uit", notitie: null, badge: "Wedstrijd" },
    { dag: "Ma 21 sep", info: "20:00 · Training · Veld 1", notitie: "Afwerken 1v1", badge: null },
  ];
  return (
    <Frame title="Agenda">
      <div className="space-y-4">
        {sessies.map((s) => (
          <div key={s.dag} className="flex items-start justify-between gap-3 pb-4 border-b border-ink/10 last:border-0 last:pb-0">
            <div>
              <p className="font-display font-bold uppercase text-sm">{s.dag}</p>
              <p className="text-xs text-ink/60 mt-0.5">{s.info}</p>
              {s.notitie && <p className="text-xs italic text-ink/50 mt-1">{s.notitie}</p>}
            </div>
            {s.badge && (
              <span className="shrink-0 text-[11px] font-semibold uppercase rounded-full border border-gold-dark text-gold-dark px-2.5 py-1">
                {s.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function LivePreview() {
  const events = [
    { min: "12'", tekst: "Doelpunt — Sem de Boer" },
    { min: "38'", tekst: "Gele kaart — Boaz Terpstra" },
    { min: "57'", tekst: "Wissel — Finn Kramer ➜ Timo Visser" },
    { min: "61'", tekst: "Doelpunt — Sem de Boer" },
  ];
  return (
    <Frame title="Live">
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-gold-dark">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-pulse" />
          Live · 61&apos;
        </span>
        <span className="font-display font-extrabold text-lg">JO17-1 2 – 1 SC Berkel</span>
      </div>
      <div className="space-y-3">
        {events.map((e, i) => (
          <div key={i} className="flex items-baseline gap-3 text-sm">
            <span className="font-display font-bold text-gold-dark w-8 shrink-0">{e.min}</span>
            <span className="text-ink/75">{e.tekst}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function CorveePreview() {
  const weken = [
    { week: "Week 39 · 21–27 sep", namen: "Fenna de Groot & Noor Bakker", huidig: true },
    { week: "Week 40 · 28 sep–4 okt", namen: "Bram Hendriks & Liva Smits", huidig: false },
    { week: "Week 41 · 5–11 okt", namen: "Sara el Idrissi & Jesse Mulder", huidig: false },
  ];
  return (
    <Frame title="Corvee">
      <div className="space-y-3">
        {weken.map((w) => (
          <div
            key={w.week}
            className={`rounded-xl px-4 py-3 ${w.huidig ? "bg-forest text-cream" : "bg-cream-2"}`}
          >
            <p className={`text-[11px] font-bold uppercase ${w.huidig ? "text-gold" : "text-ink/50"}`}>
              {w.week}
            </p>
            <p className={`text-sm font-medium mt-0.5 ${w.huidig ? "text-cream" : "text-ink/80"}`}>
              {w.namen}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function BeoordelingPreview() {
  const onderdelen = [
    { label: "Opkomst", waarde: "95%" },
    { label: "Op tijd", waarde: "100%" },
    { label: "Spel", waarde: "8" },
    { label: "Inzet", waarde: "9" },
    { label: "Gedrag", waarde: "8" },
  ];
  return (
    <Frame title="Beoordeling">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-sm font-semibold">Noa Willemsen</p>
          <p className="text-xs text-ink/50 mt-0.5">Laatste update: vandaag</p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-display font-extrabold text-3xl leading-none text-forest">8,2</p>
          <p className="text-[10px] uppercase text-ink/50 mt-1">Eindcijfer</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {onderdelen.map((o) => (
          <div key={o.label} className="text-center">
            <p className="font-display font-bold text-sm">{o.waarde}</p>
            <p className="text-[10px] text-ink/50 mt-0.5 leading-tight">{o.label}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function OpstellingPreview() {
  const basis = ["Daan Visscher", "Yusuf Kaya", "Milo Jansen", "Ties Bakker"];
  const wissel = ["Owen Pieters", "Ruben Scholten"];
  return (
    <Frame title="Opstelling">
      <p className="text-xs text-ink/50 mb-4">4-3-3 · gebaseerd op vorm en opkomst</p>
      <p className="text-[11px] font-bold uppercase text-ink/50 mb-2">Basis</p>
      <div className="space-y-2 mb-4">
        {basis.map((n) => (
          <div key={n} className="rounded-lg bg-forest text-cream text-sm px-3 py-2">
            {n}
          </div>
        ))}
      </div>
      <p className="text-[11px] font-bold uppercase text-ink/50 mb-2">Wissel</p>
      <div className="space-y-2">
        {wissel.map((n) => (
          <div key={n} className="rounded-lg bg-cream-2 text-sm px-3 py-2">
            {n}
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function StatistiekenPreview() {
  const stats = [
    { label: "Goals", waarde: "9" },
    { label: "Assists", waarde: "5" },
    { label: "Tegendoelpunten", waarde: "3" },
    { label: "Wedstrijden", waarde: "14" },
    { label: "Opkomst", waarde: "95%" },
    { label: "Op tijd", waarde: "100%" },
  ];
  return (
    <Frame title="Statistieken">
      <p className="text-xs text-ink/50 mb-4">Noa Willemsen · seizoen 2025/2026</p>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-cream-2 px-3 py-3 text-center">
            <p className="font-display font-extrabold text-xl leading-none">{s.waarde}</p>
            <p className="text-[10px] text-ink/50 mt-1 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function VervoerPreview() {
  const aanbod = [
    { naam: "Karin de Wit", plekken: 3, geboekt: 2 },
    { naam: "Mo Amrani", plekken: 4, geboekt: 4 },
  ];
  return (
    <Frame title="Vervoer">
      <p className="text-xs text-ink/50 mb-4">Uitwedstrijd · za 26 sep</p>
      <div className="space-y-3">
        {aanbod.map((a) => {
          const vol = a.geboekt >= a.plekken;
          return (
            <div key={a.naam} className="flex items-center justify-between rounded-xl bg-cream-2 px-4 py-3">
              <div>
                <p className="text-sm font-semibold">{a.naam}</p>
                <p className="text-xs text-ink/50 mt-0.5">{a.plekken} plekken in de auto</p>
              </div>
              <span
                className={`text-[11px] font-bold uppercase rounded-full px-2.5 py-1 ${
                  vol ? "bg-ink/10 text-ink/50" : "bg-gold text-ink"
                }`}
              >
                {vol ? "Vol" : `${a.plekken - a.geboekt} vrij`}
              </span>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}
