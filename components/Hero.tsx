import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="ts-hero"
      aria-labelledby="hero-title"
    >
      <div
        className="ts-hero-glow ts-hero-glow-left"
        aria-hidden="true"
      />

      <div
        className="ts-hero-glow ts-hero-glow-right"
        aria-hidden="true"
      />

      <div className="ts-container ts-hero-inner">
        {/* HERO COPY */}

        <div
          className="ts-hero-copy"
          data-reveal
        >
          <div className="ts-eyebrow">
            <span
              className="ts-eyebrow-line"
              aria-hidden="true"
            />

            <span>
              ThinkSocially
            </span>
          </div>

          <h1
            id="hero-title"
            className="ts-display"
          >
            Technology,
            <span className="ts-display-muted">
              thoughtfully engineered.
            </span>
          </h1>

          <p className="ts-hero-description">
            Total technology solutions for organizations
            that need dependable IT, cloud infrastructure,
            professional services, and compliance-based
            cybersecurity.
          </p>

          <div className="ts-hero-actions">
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

            <a
              href="#capabilities"
              className="ts-button ts-button-secondary"
            >
              Explore capabilities

              <i
                data-lucide="arrow-down"
                aria-hidden="true"
              />
            </a>
          </div>

          <div
            className="ts-hero-meta"
            aria-label="ThinkSocially overview"
          >
            <div>
              <strong>15+</strong>
              <span>years of experience</span>
            </div>

            <div>
              <strong>500+</strong>
              <span>clients served</span>
            </div>

            <div>
              <strong>DC</strong>
              <span>metropolitan focus</span>
            </div>
          </div>
        </div>

        {/* HERO SYSTEM VISUAL */}

        <div
          className="ts-hero-visual"
          data-reveal
          data-reveal-delay="120"
        >
          <div className="ts-network">
            <div
              className="ts-network-grid"
              aria-hidden="true"
            />

            {/* CONNECTIONS */}

            <svg
              className="ts-network-lines"
              viewBox="0 0 640 540"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line
                x1="320"
                y1="270"
                x2="115"
                y2="105"
              />

              <line
                x1="320"
                y1="270"
                x2="525"
                y2="105"
              />

              <line
                x1="320"
                y1="270"
                x2="110"
                y2="430"
              />

              <line
                x1="320"
                y1="270"
                x2="530"
                y2="430"
              />

              <circle
                cx="320"
                cy="270"
                r="105"
              />
            </svg>

            {/* CLOUD */}

            <div
              className="ts-network-node ts-network-node-cloud"
              data-node="cloud"
            >
              <span className="ts-network-node-icon">
                <i
                  data-lucide="cloud"
                  aria-hidden="true"
                />
              </span>

              <span>
                <strong>Cloud</strong>
                <small>Infrastructure</small>
              </span>
            </div>

            {/* SECURITY */}

            <div
              className="ts-network-node ts-network-node-security"
              data-node="security"
            >
              <span className="ts-network-node-icon">
                <i
                  data-lucide="shield-check"
                  aria-hidden="true"
                />
              </span>

              <span>
                <strong>Security</strong>
                <small>Compliance</small>
              </span>
            </div>

            {/* OPERATIONS */}

            <div
              className="ts-network-node ts-network-node-operations"
              data-node="operations"
            >
              <span className="ts-network-node-icon">
                <i
                  data-lucide="activity"
                  aria-hidden="true"
                />
              </span>

              <span>
                <strong>Operations</strong>
                <small>Managed IT</small>
              </span>
            </div>

            {/* APPLICATIONS */}

            <div
              className="ts-network-node ts-network-node-applications"
              data-node="applications"
            >
              <span className="ts-network-node-icon">
                <i
                  data-lucide="layers-3"
                  aria-hidden="true"
                />
              </span>

              <span>
                <strong>Applications</strong>
                <small>Development</small>
              </span>
            </div>

            {/* CORE */}

            <div className="ts-network-core">
              <div
                className="ts-network-core-orbit"
                aria-hidden="true"
              />

              <div className="ts-network-core-card">
                <div className="ts-network-core-top">
                  <span className="ts-network-core-mark">
                    TS
                  </span>

                  <span className="ts-network-status">
                    <span />
                    Connected
                  </span>
                </div>

                <p className="ts-network-core-label">
                  TECHNOLOGY SYSTEM
                </p>

                <h2>
                  ThinkSocially
                </h2>

                <p>
                  One technology partner across
                  your environment.
                </p>
              </div>
            </div>

            {/* PULSES */}

            <span
              className="ts-network-pulse pulse-one"
              aria-hidden="true"
            />

            <span
              className="ts-network-pulse pulse-two"
              aria-hidden="true"
            />

            <span
              className="ts-network-pulse pulse-three"
              aria-hidden="true"
            />

            <span
              className="ts-network-pulse pulse-four"
              aria-hidden="true"
            />

            <div className="ts-network-footer-label">
              <span />
              Systems connected
            </div>
          </div>
        </div>
      </div>

      <div className="ts-hero-bottom">
        <a
          href="#introduction"
          className="ts-scroll-indicator"
          aria-label="Scroll to introduction"
        >
          <span>
            Scroll to explore
          </span>

          <i
            data-lucide="arrow-down"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}