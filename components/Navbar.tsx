export default function Navbar() {
  return (
    <header id="site-header" className="ts-site-header">
      <div className="ts-nav-shell">

        {/* Brand */}
        <a
          href="/"
          className="ts-brand"
          aria-label="ThinkSocially home"
        >
          <span className="ts-brand-mark">
            TS
          </span>

          <span className="ts-brand-wordmark">
            THINKSOCIALLY
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="ts-desktop-nav"
          aria-label="Primary navigation"
        >
          <ul role="list">

            {/* =================================================
                MANAGED SERVICES
                ================================================= */}
            <li className="ts-nav-item">

              <a
                href="/managed-services"
                className="ts-nav-link"
                aria-label="Managed Services"
              >
                <span>
                  Managed Services
                </span>

                <i
                  data-lucide="chevron-down"
                  data-menu-chevron
                  aria-hidden="true"
                />
              </a>

              <div
                id="managed-services-menu"
                className="ts-mega-menu"
                role="region"
                aria-label="Managed Services menu"
                data-menu="managed-services-menu"
              />

            </li>

            {/* =================================================
                CLOUD COMPUTING
                ================================================= */}
            <li className="ts-nav-item">

              <button
                type="button"
                className="ts-nav-link"
                data-menu-trigger="cloud-computing-menu"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="cloud-computing-menu"
              >
                <span>
                  Cloud Computing
                </span>

                <i
                  data-lucide="chevron-down"
                  data-menu-chevron
                  aria-hidden="true"
                />
              </button>

              <div
                id="cloud-computing-menu"
                className="ts-mega-menu"
                role="region"
                aria-label="Cloud Computing menu"
                data-menu="cloud-computing-menu"
              />

            </li>

            {/* =================================================
                PROFESSIONAL SERVICES
                ================================================= */}
            <li className="ts-nav-item">

              <button
                type="button"
                className="ts-nav-link"
                data-menu-trigger="professional-services-menu"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="professional-services-menu"
              >
                <span>
                  Professional Services
                </span>

                <i
                  data-lucide="chevron-down"
                  data-menu-chevron
                  aria-hidden="true"
                />
              </button>

              <div
                id="professional-services-menu"
                className="ts-mega-menu"
                role="region"
                aria-label="Professional Services menu"
                data-menu="professional-services-menu"
              />

            </li>

            {/* =================================================
                CYBERSECURITY
                ================================================= */}
            <li className="ts-nav-item">

              <button
                type="button"
                className="ts-nav-link"
                data-menu-trigger="cybersecurity-menu"
                aria-expanded="false"
                aria-haspopup="true"
                aria-controls="cybersecurity-menu"
              >
                <span>
                  Cybersecurity
                </span>

                <i
                  data-lucide="chevron-down"
                  data-menu-chevron
                  aria-hidden="true"
                />
              </button>

              <div
                id="cybersecurity-menu"
                className="ts-mega-menu"
                role="region"
                aria-label="Cybersecurity menu"
                data-menu="cybersecurity-menu"
              />

            </li>

            {/* =================================================
                ABOUT
                ================================================= */}
            <li>
              <a
                href="/about"
                className="ts-nav-link ts-nav-direct"
              >
                About Us
              </a>
            </li>

            {/* =================================================
                SUPPORT
                ================================================= */}
            <li>
              <a
                href="/support"
                className="ts-nav-link ts-nav-direct"
              >
                Support
              </a>
            </li>

          </ul>
        </nav>

        {/* =====================================================
            DESKTOP ACTIONS
            ===================================================== */}
        <div className="ts-nav-actions">

          <a
            href="/support"
            className="ts-nav-support"
          >
            <i
              data-lucide="headphones"
              aria-hidden="true"
            />

            <span>
              Desktop Support
            </span>
          </a>

          <a
            href="/contact"
            className="ts-nav-contact"
          >
            <span>
              Contact Us
            </span>

            <i
              data-lucide="arrow-up-right"
              aria-hidden="true"
            />
          </a>

        </div>

        {/* =====================================================
            MOBILE NAVIGATION TOGGLE
            ===================================================== */}
        <button
          id="nav-mobile-toggle"
          type="button"
          className="ts-mobile-toggle"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="mobile-navigation"
        >
          <i
            data-lucide="menu"
            id="nav-mobile-icon"
            aria-hidden="true"
          />
        </button>

      </div>
    </header>
  );
}