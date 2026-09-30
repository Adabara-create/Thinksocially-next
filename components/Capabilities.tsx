"use client";

import { useState } from "react";
import Link from "next/link";

type Capability =
  | "managed"
  | "cloud"
  | "professional"
  | "security";

const capabilityData = {
  managed: {
    index: "01",
    icon: "activity",
    title: "Managed Services",
  },
  cloud: {
    index: "02",
    icon: "cloud",
    title: "Cloud Computing",
  },
  professional: {
    index: "03",
    icon: "layers-3",
    title: "Professional Services",
  },
  security: {
    index: "04",
    icon: "shield-check",
    title: "Cybersecurity",
  },
};

export default function Capabilities() {
  const [activeCapability, setActiveCapability] =
    useState<Capability>("managed");

  const activeData = capabilityData[activeCapability];

  const capabilities: Capability[] = [
    "managed",
    "cloud",
    "professional",
    "security",
  ];

  const handleCapabilityChange = (capability: Capability) => {
    setActiveCapability(capability);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    if (
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      return;
    }

    event.preventDefault();

    let nextIndex =
      event.key === "ArrowRight"
        ? currentIndex + 1
        : currentIndex - 1;

    if (nextIndex < 0) {
      nextIndex = capabilities.length - 1;
    }

    if (nextIndex >= capabilities.length) {
      nextIndex = 0;
    }

    const nextCapability = capabilities[nextIndex];

    setActiveCapability(nextCapability);

    const nextButton = document.querySelector<HTMLButtonElement>(
      `[data-capability="${nextCapability}"]`
    );

    nextButton?.focus();
  };

  return (
    <section
      id="capabilities"
      className="ts-section ts-section-capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="ts-container">

        {/* =====================================================
            SECTION HEADER
            ====================================================== */}

        <div
          className="ts-section-header"
          data-reveal
        >
          <div>
            <p className="ts-section-number">
              03 / CAPABILITIES
            </p>

            <h2
              id="capabilities-title"
              className="ts-heading-xl"
            >
              The technology
              <br />
              behind the business.
            </h2>
          </div>

          <p>
            From managed infrastructure to cloud,
            development, and cybersecurity,
            ThinkSocially provides a connected
            technology service environment.
          </p>
        </div>

        {/* =====================================================
            CAPABILITY SHELL
            ====================================================== */}

        <div
          className="ts-capability-shell"
          data-reveal
        >

          {/* ===================================================
              VISUAL
              ==================================================== */}

          <div className="ts-capability-visual">

            <div
              className="ts-capability-visual-grid"
              aria-hidden="true"
            />

            <div
              className="ts-capability-visual-glow"
              aria-hidden="true"
            />

            <div className="ts-capability-visual-content">

              <span className="ts-capability-visual-index">
                {activeData.index}
              </span>

              <div
                className="ts-capability-visual-icon"
                data-capability-icon
              >
                <i
                  data-lucide={activeData.icon}
                  aria-hidden="true"
                />
              </div>

              <div>
                <p>
                  TECHNOLOGY CAPABILITY
                </p>

                <strong data-capability-visual-title>
                  {activeData.title}
                </strong>
              </div>

            </div>

            <div className="ts-capability-visual-footer">

              <span>
                ThinkSocially
              </span>

              <span>
                <span
                  className="ts-live-dot"
                  aria-hidden="true"
                />
                Active capability
              </span>

            </div>

          </div>

          {/* ===================================================
              CONTENT
              ==================================================== */}

          <div className="ts-capability-content">

            {/* =================================================
                TABS
                ================================================== */}

            <div
              className="ts-capability-tabs"
              role="tablist"
              aria-label="ThinkSocially capabilities"
            >

              {/* MANAGED SERVICES */}

              <button
                type="button"
                className={`ts-capability-tab ${
                  activeCapability === "managed"
                    ? "is-active"
                    : ""
                }`}
                role="tab"
                aria-selected={
                  activeCapability === "managed"
                }
                aria-controls="capability-managed"
                data-capability="managed"
                tabIndex={
                  activeCapability === "managed"
                    ? 0
                    : -1
                }
                onClick={() =>
                  handleCapabilityChange("managed")
                }
                onKeyDown={(event) =>
                  handleKeyDown(event, 0)
                }
              >
                <span>01</span>
                Managed Services
              </button>

              {/* CLOUD COMPUTING */}

              <button
                type="button"
                className={`ts-capability-tab ${
                  activeCapability === "cloud"
                    ? "is-active"
                    : ""
                }`}
                role="tab"
                aria-selected={
                  activeCapability === "cloud"
                }
                aria-controls="capability-cloud"
                data-capability="cloud"
                tabIndex={
                  activeCapability === "cloud"
                    ? 0
                    : -1
                }
                onClick={() =>
                  handleCapabilityChange("cloud")
                }
                onKeyDown={(event) =>
                  handleKeyDown(event, 1)
                }
              >
                <span>02</span>
                Cloud Computing
              </button>

              {/* PROFESSIONAL SERVICES */}

              <button
                type="button"
                className={`ts-capability-tab ${
                  activeCapability === "professional"
                    ? "is-active"
                    : ""
                }`}
                role="tab"
                aria-selected={
                  activeCapability === "professional"
                }
                aria-controls="capability-professional"
                data-capability="professional"
                tabIndex={
                  activeCapability === "professional"
                    ? 0
                    : -1
                }
                onClick={() =>
                  handleCapabilityChange("professional")
                }
                onKeyDown={(event) =>
                  handleKeyDown(event, 2)
                }
              >
                <span>03</span>
                Professional Services
              </button>

              {/* CYBERSECURITY */}

              <button
                type="button"
                className={`ts-capability-tab ${
                  activeCapability === "security"
                    ? "is-active"
                    : ""
                }`}
                role="tab"
                aria-selected={
                  activeCapability === "security"
                }
                aria-controls="capability-security"
                data-capability="security"
                tabIndex={
                  activeCapability === "security"
                    ? 0
                    : -1
                }
                onClick={() =>
                  handleCapabilityChange("security")
                }
                onKeyDown={(event) =>
                  handleKeyDown(event, 3)
                }
              >
                <span>04</span>
                Cybersecurity
              </button>

            </div>

            {/* =================================================
                MANAGED SERVICES
                ================================================== */}

            <article
              id="capability-managed"
              className={`ts-capability-detail ${
                activeCapability === "managed"
                  ? "is-active"
                  : ""
              }`}
              data-capability-panel="managed"
              role="tabpanel"
              aria-hidden={
                activeCapability !== "managed"
              }
              hidden={
                activeCapability !== "managed"
              }
            >
              <p className="ts-capability-eyebrow">
                Managed Services
              </p>

              <h3>
                Keep the technology
                <br />
                running.
              </h3>

              <p>
                Oversight and support for devices,
                servers, networks, and cloud systems,
                with monitoring, preventive maintenance,
                backup and recovery, and SLA management.
              </p>

              <Link
                href="/managed-services"
                className="ts-button ts-button-secondary"
              >
                Explore Managed Services

                <i
                  data-lucide="arrow-up-right"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* =================================================
                CLOUD COMPUTING
                ================================================== */}

            <article
              id="capability-cloud"
              className={`ts-capability-detail ${
                activeCapability === "cloud"
                  ? "is-active"
                  : ""
              }`}
              data-capability-panel="cloud"
              role="tabpanel"
              aria-hidden={
                activeCapability !== "cloud"
              }
              hidden={
                activeCapability !== "cloud"
              }
            >
              <p className="ts-capability-eyebrow">
                Cloud Computing
              </p>

              <h3>
                Build for a more
                <br />
                connected environment.
              </h3>

              <p>
                Design, management, and implementation
                for systems in the cloud, including cloud
                solutions, legacy system upgrades,
                data migration, and VoIP.
              </p>

              <Link
                href="/cloud-computing"
                className="ts-button ts-button-secondary"
              >
                Explore Cloud Computing

                <i
                  data-lucide="arrow-up-right"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* =================================================
                PROFESSIONAL SERVICES
                ================================================== */}

            <article
              id="capability-professional"
              className={`ts-capability-detail ${
                activeCapability === "professional"
                  ? "is-active"
                  : ""
              }`}
              data-capability-panel="professional"
              role="tabpanel"
              aria-hidden={
                activeCapability !== "professional"
              }
              hidden={
                activeCapability !== "professional"
              }
            >
              <p className="ts-capability-eyebrow">
                Professional Services
              </p>

              <h3>
                Turn technology
                <br />
                into capability.
              </h3>

              <p>
                IT strategy, business continuity planning,
                web development, application development,
                mobile app development, and annual IT
                assessments and upgrades.
              </p>

              <Link
                href="/professional-services"
                className="ts-button ts-button-secondary"
              >
                Explore Professional Services

                <i
                  data-lucide="arrow-up-right"
                  aria-hidden="true"
                />
              </Link>
            </article>

            {/* =================================================
                CYBERSECURITY
                ================================================== */}

            <article
              id="capability-security"
              className={`ts-capability-detail ${
                activeCapability === "security"
                  ? "is-active"
                  : ""
              }`}
              data-capability-panel="security"
              role="tabpanel"
              aria-hidden={
                activeCapability !== "security"
              }
              hidden={
                activeCapability !== "security"
              }
            >
              <p className="ts-capability-eyebrow">
                Compliance &amp; Cybersecurity
              </p>

              <h3>
                Reduce security
                <br />
                and compliance gaps.
              </h3>

              <p>
                Cybersecurity risk assessment,
                IT governance, risk and compliance,
                threat monitoring, detection and response,
                and compliance-based security standards.
              </p>

              <Link
                href="/cybersecurity"
                className="ts-button ts-button-secondary"
              >
                Explore Cybersecurity

                <i
                  data-lucide="arrow-up-right"
                  aria-hidden="true"
                />
              </Link>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}