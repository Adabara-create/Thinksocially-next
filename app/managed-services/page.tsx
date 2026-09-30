"use client";

import type { CSSProperties, MouseEvent } from "react";

import {
  Monitor,
  Server,
  Network,
  Activity,
  Wrench,
  HardDrive,
  ClipboardCheck,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   MANAGED SERVICES — same 8 services as thinksocially.com,
   same card structure: title / divider / description / link
   ============================================================ */

const services = [
  {
    id: "desktop-support",
    title: "Desktop Support",
    description:
      "Thinksocially helps you identify the best desktop hardware and software for your goals.",
    icon: Monitor,
  },
  {
    id: "server-support",
    title: "Server Support",
    description:
      "Thinksocially develops your technology architecture; and procures, installs, and configures your servers.",
    icon: Server,
  },
  {
    id: "network-support",
    title: "Network Support",
    description:
      "Thinksocially establishes, configures, and maintains networks of all sizes.",
    icon: Network,
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description:
      "Thinksocially monitors the health of all of your computers and network equipment to ensure their ongoing reliability.",
    icon: Activity,
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance",
    description:
      "Thinksocially performs proactive maintenance to keep your hardware and software in working order.",
    icon: Wrench,
  },
  {
    id: "backup-recovery",
    title: "Backup and Recovery",
    description:
      "Thinksocially sets up routine backups to protect against unexpected failures, spyware, and viruses.",
    icon: HardDrive,
  },
  {
    id: "it-sla-mgmt",
    title: "SLA Management",
    description:
      "Thinksocially establishes customized SLAs with all of our clients, and between our clients and their cloud technology vendors.",
    icon: ClipboardCheck,
  },
  {
    id: "help-desk",
    title: "Help Desk",
    description:
      "Thinksocially provides prompt and expert Help Desk service for dealing with any unexpected system or service interruption issues.",
    icon: Headphones,
  },
];

/* Cursor-follow spotlight (sets --mx / --my on the hovered card) */
function trackPointer(event: MouseEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();

  event.currentTarget.style.setProperty(
    "--mx",
    `${event.clientX - rect.left}px`
  );

  event.currentTarget.style.setProperty(
    "--my",
    `${event.clientY - rect.top}px`
  );
}

export default function ManagedServicesPage() {
  return (
    <>
      {/* ===================================================
          SHARED NAVBAR
          =================================================== */}

      <Navbar />

      {/* ===================================================
          MAIN CONTENT
          =================================================== */}

      <main id="main-content">
        <section
          id="hero"
          className="ts-hero ts-ms-hero"
          aria-labelledby="ms-hero-title"
        >
          <div
            className="ts-hero-atmosphere"
            aria-hidden="true"
          />

          <div className="ts-container">
            <div className="ts-hero-grid">

              {/* ===================================================
                  LEFT — COPY
                  =================================================== */}

              <div className="ts-hero-copy">

                <div className="ts-eyebrow">
                  <span className="ts-eyebrow-line" />
                  <span>Managed services</span>
                </div>

                <h1
                  id="ms-hero-title"
                  className="ts-display"
                >
                  Managed Services <span>by Thinksocially</span>
                </h1>

                <p className="ts-hero-description">
                  Oversight and support for all of your
                  devices, servers, and networks.
                </p>

                <div className="ts-hero-actions">

                  <a
                    href="#desktop-support"
                    className="ts-button ts-button-primary"
                  >
                    Explore services
                  </a>

                  <a
                    href="/contact"
                    className="ts-button ts-button-secondary"
                  >
                    Talk to ThinkSocially
                  </a>

                </div>

              </div>

              {/* ===================================================
                  RIGHT — SERVICES SHOWCASE
                  =================================================== */}

              <div className="ts-ms-showcase">

                {/* Optional soft photo behind the cards.
                    Put your file at:
                    public/images/managed/engineers.png
                */}

                <img
                  className="ts-ms-showcase-bg"
                  src="/images/managed/engineers.png"
                  alt=""
                  aria-hidden="true"
                />

                <div
                  className="ts-ms-showcase-glow ts-ms-showcase-glow-one"
                  aria-hidden="true"
                />

                <div
                  className="ts-ms-showcase-glow ts-ms-showcase-glow-two"
                  aria-hidden="true"
                />

                <div className="ts-ms-grid">

                  {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <article
                        key={service.id}
                        id={service.id}
                        className="ts-ms-card"
                        onMouseMove={trackPointer}
                        style={
                          { "--i": index } as CSSProperties
                        }
                      >

                        <div className="ts-ms-card-top">

                          <span
                            className="ts-ms-card-icon"
                            aria-hidden="true"
                          >
                            <Icon
                              size={17}
                              strokeWidth={1.7}
                            />
                          </span>

                          <span
                            className="ts-ms-card-index"
                            aria-hidden="true"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                        </div>

                        <h3 className="ts-ms-card-title">
                          {service.title}
                        </h3>

                        <span
                          className="ts-ms-divider"
                          aria-hidden="true"
                        />

                        <p className="ts-ms-card-text">
                          {service.description}
                        </p>

                        <a
                          href={`#${service.id}`}
                          className="ts-ms-card-link"
                          aria-label={`Learn more about ${service.title}`}
                        >
                          <span>Learn more</span>

                          <ArrowUpRight
                            size={14}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </a>

                      </article>
                    );
                  })}

                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      {/* ===================================================
          SHARED FOOTER
          =================================================== */}

      <Footer />
    </>
  );
}