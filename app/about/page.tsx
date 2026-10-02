import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  CircleDollarSign,
  Eye,
  Handshake,
  Lightbulb,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="about-hero">
          <div className="about-hero-orb about-hero-orb-one" />
          <div className="about-hero-orb about-hero-orb-two" />

          <div className="about-container about-hero-grid">
            {/* LEFT */}
            <div className="about-hero-content">
              <div className="about-eyebrow">
                <span className="about-eyebrow-dot" />
                ABOUT THINKSOCIALLY
              </div>

              <h1>
                Technology should
                <span> work for people.</span>
              </h1>

              <p className="about-hero-description">
                ThinkSocially helps organizations turn technology into a
                practical advantage — combining people, processes and
                technology to create solutions that actually work.
              </p>

              <div className="about-hero-actions">
                <a href="#mission" className="about-btn about-btn-primary">
                  Discover our story
                  <ArrowRight size={18} strokeWidth={2} />
                </a>

                <a href="/support" className="about-btn about-btn-secondary">
                  Talk to our team
                </a>
              </div>

              <div className="about-hero-trust">
                <div className="about-trust-icons">
                  <span>
                    <Users size={15} />
                  </span>

                  <span>
                    <Building2 size={15} />
                  </span>

                  <span>
                    <ShieldCheck size={15} />
                  </span>
                </div>

                <div>
                  <strong>People-first technology</strong>
                  <p>Built around the organizations we serve.</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="about-hero-visual">
              <div className="about-image-frame">
                <img
                  src="/images/hero/abt.jpg"
                  alt="ThinkSocially technology team working together"
                />

                <div className="about-image-overlay" />
              </div>

              <div className="about-floating-card about-floating-card-top">
                <div className="about-card-icon">
                  <Target size={20} strokeWidth={2} />
                </div>

                <div>
                  <strong>Focused on impact</strong>
                  <span>Technology with purpose</span>
                </div>
              </div>

              <div className="about-floating-card about-floating-card-bottom">
                <div className="about-card-icon">
                  <Sparkles size={20} strokeWidth={2} />
                </div>

                <div>
                  <strong>Built around people</strong>
                  <span>Solutions that fit your organization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MISSION
        ====================================================== */}
        <section id="mission" className="about-mission">
          <div className="about-container about-two-column">
            {/* IMAGE */}
            <div className="about-section-image">
              <div className="about-image-frame">
                <img
                  src="/images/hero/devi.jpg"
                  alt="Technology and collaboration"
                />

                <div className="about-image-overlay" />
              </div>

              <div className="about-image-badge">
                <CircleDollarSign size={18} />
                <span>Enterprise capability. Practical delivery.</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="about-section-content">
              <div className="about-eyebrow">
                <span className="about-eyebrow-dot" />
                OUR MISSION
              </div>

              <h2>
                Bringing enterprise-level
                <span> IT capabilities</span> within reach.
              </h2>

              <p>
                ThinkSocially strives to provide small and medium-sized
                businesses and non-profit organizations with the same level of
                IT capabilities and services available to large enterprises.
              </p>

              <p>
                Our goal is to make technology useful, reliable and aligned
                with the way an organization actually operates — without
                unnecessary complexity.
              </p>

              <div className="about-check-grid">
                <div className="about-check-item">
                  <div className="about-check-icon">
                    <Check size={16} strokeWidth={2.5} />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            GUIDING PHILOSOPHY
        ====================================================== */}
        <section className="about-philosophy">
          <div className="about-container">
            <div className="about-centered-heading">
              <div className="about-eyebrow">
                <span className="about-eyebrow-dot" />
                OUR PHILOSOPHY
              </div>

              <h2>
                Think socially.
                <span> Build intelligently.</span>
              </h2>

              <p>
                Technology is ultimately about people. Our approach is built
                around understanding the relationship between technology,
                organizations and the people who depend on them.
              </p>
            </div>

            <div className="about-philosophy-grid">
              {/* LEFT CONTENT */}
              <div className="about-philosophy-copy">
                <div className="about-philosophy-item">
                  <div className="about-philosophy-icon">
                    <BrainCircuit size={21} strokeWidth={2} />
                  </div>

                  <div>
                    <h3>Technology with context</h3>

                    <p>
                      We look beyond individual technologies and consider how
                      systems fit into the wider organization.
                    </p>
                  </div>
                </div>

                <div className="about-philosophy-item">
                  <div className="about-philosophy-icon">
                    <Handshake size={21} strokeWidth={2} />
                  </div>

                  <div>
                    <h3>People-first thinking</h3>

                    <p>
                      The best technology is technology people can actually
                      understand, use and depend on.
                    </p>
                  </div>
                </div>

                <div className="about-philosophy-item">
                  <div className="about-philosophy-icon">
                    <Lightbulb size={21} strokeWidth={2} />
                  </div>

                  <div>
                    <h3>Practical innovation</h3>

                    <p>
                      Innovation should solve real problems and create
                      measurable value rather than complexity for its own sake.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT VISUAL */}
              <div className="about-orbit">
                <div className="about-orbit-ring about-orbit-ring-one" />
                <div className="about-orbit-ring about-orbit-ring-two" />
                <div className="about-orbit-ring about-orbit-ring-three" />

                <div className="about-orbit-center">
                  <Network size={30} strokeWidth={1.7} />

                  <span>
                    THINK
                    <br />
                    SOCIALLY
                  </span>
                </div>

                <div className="about-orbit-node about-orbit-node-one">
                  <Users size={17} />
                </div>

                <div className="about-orbit-node about-orbit-node-two">
                  <Wrench size={17} />
                </div>

                <div className="about-orbit-node about-orbit-node-three">
                  <Eye size={17} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR APPROACH
        ====================================================== */}
        <section className="about-approach">
          <div className="about-container">
            <div className="about-approach-header">
              <div>
                <div className="about-eyebrow">
                  <span className="about-eyebrow-dot" />
                  OUR APPROACH
                </div>

                <h2>
                  Technology should fit
                  <span> your organization.</span>
                </h2>
              </div>

              <p>
                We take the time to understand your culture, environment,
                people, technology and processes before recommending a path
                forward.
              </p>
            </div>

            <div className="about-approach-grid">
              <article className="about-approach-card">
                <div className="about-card-number">01</div>

                <div className="about-card-icon">
                  <Eye size={20} strokeWidth={2} />
                </div>

                <h3>Understand</h3>

                <p>
                  We start by understanding how your organization works, where
                  the challenges are and what your people need.
                </p>

                <div className="about-card-line" />
              </article>

              <article className="about-approach-card">
                <div className="about-card-number">02</div>

                <div className="about-card-icon">
                  <BrainCircuit size={20} strokeWidth={2} />
                </div>

                <h3>Design</h3>

                <p>
                  We develop solutions around your actual environment instead
                  of forcing your organization into a predefined technology
                  model.
                </p>

                <div className="about-card-line" />
              </article>

              <article className="about-approach-card">
                <div className="about-card-number">03</div>

                <div className="about-card-icon">
                  <Rocket size={20} strokeWidth={2} />
                </div>

                <h3>Deliver</h3>

                <p>
                  We turn the strategy into practical technology that can be
                  implemented, supported and improved over time.
                </p>

                <div className="about-card-line" />
              </article>
            </div>

            <div className="about-approach-highlight">
              <div className="about-highlight-icon">
                <Network size={21} strokeWidth={2} />
              </div>

              <div>
                <strong>One connected approach</strong>

                <p>
                  People, processes and technology should work together rather
                  than exist as separate pieces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT MAKES US DIFFERENT
        ====================================================== */}
        <section className="about-difference">
          <div className="about-container">
            <div className="about-centered-heading">
              <div className="about-eyebrow">
                <span className="about-eyebrow-dot" />
                WHAT MAKES US DIFFERENT
              </div>

              <h2>
                A technology partner,
                <span> not just a provider.</span>
              </h2>

              <p>
                Our work is centered around helping organizations make better
                use of technology while keeping people and business objectives
                at the center.
              </p>
            </div>

            <div className="about-difference-grid">
              <article className="about-difference-card">
                <div className="about-difference-icon">
                  <Users size={22} strokeWidth={2} />
                </div>

                <h3>People-centric</h3>

                <p>
                  We consider the people who use technology every day and
                  design solutions around their needs.
                </p>

                <span className="about-difference-number">01</span>
              </article>

              <article className="about-difference-card">
                <div className="about-difference-icon">
                  <Target size={22} strokeWidth={2} />
                </div>

                <h3>Business-focused</h3>

                <p>
                  Technology should contribute to productivity, efficiency and
                  the broader objectives of an organization.
                </p>

                <span className="about-difference-number">02</span>
              </article>

              <article className="about-difference-card">
                <div className="about-difference-icon">
                  <ShieldCheck size={22} strokeWidth={2} />
                </div>

                <h3>Reliable</h3>

                <p>
                  We focus on dependable technology and services that
                  organizations can continue to rely on.
                </p>

                <span className="about-difference-number">03</span>
              </article>

              <article className="about-difference-card">
                <div className="about-difference-icon">
                  <Wrench size={22} strokeWidth={2} />
                </div>

                <h3>Practical</h3>

                <p>
                  Our recommendations are intended to solve real problems
                  rather than introduce technology simply because it is new.
                </p>

                <span className="about-difference-number">04</span>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPACT
        ====================================================== */}
        <section className="about-impact">
          <div className="about-container about-impact-grid">
            <div className="about-impact-content">
              <div className="about-eyebrow">
                <span className="about-eyebrow-dot" />
                THE IMPACT
              </div>

              <h2>
                Better technology.
                <span> Better outcomes.</span>
              </h2>

              <p>
                When technology is aligned with the people and processes of an
                organization, it can become more than infrastructure. It can
                become an engine for productivity and growth.
              </p>

              <div className="about-impact-list">
                <div className="about-impact-item">
                  <div className="about-impact-item-icon">
                    <ArrowRight size={17} />
                  </div>

                  <span>Improve employee productivity</span>
                </div>

                <div className="about-impact-item">
                  <div className="about-impact-item-icon">
                    <ArrowRight size={17} />
                  </div>

                  <span>Support organizational growth</span>
                </div>

                <div className="about-impact-item">
                  <div className="about-impact-item-icon">
                    <ArrowRight size={17} />
                  </div>

                  <span>Reduce unnecessary IT investment</span>
                </div>

                <div className="about-impact-item">
                  <div className="about-impact-item-icon">
                    <ArrowRight size={17} />
                  </div>

                  <span>Create more dependable technology environments</span>
                </div>
              </div>
            </div>

            <div className="about-impact-visual">
              <div className="about-impact-glow" />

              <div className="about-impact-panel">
                <div className="about-impact-panel-top">
                  <span>THINKSOCIALLY</span>
                  <span>ABOUT US</span>
                </div>

                <div className="about-impact-panel-main">
                  <div className="about-impact-symbol">
                    <Sparkles size={28} strokeWidth={1.7} />
                  </div>

                  <h3>
                    Technology
                    <br />
                    with purpose.
                  </h3>

                  <p>
                    Connecting people, processes and technology into one
                    practical strategy.
                  </p>
                </div>

                <div className="about-impact-panel-bottom">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="about-cta">
          <div className="about-cta-glow about-cta-glow-one" />
          <div className="about-cta-glow about-cta-glow-two" />

          <div className="about-container">
            <div className="about-cta-content">
              <div className="about-eyebrow">
                <span className="about-eyebrow-dot" />
                LET'S WORK TOGETHER
              </div>

              <h2>
                Ready to make technology
                <span> work harder for you?</span>
              </h2>

              <p>
                Tell us where you are today, where you want to go and what is
                getting in the way. We can help you build a technology
                environment designed around your organization.
              </p>

              <div className="about-cta-actions">
                <a href="/support" className="about-btn about-btn-primary">
                  Talk to ThinkSocially
                  <ArrowRight size={18} strokeWidth={2} />
                </a>

                <a
                  href="/managed-services"
                  className="about-btn about-btn-secondary"
                >
                  Explore our services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}