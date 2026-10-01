"use client";

import { useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Compass,
  Laptop,
  Lightbulb,
  LineChart,
  Move3D,
  Network,
  Phone,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================================================
   SERVICE DATA
   ========================================================= */

const services = [
  {
    number: "01",
    title: "IT Strategy",
    description:
      "Forward-thinking technology assessments that help your organization understand its current environment, plan for the next 12 months, and prepare for the future.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Business Continuity Planning",
    description:
      "Prepare your organization for unexpected events with practical contingency planning, risk assessment, and recovery strategies.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Design, develop, and deploy websites and web applications that bring your digital presence and marketing channels together.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Application Development",
    description:
      "Turn unique business requirements into purpose-built software applications designed around the way your organization works.",
    icon: Laptop,
  },
  {
    number: "05",
    title: "Mobile App Development",
    description:
      "Build modern mobile applications for smartphones and tablets using native and modern JavaScript-based technologies.",
    icon: Smartphone,
  },
];

/* =========================================================
   SECTION DATA
   ========================================================= */

const professionalSections = [
  {
    id: "it-strategy",
    eyebrow: "01 / IT STRATEGY",
    title: "Technology decisions built for where you're going.",
    description:
      "Thinksocially takes a forward-thinking approach towards IT Strategy, with technology assessments of your current state, your 12-month outlook, and likely trends farther into the future.",
    paragraphs: [
      "The current-state assessment examines your information technology environment and identifies immediate changes that may be needed across infrastructure, business applications, remote employee enablement, development tools, security, and disaster recovery.",
      "The 12-month view expands that assessment into IT governance and identifies opportunities to better leverage technology for growth. Looking further ahead, the future-state view considers emerging technologies and concepts that may eventually benefit your organization.",
    ],
    bullets: [
      "Business continuity and disaster recovery planning",
      "IT decision-making with leadership and management",
      "IT security, detection, and prevention",
      "Digital marketing and brand development",
      "Customer Relationship Management systems",
      "Internal workforce collaboration",
    ],
    image: "/images/hero/startegy.jpg",
    icon: Compass,
  },
  {
    id: "business-continuity",
    eyebrow: "02 / BUSINESS CONTINUITY",
    title: "Be ready when the unexpected happens.",
    description:
      "Thinksocially helps you anticipate and plan for recovery from unexpected disasters and business disruptions.",
    paragraphs: [
      "We explore the range of potential risk scenarios that your business may face and create a plan for situations including fires, natural disasters, and other physical events.",
      "We also help establish a team to address problems as they arise and determine a process for overcoming disruption. Strategic conversations focus on business priorities, risk, and operating choices under disaster scenarios.",
    ],
    bullets: [
      "Business risk and scenario planning",
      "Disaster recovery preparation",
      "Emergency response processes",
      "Strategic operating decisions",
    ],
    image: "/images/hero/busi.jpg",
    icon: ShieldCheck,
  },
  {
    id: "web-development",
    eyebrow: "03 / WEB DEVELOPMENT",
    title: "Build a digital presence that works for your business.",
    description:
      "Having a website that speaks to clients and potential clients is a cornerstone of a company's marketing plan.",
    paragraphs: [
      "Thinksocially approaches web development as more than creating an electronic business card. A strong website should work together with the broader digital presence of an organization.",
      "Websites, social media, blogs, and other evolving marketing channels can work together to strengthen your brand and create a more connected digital experience.",
    ],
    bullets: [
      "Modern business websites",
      "Web applications",
      "Digital brand experiences",
      "Connected marketing channels",
    ],
    image: "/images/hero/web.jpg",
    icon: Code2,
  },
  {
    id: "application-development",
    eyebrow: "04 / APPLICATION DEVELOPMENT",
    title: "Software designed around the way you work.",
    description:
      "Sometimes a business function needs to be computerized and an existing application simply does not fit the job.",
    paragraphs: [
      "Thinksocially can help you think through what the application should do, how it should work, and how it can fit into your organization.",
      "Our teams are capable of handling end-to-end design, development, and deployment of software applications to fit enterprise needs.",
    ],
    bullets: [
      "Business process applications",
      "Custom software solutions",
      "End-to-end application development",
      "Design, development, and deployment",
    ],
    image: "/images/hero/app.jpg",
    icon: Laptop,
  },
  {
    id: "mobile-app-development",
    eyebrow: "05 / MOBILE APP DEVELOPMENT",
    title: "Turn your business idea into a mobile experience.",
    description:
      "Like application development, sometimes you need to create an application for smartphones or tablets that connects directly to your business.",
    paragraphs: [
      "Thinksocially can discuss your idea, propose an approach to getting it developed, and arrange for the programming to occur.",
      "The solutions team works across the application development life cycle, helping move an idea from concept through development and installation.",
    ],
    bullets: [
      "Smartphone applications",
      "Tablet applications",
      "Native and universal experiences",
      "Modern JavaScript-based frameworks",
    ],
    image: "/images/hero/aapl.jpg",
    icon: Smartphone,
  },
];

/* =========================================================
   CONSTELLATION BACKGROUND
   ========================================================= */

function ServiceConstellation() {
  return (
    <div className="ps-constellation" aria-hidden="true">
      <span className="ps-star ps-star-1" />
      <span className="ps-star ps-star-2" />
      <span className="ps-star ps-star-3" />
      <span className="ps-star ps-star-4" />
      <span className="ps-star ps-star-5" />
      <span className="ps-star ps-star-6" />
      <span className="ps-star ps-star-7" />
      <span className="ps-star ps-star-8" />
      <span className="ps-star ps-star-9" />

      <span className="ps-connection ps-line-1" />
      <span className="ps-connection ps-line-2" />
      <span className="ps-connection ps-line-3" />
      <span className="ps-connection ps-line-4" />
      <span className="ps-connection ps-line-5" />
      <span className="ps-connection ps-line-6" />
      <span className="ps-connection ps-line-7" />
    </div>
  );
}

/* =========================================================
   SERVICE CARDS
   ========================================================= */

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const Icon = service.icon;

  return (
    <a
      href={`#${service.title
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll("&", "")}`}
      className="ps-service-card"
    >
      <div className="ps-service-card-top">
        <span className="ps-service-number">{service.number}</span>

        <div className="ps-service-icon">
          <Icon size={21} strokeWidth={1.7} />
        </div>
      </div>

      <div className="ps-service-card-content">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>

      <div className="ps-service-card-arrow">
        <ArrowDownRight size={18} />
      </div>
    </a>
  );
}

/* =========================================================
   INTERACTIVE PHONE
   ========================================================= */

function InteractivePhone() {
  const phoneRef = useRef<HTMLDivElement>(null);

  const [rotation, setRotation] = useState({
    x: -10,
    y: -22,
  });

  const [dragging, setDragging] = useState(false);

  const lastPointer = useRef({
    x: 0,
    y: 0,
  });

  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    setDragging(true);

    lastPointer.current = {
      x: event.clientX,
      y: event.clientY,
    };

    phoneRef.current?.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!dragging) return;

    const deltaX = event.clientX - lastPointer.current.x;
    const deltaY = event.clientY - lastPointer.current.y;

    lastPointer.current = {
      x: event.clientX,
      y: event.clientY,
    };

    setRotation((current) => ({
      x: Math.max(-35, Math.min(35, current.x - deltaY * 0.35)),
      y: current.y + deltaX * 0.45,
    }));
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    setDragging(false);

    try {
      phoneRef.current?.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already have been released.
    }
  };

  const resetPhone = () => {
    setRotation({
      x: -10,
      y: -22,
    });
  };

  return (
    <section className="ps-phone-section">
      <div className="ps-phone-glow ps-phone-glow-one" />
      <div className="ps-phone-glow ps-phone-glow-two" />

      <div className="ps-phone-grid" />

      <div className="ps-phone-inner">
        <div className="ps-phone-copy">
          <span className="ps-eyebrow">
            <Sparkles size={14} />
            DIGITAL EXPERIENCES
          </span>

          <h2>
            Ideas deserve
            <span> a great interface.</span>
          </h2>

          <p>
            From business applications to mobile experiences,
            professional technology should feel intuitive, useful,
            and beautifully designed.
          </p>

          <div className="ps-phone-feature-list">
            <div>
              <Check size={15} />
              <span>Purpose-built experiences</span>
            </div>

            <div>
              <Check size={15} />
              <span>Modern technology</span>
            </div>

            <div>
              <Check size={15} />
              <span>Designed around your business</span>
            </div>
          </div>

          <button
            type="button"
            className="ps-reset-phone"
            onClick={resetPhone}
          >
            <RefreshCw size={15} />
            Reset view
          </button>
        </div>

        <div className="ps-phone-stage">
          <div className="ps-phone-orbit ps-orbit-one" />
          <div className="ps-phone-orbit ps-orbit-two" />

          <div className="ps-phone-shadow" />

          <div
            ref={phoneRef}
            className={`ps-phone-device ${
              dragging ? "ps-phone-dragging" : ""
            }`}
            style={{
              transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => setDragging(false)}
          >
            <div className="ps-phone-side" />

            <div className="ps-phone-screen">
              <div className="ps-phone-status">
                <span>9:41</span>
                <span>● ● ▮</span>
              </div>

              <div className="ps-phone-notch" />

              <div className="ps-phone-screen-content">
                <span className="ps-phone-small-label">
                  THINKSOCIALLY
                </span>

                <h3>
                  Build
                  <br />
                  something
                  <br />
                  <span>meaningful.</span>
                </h3>

                <div className="ps-phone-chart">
                  <span className="ps-chart-bar bar-one" />
                  <span className="ps-chart-bar bar-two" />
                  <span className="ps-chart-bar bar-three" />
                  <span className="ps-chart-bar bar-four" />
                  <span className="ps-chart-bar bar-five" />
                </div>

                <div className="ps-phone-bottom-card">
                  <div className="ps-phone-bottom-icon">
                    <Rocket size={15} />
                  </div>

                  <div>
                    <strong>Project growth</strong>
                    <small>+24.8%</small>
                  </div>
                </div>
              </div>

              <div className="ps-phone-home-indicator" />
            </div>
          </div>

          <div className="ps-phone-floating-tag ps-phone-tag-one">
            <Code2 size={14} />
            <span>Build</span>
          </div>

          <div className="ps-phone-floating-tag ps-phone-tag-two">
            <Target size={14} />
            <span>Launch</span>
          </div>

          <div className="ps-phone-floating-tag ps-phone-tag-three">
            <LineChart size={14} />
            <span>Scale</span>
          </div>

          <div className="ps-phone-instruction">
            <Move3D size={14} />
            <span>Drag to rotate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTENT SECTION
   ========================================================= */

function ProfessionalServiceSection({
  section,
  reverse,
}: {
  section: (typeof professionalSections)[number];
  reverse?: boolean;
}) {
  const Icon = section.icon;

  return (
    <section
      id={section.id}
      className={`ps-content-section ${
        reverse ? "ps-content-section-reverse" : ""
      }`}
    >
      <div className="ps-content-container">
        <div className="ps-content-copy">
          <div className="ps-section-eyebrow">
            <span>{section.eyebrow}</span>
          </div>

          <div className="ps-section-icon">
            <Icon size={21} strokeWidth={1.6} />
          </div>

          <h2>{section.title}</h2>

          <p className="ps-section-lead">
            {section.description}
          </p>

          {section.paragraphs.map((paragraph) => (
            <p className="ps-section-paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}

          <div className="ps-section-bullets">
            {section.bullets.map((bullet) => (
              <div className="ps-section-bullet" key={bullet}>
                <span>
                  <Check size={13} />
                </span>

                <p>{bullet}</p>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="ps-section-link"
          >
            Discuss your project
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="ps-content-visual">
          <div className="ps-image-glow" />

          <div className="ps-image-frame">
            <img
              src={section.image}
              alt={section.title}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="ps-image-overlay" />

            <div className="ps-image-label">
              <div className="ps-image-label-icon">
                <Icon size={16} />
              </div>

              <div>
                <strong>{section.title}</strong>
                <small>Professional services</small>
              </div>
            </div>

            <div className="ps-image-corner ps-image-corner-one" />
            <div className="ps-image-corner ps-image-corner-two" />
          </div>

          <div className="ps-visual-status">
            <span className="ps-status-dot" />
            <span>Technology, strategy &amp; execution</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function ProfessionalServicesPage() {
  return (
    <>
      <Navbar />

      <main className="ps-page">
        {/* =====================================================
            HERO
            ===================================================== */}

        <section className="ps-hero">
          <div className="ps-hero-background" />

          <div className="ps-hero-grid" />

          <div className="ps-hero-container">
            <div className="ps-hero-copy">
              <div className="ps-eyebrow">
                <span className="ps-eyebrow-dot" />
                PROFESSIONAL SERVICES
              </div>

              <h1>
                Turn technology
                <br />
                into your
                <span> advantage.</span>
              </h1>

              <p>
                Design and development of state-of-the-art
                solutions for your enterprise — from IT strategy
                and business continuity to web, application, and
                mobile development.
              </p>

              <div className="ps-hero-actions">
                <a
                  href="#services"
                  className="ps-primary-button"
                >
                  Explore services
                  <ArrowDownRight size={18} />
                </a>

                <a
                  href="/contact"
                  className="ps-secondary-button"
                >
                  Start a conversation
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="ps-hero-trust">
                <div className="ps-trust-icon">
                  <BriefcaseBusiness size={17} />
                </div>

                <div>
                  <strong>Strategy. Development. Delivery.</strong>
                  <span>
                    Technology designed around your organization.
                  </span>
                </div>
              </div>
            </div>

            <div className="ps-hero-visual">
              <div className="ps-hero-photo-decoration ps-decoration-one" />
              <div className="ps-hero-photo-decoration ps-decoration-two" />

              <div className="ps-hero-image-frame">
                <img
                  src="/images/hero/pors.jpg"
                  alt="Professional technology services"
                />

                <div className="ps-hero-image-overlay" />

                <div className="ps-hero-floating-badge ps-hero-badge-one">
                  <div className="ps-floating-icon">
                    <Lightbulb size={16} />
                  </div>

                  <div>
                    <strong>Strategic thinking</strong>
                    <small>Built around your goals</small>
                  </div>
                </div>

                <div className="ps-hero-floating-badge ps-hero-badge-two">
                  <div className="ps-floating-icon">
                    <Code2 size={16} />
                  </div>

                  <div>
                    <strong>Digital development</strong>
                    <small>From concept to deployment</small>
                  </div>
                </div>

                <div className="ps-hero-floating-mini">
                  <span className="ps-live-dot" />
                  <span>Enterprise technology</span>
                </div>
              </div>

              <div className="ps-hero-orb ps-orb-one" />
              <div className="ps-hero-orb ps-orb-two" />
            </div>
          </div>
        </section>

        {/* =====================================================
            FIVE SERVICE CARDS
            ===================================================== */}

        <section
          id="services"
          className="ps-services-section"
        >
          <ServiceConstellation />

          <div className="ps-services-container">
            <div className="ps-services-heading">
              <span className="ps-eyebrow">
                <Sparkles size={14} />
                WHAT WE BUILD
              </span>

              <h2>
                Five capabilities.
                <span> One technology partner.</span>
              </h2>

              <p>
                From strategic planning to the applications your
                teams and customers use every day.
              </p>
            </div>

            <div className="ps-services-grid">
              {services.map((service) => (
                <ServiceCard
                  key={service.number}
                  service={service}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            INTERACTIVE PHONE
            ===================================================== */}

        <InteractivePhone />

        {/* =====================================================
            SERVICE SECTIONS
            ===================================================== */}

        {professionalSections.map((section, index) => (
          <ProfessionalServiceSection
            key={section.id}
            section={section}
            reverse={index % 2 === 1}
          />
        ))}

        {/* =====================================================
            FINAL CTA
            ===================================================== */}

        <section className="ps-final-cta">
          <div className="ps-final-cta-glow" />

          <div className="ps-final-cta-content">
            <span className="ps-eyebrow">
              <Sparkles size={14} />
              LET&apos;S BUILD
            </span>

            <h2>
              Have a technology
              <span> challenge?</span>
            </h2>

            <p>
              Let&apos;s turn your requirements into a solution
              designed around your organization.
            </p>

            <a
              href="/contact"
              className="ps-primary-button"
            >
              Talk to Thinksocially
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}