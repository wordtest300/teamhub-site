import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-cream/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0 font-display font-extrabold text-xl sm:text-2xl tracking-tight uppercase whitespace-nowrap">
          <Logo className="w-7 h-7 sm:w-8 sm:h-8 shrink-0" />
          My TeamHub
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/functies" className="hover:text-forest">Functies</Link>
          <Link href="/voor-wie" className="hover:text-forest">Voor wie</Link>
          <Link href="/#contact" className="hover:text-forest">Contact</Link>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <a
            href="https://app.myteamhub.nl"
            className="text-sm font-semibold hover:text-forest whitespace-nowrap"
          >
            Inloggen
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-forest text-cream text-sm font-semibold px-4 sm:px-5 py-2.5 hover:bg-forest-2 transition-colors whitespace-nowrap"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </header>
  );
}
