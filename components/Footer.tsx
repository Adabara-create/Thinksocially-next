import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer">

      {/* =======================================================
          CLOSING CTA
          ======================================================= */}

      <section
        id="footer-cta"
        className="ts-closing-section"
        aria-labelledby="footer-cta-title"
      >
        <div className="ts-container">

          <div className="ts-closing-layout">

            {/* =================================================
                LEFT — CTA CONTENT
                ================================================= */}

            <div className="ts-closing-copy">

              <div className="ts-eyebrow">
                <span className="ts-eyebrow-line" />
                <span>ThinkSocially</span>
              </div>

              <h2
                id="footer-cta-title"
                className="ts-heading-xl"
              >
                Let&apos;s put your infrastructure on{" "}
                <span>autopilot.</span>
              </h2>

              <p>
                Tell us where things are breaking down —
                monitoring gaps, aging cloud spend, an
                audit you&apos;re not ready for — and we&apos;ll
                show you what a managed environment looks like.
              </p>

              <div className="ts-closing-actions">

                <Link
                  href="/contact"
                  className="ts-button ts-button-primary"
                >
                  Talk to an engineer

                  <i
                    data-lucide="arrow-right"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/managed-services"
                  className="ts-button ts-button-secondary"
                >
                  See what we manage
                </Link>

              </div>

            </div>


            {/* =================================================
                RIGHT — TECHNOLOGY VISUAL
                ================================================= */}

            <div
              className="ts-closing-visual"
              aria-hidden="true"
            >

              <div className="ts-closing-visual-frame">

                <div className="ts-closing-visual-glow" />

                <div className="ts-closing-visual-inner">

                  <svg
                    viewBox="0 0 620 340"
                    role="presentation"
                  >

                    {/* =================================================
                        CONNECTION LINES
                        ================================================= */}

                    <g
                      stroke="rgba(96,165,250,0.28)"
                      strokeWidth="1"
                      fill="none"
                    >

                      <line
                        x1="310"
                        y1="170"
                        x2="100"
                        y2="75"
                      />

                      <line
                        x1="310"
                        y1="170"
                        x2="520"
                        y2="75"
                      />

                      <line
                        x1="310"
                        y1="170"
                        x2="100"
                        y2="265"
                      />

                      <line
                        x1="310"
                        y1="170"
                        x2="520"
                        y2="265"
                      />

                      <line
                        x1="310"
                        y1="170"
                        x2="310"
                        y2="55"
                      />

                    </g>


                    {/* =================================================
                        SECONDARY CONNECTION LINES
                        ================================================= */}

                    <g
                      stroke="rgba(148,163,184,0.08)"
                      strokeWidth="1"
                      fill="none"
                    >

                      <line
                        x1="100"
                        y1="75"
                        x2="520"
                        y2="75"
                      />

                      <line
                        x1="100"
                        y1="265"
                        x2="520"
                        y2="265"
                      />

                      <line
                        x1="100"
                        y1="75"
                        x2="100"
                        y2="265"
                      />

                      <line
                        x1="520"
                        y1="75"
                        x2="520"
                        y2="265"
                      />

                    </g>


                    {/* =================================================
                        ANIMATED DATA PULSES
                        ================================================= */}

                    <circle
                      r="3"
                      fill="#60a5fa"
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M310,170 L520,75"
                      />
                    </circle>

                    <circle
                      r="2.5"
                      fill="#93c5fd"
                      opacity="0.7"
                    >
                      <animateMotion
                        dur="4s"
                        begin="1s"
                        repeatCount="indefinite"
                        path="M310,170 L100,265"
                      />
                    </circle>


                    {/* =================================================
                        NODES
                        ================================================= */}

                    <g fontFamily="inherit">

                      {/* Cloud */}

                      <circle
                        cx="100"
                        cy="75"
                        r="35"
                        fill="rgba(59,130,246,0.055)"
                        stroke="rgba(148,163,184,0.22)"
                      />

                      <circle
                        cx="100"
                        cy="75"
                        r="28"
                        fill="none"
                        stroke="rgba(96,165,250,0.08)"
                      />

                      <text
                        x="100"
                        y="79"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#cbd5e1"
                      >
                        Cloud
                      </text>


                      {/* Security */}

                      <circle
                        cx="520"
                        cy="75"
                        r="35"
                        fill="rgba(59,130,246,0.055)"
                        stroke="rgba(148,163,184,0.22)"
                      />

                      <circle
                        cx="520"
                        cy="75"
                        r="28"
                        fill="none"
                        stroke="rgba(96,165,250,0.08)"
                      />

                      <text
                        x="520"
                        y="79"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#cbd5e1"
                      >
                        Security
                      </text>


                      {/* Support */}

                      <circle
                        cx="100"
                        cy="265"
                        r="35"
                        fill="rgba(59,130,246,0.055)"
                        stroke="rgba(148,163,184,0.22)"
                      />

                      <circle
                        cx="100"
                        cy="265"
                        r="28"
                        fill="none"
                        stroke="rgba(96,165,250,0.08)"
                      />

                      <text
                        x="100"
                        y="269"
                        textAnchor="middle"
                        fontSize="11"
                        fill="#cbd5e1"
                      >
                        Support
                      </text>


                      {/* Consulting */}

                      <circle
                        cx="520"
                        cy="265"
                        r="35"
                        fill="rgba(59,130,246,0.055)"
                        stroke="rgba(148,163,184,0.22)"
                      />

                      <circle
                        cx="520"
                        cy="265"
                        r="35"
                        fill="none"
                        stroke="rgba(96,165,250,0.05)"
                      />

                      <text
                        x="520"
                        y="269"
                        textAnchor="middle"
                        fontSize="10.5"
                        fill="#cbd5e1"
                      >
                        Consulting
                      </text>


                      {/* Backup */}

                      <circle
                        cx="310"
                        cy="55"
                        r="27"
                        fill="rgba(59,130,246,0.055)"
                        stroke="rgba(148,163,184,0.22)"
                      />

                      <text
                        x="310"
                        y="59"
                        textAnchor="middle"
                        fontSize="10"
                        fill="#cbd5e1"
                      >
                        Backup
                      </text>


                      {/* =================================================
                          CENTER HUB
                          ================================================= */}

                      <circle
                        cx="310"
                        cy="170"
                        r="48"
                        fill="rgba(59,130,246,0.08)"
                        stroke="rgba(59,130,246,0.75)"
                        strokeWidth="1.5"
                      />

                      <circle
                        cx="310"
                        cy="170"
                        r="39"
                        fill="none"
                        stroke="rgba(96,165,250,0.15)"
                      />

                      <circle
                        cx="310"
                        cy="170"
                        r="5"
                        fill="#60a5fa"
                      />

                      <text
                        x="310"
                        y="175"
                        textAnchor="middle"
                        fontSize="12"
                        fontWeight="600"
                        fill="#ffffff"
                      >
                        Your stack
                      </text>

                    </g>

                  </svg>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =======================================================
          MAIN FOOTER
          ======================================================= */}

      <div className="ts-footer-main">

        <div className="ts-container">

          <div className="ts-footer-grid">

            {/* =================================================
                BRAND
                ================================================= */}

            <div className="ts-footer-brand">

              <Link
                href="/"
                className="ts-footer-logo"
                aria-label="ThinkSocially home"
              >
                THINKSOCIALLY
              </Link>

              <p>
                A technology consulting firm providing
                managed services, cloud computing,
                professional services, and compliance-based
                cybersecurity solutions.
              </p>


              {/* CONTACT */}

              <div className="ts-footer-contact">

                <a
                  href="mailto:contact@thinksocially.com"
                >
                  <i
                    data-lucide="mail"
                    aria-hidden="true"
                  />

                  <span>
                    contact@thinksocially.com
                  </span>
                </a>


                <a
                  href="tel:+12024654627"
                >
                  <i
                    data-lucide="phone"
                    aria-hidden="true"
                  />

                  <span>
                    202.465.4627
                  </span>
                </a>


                <div>

                  <i
                    data-lucide="map-pin"
                    aria-hidden="true"
                  />

                  <span>
                    3343 14th Street NW
                    <br />
                    Washington, DC 20010
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                SERVICES
                ================================================= */}

            <div className="ts-footer-column">

              <h3>
                Services
              </h3>

              <ul role="list">

                <li>
                  <Link href="/managed-services">
                    Managed Services
                  </Link>
                </li>

                <li>
                  <Link href="/cloud-computing">
                    Cloud Computing
                  </Link>
                </li>

                <li>
                  <Link href="/professional-services">
                    Professional Services
                  </Link>
                </li>

                <li>
                  <Link href="/cybersecurity">
                    Cybersecurity
                  </Link>
                </li>

              </ul>

            </div>


            {/* =================================================
                COMPANY
                ================================================= */}

            <div className="ts-footer-column">

              <h3>
                Company
              </h3>

              <ul role="list">

                <li>
                  <Link href="/about">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/support">
                    Support
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </li>

              </ul>

            </div>


            {/* =================================================
                SUPPORT
                ================================================= */}

            <div className="ts-footer-column">

              <h3>
                Support
              </h3>

              <ul role="list">

                <li>
                  <Link href="/support">
                    Help Desk
                  </Link>
                </li>

                <li>
                  <Link href="/managed-services#monitoring">
                    Monitoring
                  </Link>
                </li>

                <li>
                  <Link href="/managed-services#backup-recovery">
                    Backup &amp; Recovery
                  </Link>
                </li>

              </ul>

            </div>


            {/* =================================================
                CONNECT
                ================================================= */}

            <div className="ts-footer-column">

              <h3>
                Connect
              </h3>

              <ul role="list">

                <li>

                  <Link
                    href="/contact"
                    className="ts-footer-arrow-link"
                  >
                    Contact ThinkSocially

                    <i
                      data-lucide="arrow-up-right"
                      aria-hidden="true"
                    />

                  </Link>

                </li>

                <li>

                  <Link
                    href="/support"
                    className="ts-footer-arrow-link"
                  >
                    Get Support

                    <i
                      data-lucide="arrow-up-right"
                      aria-hidden="true"
                    />

                  </Link>

                </li>

              </ul>

            </div>

          </div>


          {/* =================================================
              BOTTOM BAR
              ================================================= */}

          <div className="ts-footer-bottom">

            <p>
              © {currentYear} ThinkSocially.
              {" "}All rights reserved.
            </p>


            <div className="ts-footer-bottom-right">

              <span>
                Technology, thoughtfully engineered.
              </span>


              <div className="ts-footer-theme">

                <span>
                  Appearance
                </span>

                <button
                  type="button"
                  className="ts-theme-toggle"
                  data-theme-toggle
                  aria-label="Switch to light mode"
                  aria-pressed="false"
                  title="Switch to light mode"
                >

                  <i
                    data-lucide="sun"
                    data-theme-icon
                    aria-hidden="true"
                  />

                  <span
                    className="sr-only"
                    data-theme-label
                  >
                    Dark
                  </span>

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}