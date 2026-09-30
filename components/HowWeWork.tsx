export default function HowWeWork() {
  return (
    <section
      id="process"
      className="ts-section ts-section-process"
      aria-labelledby="process-title"
    >
      <div className="ts-container">
        <div
          className="ts-process-heading"
          data-reveal
        >
          <p className="ts-section-number">
            06 / HOW WE WORK
          </p>

          <h2 id="process-title">
            A practical approach
            to technology.
          </h2>
        </div>

        <div
          className="ts-process-list"
          data-stagger
        >
          <article className="ts-process-item">
            <span className="ts-process-index">
              01
            </span>

            <div>
              <h3>
                Understand
              </h3>

              <p>
                Understand the organization,
                environment, requirements,
                and technology challenges.
              </p>
            </div>

            <i
              data-lucide="arrow-right"
              aria-hidden="true"
            />
          </article>

          <article className="ts-process-item">
            <span className="ts-process-index">
              02
            </span>

            <div>
              <h3>
                Assess
              </h3>

              <p>
                Evaluate infrastructure, systems,
                security, continuity, and opportunities
                for improvement.
              </p>
            </div>

            <i
              data-lucide="arrow-right"
              aria-hidden="true"
            />
          </article>

          <article className="ts-process-item">
            <span className="ts-process-index">
              03
            </span>

            <div>
              <h3>
                Design
              </h3>

              <p>
                Develop an appropriate technology,
                cloud, security, or development strategy.
              </p>
            </div>

            <i
              data-lucide="arrow-right"
              aria-hidden="true"
            />
          </article>

          <article className="ts-process-item">
            <span className="ts-process-index">
              04
            </span>

            <div>
              <h3>
                Implement
              </h3>

              <p>
                Put the selected solution into practice
                with the right level of support and service.
              </p>
            </div>

            <i
              data-lucide="arrow-right"
              aria-hidden="true"
            />
          </article>

          <article className="ts-process-item">
            <span className="ts-process-index">
              05
            </span>

            <div>
              <h3>
                Maintain
              </h3>

              <p>
                Continue monitoring, supporting,
                reporting, maintaining, and improving
                the technology environment.
              </p>
            </div>

            <i
              data-lucide="check"
              aria-hidden="true"
            />
          </article>
        </div>
      </div>
    </section>
  );
}