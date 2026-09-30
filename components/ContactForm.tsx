"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);

    // Temporary submission handling.
    // Connect this to your preferred form backend/API later.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <form
      className="ts-contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="ts-form-group">
        <label htmlFor="contact-name">
          Name
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="ts-form-group">
        <label htmlFor="contact-email">
          Email
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="ts-form-group">
        <label htmlFor="contact-company">
          Company
        </label>

        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Your company"
        />
      </div>

      <div className="ts-form-group">
        <label htmlFor="contact-subject">
          Subject
        </label>

        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="How can we help?"
          required
        />
      </div>

      <div className="ts-form-group">
        <label htmlFor="contact-message">
          Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Tell us about your project or requirements..."
          required
        />
      </div>

      <div className="ts-contact-form-actions">
        <button
          type="submit"
          className="ts-button ts-button-primary"
          disabled={isSubmitting}
        >
          <span>
            {isSubmitting
              ? "Sending..."
              : submitted
                ? "Message sent"
                : "Send message"}
          </span>

          <i
            data-lucide={
              submitted
                ? "check"
                : "arrow-up-right"
            }
            aria-hidden="true"
          />
        </button>
      </div>

      {submitted && (
        <p
          className="ts-contact-form-success"
          role="status"
        >
          Thank you. Your message has been received.
        </p>
      )}
    </form>
  );
}