interface ServiceDetailsProps {
  number: string;
  category: string;
  title: string;
  description: string;
  details: string[];
}

export default function ServiceDetails({
  number,
  category,
  title,
  description,
  details,
}: ServiceDetailsProps) {
  return (
    <div className="ts-service-details">
      <div className="ts-service-details-header">
        <div className="ts-section-label">
          <span>{number}</span>
          <span>{category}</span>
        </div>

        <h3 className="ts-heading-lg">
          {title}
        </h3>
      </div>

      <div className="ts-service-details-content">
        <p>{description}</p>

        <div className="ts-service-details-list">
          {details.map((detail, index) => (
            <div
              className="ts-service-detail-item"
              key={`${detail}-${index}`}
            >
              <span className="ts-status-dot" aria-hidden="true"></span>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}