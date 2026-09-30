interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  image,
  imageAlt,
  href = "#",
}: ServiceCardProps) {
  return (
    <article className="ts-service-card">
      <a href={href} className="ts-service-card-link">
        <div className="ts-service-card-image">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
          />
        </div>

        <div className="ts-service-card-content">
          <div className="ts-service-card-number">
            {number}
          </div>

          <h3 className="ts-service-card-title">
            {title}
          </h3>

          <p className="ts-service-card-description">
            {description}
          </p>
        </div>
      </a>
    </article>
  );
}