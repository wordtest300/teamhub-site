import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DOELGROEPEN_NAMEN = ["Trainers", "Technisch coördinatoren", "Hoofden jeugdopleiding", "Spelers", "Ouders"];

export default function Home() {
  return (
    <>
      <Header />

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
              <Link
                href="/functies"
                className="rounded-full border border-cream/30 text-cream font-semibold px-7 py-3.5 hover:bg-cream/10 transition-colors"
              >
                Bekijk wat het doet
              </Link>
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

        {/* Kort overzicht: teaser naar /functies en /voor-wie */}
        <section className="bg-cream-2 border-y border-ink/10 py-20">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-extrabold uppercase text-3xl leading-[0.95] mb-6">Wat het doet</h2>
              <ul className="space-y-4 text-ink/75 leading-relaxed">
                <li>
                  <strong className="text-ink">Presentie & agenda</strong> — training, wedstrijden, analyses en
                  gesprekken in één agenda.
                </li>
                <li>
                  <strong className="text-ink">Beoordeling & opstelling</strong> — een eindcijfer dat live
                  meebeweegt, en een opstelling op basis van data in plaats van een gevoel.
                </li>
                <li>
                  <strong className="text-ink">Corvee, vervoer & statistieken</strong> — automatisch geregeld, en
                  jarenlang bewaard per speler.
                </li>
              </ul>
              <Link href="/functies" className="inline-block mt-6 font-semibold text-forest hover:underline">
                Bekijk alle functies →
              </Link>
            </div>
            <div>
              <h2 className="font-display font-extrabold uppercase text-3xl leading-[0.95] mb-6">Voor wie</h2>
              <div className="flex flex-wrap gap-2">
                {DOELGROEPEN_NAMEN.map((naam) => (
                  <span key={naam} className="rounded-full bg-cream border border-ink/10 px-4 py-2 text-sm font-medium">
                    {naam}
                  </span>
                ))}
              </div>
              <Link href="/voor-wie" className="inline-block mt-6 font-semibold text-forest hover:underline">
                Bekijk voor wie →
              </Link>
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

      <Footer />
    </>
  );
}
