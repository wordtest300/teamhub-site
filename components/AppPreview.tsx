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
  const dagen = [
    { d: "MA", nr: 14, stip: "analyse" as const },
    { d: "DI", nr: 15, stip: "training" as const },
    { d: "WO", nr: 16 },
    { d: "DO", nr: 17, stip: "training" as const },
    { d: "VR", nr: 18, stip: "gesprek" as const, vandaag: true },
    { d: "ZA", nr: 19, stip: "wedstrijd" as const },
    { d: "ZO", nr: 20 },
  ];
  const stipKleur: Record<string, string> = {
    training: "bg-forest/50",
    wedstrijd: "bg-gold-dark",
    analyse: "bg-sage",
    gesprek: "bg-ink/40",
  };
  const sessies = [
    { dag: "Ma 14 sep", info: "19:00 · Analyse · Analysekamer", notitie: "Terugblik vorige wedstrijd", badge: null },
    { dag: "Di 15 sep", info: "18:30 · Training · Veld 2", notitie: "Passing onder druk", badge: null },
    { dag: "Do 17 sep", info: "18:30 · Training · Veld 1", notitie: "Afwerken 1v1", badge: null },
    { dag: "Vr 18 sep", info: "16:00 · 1-op-1 gesprek · Bestuurskamer", notitie: null, badge: null },
    { dag: "Za 19 sep", info: "10:15 · Wedstrijd · Sportpark Zuid (uit)", notitie: null, badge: "Wedstrijd" },
  ];
  return (
    <Frame title="Agenda">
      <p className="text-xs text-ink/50 mb-3">14 – 20 sep 2026</p>
      <div className="grid grid-cols-7 gap-1 mb-5">
        {dagen.map((dag) => (
          <div
            key={dag.d}
            className={`text-center rounded-lg py-1.5 ${dag.vandaag ? "bg-forest text-cream" : ""}`}
          >
            <p className={`text-[9px] font-semibold ${dag.vandaag ? "text-cream/70" : "text-ink/40"}`}>{dag.d}</p>
            <p className="text-xs font-display font-bold leading-tight mt-0.5">{dag.nr}</p>
            <span
              className={`mx-auto mt-1 block w-1.5 h-1.5 rounded-full ${
                !dag.stip ? "bg-transparent" : dag.vandaag ? "bg-cream/60" : stipKleur[dag.stip]
              }`}
            />
          </div>
        ))}
      </div>
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

function PaspoortTegel({
  waarde,
  label,
  nadruk,
  klein,
}: {
  waarde: string;
  label: string;
  nadruk?: boolean;
  klein?: boolean;
}) {
  return (
    <div
      className={`rounded-xl px-2 py-2.5 text-center ${
        nadruk ? "bg-gold/25 border-2 border-gold-dark" : "bg-cream-2"
      }`}
    >
      <p className={`font-display font-extrabold leading-none ${klein ? "text-lg" : "text-xl"}`}>{waarde}</p>
      <p className="text-[9px] text-ink/50 mt-1 uppercase tracking-wide leading-tight">{label}</p>
    </div>
  );
}

export function BeoordelingPreview() {
  return (
    <Frame title="Beoordeling">
      <div className="mb-4 flex items-center gap-2.5">
        <Rugnummer nr={7} />
        <div>
          <p className="font-display font-extrabold uppercase text-lg leading-tight">Noa Willemsen</p>
          <p className="text-xs text-ink/50 mt-0.5">Aanvallende middenvelder</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-2">
        <PaspoortTegel waarde="94%" label="Opkomst" />
        <PaspoortTegel waarde="97%" label="Op tijd" />
        <PaspoortTegel waarde="88%" label="Beoordeling" nadruk />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <PaspoortTegel waarde="12" label="Wedstrijden" klein />
        <PaspoortTegel waarde="6" label="Goals" klein />
        <PaspoortTegel waarde="4" label="Assists" klein />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase text-forest mb-1.5">Sterkste punten</p>
          <p className="text-xs text-ink/70 leading-relaxed">
            Inzet <span className="text-ink/40">(4.6 · team 4.0)</span>
          </p>
          <p className="text-xs text-ink/70 leading-relaxed">
            Gedrag <span className="text-ink/40">(4.4 · team 4.1)</span>
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase text-gold-dark mb-1.5">Werkpunten</p>
          <p className="text-xs text-ink/70 leading-relaxed">
            Spel <span className="text-ink/40">(3.8 · team 4.0)</span>
          </p>
          <p className="text-xs text-ink/70 leading-relaxed">
            Opkomst <span className="text-ink/40">(94% · team 96%)</span>
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function OpstellingPreview() {
  const linies = [
    [
      { nr: 11, naam: "Tijn P.", cijfer: "8.8" },
      { nr: 9, naam: "Cas B.", cijfer: "9.0" },
      { nr: 7, naam: "Owen R.", cijfer: "8.6" },
    ],
    [
      { nr: 8, naam: "Luuk D.", cijfer: "9.3" },
      { nr: 6, naam: "Mees H.", cijfer: "8.9" },
      { nr: 10, naam: "Stijn K.", cijfer: "8.7" },
    ],
    [
      { nr: 5, naam: "Job W.", cijfer: "9.4" },
      { nr: 4, naam: "Teun P.", cijfer: "8.8" },
      { nr: 3, naam: "Finn R.", cijfer: "8.9" },
      { nr: 2, naam: "Niels F.", cijfer: "9.1" },
    ],
    [{ nr: 1, naam: "Sven M.", cijfer: "8.9" }],
  ];
  return (
    <Frame title="Opstelling">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold">4-3-3</p>
        <p className="text-[11px] text-ink/50">Op basis van opkomst en vorm</p>
      </div>
      <div className="rounded-2xl bg-sage/30 p-2.5 space-y-2">
        {linies.map((linie, i) => (
          <div key={i} className="flex justify-center gap-2">
            {linie.map((s) => (
              <div key={s.nr} className="flex-1 max-w-[100px] rounded-lg bg-cream border border-forest/25 px-1.5 py-1.5 text-center">
                <p className="text-[10px] font-bold text-ink/35 leading-none">{s.nr}</p>
                <p className="text-[11px] font-semibold leading-tight truncate mt-0.5">{s.naam}</p>
                <p className="text-xs font-display font-extrabold text-forest leading-none mt-0.5">{s.cijfer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="text-[11px] font-bold uppercase text-ink/40 mt-4 mb-2">Bank</p>
      <div className="rounded-xl bg-cream-2 px-3 py-2.5">
        <p className="text-sm flex items-baseline gap-1.5">
          <span className="font-bold text-ink/40">14</span>
          <span className="font-medium">Wout S.</span>
          <span className="font-display font-bold text-forest ml-auto">8.5</span>
        </p>
        <p className="text-[11px] text-ink/50 mt-1.5 leading-relaxed">
          Sven M. had bij gelijke opkomst een hogere beoordeling.
        </p>
      </div>
    </Frame>
  );
}

export function StatistiekenPreview() {
  const seizoenen = [
    { seizoen: "2025/2026", team: "JO17-1", goals: 9, assists: 5, wedstrijden: 14 },
    { seizoen: "2024/2025", team: "JO15-1", goals: 6, assists: 3, wedstrijden: 18 },
    { seizoen: "2023/2024", team: "JO14-2", goals: 4, assists: 2, wedstrijden: 16 },
  ];
  return (
    <Frame title="Statistieken">
      <div className="flex items-center gap-2.5 mb-4">
        <Rugnummer nr={7} />
        <p className="text-sm font-semibold">Noa Willemsen</p>
      </div>
      <div className="space-y-2">
        {seizoenen.map((s) => (
          <div key={s.seizoen} className="rounded-xl bg-cream-2 px-4 py-2.5">
            <p className="text-sm font-semibold">
              {s.seizoen} <span className="font-normal text-ink/50">· {s.team}</span>
            </p>
            <p className="text-xs text-ink/60 mt-0.5">
              {s.goals} goals · {s.assists} assists · {s.wedstrijden} wedstrijden
            </p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-ink/40 mt-3 leading-relaxed">
        Blijft bewaard bij een overstap naar een ander team binnen de club.
      </p>
    </Frame>
  );
}

export function OuderToegangPreview() {
  return (
    <Frame title="Ouder">
      <div className="rounded-xl bg-gold/20 border border-gold-dark/40 px-3.5 py-2.5 flex items-start gap-2.5 mb-4">
        <span className="text-base leading-none mt-0.5">🔔</span>
        <p className="text-xs text-ink/80 leading-relaxed">
          <span className="font-semibold">Nieuwe afspraak</span> · vr 25 sep, 18:30 Training
        </p>
      </div>

      <div className="flex items-center gap-2.5 mb-4">
        <Rugnummer nr={3} />
        <div>
          <p className="text-sm font-semibold">Bram Hendriks</p>
          <p className="text-xs text-ink/50 mt-0.5">Jouw kind</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-cream-2 px-2 py-2.5 text-center">
          <p className="font-display font-bold text-sm leading-tight">Di 18:30</p>
          <p className="text-[10px] text-ink/50 mt-1">Training</p>
        </div>
        <div className="rounded-xl bg-cream-2 px-2 py-2.5 text-center">
          <p className="font-display font-bold text-sm leading-tight">Week 42</p>
          <p className="text-[10px] text-ink/50 mt-1">Corvee</p>
        </div>
        <div className="rounded-xl bg-cream-2 px-2 py-2.5 text-center">
          <p className="font-display font-bold text-xl leading-none">8,4</p>
          <p className="text-[10px] text-ink/50 mt-1">Cijfer</p>
        </div>
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
