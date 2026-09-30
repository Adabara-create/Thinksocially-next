import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  className = "",
  onClick,
  type = "button",
  ariaLabel,
  disabled = false,
}: ButtonProps) {
  const buttonClasses = `
    ts-button
    ts-button-${variant}
    ${className}
  `.trim();

  /*
   * INTERNAL NEXT.JS LINK
   *
   * Example:
   * <Button href="/contact">Talk to ThinkSocially</Button>
   */
  if (href && href.startsWith("/")) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        <span>{children}</span>

        {icon && (
          <span aria-hidden="true">
            {icon}
          </span>
        )}
      </Link>
    );
  }

  /*
   * ANCHOR
   *
   * Used for:
   * - #capabilities
   * - #services
   * - external URLs
   */
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        <span>{children}</span>

        {icon && (
          <span aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  /*
   * NORMAL BUTTON
   *
   * Used when the button performs an action
   * instead of navigating somewhere.
   */
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <span>{children}</span>

      {icon && (
        <span aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
}