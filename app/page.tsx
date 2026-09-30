"use client";

import dynamic from "next/dynamic";
import {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Search,
  Layers,
  Settings,
  Activity,
  Server,
  Cloud,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ============================================================
   INTERACTIVE GLOBE
   ============================================================ */

const DynamicGlobe = dynamic(
  () =>
    import("react-globe.gl").then(
      (module) => module.default
    ),
  {
    ssr: false,

    loading: () => (
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "360px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.55)",
          fontSize: "12px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Initializing global network...
      </div>
    ),
  }
);

const Globe = forwardRef<any, any>((props, ref) => {
  return (
    <DynamicGlobe
      {...props}
      ref={ref as React.MutableRefObject<any>}
    />
  );
});

Globe.displayName = "Globe";

/* ============================================================
   GLOBAL TECHNOLOGY LOCATIONS
   ============================================================ */

const technologyNodes = [
  {
    name: "Lagos",
    lat: 6.5244,
    lng: 3.3792,
    category: "West Africa",
  },
  {
    name: "Abuja",
    lat: 9.0765,
    lng: 7.3986,
    category: "West Africa",
  },
  {
    name: "London",
    lat: 51.5074,
    lng: -0.1278,
    category: "Europe",
  },
  {
    name: "New York",
    lat: 40.7128,
    lng: -74.006,
    category: "North America",
  },
  {
    name: "San Francisco",
    lat: 37.7749,
    lng: -122.4194,
    category: "North America",
  },
  {
    name: "Toronto",
    lat: 43.6532,
    lng: -79.3832,
    category: "North America",
  },
  {
    name: "São Paulo",
    lat: -23.5505,
    lng: -46.6333,
    category: "South America",
  },
  {
    name: "Dubai",
    lat: 25.2048,
    lng: 55.2708,
    category: "Middle East",
  },
  {
    name: "Johannesburg",
    lat: -26.2041,
    lng: 28.0473,
    category: "Africa",
  },
  {
    name: "Cairo",
    lat: 30.0444,
    lng: 31.2357,
    category: "Africa",
  },
  {
    name: "Mumbai",
    lat: 19.076,
    lng: 72.8777,
    category: "Asia",
  },
  {
    name: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    category: "Asia",
  },
  {
    name: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    category: "Asia",
  },
  {
    name: "Seoul",
    lat: 37.5665,
    lng: 126.978,
    category: "Asia",
  },
  {
    name: "Sydney",
    lat: -33.8688,
    lng: 151.2093,
    category: "Oceania",
  },
];

/* ============================================================
   GLOBAL CONNECTIONS
   ============================================================ */

const technologyConnections = [
  {
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: 51.5074,
    endLng: -0.1278,
  },
  {
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: 40.7128,
    endLng: -74.006,
  },
  {
    startLat: 6.5244,
    startLng: 3.3792,
    endLat: 37.7749,
    endLng: -122.4194,
  },
  {
    startLat: 9.0765,
    startLng: 7.3986,
    endLat: 25.2048,
    endLng: 55.2708,
  },
  {
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 25.2048,
    endLng: 55.2708,
  },
  {
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 35.6762,
    endLng: 139.6503,
  },
  {
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 37.7749,
    endLng: -122.4194,
  },
  {
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 43.6532,
    endLng: -79.3832,
  },
  {
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 35.6762,
    endLng: 139.6503,
  },
  {
    startLat: 25.2048,
    startLng: 55.2708,
    endLat: 19.076,
    endLng: 72.8777,
  },
  {
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 1.3521,
    endLng: 103.8198,
  },
  {
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 35.6762,
    endLng: 139.6503,
  },
  {
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: -33.8688,
    endLng: 151.2093,
  },
  {
    startLat: -26.2041,
    startLng: 28.0473,
    endLat: 6.5244,
    endLng: 3.3792,
  },
  {
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 40.7128,
    endLng: -74.006,
  },
  {
    startLat: 30.0444,
    startLng: 31.2357,
    endLat: 51.5074,
    endLng: -0.1278,
  },
];

/* ============================================================
   HOME PAGE
   ============================================================ */

export default function Home() {
  const [activeCapability, setActiveCapability] =
    useState(0);

  const globeRef = useRef<any>(null);

  const globeStageRef =
    useRef<HTMLDivElement | null>(null);

  /*
   * Globe made slightly smaller.
   */
  const [globeSize, setGlobeSize] =
    useState(560);

  /* ============================================================
     RESPONSIVE GLOBE SIZE
     ============================================================ */

  useEffect(() => {
    const element = globeStageRef.current;

    if (!element) {
      return;
    }

    const updateGlobeSize = () => {
      const width = element.clientWidth;

      if (!width) {
        return;
      }

      const nextSize = Math.min(
        620,
        Math.max(280, width - 40)
      );

      setGlobeSize(nextSize);
    };

    updateGlobeSize();

    const observer =
      new ResizeObserver(updateGlobeSize);

    observer.observe(element);

    window.addEventListener(
      "resize",
      updateGlobeSize
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "resize",
        updateGlobeSize
      );
    };
  }, []);

  /* ============================================================
     GLOBE CONTROLS
     ============================================================ */

  const configureGlobe = () => {
    const globe = globeRef.current;

    if (!globe) {
      return;
    }

    const controls =
      globe.controls?.();

    if (!controls) {
      return;
    }

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;

    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    controls.enableZoom = true;
    controls.enableRotate = true;

    controls.minDistance = 180;
    controls.maxDistance = 500;
  };

  /* ============================================================
     FALLBACK GLOBE CONTROL INITIALIZATION
     ============================================================ */

  useEffect(() => {
    const timers = [
      window.setTimeout(
        configureGlobe,
        300
      ),
      window.setTimeout(
        configureGlobe,
        1000
      ),
      window.setTimeout(
        configureGlobe,
        2000
      ),
    ];

    return () => {
      timers.forEach((timer) =>
        window.clearTimeout(timer)
      );
    };
  }, []);

  /* ============================================================
     CAPABILITIES
     ============================================================ */

  const capabilities = [
    {
      number: "01",
      title: "Technology Management",
      description:
        "Managed technology services designed around the needs of your organization.",
      link: "/managed-services",
      image: "/images/hero/data.jpg",
      imageAlt: "Technology management",
      icon: Server,
      category: "MANAGED TECHNOLOGY",

      /* DYNAMIC INFORMATION */

      details: [
        "Technology infrastructure management",
        "IT operations and support",
        "Infrastructure monitoring",
        "Technology planning and strategy",
      ],
    },

    {
      number: "02",
      title: "Cloud Infrastructure",
      description:
        "Reliable cloud infrastructure designed for modern organizations.",
      link: "/cloud-computing",
      image:
        "/images/hero/cloud.jpg",
      imageAlt: "Cloud infrastructure",
      icon: Cloud,
      category: "CLOUD INFRASTRUCTURE",

      /* DYNAMIC INFORMATION */

      details: [
        "Cloud infrastructure design",
        "Cloud migration and modernization",
        "Infrastructure scalability",
        "Cloud monitoring and optimization",
      ],
    },

    {
      number: "03",
      title: "Cybersecurity",
      description:
        "Security services designed to protect systems, data, and operations.",
      link: "/cybersecurity",
      image: "/images/hero/cyber.jpg",
      imageAlt: "Cybersecurity",
      icon: ShieldCheck,
      category: "CYBERSECURITY",

      /* DYNAMIC INFORMATION */

      details: [
        "Security monitoring",
        "Infrastructure protection",
        "Risk and vulnerability management",
        "Security strategy and resilience",
      ],
    },

    {
      number: "04",
      title: "Professional Services",
      description:
        "Technology expertise that helps organizations plan, implement, and improve.",
      link: "/professional-services",
      image:
        "/images/hero/prof.jpg",
      imageAlt: "Professional services",
      icon: BriefcaseBusiness,
      category: "PROFESSIONAL SERVICES",

      /* DYNAMIC INFORMATION */

      details: [
        "Technology consulting",
        "Solution architecture",
        "Technology implementation",
        "Digital transformation support",
      ],
    },
  ];

  const currentCapability =
    capabilities[activeCapability];

  const CurrentCapabilityIcon =
    currentCapability.icon;

  return (
    <>
      {/* =======================================================
          NAVIGATION
          ======================================================= */}

      <Navbar />

      {/* =======================================================
          MAIN CONTENT
          ======================================================= */}

      <main id="main-content">

        {/* =====================================================
            HERO
            ===================================================== */}

        <section
          id="hero"
          className="ts-hero"
          aria-labelledby="hero-title"
        >
          <div className="ts-container">

            <div className="ts-hero-grid">

              {/* HERO COPY */}

              <div className="ts-hero-copy">

                <div className="ts-eyebrow">
                  <span className="ts-eyebrow-line" />

                  <span>
                    Technology, thoughtfully engineered.
                  </span>
                </div>

                <h1
                  id="hero-title"
                  className="ts-display"
                >
                  Building your future with technology{" "}
                  <span>today</span>
                </h1>

                <p className="ts-hero-description">
                  ThinkSocially helps organizations build,
                  manage, and secure technology environments
                  that are dependable, practical, and designed
                  for the future.
                </p>

                <div className="ts-hero-actions">

                  <a
                    href="/contact"
                    className="ts-button ts-button-primary"
                  >
                    Talk to ThinkSocially
                  </a>

                  <a
                    href="#capabilities"
                    className="ts-button ts-button-secondary"
                  >
                    Explore capabilities
                  </a>

                </div>

                <div className="ts-hero-meta">

                  <span>
                    Technology management
                  </span>

                  <span>
                    Cloud infrastructure
                  </span>

                  <span>
                    Cybersecurity
                  </span>

                </div>

              </div>

              {/* HERO VISUAL */}

              <div className="ts-hero-visual">

                <div
                  className="ts-hero-visual-glow"
                  aria-hidden="true"
                />

                <div className="ts-hero-image-scene">

                  <div className="ts-hero-image-card">

                    <img
                      src="/images/hero/nana.jpg"
                      alt="ThinkSocially technology environment"
                    />

                    <div
                      className="ts-hero-image-overlay"
                      aria-hidden="true"
                    />

                    <div className="ts-hero-image-top">

                      <span className="ts-hero-image-status">

                        <span
                          className="ts-status-dot"
                          aria-hidden="true"
                        />

                        Operational

                      </span>

                    </div>

                    <div
                      className="ts-hero-image-marker"
                      aria-hidden="true"
                    />

                  </div>

                  <div className="ts-hero-tag ts-hero-tag-complete">

                    <Server
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <span>
                      Infrastructure
                    </span>

                  </div>

                  <div className="ts-hero-tag ts-hero-tag-approved">

                    <ShieldCheck
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <span>
                      Security
                    </span>

                  </div>

                  <div className="ts-hero-tag ts-hero-tag-cloud">

                    <Cloud
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <span>
                      Cloud
                    </span>

                  </div>

                  <div className="ts-hero-tag ts-hero-tag-operational">

                    <Activity
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />

                    <span>
                      Operational
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
            ===================================================== */}

        <section
          id="introduction"
          className="ts-section ts-introduction"
          aria-labelledby="introduction-title"
        >
          <div className="ts-container">

            <div className="ts-introduction-layout">

              <div className="ts-introduction-copy">

                <div className="ts-section-label">
                  <span>01</span>
                  <span>ThinkSocially</span>
                </div>

                <div className="ts-editorial-main">

                  <h2
                    id="introduction-title"
                    className="ts-heading-xl"
                  >
                    Technology should feel{" "}
                    <span>
                      simple, dependable, and intentional.
                    </span>
                  </h2>

                  <div className="ts-editorial-columns">

                    <p>
                      Technology touches every part of a
                      modern organization. When the environment
                      is well designed, people can focus on the
                      work instead of the systems behind it.
                    </p>

                    <p>
                      ThinkSocially brings together technology
                      management, cloud infrastructure,
                      professional services, and cybersecurity
                      into one connected approach.
                    </p>

                  </div>

                </div>

              </div>

              <div className="ts-introduction-visual">

                <div className="ts-introduction-image">

                  <img
                    src="/images/hero/wawa.jpg"
                    alt="ThinkSocially technology environment"
                    loading="lazy"
                  />

                  <div
                    className="ts-introduction-image-overlay"
                    aria-hidden="true"
                  />

                  <div className="ts-introduction-image-label">

                    <span
                      className="ts-status-dot"
                      aria-hidden="true"
                    />

                    <span>
                      Technology, thoughtfully engineered.
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            WIDE IMAGE FEATURE
            ===================================================== */}

        <section
          className="ts-section ts-image-feature"
          aria-labelledby="image-feature-title"
        >
          <div className="ts-container">

            <div
              className="ts-wide-image-card"
              data-reveal
            >

              <div className="ts-wide-image-media">

                <img
                  src="/images/hero/busy.jpg"
                  alt="Technology environment"
                  loading="lazy"
                />

                <div
                  className="ts-wide-image-overlay"
                  aria-hidden="true"
                />

              </div>

              <div className="ts-wide-image-label">

                <span
                  className="ts-status-dot"
                  aria-hidden="true"
                />

                <span>
                  ThinkSocially
                </span>

              </div>

              <div className="ts-wide-image-content">

                <div className="ts-eyebrow">

                  <span className="ts-eyebrow-line" />

                  <span>
                    Technology, thoughtfully engineered.
                  </span>

                </div>

                <h2
                  id="image-feature-title"
                  className="ts-heading-xl"
                >
                  Technology that works{" "}
                  <span>
                    with your business.
                  </span>
                </h2>

                <p>
                  Build a technology environment that
                  supports your people, your operations,
                  and your future.
                </p>

                <a
                  href="/contact"
                  className="ts-button ts-button-primary"
                >
                  Talk to ThinkSocially
                </a>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY EVERYWHERE YOU GO
            ===================================================== */}

        <section
          id="technology-everywhere"
          className="ts-section ts-global-technology-section"
          aria-labelledby="technology-everywhere-title"
        >
          <div className="ts-container">

            <div className="ts-global-technology-header">

              <div className="ts-section-label">

                <span>02</span>

                <span>
                  Technology everywhere you go
                </span>

              </div>

              <div className="ts-global-technology-heading">

                <h2
                  id="technology-everywhere-title"
                  className="ts-heading-xl"
                >
                  Technology is{" "}
                  <span>
                    connected everywhere.
                  </span>
                </h2>

                <p>
                  From infrastructure and cloud systems
                  to cybersecurity and digital operations,
                  modern technology connects organizations
                  across borders, industries, and continents.
                </p>

              </div>

            </div>

            <div className="ts-global-technology-shell">

              <div
                ref={globeStageRef}
                className="ts-global-globe-stage"
                style={{
                  transform: "scale(0.94)",
                  transformOrigin: "center center",
                }}
              >

                <div
                  className="ts-global-globe-glow"
                  aria-hidden="true"
                />

                <div
                  className="ts-global-globe-grid"
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="ts-global-globe-canvas">

                  <Globe
                    ref={globeRef}

                    width={globeSize}
                    height={globeSize}

                    backgroundColor="rgba(0,0,0,0)"

                    globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"

                    bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"

                    showGlobe={true}
                    showAtmosphere={true}

                    atmosphereColor="#4c8dff"
                    atmosphereAltitude={0.18}

                    animateIn={true}

                    waitForGlobeReady={false}

                    enablePointerInteraction={true}
                    showPointerCursor={true}

                    pointsData={technologyNodes}

                    pointLat="lat"
                    pointLng="lng"

                    pointColor={() =>
                      "#5ea0ff"
                    }

                    pointAltitude={0.035}
                    pointRadius={0.34}
                    pointResolution={16}

                    pointsMerge={false}

                    pointLabel={(point: any) => `
                      <div style="
                        padding: 10px 13px;
                        background: rgba(8, 13, 25, 0.94);
                        border: 1px solid rgba(110, 160, 255, 0.35);
                        border-radius: 10px;
                        color: white;
                        font-family: Arial, sans-serif;
                        box-shadow: 0 12px 35px rgba(0,0,0,0.35);
                      ">
                        <strong style="
                          display:block;
                          font-size:12px;
                          letter-spacing:0.08em;
                          text-transform:uppercase;
                        ">
                          ${point.name}
                        </strong>

                        <span style="
                          display:block;
                          margin-top:4px;
                          font-size:10px;
                          color:rgba(255,255,255,0.6);
                        ">
                          ${point.category}
                        </span>
                      </div>
                    `}

                    arcsData={technologyConnections}

                    arcStartLat="startLat"
                    arcStartLng="startLng"
                    arcEndLat="endLat"
                    arcEndLng="endLng"

                    arcColor={() => [
                      "rgba(73, 135, 255, 0.08)",
                      "rgba(73, 135, 255, 0.95)",
                      "rgba(115, 183, 255, 0.15)",
                    ]}

                    arcAltitude={0.22}
                    arcStroke={0.45}

                    arcDashLength={0.45}
                    arcDashGap={1.2}

                    arcDashInitialGap={() =>
                      Math.random() * 2
                    }

                    arcDashAnimateTime={2600}

                    ringsData={technologyNodes}

                    ringLat="lat"
                    ringLng="lng"

                    ringColor={() => [
                      "rgba(91, 154, 255, 0.8)",
                      "rgba(91, 154, 255, 0)",
                    ]}

                    ringMaxRadius={3.2}
                    ringPropagationSpeed={1.2}
                    ringRepeatPeriod={1800}

                    onGlobeReady={() => {

                      window.requestAnimationFrame(() => {
                        configureGlobe();
                      });

                    }}
                  />

                </div>

                <div className="ts-global-globe-hint">

                  <span className="ts-global-globe-hint-icon">
                    ↔
                  </span>

                  <span>
                    Drag to explore
                  </span>

                </div>

                <div className="ts-global-globe-live">

                  <span
                    className="ts-status-dot"
                    aria-hidden="true"
                  />

                  <span>
                    LIVE NETWORK
                  </span>

                </div>

              </div>

              <div className="ts-global-technology-info">

                <div className="ts-global-info-status">

                  <span
                    className="ts-status-dot"
                    aria-hidden="true"
                  />

                  <span>
                    GLOBAL TECHNOLOGY NETWORK
                  </span>

                </div>

                <div className="ts-global-info-main">

                  <span className="ts-mono-label">
                    CONNECTED WORLD
                  </span>

                  <h3>
                    One connected
                    <br />
                    technology
                    <br />
                    environment.
                  </h3>

                  <p>
                    Technology no longer operates in
                    isolated locations. Cloud infrastructure,
                    digital services, security systems, data,
                    and people are connected across the world.
                  </p>

                </div>

                <div className="ts-global-info-stats">

                  <div className="ts-global-stat">

                    <strong>
                      15
                    </strong>

                    <span>
                      Technology hubs
                    </span>

                  </div>

                  <div className="ts-global-stat">

                    <strong>
                      06
                    </strong>

                    <span>
                      Continents connected
                    </span>

                  </div>

                  <div className="ts-global-stat">

                    <strong>
                      ∞
                    </strong>

                    <span>
                      Digital connections
                    </span>

                  </div>

                </div>

                <div className="ts-global-info-footer">

                  <span>
                    INFRASTRUCTURE
                  </span>

                  <span>
                    CLOUD
                  </span>

                  <span>
                    SECURITY
                  </span>

                  <span>
                    OPERATIONS
                  </span>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            CAPABILITIES
            ===================================================== */}

        <section
          id="capabilities"
          className="ts-section ts-capabilities-section"
          aria-labelledby="capabilities-title"
        >
          <div className="ts-container">

            <div className="ts-section-label">
              <span>03</span>
              <span>Our capabilities</span>
            </div>

            <div className="ts-editorial-main">

              <h2
                id="capabilities-title"
                className="ts-heading-xl"
              >
                Technology built around{" "}
                <span>
                  your environment.
                </span>
              </h2>

            </div>

            <div className="ts-capability-panel">

              {/* =================================================
                  DYNAMIC CAPABILITY VISUAL
                  ================================================= */}

              <div className="ts-capability-visual">

                <div className="ts-capability-image is-active">

                  <img
                    src={currentCapability.image}
                    alt={currentCapability.imageAlt}
                    loading="lazy"
                  />

                </div>

                <div
                  className="ts-capability-image-overlay"
                  aria-hidden="true"
                />

                <div
                  className="ts-capability-visual-grid"
                  aria-hidden="true"
                />

                <div className="ts-capability-visual-status">

                  <span
                    className="ts-status-dot"
                    aria-hidden="true"
                  />

                  <span>
                    {currentCapability.category}
                  </span>

                </div>

                {/* =================================================
                    SERVICES CONTAINER
                    (replaces the old icon card)
                    ================================================= */}

                <div
                  key={currentCapability.number}
                  className="ts-capability-services"
                  aria-label={`${currentCapability.title} services`}
                >

                  <div className="ts-capability-services-head">

                    <span>
                      Included services
                    </span>

                    <span>
                      {String(
                        currentCapability.details.length
                      ).padStart(2, "0")}{" "}
                      services
                    </span>

                  </div>

                  <ul className="ts-capability-services-list">

                    {currentCapability.details.map(
                      (detail, index) => (
                        <li
                          className="ts-capability-service"
                          key={detail}
                          style={{
                            animationDelay: `${
                              0.08 + index * 0.07
                            }s`,
                          }}
                        >

                          <span className="ts-capability-service-number">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span>
                            {detail}
                          </span>

                        </li>
                      )
                    )}

                  </ul>

                </div>

                <div className="ts-capability-visual-content">

                  <span>
                    THINKSOCIALLY
                  </span>

                  <strong>
                    {currentCapability.title}
                  </strong>

                </div>

              </div>

              {/* =================================================
                  DYNAMIC CAPABILITY INFORMATION
                  ================================================= */}

              <div className="ts-capability-content">

                {/* CAPABILITY TABS */}

                <div
                  className="ts-capability-tabs"
                  role="tablist"
                  aria-label="ThinkSocially capabilities"
                >

                  {capabilities.map(
                    (capability, index) => {

                      const CapabilityIcon =
                        capability.icon;

                      const isActive =
                        activeCapability === index;

                      return (
                        <button
                          key={capability.number}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          aria-controls={`capability-panel-${capability.number}`}
                          className={`ts-capability-tab ${
                            isActive
                              ? "is-active"
                              : ""
                          }`}
                          onClick={() =>
                            setActiveCapability(index)
                          }
                        >

                          <span className="ts-capability-tab-number">
                            {capability.number}
                          </span>

                          <span className="ts-capability-tab-icon">

                            <CapabilityIcon
                              size={18}
                              strokeWidth={1.7}
                              aria-hidden="true"
                            />

                          </span>

                          <span className="ts-capability-tab-title">
                            {capability.title}
                          </span>

                        </button>
                      );
                    }
                  )}

                </div>

                {/* =================================================
                    ACTIVE INFORMATION
                    ================================================= */}

                <div
                  id={`capability-panel-${currentCapability.number}`}
                  className="ts-capability-copy is-active"
                  role="tabpanel"
                  aria-label={currentCapability.title}
                >

                  <span className="ts-mono-label">
                    {currentCapability.category}
                  </span>

                  <h3>
                    {currentCapability.title}
                  </h3>

                  <p>
                    {currentCapability.description}
                  </p>

                  <a
                    href={currentCapability.link}
                  >
                    Explore service

                    <span aria-hidden="true">
                      {" "}→
                    </span>
                  </a>

                </div>

                {/* =================================================
                    DYNAMIC SUPPORT INFORMATION
                    ================================================= */}

                <div className="ts-capability-support-grid">

                  <div className="ts-capability-support-item">

                    <CurrentCapabilityIcon
                      size={18}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    <span>
                      Integrated expertise
                    </span>

                  </div>

                  <div className="ts-capability-support-item">

                    <Activity
                      size={18}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />

                    <span>
                      Continuous improvement
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY STACK
            ===================================================== */}

        <section
          id="technology-stack"
          className="ts-section ts-stack-section"
          aria-labelledby="technology-stack-title"
        >
          <div className="ts-container">

            <div className="ts-stack-header">

              <div>

                <div className="ts-eyebrow">

                  <span className="ts-eyebrow-line" />

                  <span>
                    Technology landscape
                  </span>

                </div>

                <h2
                  id="technology-stack-title"
                  className="ts-heading-lg"
                >
                  Modern technology,{" "}
                  <span>
                    thoughtfully selected.
                  </span>
                </h2>

              </div>

              <p>
                A broad technology toolkit gives flexibility
                across web development, applications,
                infrastructure, backend systems, mobile
                experiences, and modern developer workflows.
              </p>

            </div>

            <div
              className="ts-tech-marquee"
              aria-label="Technology and development tools"
            >

              <div className="ts-tech-track ts-tech-track-one">

                <div className="ts-tech-list">

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/javascript/F7DF1E"
                      alt="JavaScript"
                      loading="lazy"
                    />

                    <div>
                      <strong>JavaScript</strong>
                      <span>Language</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/typescript/3178C6"
                      alt="TypeScript"
                      loading="lazy"
                    />

                    <div>
                      <strong>TypeScript</strong>
                      <span>Language</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/python/3776AB"
                      alt="Python"
                      loading="lazy"
                    />

                    <div>
                      <strong>Python</strong>
                      <span>Language</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/java/ED8B00"
                      alt="Java"
                      loading="lazy"
                    />

                    <div>
                      <strong>Java</strong>
                      <span>Language</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/cplusplus/00599C"
                      alt="C++"
                      loading="lazy"
                    />

                    <div>
                      <strong>C++</strong>
                      <span>Language</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/dart/0175C2"
                      alt="Dart"
                      loading="lazy"
                    />

                    <div>
                      <strong>Dart</strong>
                      <span>Language</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/react/61DAFB"
                      alt="React"
                      loading="lazy"
                    />

                    <div>
                      <strong>React</strong>
                      <span>Framework</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/nextdotjs/FFFFFF"
                      alt="Next.js"
                      loading="lazy"
                    />

                    <div>
                      <strong>Next.js</strong>
                      <span>Framework</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/flutter/02569B"
                      alt="Flutter"
                      loading="lazy"
                    />

                    <div>
                      <strong>Flutter</strong>
                      <span>Framework</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/nodedotjs/339933"
                      alt="Node.js"
                      loading="lazy"
                    />

                    <div>
                      <strong>Node.js</strong>
                      <span>Runtime</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/express/FFFFFF"
                      alt="Express"
                      loading="lazy"
                    />

                    <div>
                      <strong>Express</strong>
                      <span>Backend</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/fastapi/009688"
                      alt="FastAPI"
                      loading="lazy"
                    />

                    <div>
                      <strong>FastAPI</strong>
                      <span>Backend</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/springboot/6DB33F"
                      alt="Spring Boot"
                      loading="lazy"
                    />

                    <div>
                      <strong>Spring Boot</strong>
                      <span>Framework</span>
                    </div>
                  </article>

                </div>

              </div>

              <div className="ts-tech-track ts-tech-track-two">

                <div className="ts-tech-list">

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/mysql/4479A1"
                      alt="MySQL"
                      loading="lazy"
                    />

                    <div>
                      <strong>MySQL</strong>
                      <span>Database</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/postgresql/4169E1"
                      alt="PostgreSQL"
                      loading="lazy"
                    />

                    <div>
                      <strong>PostgreSQL</strong>
                      <span>Database</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/mongodb/47A248"
                      alt="MongoDB"
                      loading="lazy"
                    />

                    <div>
                      <strong>MongoDB</strong>
                      <span>Database</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/redis/DC382D"
                      alt="Redis"
                      loading="lazy"
                    />

                    <div>
                      <strong>Redis</strong>
                      <span>Database</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/docker/2496ED"
                      alt="Docker"
                      loading="lazy"
                    />

                    <div>
                      <strong>Docker</strong>
                      <span>Infrastructure</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/kubernetes/326CE5"
                      alt="Kubernetes"
                      loading="lazy"
                    />

                    <div>
                      <strong>Kubernetes</strong>
                      <span>Infrastructure</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/firebase/FF9900"
                      alt="Firebase"
                      loading="lazy"
                    />

                    <div>
                      <strong>Firebase</strong>
                      <span>Cloud</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/pytorch/EE4C2C"
                      alt="PyTorch"
                      loading="lazy"
                    />

                    <div>
                      <strong>PyTorch</strong>
                      <span>Machine Learning</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/googlecloud/4285F4"
                      alt="Google Cloud"
                      loading="lazy"
                    />

                    <div>
                      <strong>Google Cloud</strong>
                      <span>Cloud</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/github/FFFFFF"
                      alt="GitHub"
                      loading="lazy"
                    />

                    <div>
                      <strong>GitHub</strong>
                      <span>Development</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/git/F05032"
                      alt="Git"
                      loading="lazy"
                    />

                    <div>
                      <strong>Git</strong>
                      <span>Development</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/linux/FCC624"
                      alt="Linux"
                      loading="lazy"
                    />

                    <div>
                      <strong>Linux</strong>
                      <span>Operating System</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
                      alt="Tailwind CSS"
                      loading="lazy"
                    />

                    <div>
                      <strong>Tailwind CSS</strong>
                      <span>CSS Framework</span>
                    </div>
                  </article>

                  <article className="ts-tech-card">
                    <img
                      src="https://cdn.simpleicons.org/sass/CC6699"
                      alt="Sass"
                      loading="lazy"
                    />

                    <div>
                      <strong>Sass</strong>
                      <span>Styling</span>
                    </div>
                  </article>

                </div>

              </div>

            </div>

            <div className="ts-stack-footer">

              <span>
                27 technologies
              </span>

              <span>
                Languages
              </span>

              <span>
                Frameworks
              </span>

              <span>
                Infrastructure
              </span>

            </div>

          </div>
        </section>

        {/* =====================================================
            WHY THINKSOCIALLY
            ===================================================== */}

        <section
          id="why-thinksocially"
          className="ts-section ts-why-section"
          aria-labelledby="why-title"
        >
          <div className="ts-container">

            <div className="ts-why-layout">

              <div className="ts-why-intro">

                <div className="ts-eyebrow">

                  <span className="ts-eyebrow-line" />

                  <span>
                    Why ThinkSocially
                  </span>

                </div>

                <h2
                  id="why-title"
                  className="ts-heading-lg"
                >
                  Technology should create{" "}
                  <span>
                    confidence.
                  </span>
                </h2>

              </div>

              <div className="ts-why-list">

                <article className="ts-why-item">

                  <span>01</span>

                  <div>

                    <h3>
                      Clear thinking
                    </h3>

                    <p>
                      Technology decisions should be
                      understandable, intentional, and
                      connected to business needs.
                    </p>

                  </div>

                </article>

                <article className="ts-why-item">

                  <span>02</span>

                  <div>

                    <h3>
                      Long-term perspective
                    </h3>

                    <p>
                      Good technology should remain useful
                      as organizations and requirements change.
                    </p>

                  </div>

                </article>

                <article className="ts-why-item">

                  <span>03</span>

                  <div>

                    <h3>
                      Integrated expertise
                    </h3>

                    <p>
                      Multiple technology disciplines can work
                      together instead of operating in silos.
                    </p>

                  </div>

                </article>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            HOW WE WORK
            ===================================================== */}

        <section
          id="process"
          className="ts-section ts-process-section"
          aria-labelledby="process-title"
        >
          <div className="ts-container">

            <div className="ts-process-header">

              <div className="ts-section-label">

                <span>
                  05
                </span>

                <span>
                  How we work
                </span>

              </div>

              <div>

                <h2
                  id="process-title"
                  className="ts-heading-xl"
                >
                  From understanding{" "}
                  <span>
                    to operation.
                  </span>
                </h2>

                <p>
                  A practical process keeps technology decisions
                  connected to real organizational requirements.
                </p>

              </div>

            </div>

            <div className="ts-process-system">

              <article className="ts-process-stage">

                <div className="ts-process-stage-top">

                  <span className="ts-process-index">
                    01
                  </span>

                  <span className="ts-process-status">
                    DISCOVER
                  </span>

                </div>

                <div className="ts-process-icon">

                  <Search
                    aria-hidden="true"
                    size={22}
                    strokeWidth={1.8}
                  />

                </div>

                <div className="ts-process-content">

                  <h3>
                    Understand
                  </h3>

                  <p>
                    We begin by understanding the environment,
                    requirements, challenges, people, and
                    objectives.
                  </p>

                </div>

                <div className="ts-process-footer">

                  <span>
                    FOUNDATION
                  </span>

                  <span
                    className="ts-process-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </div>

              </article>

              <article className="ts-process-stage">

                <div className="ts-process-stage-top">

                  <span className="ts-process-index">
                    02
                  </span>

                  <span className="ts-process-status">
                    DESIGN
                  </span>

                </div>

                <div className="ts-process-icon">

                  <Layers
                    aria-hidden="true"
                    size={22}
                    strokeWidth={1.8}
                  />

                </div>

                <div className="ts-process-content">

                  <h3>
                    Design
                  </h3>

                  <p>
                    We design practical technology solutions
                    around organizational requirements and
                    long-term objectives.
                  </p>

                </div>

                <div className="ts-process-footer">

                  <span>
                    STRATEGY
                  </span>

                  <span
                    className="ts-process-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </div>

              </article>

              <article className="ts-process-stage">

                <div className="ts-process-stage-top">

                  <span className="ts-process-index">
                    03
                  </span>

                  <span className="ts-process-status">
                    IMPLEMENT
                  </span>

                </div>

                <div className="ts-process-icon">

                  <Settings
                    aria-hidden="true"
                    size={22}
                    strokeWidth={1.8}
                  />

                </div>

                <div className="ts-process-content">

                  <h3>
                    Implement
                  </h3>

                  <p>
                    Technology is implemented carefully with
                    attention to reliability, security, and
                    usability.
                  </p>

                </div>

                <div className="ts-process-footer">

                  <span>
                    EXECUTION
                  </span>

                  <span
                    className="ts-process-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </div>

              </article>

              <article className="ts-process-stage">

                <div className="ts-process-stage-top">

                  <span className="ts-process-index">
                    04
                  </span>

                  <span className="ts-process-status">
                    OPERATE
                  </span>

                </div>

                <div className="ts-process-icon">

                  <Activity
                    aria-hidden="true"
                    size={22}
                    strokeWidth={1.8}
                  />

                </div>

                <div className="ts-process-content">

                  <h3>
                    Operate
                  </h3>

                  <p>
                    Systems are supported, monitored,
                    maintained, and improved as the
                    organization evolves.
                  </p>

                </div>

                <div className="ts-process-footer">

                  <span>
                    CONTINUITY
                  </span>

                  <span
                    className="ts-process-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </div>

              </article>

            </div>

          </div>
        </section>

        {/* =====================================================
            TESTIMONIALS
            ===================================================== */}

        <section
          id="testimonials"
          className="ts-section ts-testimonials-section"
          aria-labelledby="testimonials-title"
        >
          <div className="ts-container">

            <div className="ts-testimonials-header">

              <div>

                <div className="ts-eyebrow">

                  <span className="ts-eyebrow-line" />

                  <span>
                    Client perspective
                  </span>

                </div>

                <h2
                  id="testimonials-title"
                  className="ts-heading-xl"
                >
                  Trusted relationships.{" "}
                  <span>
                    Long-term partnerships.
                  </span>
                </h2>

              </div>

              <p>
                Client feedback reflects the importance of
                dependable technology support and long-term
                relationships.
              </p>

            </div>

            <div className="ts-testimonials-grid">

              <article className="ts-testimonial-card">

                <div
                  className="ts-quote-mark"
                  aria-hidden="true"
                >
                  “
                </div>

                <blockquote>
                  ThinkSocially has continued to offer
                  guidance, insights, and onsite and remote
                  support since 2003.
                </blockquote>

                <div className="ts-testimonial-person">

                  <div
                    className="ts-person-avatar"
                    aria-hidden="true"
                  >
                    VM
                  </div>

                  <div>

                    <strong>
                      Victor Van De Moortel
                    </strong>

                    <span>
                      Chairman &amp; CEO — Care for You, Inc.
                    </span>

                  </div>

                </div>

              </article>

              <article className="ts-testimonial-card">

                <div
                  className="ts-quote-mark"
                  aria-hidden="true"
                >
                  “
                </div>

                <blockquote>
                  From the outset, we have been consistently
                  and highly pleased with the caliber and
                  quality of their services.
                </blockquote>

                <div className="ts-testimonial-person">

                  <div
                    className="ts-person-avatar"
                    aria-hidden="true"
                  >
                    JC
                  </div>

                  <div>

                    <strong>
                      John Condon
                    </strong>

                    <span>
                      Chairman &amp; Co-Founder — Ambit Group, LLC
                    </span>

                  </div>

                </div>

              </article>

            </div>

          </div>
        </section>

      </main>

      {/* =======================================================
          FOOTER
          ======================================================= */}

      <Footer />
    </>
  );
}