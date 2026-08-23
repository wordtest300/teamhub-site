"use client";

import { useState } from "react";

// Web3Forms stuurt het bericht door naar het e-mailadres achter de access
// key, zonder dat adres ooit in de paginabron/HTML te tonen -- in
// tegenstelling tot een mailto:-link (die het adres letterlijk in de
// broncode zet). De access key zelf is niet geheim (Web3Forms is er juist op
// gebouwd dat 'm zichtbaar mag zijn in client-side code), dus NEXT_PUBLIC_ is
// hier prima.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "versturen" | "gelukt" | "mislukt";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function verstuur(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: onzichtbaar voor mensen, bots vullen dit vaak toch in.
    const botcheck = (form.elements.namedItem("botcheck") as HTMLInputElement | null)?.value;
    if (botcheck) return;

    if (!ACCESS_KEY) {
      setStatus("mislukt");
      return;
    }

    setStatus("versturen");
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "Nieuw contact via mijnteamhub.nl");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("gelukt");
        form.reset();
      } else {
        setStatus("mislukt");
      }
    } catch {
      setStatus("mislukt");
    }
  }

  if (status === "gelukt") {
    return (
      <p className="mt-10 text-lg text-cream">
        Bedankt! We nemen zo snel mogelijk contact met u op.
      </p>
    );
  }

  return (
    <form onSubmit={verstuur} className="mt-10 mx-auto max-w-md text-left space-y-4">
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div>
        <label htmlFor="naam" className="block text-sm text-cream/70 mb-1">
          Naam
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          required
          className="w-full rounded-lg bg-cream/10 border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-cream/70 mb-1">
          E-mailadres
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg bg-cream/10 border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="bericht" className="block text-sm text-cream/70 mb-1">
          Bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={4}
          required
          className="w-full rounded-lg bg-cream/10 border border-cream/20 px-4 py-3 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "versturen"}
        className="w-full rounded-full bg-gold text-ink font-semibold px-8 py-4 hover:bg-gold-dark hover:text-cream transition-colors disabled:opacity-60"
      >
        {status === "versturen" ? "Versturen..." : "Versturen"}
      </button>
      {status === "mislukt" && (
        <p className="text-sm text-cream/70">
          Versturen is niet gelukt. Probeer het nog eens, of mail rechtstreeks naar info@mijnteamhub.nl.
        </p>
      )}
    </form>
  );
}
