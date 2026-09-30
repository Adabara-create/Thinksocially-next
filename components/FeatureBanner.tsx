interface FeatureBannerProps {
  eyebrow: string;
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export default function FeatureBanner({
  eyebrow,
  title,
  description,
  icon = "sparkles",
  className = "",
}: FeatureBannerProps) {
  return (
    <div className={`ts-feature-banner ${className}`.trim()}>
      <div
        className="ts-feature-banner-grid"
        aria-hidden="true"
      />

      <div className="ts-feature-banner-content">
        <div className="ts-feature-banner-icon" aria-hidden="true">
          <i
            data-lucide={icon}
            aria-hidden="true"
          />
        </div>

        <div className="ts-feature-banner-copy">
          <p className="ts-feature-banner-eyebrow">
            {eyebrow}
          </p>

          <h3>
            {title}
          </h3>

          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}