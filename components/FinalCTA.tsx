import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="contact-cta"
      className="ts-section ts-section-final-cta"
      aria-labelledby="final-cta-title"
    >
      <div className="ts-container">
        <div
          className="ts-final-cta"
          data-reveal
        >
          <div
            className="ts-final-cta-grid"
            aria-hidden="true"
          />

          <div className="ts-final-cta-content">
            <p className="ts-section-number">
              10 / LET&apos;S TALK
            </p>

            <h2 id="final-cta-title">
              Technology that
              works for your
              business.
            </h2>

            <p>
              From everyday IT support to cloud
              infrastructure, professional services,
              and cybersecurity, ThinkSocially helps
              organizations build and maintain technology
              they can depend on.
            </p>

            <div className="ts-final-cta-actions">
              <Link
                href="/contact"
                className="ts-button ts-button-primary"
              >
                Talk to ThinkSocially

                <i
                  data-lucide="arrow-up-right"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/about"
                className="ts-inline-link"
              >
                About ThinkSocially

                <i
                  data-lucide="arrow-right"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div
            className="ts-final-cta-mark"
            aria-hidden="true"
          >
            <span>TS</span>

            <div />
          </div>
        </div>
      </div>
    </section>
  );
}