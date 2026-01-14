import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedLine } from "@/components/AnimatedLine";

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "spark" | "chart" | "code" | "bolt" | "badge" | "shield";
  className?: string;
}) {
  const common = "fill-none stroke-current";
  switch (name) {
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 2 3 14h8l-1 8 11-12h-8l0-8Z" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 19V5" />
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 19h16" />
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 15l4-4 3 3 5-6" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 18 22 12 16 6" />
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 6 2 12l6 6" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2v7l4 2-8 4 4 2v5" />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-5Z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path className={common} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2 4 6v6c0 5 3 9 8 10 5-1 8-5 8-10V6l-8-4Z" />
        </svg>
      );
  }
}

function Pill({ icon, text }: { icon: Parameters<typeof Icon>[0]["name"]; text: string }) {
  return (
    <div className="chip">
      <span className="text-ink/90">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span>{text}</span>
    </div>
  );
}

function MiniCard({
  icon,
  title,
  body,
}: {
  icon: Parameters<typeof Icon>[0]["name"];
  title: string;
  body: string;
}) {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-start gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-panel2/45 text-ink">
          <Icon name={icon} />
        </div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <p className="mt-1 text-sm text-muted">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-14 md:pt-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-2">
                <Pill icon="badge" text="UK limited company" />
                <Pill icon="shield" text="Quality-first delivery" />
                <Pill icon="bolt" text="Senior-led" />
              </div>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl">
                Research, analytics & AI engineering
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">
                Orionics Ltd supports technically demanding projects with precise thinking, clear deliverables, and robust implementations.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn-primary">Get in touch</Link>
                <Link href="#services" className="btn-ghost">Services</Link>
                <Link href="#about" className="btn-ghost">About</Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="glass rounded-3xl p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-panel2/45">
                    <Icon name="spark" />
                  </div>
                  <div className="text-lg font-semibold">What clients say</div>
                </div>
                <p className="mt-4 text-base text-muted md:text-lg">
                  “After working together for years, our expectations are always high — and Orionics consistently exceeds them.”
                </p>
                <div className="mt-4 text-xs text-muted">— Client feedback (anonymised)</div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name="chart" className="h-4 w-4" />
                    <span>Engagement</span>
                  </div>
                  <div className="mt-2 text-base text-muted">Daily or hourly consulting</div>
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Icon name="code" className="h-4 w-4" />
                    <span>Deliverables</span>
                  </div>
                  <div className="mt-2 text-base text-muted">Reports • Models • Systems</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="mt-16">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Three ways we help"
            subtitle="Straightforward scopes. Clear handover."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <MiniCard icon="spark" title="Research" body="Feasibility and technical due diligence for high-stakes decisions." />
            <MiniCard icon="chart" title="Analytics" body="Statistical insight and ML-driven modelling on complex datasets." />
            <MiniCard icon="code" title="Development" body="Production-quality algorithms and software for demanding domains." />
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-2xl">
              <AnimatedLine />
            </div>
          </div>
        </Container>
      </section>


      {/* Our Clients */}
      <section id="clients" className="mt-16">
        <Container>
          <SectionHeading
            eyebrow="Our Clients"
            title="Working with us"
            subtitle="Reliable, fast, and transparent process."
          />

          <div className="mt-6 glass rounded-3xl p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-panel2/45">
                  <Icon name="badge" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-semibold">Pricing</div>
                  <div className="mt-1 text-sm text-muted">Fixed daily or hourly rate, based on scope.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-panel2/45">
                  <Icon name="shield" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-semibold">Quality control</div>
                  <div className="mt-1 text-sm text-muted">Validation notes, limitations, and clean handover.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-panel2/45">
                  <Icon name="bolt" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-semibold">Speed</div>
                  <div className="mt-1 text-sm text-muted">Fast iteration without sacrificing correctness.</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="mt-16 pb-16">
        <Container>
          <SectionHeading
            eyebrow="About"
            title="Specialist, hands-on consultancy"
            subtitle="Led by a founder with a DPhil in Mathematics (University of Oxford)."
          />

          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="glass rounded-3xl p-6 md:p-8">
                <p className="text-lg text-muted md:text-xl">
                  Orionics Ltd focuses on research-grade thinking and pragmatic delivery: de-risk ideas, strengthen decisions, and build reliable systems.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glass rounded-3xl p-6 md:p-8">
                <div className="text-lg font-semibold">What to expect</div>
                <div className="mt-4 space-y-3 text-sm text-muted">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-panel2/45 text-ink">
                      <Icon name="shield" className="h-5 w-5" />
                    </span>
                    <span>Direct senior oversight, end-to-end.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-panel2/45 text-ink">
                      <Icon name="chart" className="h-5 w-5" />
                    </span>
                    <span>Clear metrics and decision-support outputs.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-panel2/45 text-ink">
                      <Icon name="code" className="h-5 w-5" />
                    </span>
                    <span>Clean implementations with documentation.</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/contact" className="btn-primary w-full">Start a conversation</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
