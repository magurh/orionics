import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold">Orionics Ltd</div>
          </div>
          <div>
            <div className="text-base font-semibold">Company details</div>
            <ul className="mt-2 space-y-2 text-base text-muted">
              <li>Incorporated: <span className="text-ink">20 December 2024</span></li>
              <li>
                Companies House:{" "}
                <a
                  className="text-ink underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
                  href="https://find-and-update.company-information.service.gov.uk/company/16147689"
                  target="_blank"
                  rel="noreferrer"
                >
                  16147689
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-base font-semibold">Contact</div>
            <p className="mt-2 text-base text-muted">
              We typically respond within 1–2 business days.
            </p>
          </div>
        </div>
        <div className="pb-10 text-xs text-muted">
          © {new Date().getFullYear()} Orionics Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
