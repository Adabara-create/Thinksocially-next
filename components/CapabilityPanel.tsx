import Link from "next/link";

type Capability =
  | "managed"
  | "cloud"
  | "professional"
  | "security";

interface CapabilityPanelProps {
  capability: Capability;
  isActive: boolean;
}

const capabilityData = {
  managed: {
    id: "capability-managed",
    eyebrow: "Managed Services",
    title: "Keep the technology running.",
    description:
      "Oversight and support for devices, servers, networks, and cloud systems, with monitoring, preventive maintenance, backup and recovery, and SLA management.",
    href: "/managed-services",
    linkText: "Explore Managed Services",
  },

  cloud: {
    id: "capability-cloud",
    eyebrow: "Cloud Computing",
    title: "Build for a more connected environment.",
    description:
      "Design, management, and implementation for systems in the cloud, including cloud solutions, legacy system upgrades, data migration, and VoIP.",
    href: "/cloud-computing",
    linkText: "Explore Cloud Computing",
  },

  professional: {
    id: "capability-professional",
    eyebrow: "Professional Services",
    title: "Turn technology into capability.",
    description:
      "IT strategy, business continuity planning, web development, application development, mobile app development, and annual IT assessments and upgrades.",
    href: "/professional-services",
    linkText: "Explore Professional Services",
  },

  security: {
    id: "capability-security",
    eyebrow: "Compliance & Cybersecurity",
    title: "Reduce security and compliance gaps.",
    description:
      "Cybersecurity risk assessment, IT governance, risk and compliance, threat monitoring, detection and response, and compliance-based security standards.",
    href: "/cybersecurity",
    linkText: "Explore Cybersecurity",
  },
};

export default function CapabilityPanel({
  capability,
  isActive,
}: CapabilityPanelProps) {
  const data = capabilityData[capability];

  return (
    <article
      id={data.id}
      className={`ts-capability-detail${isActive ? " is-active" : ""}`}
      data-capability-panel={capability}
      role="tabpanel"
      aria-hidden={!isActive}
      hidden={!isActive}
    >
      <p className="ts-capability-eyebrow">
        {data.eyebrow}
      </p>

      <h3>{data.title}</h3>

      <p>{data.description}</p>

      <Link
        href={data.href}
        className="ts-button ts-button-secondary"
      >
        {data.linkText}

        <i
          data-lucide="arrow-up-right"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}