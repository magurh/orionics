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
          <p className="mt-1 text-base text-muted">{body}</p>
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
              <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl">
                 Specialist Research & Analytics
              </h1>

              <p className="mt-5 max-w-2xl text-lg text-muted md:text-xl">
                Orionics Ltd provides the mathematical oversight and technical depth required to uphold the stability and security of your critical systems.
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
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="mt-16">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Three ways we help"
            subtitle="Straightforward scopes. Clear handover."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <MiniCard icon="spark" title="Research" body="Drawing on extensive mathematical expertise, we specialize in providing rigorous, in-depth studies and complex problem-solving." />
            <MiniCard icon="chart" title="Analytics & Forecasting" body="Integrating advanced statistics and machine learning techniques into our pipelines, we turn raw data into actionable foresight and optimized decision-making." />
            <MiniCard icon="code" title="Development" body="Delivering rigorous, production-quality algorithms and software architectures designed to solve challenges in the most demanding domains." />
          </div>
        </Container>
      </section>


      {/* Our Clients */}
      <section id="clients" className="mt-16">
        <Container>
          <SectionHeading
            eyebrow="Our Clients"
            title="Working with us"
            subtitle="A reliable, fast, and transparent process from inception to delivery."
          />

          {/* Combined Box */}
          <div className="mt-6 glass rounded-3xl p-6 md:p-10">
            {/* Top Row: Info Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-panel2/45">
                  <Icon name="badge" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Pricing</div>
                  <div className="mt-1 text-sm md:text-base text-muted">Competitive daily or hourly rates tailored to project complexity and scope.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-panel2/45">
                  <Icon name="shield" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Quality Control</div>
                  <div className="mt-1 text-sm md:text-base text-muted">Comprehensive validation reporting and documentation for seamless handovers.</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-panel2/45">
                  <Icon name="bolt" className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Speed</div>
                  <div className="mt-1 text-sm md:text-base text-muted">Fast, agile iteration without sacrificing mathematical correctness and precision.</div>
                </div>
              </div>
            </div>

            {/* Visual Separator */}
            <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Bottom Row: Centered Graph */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-5xl">
                <AnimatedLine title="Case study: Algorithmic modeling of market volatility." />
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
            subtitle="Founded by an Oxford DPhil in Mathematics, we are built on a commitment to mathematical precision and deep technical insight."
          />

          {/* Identity Block - Now alone and more prominent */}
          <div className="glass rounded-3xl p-6 md:p-12 mb-8">
            <div className="max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 leading-tight">
                Research-grade mathematics meets <br className="hidden md:block" /> pragmatic engineering at Orionics.
              </h3>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-3">
                  <h4 className="text-primary font-semibold text-lg">Pragmatic Delivery</h4>
                  <p className="text-base text-muted leading-relaxed">
                    Applying deep technical expertise to mitigate risk and optimize decision quality through reliable, production-ready solutions.
                  </p>
                </div>

                <div className="space-y-3 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10">
                  <h4 className="text-primary font-semibold text-lg">Advanced Research</h4>
                  <p className="text-base text-muted leading-relaxed">
                    Conducting state-of-the-art studies across specialized sectors in mathematics, cryptography, and machine learning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Second Div - Re-imagined as a "Service Standards" Row */}
          <div className="grid gap-6 md:grid-cols-3">
            {(
              [
                { icon: "shield", text: "Direct senior oversight, end-to-end." },
                { icon: "chart", text: "Clear metrics and decision-support outputs." },
                { icon: "code", text: "Clean implementations with documentation." },
              ] as { icon: Parameters<typeof Icon>[0]["name"]; text: string }[]
            ).map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-panel2/45 text-ink">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm md:text-base font-medium text-muted">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Unified Call to Action */}
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary px-10 py-4 text-lg">
              Start a conversation
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
}
