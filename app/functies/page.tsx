import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AgendaPreview,
  LivePreview,
  CorveePreview,
  VervoerPreview,
  BeoordelingPreview,
  OpstellingPreview,
  StatistiekenPreview,
} from "@/components/AppPreview";

export const metadata: Metadata = {
  title: "Functies — My TeamHub",
  description:
    "Presentie, agenda, beoordeling, opstelling, corvee, vervoer en statistieken: alles wat My TeamHub voor een jeugdopleiding regelt.",
};

const FUNCTIES_MET_BEELD = [
  {
    naam: "Presentie & agenda",
    beschrijving:
      "Eén gekoppelde agenda voor trainingen, wedstrijden, analyses en gesprekken. Spelers melden zich na overleg met de trainer zelf af in de app, zodat het meteen gelogd staat, en te laat komen leggen trainers vast met letterlijk één druk op de knop. Gesprekken verschijnen ook automatisch in de agenda van de speler zelf.",
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

export default function FunctiesPagina() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-forest text-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95] mb-16 max-w-2xl text-balance">
              Wat het precies doet
            </h1>

            <div className="space-y-20">
              {FUNCTIES_MET_BEELD.map((f, i) => (
                <div
                  key={f.naam}
                  className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <h2 className="font-display font-bold uppercase text-2xl sm:text-3xl mb-4">{f.naam}</h2>
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
                  <h2 className="font-display font-bold uppercase text-xl mb-2">{f.naam}</h2>
                  <p className="text-cream/70 leading-relaxed text-sm">{f.beschrijving}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
