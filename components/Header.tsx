import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-cream/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-extrabold text-2xl tracking-tight uppercase">
          My TeamHub
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
          <Link href="/functies" className="hover:text-forest">Functies</Link>
          <Link href="/voor-wie" className="hover:text-forest">Voor wie</Link>
          <Link href="/#contact" className="hover:text-forest">Contact</Link>
        </nav>
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="https://app.myteamhub.nl"
            className="text-sm font-semibold hover:text-forest"
          >
            Inloggen
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-forest text-cream text-sm font-semibold px-5 py-2.5 hover:bg-forest-2 transition-colors"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </header>
  );
}
