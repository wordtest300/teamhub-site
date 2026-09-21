import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Voor wie — My TeamHub",
  description:
    "Trainers, technisch coördinatoren, hoofden jeugdopleiding, spelers en ouders: iedereen om het team heen werkt op dezelfde informatie.",
};

const DOELGROEPEN = [
  {
    naam: "Trainers",
    beschrijving:
      "Eén overzicht van alle administratie van het team, met een actueel cijfer per speler dat alles scherp houdt en het handwerk tot een minimum beperkt. Ook de cijfergeschiedenis van spelers over de afgelopen jaren is direct inzichtelijk.",
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

export default function VoorWiePagina() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-cream-2 py-24 min-h-[calc(100vh-4rem)]">
          <div className="mx-auto max-w-6xl px-6">
            <h1 className="font-display font-extrabold uppercase text-4xl sm:text-5xl leading-[0.95] mb-14 max-w-2xl text-balance">
              Voor iedereen om het team heen
            </h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOELGROEPEN.map((d) => (
                <div key={d.naam} className="bg-cream rounded-2xl border border-ink/10 p-6">
                  <h2 className="font-display font-bold uppercase text-xl mb-2">{d.naam}</h2>
                  <p className="text-ink/75 leading-relaxed">{d.beschrijving}</p>
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
