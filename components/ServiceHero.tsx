interface ServiceHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section
      className="ts-hero ts-service-hero"
      aria-labelledby="service-hero-title"
    >
      <div className="ts-hero-atmosphere" aria-hidden="true"></div>

      <div className="ts-container">
        <div className="ts-hero-grid">
          <div className="ts-hero-copy">
            <div className="ts-eyebrow">
              <span className="ts-eyebrow-line"></span>
              <span>{eyebrow}</span>
            </div>

            <h1 id="service-hero-title" className="ts-heading-xl">
              {title}
            </h1>

            <p className="ts-hero-description">
              {description}
            </p>
          </div>

          <div className="ts-hero-visual">
            <div className="ts-hero-image">
              <img
                src={image}
                alt={imageAlt}
                loading="eager"
              />

              <div
                className="ts-hero-image-overlay"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}