import Link from "next/link";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <section className="pt-14 pb-16">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="Tell us what you’re working on"
          subtitle="Share a few details and we’ll respond shortly."
        />

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <div className="md:col-span-5 space-y-4">
            <div className="glass rounded-3xl p-6">
              <div className="text-base font-semibold">Good to include</div>
              <ul className="mt-3 space-y-2 text-base text-muted">
                <li>• What you’re trying to achieve</li>
                <li>• Constraints (data, timeline, infra)</li>
                <li>• Desired deliverables (report, code, model)</li>
              </ul>
            </div>

            <div className="glass rounded-3xl p-6">
              <div className="text-base font-semibold">Back</div>
              <p className="mt-2 text-base text-muted">
                Prefer to browse first? Head back to the homepage.
              </p>
              <div className="mt-4">
                <Link href="/" className="btn-ghost w-full">Back to home</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
