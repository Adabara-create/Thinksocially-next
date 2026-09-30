
interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="ts-section-heading">

      <div>
        {eyebrow && (
          <div className="ts-eyebrow">
            <span className="ts-eyebrow-line"></span>

            <span>
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="ts-heading-xl">
          {title}
        </h2>
      </div>

      {description && (
        <p>
          {description}
        </p>
      )}

    </div>
  );
}

