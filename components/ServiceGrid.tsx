import ServiceCard from "./ServiceCard";

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
}

interface ServiceGridProps {
  services: Service[];
}

export default function ServiceGrid({
  services,
}: ServiceGridProps) {
  return (
    <div className="ts-service-grid">
      {services.map((service) => (
        <ServiceCard
          key={service.number}
          number={service.number}
          title={service.title}
          description={service.description}
          image={service.image}
          imageAlt={service.imageAlt}
          href={service.href}
        />
      ))}
    </div>
  );
}