import Link from "next/link";
import { Container } from "./Container";

export function Nav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-black/10 backdrop-blur supports-[backdrop-filter]:bg-black/5 border-b border-white/5">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-panel2/40">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-accent2/25" />
                <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight">Orionics Ltd</div>
                <div className="text-sm text-muted">Research • Analytics • Development</div>
              </div>
            </Link>

            <nav className="flex items-center gap-3">
              <Link href="/#services" className="hidden sm:inline text-base text-muted hover:text-ink">Services</Link>
              <Link href="/#about" className="hidden sm:inline text-base text-muted hover:text-ink">About</Link>
              <Link href="/contact" className="btn-primary">Get in touch</Link>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}
