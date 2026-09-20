import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AgendaPreview, LivePreview, BeoordelingPreview } from "@/components/AppPreview";
import DemoReel from "@/components/DemoReel";

const UITGELICHT = [
  {
    naam: "Presentie & agenda",
    beschrijving:
      "Eén gekoppelde agenda voor trainingen, wedstrijden, analyses en POP-gesprekken. Te laat komen leggen trainers vast met één druk op de knop.",
    Beeld: AgendaPreview,
  },
  {
    naam: "Live wedstrijdverloop",
    beschrijving:
      "Minuut voor minuut doelpunten, kaarten en wissels vastleggen. Spelers en ouders volgen de stand en de tijdlijn live mee.",
    Beeld: LivePreview,
  },
  {
    naam: "Beoordeling",
    beschrijving:
      "Elke speler krijgt een eindcijfer dat live meebeweegt, met sterkste punten en werkpunten t.o.v. het teamgemiddelde.",
    Beeld: BeoordelingPreview,
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

const OVERIGE_FUNCTIES = ["Opstelling", "Corvee", "Vervoer naar uitwedstrijden", "Statistieken", "Ouder-toegang", "Push-meldingen"];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-forest text-cream min-h-[calc(100vh-4rem)] flex items-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-forest/75" />
          <div className="relative mx-auto max-w-5xl px-6 py-16 text-center flex flex-col items-center">
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
              <Link
                href="/functies"
                className="rounded-full border border-cream/30 text-cream font-semibold px-7 py-3.5 hover:bg-cream/10 transition-colors"
              >
                Bekijk wat het doet
              </Link>
            </div>
          </div>
        </section>

        {/* Demo */}
        <section className="bg-ink py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl leading-[0.95] text-cream mb-2">
              Zo ziet het eruit
            </h2>
            <p className="text-cream/50 mb-10">Een paar schermen uit de app, automatisch doorlopend</p>
            <DemoReel />
          </div>
        </section>

        {/* Waarom */}
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
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

        {/* Uitgelichte functies met beeld, zoals Mingle's featureblokken */}
        <section className="bg-forest text-cream py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95] mb-16 max-w-2xl text-balance">
              Wat het doet
            </h2>
            <div className="space-y-20">
              {UITGELICHT.map((f, i) => (
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
            <div className="text-center mt-16">
              <Link
                href="/functies"
                className="inline-block rounded-full border border-cream/30 text-cream font-semibold px-7 py-3.5 hover:bg-cream/10 transition-colors"
              >
                Bekijk alle functies →
              </Link>
            </div>
          </div>
        </section>

        {/* Voor wie, zoals Mingle's "Which one are you?" segmentatie */}
        <section className="bg-cream-2 border-y border-ink/10 py-20">
          <div className="mx-auto max-w-6xl px-6">
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

        {/* Kleine featuretegels, zoals Mingle's "Features our users like" */}
        <section className="bg-cream py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap gap-3">
              {OVERIGE_FUNCTIES.map((naam) => (
                <Link
                  key={naam}
                  href="/functies"
                  className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium hover:border-forest hover:text-forest transition-colors"
                >
                  {naam}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lange termijn */}
        <section className="bg-cream min-h-[calc(80vh-4rem)] flex items-center">
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

      <Footer />
    </>
  );
}
