export default function Navbar() {
  return (
    <header id="site-header" className="ts-site-header">
      <div className="ts-nav-shell">

        {/* =====================================================
            BRAND
            ===================================================== */}

        <a
          href="/"
          className="ts-brand"
          aria-label="ThinkSocially home"
        >
          <img
            src="/images/hero/ts.png"
            alt="ThinkSocially"
            className="ts-brand-logo"
          />
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

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

              <a
                href="/cloud-computing"
                className="ts-nav-link"
                aria-label="Cloud Computing"
              >
                <span>
                  Cloud Computing
                </span>

                <i
                  data-lucide="chevron-down"
                  data-menu-chevron
                  aria-hidden="true"
                />

              </a>

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

              <a
                href="/professional-services"
                className="ts-nav-link"
                aria-label="Professional Services"
              >
                <span>
                  Professional Services
                </span>
              </a>

            </li>

            {/* =================================================
                CYBERSECURITY
                ================================================= */}

            <li className="ts-nav-item">

              <a
                href="/cybersecurity"
                className="ts-nav-link"
                aria-label="Cybersecurity"
              >
                <span>
                  Cybersecurity
                </span>
              </a>

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
                Contact Us
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