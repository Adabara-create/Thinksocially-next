
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function SupportPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="contact-hero">
          <div className="contact-hero-glow contact-hero-glow-one" />
          <div className="contact-hero-glow contact-hero-glow-two" />

          <div className="contact-container">
            <div className="contact-hero-content">
              <div className="contact-eyebrow">
                <span className="contact-eyebrow-dot" />
                CONTACT THINKSOCIALLY
              </div>

              <h1>
                Let's talk about
                <span> your technology.</span>
              </h1>

              <p>
                Have a question, need technical support, or want to discuss
                how technology can work better for your organization?
                Send us a message and our team will get back to you.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT SECTION
        ====================================================== */}
        <section className="contact-main">
          <div className="contact-container contact-grid">
            {/* LEFT — INFORMATION */}
            <div className="contact-info">
              <div className="contact-section-label">
                <span className="contact-eyebrow-dot" />
                GET IN TOUCH
              </div>

              <h2>
                We're here to
                <span> help.</span>
              </h2>

              <p className="contact-intro">
                Tell us a little about what you need. Whether you're looking
                for ongoing IT support, cybersecurity guidance, cloud
                solutions, or professional technology services, we'd be happy
                to hear from you.
              </p>

              <div className="contact-info-list">
                {/* EMAIL */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Mail size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="contact-info-label">EMAIL</span>

                    <a href="mailto:contact@thinksocially.com">
                      contact@thinksocially.com
                    </a>

                    <p>Send us an email anytime.</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Phone size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="contact-info-label">PHONE</span>

                    <a href="tel:+12024654627">
                      202.465.4627
                    </a>

                    <p>Speak directly with our team.</p>
                  </div>
                </div>

                {/* HOURS */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Clock3 size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="contact-info-label">
                      BUSINESS HOURS
                    </span>

                    <strong>
                      9:00 AM – 5:00 PM EST
                    </strong>

                    <p>Monday through Friday.</p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <MapPin size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="contact-info-label">
                      LOCATION
                    </span>

                    <strong>
                      Washington, DC
                    </strong>

                    <p>
                      3343 14th Street NW,
                      <br />
                      Washington, DC 20010
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <div className="contact-form-icon">
                  <MessageCircle size={22} strokeWidth={1.8} />
                </div>

                <div>
                  <span>START A CONVERSATION</span>
                  <h2>Send us a message</h2>
                </div>
              </div>

              {/* 
                FORMspree:
                Replace the action URL with your Formspree endpoint.
              */}
              <form
                className="contact-form"
                action="YOUR_FORMSPREE_ENDPOINT"
                method="POST"
              >
                {/* NAME */}
                <div className="contact-form-field">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="contact-form-field">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </div>

                {/* COMPANY */}
                <div className="contact-form-field">
                  <label htmlFor="company">
                    Company
                    <span>Optional</span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your organization"
                  />
                </div>

                {/* MESSAGE */}
                <div className="contact-form-field">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="contact-submit"
                >
                  Send inquiry
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                  />
                </button>

                <p className="contact-form-note">
                  We typically respond to inquiries within one
                  business day.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* =====================================================
            SIMPLE BOTTOM CTA
        ====================================================== */}
        <section className="contact-bottom">
          <div className="contact-container">
            <div className="contact-bottom-card">
              <div>
                <span className="contact-bottom-label">
                  THINKSOCIALLY
                </span>

                <h2>
                  Technology works better
                  <span> when people come first.</span>
                </h2>
              </div>

              <a
                href="mailto:contact@thinksocially.com"
                className="contact-bottom-button"
              >
                Email our team
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

