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

function Rugnummer({ nr, licht }: { nr: number; licht?: boolean }) {
  return (
    <span
      className={`font-display font-extrabold text-lg w-6 shrink-0 text-center ${
        licht ? "text-cream/60" : "text-ink/40"
      }`}
    >
      {nr}
    </span>
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
    { min: "12'", nr: 9, naam: "Sem de Boer", tekst: "Doelpunt" },
    { min: "38'", nr: 4, naam: "Boaz Terpstra", tekst: "Gele kaart" },
    { min: "57'", nr: 11, naam: "Finn Kramer ➜ 6 Timo Visser", tekst: "Wissel" },
    { min: "61'", nr: 9, naam: "Sem de Boer", tekst: "Doelpunt" },
  ];
  return (
    <Frame title="Live">
      <div className="flex items-center justify-between mb-5">
        <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase text-gold-dark">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-dark animate-pulse" />
          Live · 61&apos;
        </span>
        <span className="font-display font-extrabold text-lg">JO17-1 2 – 1 SC Berkel</span>
      </div>
      <div className="space-y-3.5">
        {events.map((e, i) => (
          <div key={i} className="flex items-baseline gap-3 text-sm">
            <span className="font-display font-bold text-gold-dark w-8 shrink-0">{e.min}</span>
            <span className="text-ink/50 w-5 shrink-0 text-right font-semibold">{e.nr}</span>
            <span>
              <span className="font-medium">{e.naam}</span>
              <span className="text-ink/50"> — {e.tekst}</span>
            </span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function CorveePreview() {
  const weken = [
    {
      week: "Week 39 · 21–27 sep",
      spelers: [{ nr: 7, naam: "Fenna de Groot" }, { nr: 12, naam: "Noor Bakker" }],
      huidig: true,
    },
    {
      week: "Week 40 · 28 sep–4 okt",
      spelers: [{ nr: 3, naam: "Bram Hendriks" }, { nr: 8, naam: "Liva Smits" }],
      huidig: false,
    },
    {
      week: "Week 41 · 5–11 okt",
      spelers: [{ nr: 15, naam: "Sara el Idrissi" }, { nr: 2, naam: "Jesse Mulder" }],
      huidig: false,
    },
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
            <div className="mt-1.5 space-y-1">
              {w.spelers.map((s) => (
                <div key={s.naam} className="flex items-center gap-2 text-sm">
                  <Rugnummer nr={s.nr} licht={w.huidig} />
                  <span className={`font-medium ${w.huidig ? "text-cream" : "text-ink/80"}`}>{s.naam}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function BeoordelingPreview() {
  return (
    <Frame title="Beoordeling">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <Rugnummer nr={7} />
          <div>
            <p className="text-sm font-semibold">Noa Willemsen</p>
            <p className="text-xs text-ink/50 mt-0.5">Laatste update: vandaag</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="font-display font-extrabold text-3xl leading-none text-forest">8,2</p>
          <p className="text-[10px] uppercase text-ink/50 mt-1">Eindcijfer</p>
        </div>
      </div>

      <p className="text-[11px] font-bold uppercase text-ink/40 mb-2">Aanwezigheid</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="rounded-xl bg-cream-2 px-3 py-2.5 text-center">
          <p className="font-display font-bold text-xl leading-none">95%</p>
          <p className="text-[11px] text-ink/50 mt-1">Opkomst</p>
        </div>
        <div className="rounded-xl bg-cream-2 px-3 py-2.5 text-center">
          <p className="font-display font-bold text-xl leading-none">100%</p>
          <p className="text-[11px] text-ink/50 mt-1">Op tijd</p>
        </div>
      </div>

      <p className="text-[11px] font-bold uppercase text-ink/40 mb-2">Prestatie</p>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Spel", waarde: 8 },
          { label: "Inzet", waarde: 9 },
          { label: "Gedrag", waarde: 8 },
        ].map((o) => (
          <div key={o.label} className="rounded-xl bg-cream-2 px-3 py-2.5 text-center">
            <p className="font-display font-bold text-xl leading-none">{o.waarde}</p>
            <p className="text-[11px] text-ink/50 mt-1">{o.label}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function OpstellingPreview() {
  const basis = [
    { nr: 1, naam: "Ties Bakker" },
    { nr: 4, naam: "Yusuf Kaya" },
    { nr: 7, naam: "Daan Visscher" },
    { nr: 9, naam: "Milo Jansen" },
  ];
  const wissel = [
    { nr: 11, naam: "Owen Pieters" },
    { nr: 5, naam: "Ruben Scholten" },
  ];
  return (
    <Frame title="Opstelling">
      <p className="text-xs text-ink/50 mb-4">4-3-3 · gebaseerd op vorm en opkomst</p>
      <p className="text-[11px] font-bold uppercase text-ink/40 mb-2">Basis</p>
      <div className="space-y-2 mb-4">
        {basis.map((s) => (
          <div key={s.naam} className="flex items-center gap-3 rounded-lg bg-forest text-cream text-sm px-3 py-2.5">
            <Rugnummer nr={s.nr} licht />
            <span className="font-medium">{s.naam}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] font-bold uppercase text-ink/40 mb-2">Wissel</p>
      <div className="space-y-2">
        {wissel.map((s) => (
          <div key={s.naam} className="flex items-center gap-3 rounded-lg bg-cream-2 text-sm px-3 py-2.5">
            <Rugnummer nr={s.nr} />
            <span className="font-medium text-ink/80">{s.naam}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function StatistiekenPreview() {
  return (
    <Frame title="Statistieken">
      <div className="flex items-center gap-2.5 mb-4">
        <Rugnummer nr={7} />
        <p className="text-sm font-semibold">
          Noa Willemsen <span className="font-normal text-ink/50">· seizoen 2025/2026</span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Goals", waarde: "9" },
          { label: "Assists", waarde: "5" },
          { label: "Wedstrijden", waarde: "14" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-forest text-cream px-3 py-3 text-center">
            <p className="font-display font-extrabold text-2xl leading-none">{s.waarde}</p>
            <p className="text-[11px] text-cream/70 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Tegendoelp.", waarde: "3" },
          { label: "Opkomst", waarde: "95%" },
          { label: "Op tijd", waarde: "100%" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl bg-cream-2 px-3 py-2 text-center">
            <p className="font-display font-bold text-base leading-none">{s.waarde}</p>
            <p className="text-[10px] text-ink/50 mt-1 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function VervoerPreview() {
  const aanbod = [
    { naam: "Karin de Wit", kind: "moeder van Bram (3)", plekken: 3, geboekt: 2 },
    { naam: "Mo Amrani", kind: "vader van Yusuf (4)", plekken: 4, geboekt: 4 },
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
                <p className="text-xs text-ink/50 mt-0.5">{a.kind} · {a.plekken} plekken</p>
              </div>
              <span
                className={`text-[11px] font-bold uppercase rounded-full px-2.5 py-1 shrink-0 ml-3 ${
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
