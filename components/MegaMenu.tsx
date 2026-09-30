import Link from "next/link";

type MegaMenuType =
  | "managed-services-menu"
  | "cloud-computing-menu"
  | "professional-services-menu"
  | "cybersecurity-menu";

interface MegaMenuProps {
  type: MegaMenuType;
}

interface MegaMenuItem {
  href: string;
  icon: string;
  title: string;
  description: string;
}

interface MegaMenuData {
  number: string;
  title: string;
  description: string;
  icon: string;
  mainLink: string;
  mainLinkText: string;
  items: MegaMenuItem[];
}

const megaMenuData: Record<MegaMenuType, MegaMenuData> = {
  "managed-services-menu": {
    number: "01",
    title: "Managed Services",
    description:
      "Reliable technology operations, support, monitoring, and maintenance.",
    icon: "server-cog",
    mainLink: "/managed-services",
    mainLinkText: "Explore Managed Services",
    items: [
      {
        href: "/managed-services#desktop-support",
        icon: "monitor",
        title: "Desktop Support",
        description: "End-user technology support.",
      },
      {
        href: "/managed-services#server-support",
        icon: "server",
        title: "Server Support",
        description: "Server management and maintenance.",
      },
      {
        href: "/managed-services#network-support",
        icon: "network",
        title: "Network Support",
        description: "Reliable network infrastructure.",
      },
      {
        href: "/managed-services#monitoring",
        icon: "activity",
        title: "Monitoring",
        description: "Visibility across your systems.",
      },
      {
        href: "/managed-services#backup-recovery",
        icon: "database-backup",
        title: "Backup & Recovery",
        description: "Protection for critical information.",
      },
      {
        href: "/managed-services#help-desk",
        icon: "messages-square",
        title: "Help Desk",
        description: "Responsive technology assistance.",
      },
    ],
  },

  "cloud-computing-menu": {
    number: "02",
    title: "Cloud Computing",
    description:
      "Flexible infrastructure and cloud environments built around business needs.",
    icon: "cloud-cog",
    mainLink: "/cloud-computing",
    mainLinkText: "Explore Cloud Computing",
    items: [
      {
        href: "/cloud-computing#cloud-solutions",
        icon: "cloud",
        title: "Cloud Solutions",
        description: "Cloud environments and services.",
      },
      {
        href: "/cloud-computing#legacy-upgrades",
        icon: "refresh-cw",
        title: "Legacy Upgrades",
        description: "Modernizing existing technology.",
      },
      {
        href: "/cloud-computing#data-migration",
        icon: "database",
        title: "Data Migration",
        description: "Moving information safely and deliberately.",
      },
      {
        href: "/cloud-computing#voip",
        icon: "phone-call",
        title: "VoIP",
        description: "Connected communications technology.",
      },
    ],
  },

  "professional-services-menu": {
    number: "03",
    title: "Professional Services",
    description:
      "Strategy, development, planning, and technology transformation.",
    icon: "workflow",
    mainLink: "/professional-services",
    mainLinkText: "Explore Professional Services",
    items: [
      {
        href: "/professional-services#it-strategy",
        icon: "compass",
        title: "IT Strategy",
        description: "Technology direction and planning.",
      },
      {
        href: "/professional-services#business-continuity",
        icon: "shield",
        title: "Business Continuity",
        description: "Planning for resilient operations.",
      },
      {
        href: "/professional-services#web-development",
        icon: "globe-2",
        title: "Web Development",
        description: "Modern digital experiences.",
      },
      {
        href: "/professional-services#application-development",
        icon: "code-2",
        title: "Application Development",
        description: "Purpose-built business applications.",
      },
      {
        href: "/professional-services#mobile-app-development",
        icon: "smartphone",
        title: "Mobile App Development",
        description: "Applications for connected users.",
      },
      {
        href: "/professional-services#annual-it-assessments",
        icon: "clipboard-check",
        title: "Annual IT Assessments",
        description: "Reviewing technology environments.",
      },
    ],
  },

  "cybersecurity-menu": {
    number: "04",
    title: "Cybersecurity",
    description:
      "Security assessment, governance, monitoring, detection, and response.",
    icon: "shield-check",
    mainLink: "/cybersecurity",
    mainLinkText: "Explore Cybersecurity",
    items: [
      {
        href: "/cybersecurity#risk-assessment",
        icon: "scan-search",
        title: "Cybersecurity Risk Assessment",
        description: "Understanding technology risk.",
      },
      {
        href: "/cybersecurity#governance",
        icon: "scale",
        title: "Governance, Risk & Compliance",
        description: "Structured security governance.",
      },
      {
        href: "/cybersecurity#threat-monitoring",
        icon: "radar",
        title: "Threat Monitoring",
        description: "Visibility into security activity.",
      },
      {
        href: "/cybersecurity#detection-response",
        icon: "siren",
        title: "Detection & Response",
        description: "Responding to security events.",
      },
    ],
  },
};

export default function MegaMenu({ type }: MegaMenuProps) {
  const menu = megaMenuData[type];

  if (!menu) {
    return null;
  }

  return (
    <div
      id={type}
      className="ts-mega-menu"
      role="region"
      aria-label={`${menu.title} menu`}
      data-menu={type}
    >
      <div className="ts-mega-inner">

        {/* =====================================================
             INTRO
             ====================================================== */}

        <div className="ts-mega-intro">

          <span className="ts-mega-icon">
            <i
              data-lucide={menu.icon}
              aria-hidden="true"
            />
          </span>

          <span className="ts-mega-number">
            {menu.number}
          </span>

          <h3>
            {menu.title}
          </h3>

          <p>
            {menu.description}
          </p>

          <Link
            href={menu.mainLink}
            className="ts-mega-main-link"
          >
            {menu.mainLinkText}

            <i
              data-lucide="arrow-up-right"
              aria-hidden="true"
            />
          </Link>

        </div>


        {/* =====================================================
             MENU LINKS
             ====================================================== */}

        <div className="ts-mega-links">

          {menu.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="ts-mega-item"
            >

              <span>
                <i
                  data-lucide={item.icon}
                  aria-hidden="true"
                />
              </span>

              <div>
                <strong>
                  {item.title}
                </strong>

                <small>
                  {item.description}
                </small>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}