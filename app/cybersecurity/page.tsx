
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardCheck,
  LockKeyhole,
  MessageCircle,
  Radar,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

export default function CybersecurityPage() {
  return (
    <>
      <Navbar />

      <main className="cs-page">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="cs-hero">
          <div className="cs-container">
            <div className="cs-hero-grid">
              {/* HERO CONTENT */}
              <div className="cs-hero-content">
                <div className="cs-eyebrow">
                  <span className="cs-eyebrow-dot" />
                  Cybersecurity
                </div>

                <h1 className="cs-hero-title">
                  Secure your business.
                  <span> Stay ahead of threats.</span>
                </h1>

                <p className="cs-hero-description">
                  Protect your organization with intelligent cybersecurity
                  strategies, proactive risk management, and continuous threat
                  monitoring designed to keep your people, systems, and data
                  secure.
                </p>

                <div className="cs-hero-actions">
                  <a
                    href="#cybersecurity-services"
                    className="cs-primary-btn"
                  >
                    <span>Explore Cybersecurity</span>
                    <ArrowRight size={18} strokeWidth={2} />
                  </a>

                  <a href="#contact" className="cs-secondary-btn">
                    <span>Talk to an Expert</span>
                    <MessageCircle size={18} strokeWidth={2} />
                  </a>
                </div>

                <div className="cs-hero-trust">
                  <div className="cs-trust-icon">
                    <ShieldCheck size={21} strokeWidth={2} />
                  </div>

                  <div>
                    <strong>Security-first approach</strong>
                    <span>Built around your organization</span>
                  </div>
                </div>
              </div>

              {/* HERO VISUAL */}
              <div className="cs-hero-visual">
                <div className="cs-hero-glow" />

                <div className="cs-hero-image-frame">
                  <img
                    src="/images/hero/syy.jpg"
                    alt="Cybersecurity operations and digital security"
                    className="cs-hero-image"
                  />

                  <div className="cs-hero-image-overlay" />

                  <div className="cs-hero-grid-pattern" />

                  {/* HERO BADGE 1 */}
                  <div className="cs-hero-badge cs-hero-badge-one">
                    <div className="cs-badge-icon">
                      <ShieldCheck size={20} strokeWidth={2} />
                    </div>

                    <div>
                      <strong>Protected</strong>
                      <span>Security systems active</span>
                    </div>
                  </div>

                  {/* HERO BADGE 2 */}
                  <div className="cs-hero-badge cs-hero-badge-two">
                    <span className="cs-status-dot" />

                    <span>Threat monitoring</span>

                    <strong>24/7</strong>
                  </div>

                  {/* HERO BADGE 3 */}
                  <div className="cs-hero-badge cs-hero-badge-three">
                    <LockKeyhole size={17} strokeWidth={2} />

                    <span>Secure infrastructure</span>
                  </div>
                </div>

                <div className="cs-floating-orb cs-orb-one" />
                <div className="cs-floating-orb cs-orb-two" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES OVERVIEW
        ====================================================== */}
        <section
          id="cybersecurity-services"
          className="cs-services-overview"
        >
          <div className="cs-container">
            <div className="cs-section-heading">
              <div className="cs-eyebrow">
                <span className="cs-eyebrow-dot" />
                Our capabilities
              </div>

              <h2>
                Cybersecurity built around
                <span> your business.</span>
              </h2>

              <p>
                From identifying vulnerabilities to responding to active
                threats, we help create a stronger security foundation for
                your organization.
              </p>
            </div>

            <div className="cs-service-cards">
              {/* CARD 01 */}
              <article className="cs-service-card">
                <div className="cs-card-number">01</div>

                <div className="cs-service-icon">
                  <ScanSearch size={26} strokeWidth={1.8} />
                </div>

                <h3>Cybersecurity Risk Assessment</h3>

                <p>
                  Identify vulnerabilities, security gaps, and potential risks
                  across your technology environment before they become
                  serious problems.
                </p>

                <a href="#risk-assessment" className="cs-card-link">
                  <span>Learn more</span>

                  <ArrowUpRight size={17} strokeWidth={2} />
                </a>
              </article>

              {/* CARD 02 */}
              <article className="cs-service-card">
                <div className="cs-card-number">02</div>

                <div className="cs-service-icon">
                  <ClipboardCheck size={26} strokeWidth={1.8} />
                </div>

                <h3>IT Governance, Risk &amp; Compliance</h3>

                <p>
                  Establish stronger governance, manage technology risks, and
                  align your IT environment with relevant security and
                  compliance requirements.
                </p>

                <a href="#governance" className="cs-card-link">
                  <span>Learn more</span>

                  <ArrowUpRight size={17} strokeWidth={2} />
                </a>
              </article>

              {/* CARD 03 */}
              <article className="cs-service-card">
                <div className="cs-card-number">03</div>

                <div className="cs-service-icon">
                  <Radar size={26} strokeWidth={1.8} />
                </div>

                <h3>Threat Monitoring, Detection &amp; Response</h3>

                <p>
                  Monitor your environment for suspicious activity and build
                  a structured response process for potential cybersecurity
                  incidents.
                </p>

                <a href="#threat-monitoring" className="cs-card-link">
                  <span>Learn more</span>

                  <ArrowUpRight size={17} strokeWidth={2} />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            RISK ASSESSMENT
        ====================================================== */}
        <section id="risk-assessment" className="cs-detail-section">
          <div className="cs-container">
            <div className="cs-detail-grid">
              {/* IMAGE LEFT */}
              <div className="cs-detail-visual">
                <div className="cs-detail-image-frame">
                  <img
                    src="/images/hero/mana.jpg"
                    alt="Cybersecurity risk assessment"
                    className="cs-detail-image"
                  />

                  <div className="cs-detail-overlay" />

                  <div className="cs-detail-floating-card">
                    <div className="cs-detail-floating-icon">
                      <ShieldAlert size={20} strokeWidth={2} />
                    </div>

                    <div>
                      <strong>Risk visibility</strong>
                      <span>Identify security gaps</span>
                    </div>
                  </div>
                </div>

                <div className="cs-detail-glow" />
              </div>

              {/* TEXT RIGHT */}
              <div className="cs-detail-content">
                <div className="cs-eyebrow">
                  <span className="cs-eyebrow-dot" />
                  Risk Assessment
                </div>

                <h2>
                  Understand your risks
                  <span> before attackers do.</span>
                </h2>

                <p>
                  A strong cybersecurity strategy begins with understanding
                  where your organization is exposed. Our cybersecurity risk
                  assessment approach helps uncover weaknesses across your
                  systems, applications, infrastructure, processes, and
                  people.
                </p>

                <p>
                  We help turn security findings into practical actions so
                  your organization can prioritize improvements and strengthen
                  its overall security posture.
                </p>

                <ul className="cs-feature-list">
                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    Vulnerability and security gap identification
                  </li>

                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    Technology and infrastructure risk review
                  </li>

                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    Risk prioritization and recommendations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            GOVERNANCE, RISK & COMPLIANCE
        ====================================================== */}
        <section
          id="governance"
          className="cs-detail-section cs-detail-reverse"
        >
          <div className="cs-container">
            <div className="cs-detail-grid">
              {/* TEXT LEFT */}
              <div className="cs-detail-content">
                <div className="cs-eyebrow">
                  <span className="cs-eyebrow-dot" />
                  Governance, Risk &amp; Compliance
                </div>

                <h2>
                  Build stronger IT
                  <span> governance.</span>
                </h2>

                <p>
                  Effective cybersecurity requires more than technology. It
                  requires clear policies, responsibilities, controls, and
                  processes that help your organization manage technology
                  responsibly.
                </p>

                <p>
                  We help organizations establish practical governance and
                  risk management frameworks while supporting alignment with
                  applicable compliance requirements.
                </p>

                <ul className="cs-feature-list">
                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    IT governance frameworks and policies
                  </li>

                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    Technology risk management
                  </li>

                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    Compliance readiness and control reviews
                  </li>
                </ul>
              </div>

              {/* IMAGE RIGHT */}
              <div className="cs-detail-visual">
                <div className="cs-detail-image-frame">
                  <img
                    src="/images/hero/strong.jpg"
                    alt="IT governance, risk and compliance"
                    className="cs-detail-image"
                  />

                  <div className="cs-detail-overlay" />

                  <div className="cs-detail-floating-card">
                    <div className="cs-detail-floating-icon">
                      <ClipboardCheck size={20} strokeWidth={2} />
                    </div>

                    <div>
                      <strong>Governance</strong>
                      <span>Controls &amp; compliance</span>
                    </div>
                  </div>
                </div>

                <div className="cs-detail-glow" />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            THREAT MONITORING
        ====================================================== */}
        <section
          id="threat-monitoring"
          className="cs-detail-section cs-detail-last"
        >
          <div className="cs-container">
            <div className="cs-detail-grid">
              {/* IMAGE LEFT */}
              <div className="cs-detail-visual">
                <div className="cs-detail-image-frame">
                  <img
                    src="/images/hero/see.jpg"
                    alt="Threat monitoring, detection and response"
                    className="cs-detail-image"
                  />

                  <div className="cs-detail-overlay" />

                  <div className="cs-threat-indicator">
                    <span className="cs-threat-pulse" />

                    <div>
                      <strong>Monitoring active</strong>
                      <span>Threat detection enabled</span>
                    </div>
                  </div>

                  <div className="cs-threat-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className="cs-detail-glow" />
              </div>

              {/* TEXT RIGHT */}
              <div className="cs-detail-content">
                <div className="cs-eyebrow">
                  <span className="cs-eyebrow-dot" />
                  Threat Monitoring
                </div>

                <h2>
                  Detect threats.
                  <span> Respond with confidence.</span>
                </h2>

                <p>
                  Modern organizations need visibility into what is happening
                  across their digital environments. Threat monitoring helps
                  identify unusual activity and potential security incidents
                  before they can cause significant disruption.
                </p>

                <p>
                  Our approach combines monitoring, detection, investigation,
                  and response processes to help organizations react to
                  cybersecurity events in a structured way.
                </p>

                <ul className="cs-feature-list">
                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    Continuous security monitoring
                  </li>

                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    Threat detection and investigation
                  </li>

                  <li>
                    <span>
                      <Check size={15} strokeWidth={2.5} />
                    </span>

                    Incident response support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="cs-cta" id="contact">
          <div className="cs-container">
            <div className="cs-cta-card">
              <div className="cs-cta-glow" />

              <div className="cs-cta-content">
                <div className="cs-eyebrow">
                  <span className="cs-eyebrow-dot" />
                  Strengthen your security
                </div>

                <h2>
                  Your security strategy
                  <span> starts here.</span>
                </h2>

                <p>
                  Build a stronger foundation for your organization with
                  cybersecurity services designed around your technology,
                  people, and business objectives.
                </p>

                <a href="/contact" className="cs-primary-btn">
                  <span>Start a conversation</span>

                  <ArrowRight size={18} strokeWidth={2} />
                </a>
              </div>

              <div className="cs-cta-icon">
                <ShieldCheck size={72} strokeWidth={1.3} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
