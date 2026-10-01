"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Cloud,
  HardDrive,
  Headphones,
  Monitor,
  Network,
  Server,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RocketSection from "@/components/rocketsection";

const services = [
  {
    id: "desktop-support",
    number: "01",
    eyebrow: "Endpoint management",
    title: "Desktop Support",
    description:
      "We help you identify the right hardware and software for your organization, configure your systems properly, and provide ongoing technical support when you need it.",
    detail:
      "From individual workstations to complete office environments, our support is designed to keep your users productive and your technology working properly.",
    icon: Monitor,
    image: "/images/hero/toto.jpg",
    side: "right",
  },
  {
    id: "server-support",
    number: "02",
    eyebrow: "Infrastructure",
    title: "Server Support",
    description:
      "We work with your leadership and functional teams to understand your requirements and develop the appropriate technology architecture.",
    detail:
      "From server selection and procurement to installation, configuration, monitoring and optimization, we help create a stable infrastructure for your organization.",
    icon: Server,
    image: "/images/hero/seve.jpg",
    side: "left",
  },
  {
    id: "network-support",
    number: "03",
    eyebrow: "Connectivity",
    title: "Network Support",
    description:
      "We configure and optimize networks of all sizes, helping your organization share information, resources and services efficiently.",
    detail:
      "Our approach also supports distributed and remote teams with network environments designed around reliability, accessibility and performance.",
    icon: Network,
    image: "/images/hero/nene.jpg",
    side: "right",
  },
  {
    id: "monitoring",
    number: "04",
    eyebrow: "Always watching",
    title: "Monitoring",
    description:
      "Healthy technology requires consistent visibility. We monitor servers, workstations and network equipment to identify potential problems before they become major interruptions.",
    detail:
      "Automated checks, alerts and performance monitoring give your team a clearer picture of what is happening across your technology environment.",
    icon: Activity,
    image: "/images/hero/monitor.jpg",
    side: "left",
  },
  {
    id: "preventive-maintenance",
    number: "05",
    eyebrow: "Proactive care",
    title: "Preventive Maintenance",
    description:
      "We keep your hardware and software performing properly through proactive maintenance, updates and security patches.",
    detail:
      "The goal is simple: reduce avoidable disruptions, extend the useful life of your technology and keep your environment stable.",
    icon: Wrench,
    image: "/images/hero/fix.jpg",
    side: "left",
  },
  {
    id: "backup-recovery",
    number: "06",
    eyebrow: "Resilience",
    title: "Backup & Recovery",
    description:
      "Routine backups help protect your organization's data and settings against unexpected failures and technology disruptions.",
    detail:
      "When something goes wrong, having a reliable recovery strategy helps your organization return to normal operations faster.",
    icon: HardDrive,
    image: "/images/hero/backup.jpg",
    side: "right",
  },
  {
    id: "sla-management",
    number: "07",
    eyebrow: "Service intelligence",
    title: "SLA Management",
    description:
      "We establish customized service-level agreements that clearly define expectations, responsibilities, performance measurements and escalation procedures.",
    detail:
      "Regular communication and measurable service results give both sides a clear framework for continuously improving the relationship.",
    icon: ShieldCheck,
    image: "/images/hero/sla.jpg",
    side: "left",
  },
  {
    id: "help-desk",
    number: "08",
    eyebrow: "Human support",
    title: "Help Desk",
    description:
      "When something goes wrong, your team needs a knowledgeable person who can help. Our Help Desk provides prompt technical assistance for unexpected technology issues.",
    detail:
      "Whether the problem is significant or simply requires expert advice, our support team is there to help keep your organization moving.",
    icon: Headphones,
    image: "/images/hero/help.jpg",
    side: "right",
  },
];

function ServiceVisual({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;

  return (
    <div className="ms-service-visual">
      <div className="ms-service-image-wrap">
        <img
          src={service.image}
          alt=""
          className="ms-service-image"
        />

        <div className="ms-service-image-overlay" />

        <div className="ms-service-floating-icon">
          <Icon size={22} strokeWidth={1.6} />
        </div>

        <div className="ms-service-number">
          {service.number}
        </div>
      </div>

      <div className="ms-service-orbit ms-service-orbit-one" />
      <div className="ms-service-orbit ms-service-orbit-two" />

      <div className="ms-service-status">
        <span className="ms-status-dot" />
        System monitored
      </div>
    </div>
  );
}

function ServiceSection({
  service,
}: {
  service: (typeof services)[number];
}) {
  const imageFirst = service.side === "left";

  return (
    <section
      id={service.id}
      className={`ms-service-section ${
        imageFirst ? "ms-image-first" : "ms-text-first"
      }`}
    >
      <div className="ts-container">
        <div className="ms-service-grid">

          {imageFirst && <ServiceVisual service={service} />}

          <div className="ms-service-copy">
            <div className="ms-service-meta">
              <span>{service.number}</span>
              <span className="ms-service-line" />
              <span>{service.eyebrow}</span>
            </div>

            <h2>{service.title}</h2>

            <p className="ms-service-lead">
              {service.description}
            </p>

            <p className="ms-service-detail">
              {service.detail}
            </p>

            <a
              href="#contact"
              className="ms-service-link"
            >
              <span>Discuss your requirements</span>
              <ArrowUpRight size={17} />
            </a>

            <div className="ms-service-points">
              <div>
                <Check size={15} />
                <span>Proactive support</span>
              </div>

              <div>
                <Check size={15} />
                <span>Professional guidance</span>
              </div>

              <div>
                <Check size={15} />
                <span>Technology visibility</span>
              </div>
            </div>
          </div>

          {!imageFirst && <ServiceVisual service={service} />}

        </div>
      </div>
    </section>
  );
}

export default function ManagedServicesPage() {
  return (
    <>
      <Navbar />

      <main className="managed-services-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="ms-hero">
          <div className="ms-hero-noise" />

          <div className="ts-container">
            <div className="ms-hero-grid">

              <div className="ms-hero-copy">

                <div className="ms-eyebrow">
                  <span className="ms-eyebrow-dot" />
                  Managed technology services
                </div>

                <h1>
                  Technology that
                  <span> keeps moving.</span>
                </h1>

                <p>
                  Thinksocially provides proactive oversight,
                  support and management for your devices,
                  servers and networks.
                </p>

                <div className="ms-hero-actions">
                  <a
                    href="#desktop-support"
                    className="ms-primary-button"
                  >
                    Explore services
                    <ArrowDownRight size={17} />
                  </a>

                  <a
                    href="/contact"
                    className="ms-secondary-button"
                  >
                    Talk to Thinksocially
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="ms-hero-trust">
                  <div className="ms-trust-avatars">
                    <span>TS</span>
                    <span>IT</span>
                    <span>24</span>
                  </div>

                  <div>
                    <strong>Managed IT support</strong>
                    <span>Built around your organization</span>
                  </div>
                </div>

              </div>

              {/* =================================================
                  HERO COLLAGE
              ================================================= */}

              <div className="ms-hero-collage">

                <div className="ms-collage-main">
                  <img
                    src="/images/hero/dert.jpg"
                    alt=""
                  />

                  <div className="ms-collage-main-gradient" />

                  <div className="ms-collage-label">
                    <span className="ms-live-dot" />
                    Technology operations
                  </div>
                </div>

                <div className="ms-collage-small ms-collage-small-one">
                  <img
                    src="/images/hero/network.jpg"
                    alt=""
                  />
                </div>

                <div className="ms-collage-small ms-collage-small-two">
                  <img
                    src="/images/hero/shu.jpg"
                    alt=""
                  />
                </div>

                <div className="ms-floating-badge">
                  <div className="ms-badge-icon">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <strong>Always protected</strong>
                    <span>Managed environment</span>
                  </div>
                </div>

                <div className="ms-floating-orb ms-orb-one" />
                <div className="ms-floating-orb ms-orb-two" />

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            PERFORMANCE SECTION
        ===================================================== */}

        <section className="ms-performance">
          <div className="ts-container">

            <div className="ms-performance-card">

              <div className="ms-performance-chart">

                <div className="ms-chart-ring">
                  <div className="ms-chart-inner">
                    <strong>IT</strong>
                    <span>Managed</span>
                  </div>
                </div>

                <div className="ms-chart-label ms-chart-label-one">
                  <span />
                  Visibility
                </div>

                <div className="ms-chart-label ms-chart-label-two">
                  <span />
                  Reliability
                </div>

              </div>

              <div className="ms-performance-copy">

                <div className="ms-eyebrow">
                  <span className="ms-eyebrow-dot" />
                  Built for continuity
                </div>

                <h2>
                  Your technology should
                  <span> work quietly.</span>
                </h2>

                <p>
                  The best managed technology experience is
                  the one your team barely has to think about.
                  We focus on visibility, proactive maintenance,
                  support and recovery so your organization can
                  stay focused on its work.
                </p>

                <div className="ms-performance-stats">

                  <div>
                    <strong>24/7</strong>
                    <span>Technology visibility</span>
                  </div>

                  <div>
                    <strong>08</strong>
                    <span>Managed service areas</span>
                  </div>

                  <div>
                    <strong>01</strong>
                    <span>Connected support system</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CINEMATIC TRANSITION
        ===================================================== */}

        <section className="ms-cinematic">

          <img
            src="/images/managed/technology-team.jpg"
            alt=""
          />

          <div className="ms-cinematic-overlay" />

          <div className="ts-container">
            <div className="ms-cinematic-content">

              <div className="ms-eyebrow">
                <span className="ms-eyebrow-dot" />
                One technology partner
              </div>

              <h2>
                From the workstation
                <br />
                to the <span>network.</span>
              </h2>

              <p>
                One connected approach to managing the
                technology your organization depends on.
              </p>

            </div>
          </div>

        </section>

        {/* =====================================================
            SERVICE INTRO
        ===================================================== */}

        <section className="ms-services-intro">

          <div className="ts-container">

            <div className="ms-services-intro-grid">

              <div>
                <div className="ms-eyebrow">
                  <span className="ms-eyebrow-dot" />
                  The managed services system
                </div>

                <h2>
                  Eight layers of
                  <span> support.</span>
                </h2>
              </div>

              <p>
                From desktop support to backup and recovery,
                Thinksocially brings the essential pieces of
                your technology environment together under
                one managed services approach.
              </p>

            </div>

          </div>

        </section>

        {/* =====================================================
            SERVICE SECTIONS
        ===================================================== */}

        {services.map((service) => (
          <ServiceSection
            key={service.id}
            service={service}
          />
        ))}

        {/* =====================================================
            BACKUP LIVE STATUS
        ===================================================== */}

        <section className="ms-backup-status">

          <div className="ts-container">

            <div className="ms-backup-card">

              <div className="ms-backup-header">

                <div>
                  <div className="ms-eyebrow">
                    <span className="ms-eyebrow-dot" />
                    Live backup environment
                  </div>

                  <h2>
                    Your data is
                    <span> moving safely.</span>
                  </h2>
                </div>

                <div className="ms-live-pill">
                  <span />
                  LIVE
                </div>

              </div>

              <div className="ms-backup-flow">

                <div className="ms-backup-node">
                  <Cloud size={20} />
                  <span>Cloud</span>
                </div>

                <div className="ms-backup-trace">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="ms-backup-node">
                  <HardDrive size={20} />
                  <span>Backup</span>
                </div>

                <div className="ms-backup-trace">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="ms-backup-node">
                  <ShieldCheck size={20} />
                  <span>Protected</span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            ROCKET CTA  (new animated rocket)
        ===================================================== */}

        <RocketSection />

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          id="contact"
          className="ms-final-cta"
        >
          <div className="ts-container">

            <div className="ms-final-card">

              <div>
                <div className="ms-eyebrow">
                  <span className="ms-eyebrow-dot" />
                  Ready when you are
                </div>

                <h2>
                  Let's make your
                  <span> technology simpler.</span>
                </h2>
              </div>

              <a
                href="/contact"
                className="ms-primary-button"
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