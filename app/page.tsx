import ContactForm from "@/components/ContactForm";
import {
  AgendaPreview,
  LivePreview,
  CorveePreview,
  VervoerPreview,
  BeoordelingPreview,
  OpstellingPreview,
  StatistiekenPreview,
} from "@/components/AppPreview";

const FUNCTIES_MET_BEELD = [
  {
    naam: "Presentie & agenda",
    beschrijving:
      "Eén gekoppelde agenda voor trainingen, wedstrijden, analyses en POP-gesprekken. Spelers melden zich na overleg met de trainer zelf af in de app, zodat het meteen gelogd staat, en te laat komen leggen trainers vast met letterlijk één druk op de knop. POP-gesprekken verschijnen ook automatisch in de agenda van de speler zelf.",
    Beeld: AgendaPreview,
  },
  {
    naam: "Beoordeling",
    beschrijving:
      "Elke speler krijgt een eindcijfer opgebouwd uit opkomst, op tijd komen en prestatie (spel, inzet, gedrag), en dat cijfer verandert live, direct na elke training of wedstrijd. Geen jaarlijkse beoordeling achteraf, maar een actueel beeld dat altijd klopt.",
    Beeld: BeoordelingPreview,
  },
  {
    naam: "Opstelling",
    beschrijving:
      "De basisopstelling komt niet uit een gevoel, maar uit een wegingsmodel: wie er deze week écht heeft getraind weegt het zwaarst, de vorm over het seizoen erna. De trainer beslist nog steeds, maar begint niet meer bij een leeg vel.",
    Beeld: OpstellingPreview,
  },
  {
    naam: "Live wedstrijdverloop",
    beschrijving:
      "Minuut voor minuut doelpunten, kaarten en wissels vastleggen tijdens de wedstrijd. Spelers en ouders volgen de stand en de tijdlijn live mee, en krijgen een melding bij elk doelpunt.",
    Beeld: LivePreview,
  },
  {
    naam: "Corvee",
    beschrijving:
      "Een geautomatiseerd corveerooster in een vaste, logische volgorde. Mist iemand een beurt, dan schuift het systeem die automatisch door, zonder dat een vrijwilliger dat handmatig hoeft bij te houden.",
    Beeld: CorveePreview,
  },
  {
    naam: "Vervoer naar uitwedstrijden",
    beschrijving:
      "Ouders bieden een auto met een aantal plekken aan, andere ouders boeken er direct een plek in. Automatisch geregeld, zonder rondbellen of een aparte WhatsApp-poll, en nooit meer plekken geboekt dan er in de auto passen.",
    Beeld: VervoerPreview,
  },
  {
    naam: "Statistieken",
    beschrijving:
      "Opkomst, op tijd komen, wedstrijdcijfers en persoonlijke statistieken zoals goals, assists en tegendoelpunten, per seizoen bijgehouden. Dat blijft bewaard zolang de speler bij de club speelt, ook bij een overstap naar een ander team.",
    Beeld: StatistiekenPreview,
  },
];

const FUNCTIES_TEKST = [
  {
    naam: "Ouder-toegang",
    beschrijving:
      "Ouders krijgen een eigen koppellink die een jaar geldig is, zonder account of wachtwoord. Ze zien het rooster, de cijfers en precies de corveeweken van hun eigen kind, nooit die van het hele team of de zelfbeoordelingen van hun kind.",
  },
  {
    naam: "Push-meldingen",
    beschrijving:
      "Automatisch bericht bij een nieuwe of gewijzigde agenda-afspraak, een corveebeurt die eraan komt, een nieuwe beoordeling, de gepubliceerde opstelling en elk doelpunt tijdens een live wedstrijd.",
  },
];

const DOELGROEPEN = [
  {
    naam: "Trainers",
    beschrijving: "Eén overzicht per team in plaats van een appgroep, een presentielijst en een los briefje.",
  },
  {
    naam: "Technisch coördinatoren",
    beschrijving: "Zicht op alle teams tegelijk, zonder elke trainer apart te hoeven bellen voor een update.",
  },
  {
    naam: "Hoofden jeugdopleiding",
    beschrijving: "Ontwikkeling van elke speler over meerdere seizoenen, onderbouwd bij doorstroming, selectie of een vraag van een scout.",
  },
  {
    naam: "Spelers",
    beschrijving: "Eigen agenda en eigen cijfers, zodat ze precies zien waar ze aan werken.",
  },
  {
    naam: "Ouders",
    beschrijving: "Rooster en cijfers van hun eigen kind, via een link zonder account. Niets van de rest van het team.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-cream/95 backdrop-blur border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <span className="font-display font-extrabold text-2xl tracking-tight uppercase">
            My TeamHub
          </span>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
            <a href="#functies" className="hover:text-forest">Functies</a>
            <a href="#voor-wie" className="hover:text-forest">Voor wie</a>
            <a href="#contact" className="hover:text-forest">Contact</a>
          </nav>
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://app.myteamhub.nl"
              className="text-sm font-semibold hover:text-forest"
            >
              Inloggen
            </a>
            <a
              href="#contact"
              className="rounded-full bg-forest text-cream text-sm font-semibold px-5 py-2.5 hover:bg-forest-2 transition-colors"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-forest text-cream min-h-[calc(100vh-4rem)] flex items-center">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center flex flex-col items-center">
            <h1 className="font-display font-extrabold uppercase whitespace-nowrap text-[clamp(17px,5.3vw,52px)] leading-[0.95]">
              ÉÉN systeem voor de hele jeugdopleiding
            </h1>
            <p className="mt-8 text-lg sm:text-xl leading-relaxed max-w-2xl text-cream/85">
              My TeamHub brengt zowel administratieve zaken als technische
              zaken samen. Zo ontstaat een dossier per speler dat jaren
              meegaat, en werken trainers, coördinatoren en het hoofd
              jeugdopleiding op dezelfde informatie.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-gold text-ink font-semibold px-7 py-3.5 hover:bg-gold-dark hover:text-cream transition-colors"
              >
                Neem contact op
              </a>
              <a
                href="#functies"
                className="rounded-full border border-cream/30 text-cream font-semibold px-7 py-3.5 hover:bg-cream/10 transition-colors"
              >
                Bekijk wat het doet
              </a>
            </div>
          </div>
        </section>

        {/* Waarom */}
        <section className="bg-cream min-h-[calc(100vh-4rem)] flex items-center">
          <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95] text-balance">
              Wat een groeiende opleiding meestal tegenkomt
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                Aanwezigheid in een eigen notitie, corvee in een groepsapp,
                statistieken in excelsheets, de opstelling in het hoofd van de
                trainer. Het werkt, tot die trainer er na een paar jaar mee
                stopt en alles wat hij over de spelers wist met hem meeloopt.
                Of tot een ouder op zaterdagochtend vraagt waarom zijn zoon op
                de bank zit, en er geen onderbouwing is buiten een gevoel.
              </p>
              <p>
                Voor één team is dat nog te overzien. Voor een opleiding met
                tien of twintig jeugdteams, elk met een vrijwillige trainer en
                een eigen manier van administreren, wordt het al snel de
                reden dat niemand meer het hele plaatje ziet, laat staan de
                club daarbuiten. Zeker met gedeelde velden op de drukke
                trainingsavonden en een technisch coördinator die alles bij
                elkaar moet houden.
              </p>
            </div>
          </div>
        </section>

        {/* Voor wie */}
        <section id="voor-wie" className="bg-cream-2 border-y border-ink/10 min-h-[calc(100vh-4rem)] flex items-center">
          <div className="mx-auto max-w-6xl px-6 py-16 w-full">
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95] mb-14 max-w-2xl text-balance">
              Voor iedereen om het team heen
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOELGROEPEN.map((d) => (
                <div key={d.naam} className="bg-cream rounded-2xl border border-ink/10 p-6">
                  <h3 className="font-display font-bold uppercase text-xl mb-2">{d.naam}</h3>
                  <p className="text-ink/75 leading-relaxed">{d.beschrijving}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Functies */}
        <section id="functies" className="bg-forest text-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95] mb-16 max-w-2xl text-balance">
              Wat het precies doet
            </h2>

            <div className="space-y-20">
              {FUNCTIES_MET_BEELD.map((f, i) => (
                <div
                  key={f.naam}
                  className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <h3 className="font-display font-bold uppercase text-2xl sm:text-3xl mb-4">{f.naam}</h3>
                    <p className="text-cream/75 leading-relaxed text-lg max-w-md">{f.beschrijving}</p>
                  </div>
                  <div className="flex justify-center">
                    <f.Beeld />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-20 pt-16 border-t border-cream/15">
              {FUNCTIES_TEKST.map((f) => (
                <div key={f.naam}>
                  <h3 className="font-display font-bold uppercase text-xl mb-2">{f.naam}</h3>
                  <p className="text-cream/70 leading-relaxed text-sm">{f.beschrijving}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lange termijn */}
        <section className="bg-cream min-h-[calc(100vh-4rem)] flex items-center">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl leading-[0.95] mb-6 text-balance">
              Wat een opleiding onderscheidt die verder kijkt dan dit seizoen
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                Een speler die tussen zijn achtste en dertiende instroomt,
                laat een aantal seizoenen later een geschiedenis zien: opkomst,
                gedrag, wedstrijdcijfers, ontwikkeling per positie. Die data
                bouwt zich nu al op, seizoen na seizoen, ook als de speler van
                team of trainer wisselt.
              </p>
              <p>
                Zeker in een regio waar scouts en RTC&apos;s naar spelers
                kijken die zich over een langere periode bewijzen, en niet naar
                één goede wedstrijd, is dat geen overbodige luxe. Een dossier
                dat jaren teruggaat geeft een opleiding, en de speler zelf,
                iets om op terug te vallen op het moment dat het ertoe doet.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-forest text-cream min-h-[calc(100vh-4rem)] flex items-center">
          <div className="mx-auto max-w-4xl px-6 py-16 text-center w-full">
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95] text-balance">
              Praat met ons
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80 max-w-xl mx-auto">
              Benieuwd hoe dit past bij de opleiding van uw club? Stuur een
              bericht, dan denken we mee.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-ink text-cream/60">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-display font-bold uppercase tracking-wide">My TeamHub</span>
          <span>info@mijnteamhub.nl</span>
        </div>
      </footer>
    </>
  );
}
