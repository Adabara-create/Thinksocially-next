"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  Cloud,
  CloudCog,
  Database,
  File,
  Folder,
  HardDrive,
  Layers3,
  LockKeyhole,
  Mail,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceCards = [
  {
    number: "01",
    icon: CloudCog,
    title: "Cloud Solutions",
    description:
      "Design, management, and implementation for your systems in the cloud.",
    href: "#cloud-solutions",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Legacy Upgrades",
    description:
      "Move outdated applications and systems toward modern, supported solutions.",
    href: "#legacy-upgrades",
  },
  {
    number: "03",
    icon: Database,
    title: "Data Migration",
    description:
      "Move critical information between systems while protecting data integrity.",
    href: "#data-migration",
  },
  {
    number: "04",
    icon: Phone,
    title: "VoIP",
    description:
      "Modernize communications with flexible unified voice solutions.",
    href: "#voip",
  },
];

function CloudNetworkAnimation() {
  const files = [
    {
      className: "cc-file cc-file-one",
      icon: File,
      label: "Report.pdf",
    },
    {
      className: "cc-file cc-file-two",
      icon: File,
      label: "Clients.csv",
    },
    {
      className: "cc-file cc-file-three",
      icon: Folder,
      label: "Projects",
    },
    {
      className: "cc-file cc-file-four",
      icon: File,
      label: "Invoice.docx",
    },
    {
      className: "cc-file cc-file-five",
      icon: File,
      label: "Backup.zip",
    },
    {
      className: "cc-file cc-file-six",
      icon: File,
      label: "Database.sql",
    },
  ];

  return (
    <div className="cc-cloud-animation" aria-hidden="true">
      <div className="cc-animation-grid" />

      <div className="cc-data-particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="cc-connection cc-connection-one" />
      <div className="cc-connection cc-connection-two" />
      <div className="cc-connection cc-connection-three" />
      <div className="cc-connection cc-connection-four" />
      <div className="cc-connection cc-connection-five" />
      <div className="cc-connection cc-connection-six" />

      {files.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={index} className={item.className}>
            <Icon size={17} />
            <span>{item.label}</span>
          </div>
        );
      })}

      <div className="cc-central-cloud">
        <div className="cc-cloud-glow" />

        <div className="cc-cloud-icon">
          <Cloud size={52} strokeWidth={1.25} />
        </div>

        <div className="cc-cloud-core">
          <span>THINKSOCIALLY</span>
          <strong>Cloud Core</strong>
        </div>

        <div className="cc-cloud-ring cc-cloud-ring-one" />
        <div className="cc-cloud-ring cc-cloud-ring-two" />
      </div>

      <div className="cc-animation-status">
        <span />
        Data securely connected
      </div>
    </div>
  );
}

function ServiceVisual({
  image,
  alt,
  icon: Icon,
  label,
}: {
  image: string;
  alt: string;
  icon: typeof Cloud;
  label: string;
}) {
  return (
    <div className="cc-service-visual">
      <div className="cc-service-image-wrap">
        <img
          src={image}
          alt={alt}
          className="cc-service-image"
        />

        <div className="cc-service-image-overlay" />

        <div className="cc-image-icon">
          <Icon size={24} strokeWidth={1.5} />
        </div>

        <div className="cc-image-label">
          <span className="cc-live-dot" />
          {label}
        </div>
      </div>

      <div className="cc-visual-orbit cc-visual-orbit-one" />
      <div className="cc-visual-orbit cc-visual-orbit-two" />
    </div>
  );
}

function ServiceSection({
  id,
  number,
  eyebrow,
  title,
  description,
  children,
  image,
  imageAlt,
  icon: Icon,
  imageFirst,
  label,
  bullets,
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  icon: typeof Cloud;
  imageFirst: boolean;
  label: string;
  bullets: string[];
}) {
  return (
    <section
      id={id}
      className={`cc-service-section ${
        imageFirst ? "cc-image-first" : "cc-text-first"
      }`}
    >
      <div className="ts-container">
        <div className="cc-service-grid">
          {imageFirst && (
            <ServiceVisual
              image={image}
              alt={imageAlt}
              icon={Icon}
              label={label}
            />
          )}

          <div className="cc-service-copy">
            <div className="cc-section-meta">
              <span>{number}</span>
              <i />
              <span>{eyebrow}</span>
            </div>

            <h2>{title}</h2>

            <p className="cc-service-lead">{description}</p>

            <div className="cc-service-body">{children}</div>

            <div className="cc-service-bullets">
              {bullets.map((bullet) => (
                <div key={bullet}>
                  <ShieldCheck size={15} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <a href="/contact" className="cc-service-link">
              <span>Discuss your requirements</span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          {!imageFirst && (
            <ServiceVisual
              image={image}
              alt={imageAlt}
              icon={Icon}
              label={label}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default function CloudComputingPage() {
  return (
    <>
      <Navbar />

      <main className="cloud-computing-page">

        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="cc-hero">
          <div className="cc-hero-grid-bg" />

          <div className="cc-hero-glow cc-hero-glow-one" />
          <div className="cc-hero-glow cc-hero-glow-two" />

          <div className="ts-container">
            <div className="cc-hero-grid">

              {/* =====================================================
                  HERO COPY
              ===================================================== */}

              <div className="cc-hero-copy">
                <div className="cc-eyebrow">
                  <span className="cc-eyebrow-dot" />
                  Cloud computing
                </div>

                <h1>
                  Your business,
                  <span> connected to the cloud.</span>
                </h1>

                <p>
                  Thinksocially designs, manages and implements cloud
                  environments that help organizations improve manageability,
                  accessibility, cost and uptime.
                </p>

                <div className="cc-hero-actions">
                  <a
                    href="#cloud-solutions"
                    className="cc-primary-button"
                  >
                    Explore cloud services
                    <ArrowDownRight size={17} />
                  </a>

                  <a
                    href="/contact"
                    className="cc-secondary-button"
                  >
                    Talk to Thinksocially
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="cc-hero-trust">
                  <div className="cc-trust-icon">
                    <LockKeyhole size={18} />
                  </div>

                  <div>
                    <strong>Secure cloud infrastructure</strong>
                    <span>Built around your organization</span>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  HERO IMAGE
              ===================================================== */}

              <div className="cc-hero-photo-visual">

                <div className="cc-hero-photo-frame">

                  <img
                    src="/images/hero/cloud.jpg"
                    alt="Modern cloud computing infrastructure"
                    className="cc-hero-photo"
                  />

                  <div className="cc-hero-photo-overlay" />

                  {/* Top floating badge */}
                  <div className="cc-hero-floating-badge cc-badge-top">
                    <span className="cc-live-dot" />

                    <div>
                      <strong>Cloud environment</strong>
                      <small>Connected & managed</small>
                    </div>
                  </div>

                  {/* Bottom floating badge */}
                  <div className="cc-hero-mini-card cc-badge-bottom">
                    <Sparkles size={15} />
                    <span>Scalable by design</span>
                  </div>

                  {/* Infrastructure badge */}
                  <div className="cc-hero-image-badge cc-image-badge-one">
                    <Server size={16} />
                    <div>
                      <strong>Infrastructure</strong>
                      <small>Optimized</small>
                    </div>
                  </div>

                  {/* Data badge */}
                  <div className="cc-hero-image-badge cc-image-badge-two">
                    <Database size={16} />
                    <div>
                      <strong>Data</strong>
                      <small>Protected</small>
                    </div>
                  </div>

                  {/* Microsoft badge */}
                  <div className="cc-hero-image-badge cc-image-badge-three">
                    <Mail size={16} />
                    <div>
                      <strong>Microsoft 365</strong>
                      <small>Connected</small>
                    </div>
                  </div>

                  {/* Backup badge */}
                  <div className="cc-hero-image-badge cc-image-badge-four">
                    <HardDrive size={16} />
                    <div>
                      <strong>Backup</strong>
                      <small>Secure</small>
                    </div>
                  </div>

                </div>

                {/* Decorative elements */}
                <div className="cc-photo-decoration cc-photo-decoration-one" />
                <div className="cc-photo-decoration cc-photo-decoration-two" />

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FOUR SERVICE CARDS
        ========================================================= */}

        <section className="cc-overview">
          <div className="ts-container">

            <div className="cc-overview-heading">
              <div>
                <div className="cc-eyebrow">
                  <span className="cc-eyebrow-dot" />
                  Cloud services
                </div>

                <h2>
                  Everything your
                  <span> cloud needs.</span>
                </h2>
              </div>

              <p>
                From cloud strategy and modernization to migration and
                communications, Thinksocially brings the pieces together into
                one connected technology environment.
              </p>
            </div>

            <div className="cc-service-cards">
              {serviceCards.map((card) => {
                const Icon = card.icon;

                return (
                  <a
                    href={card.href}
                    key={card.title}
                    className="cc-service-card"
                  >
                    <div className="cc-card-top">
                      <span>{card.number}</span>

                      <div className="cc-card-icon">
                        <Icon
                          size={21}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <h3>{card.title}</h3>

                    <p>{card.description}</p>

                    <div className="cc-card-arrow">
                      <span>Explore</span>
                      <ArrowRight size={16} />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOUD SOLUTIONS
        ========================================================= */}

        <ServiceSection
          id="cloud-solutions"
          number="01"
          eyebrow="Cloud architecture"
          title="Cloud Solutions"
          description="Build a cloud environment that gives your organization the flexibility to focus on its core mission without carrying unnecessary hardware and software overhead."
          image="/images/hero/solution.jpg"
          imageAlt="Cloud technology environment"
          icon={Cloud}
          imageFirst={true}
          label="Cloud architecture"
          bullets={[
            "Private, public and hybrid cloud environments",
            "Microsoft 365 and hosted services",
            "Cloud backup and virtual desktop solutions",
          ]}
        >
          <p>
            Thinksocially helps organizations navigate the many cloud-based
            technology choices available today. We assess your requirements,
            recommend an approach and guide you through deployment and
            ongoing operational support.
          </p>

          <p>
            Solutions can incorporate Microsoft Office 365, hosted SharePoint,
            hosted Exchange email, cloud backups, private cloud, hybrid cloud
            and Virtual Desktop Infrastructure.
          </p>
        </ServiceSection>

        {/* =========================================================
            CLOUD DATA ANIMATION
        ========================================================= */}

        <section className="cc-cloud-flow-section">
          <div className="ts-container">

            <div className="cc-flow-heading">
              <div className="cc-eyebrow">
                <span className="cc-eyebrow-dot" />
                Connected infrastructure
              </div>

              <h2>
                Your data,
                <span> wherever it needs to be.</span>
              </h2>

              <p>
                Files, applications and business information moving through a
                connected cloud environment.
              </p>
            </div>

            <CloudNetworkAnimation />
          </div>
        </section>

        {/* =========================================================
            LEGACY UPGRADES
        ========================================================= */}

        <ServiceSection
          id="legacy-upgrades"
          number="02"
          eyebrow="Technology modernization"
          title="Legacy Upgrades"
          description="Move away from outdated applications and systems toward modern solutions that better support your organization's needs."
          image="/images/hero/upgrade.jpg"
          imageAlt="Modern technology infrastructure"
          icon={Layers3}
          imageFirst={false}
          label="Modernization"
          bullets={[
            "Assess existing systems and business requirements",
            "Plan transitions around your operational needs",
            "Move assets to the cloud when appropriate",
          ]}
        >
          <p>
            Thinksocially helps organizations understand what changing
            technology means for their business and determine the right path
            forward.
          </p>

          <p>
            We can help evaluate replacement strategies, newer application
            versions and cloud alternatives while planning a transition that
            minimizes disruption.
          </p>
        </ServiceSection>

        {/* =========================================================
            DATA MIGRATION
        ========================================================= */}

        <ServiceSection
          id="data-migration"
          number="03"
          eyebrow="Data transformation"
          title="Data Migration"
          description="Move critical business information from legacy systems into modern applications while maintaining accessibility, structure and data integrity."
          image="/images/hero/migra.jpg"
          imageAlt="Data migration technology"
          icon={Database}
          imageFirst={true}
          label="Migration pipeline"
          bullets={[
            "Structured migration planning",
            "Data cleansing and deduplication",
            "Extraction, loading and verification",
          ]}
        >
          <p>
            Thinksocially creates a structured approach based on your business
            needs, the capabilities of your target system and the
            configuration of your existing environment.
          </p>

          <p>
            Whether your migration uses an existing API or requires a
            customized solution, the process can include extracting,
            transforming, loading, normalizing and verifying your information.
          </p>
        </ServiceSection>

        {/* =========================================================
            VOIP
        ========================================================= */}

        <ServiceSection
          id="voip"
          number="04"
          eyebrow="Unified communications"
          title="VoIP"
          description="Modernize your organization's phone system with flexible Voice over Internet Protocol solutions designed around today's working environments."
          image="/images/hero/vio.jpg"
          imageAlt="Modern VoIP communications"
          icon={Phone}
          imageFirst={true}
          label="Unified communications"
          bullets={[
            "Flexible hosted phone systems",
            "Remote and mobile communication",
            "Voicemail, softphone and unified features",
          ]}
        >
          <p>
            Thinksocially helps organizations take advantage of the quality,
            flexibility and cost benefits available through modern VoIP
            services.
          </p>

          <p>
            Solutions can support simultaneous ringing, mobile call routing,
            voicemail transcription, PC softphones and remote working. We also
            work with telecommunications providers to manage installation and
            operational support.
          </p>
        </ServiceSection>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}

        <section className="cc-final-cta">
          <div className="ts-container">

            <div className="cc-final-card">
              <div className="cc-final-glow" />

              <div className="cc-final-copy">
                <div className="cc-eyebrow">
                  <span className="cc-eyebrow-dot" />
                  Ready for the cloud
                </div>

                <h2>
                  Let's build a
                  <span> smarter environment.</span>
                </h2>

                <p>
                  From cloud strategy to migration and communications,
                  Thinksocially can help you move your technology forward.
                </p>
              </div>

              <a
                href="/contact"
                className="cc-primary-button"
              >
                Talk to Thinksocially
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}