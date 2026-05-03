const painPoints = ["Too many tools", "Not enough time", "No clear implementation plan"];

const buildOptions = [
  "AI workflow automations",
  "Internal knowledge assistants",
  "Customer support systems",
  "Content and communication systems",
  "Recruiting and hiring support",
  "Operations documentation",
  "Team AI training",
  "Leadership decision support"
];

const audiences = [
  "Service businesses",
  "Agencies",
  "Studios",
  "Nonprofits",
  "Schools and training organizations",
  "Founders and small teams",
  "Growing companies",
  "People-first organizations"
];

const processSteps = [
  "Book your audit",
  "Map your workflows",
  "Find your AI opportunities",
  "Build what matters first"
];

const pricing = [
  {
    title: "AI Readiness & Workflow Audit",
    price: "$199",
    description: "Best for companies that want clarity before building.",
    cta: "Book Your Audit"
  },
  {
    title: "AI Implementation Sprint",
    price: "Starting at $750",
    description: "Best for companies ready to build one practical AI workflow or automation.",
    cta: "Request a Sprint"
  },
  {
    title: "Monthly ASPIREai Support",
    price: "Starting at $1,500/month",
    description:
      "Best for teams that want ongoing AI strategy, automation, content, operations, and support.",
    cta: "Explore Monthly Support"
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="hero section">
        <div className="hero-content">
          <div className="aspire-logo-wrap">
            <img src="/ASPIREaiMOTHERSHIP.png" alt="ASPIREai logo" className="aspire-logo" />
          </div>
          <h1>ASPIREai IS THE MOTHERSHIP FOR MODERN COMPANIES</h1>
          <p className="subheadline">
            Helping people and technology work together to build better businesses.
          </p>
          <div className="actions hero-actions">
            <a href="#" className="btn primary">
              Book Your AI Audit
            </a>
            <a href="#" className="btn secondary">
              See What We Can Build
            </a>
          </div>
          <p className="trust-line">Human-led. AI-powered. Built for real teams.</p>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-glow" aria-hidden="true" />
          <img src="/aspire-ai-mothership.png" alt="ASPIREai mothership" className="hero-image" />
          <div className="beam" aria-hidden="true" />
        </div>
      </section>

      <section className="section glass">
        <h2>AI should make work feel lighter, not more overwhelming.</h2>
        <p>
          Most companies know they should be using AI, but they are not sure where to start, what
          tools to trust, or how to bring AI into the business without confusing their team.
        </p>
        <p>ASPIREai helps companies turn AI confusion into clear, practical systems.</p>
        <div className="grid cards">
          {painPoints.map((point) => (
            <article className="glass card" key={point}>
              <h3>{point}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Start with a simple AI Readiness &amp; Workflow Audit</h2>
        <p>
          We look at how your company works today and identify where AI can save time, reduce
          friction, support your team, and create immediate value.
        </p>
        <article className="glass offer-card">
          <h3>AI Readiness &amp; Workflow Audit</h3>
          <ul>
            <li>45 minute strategy call</li>
            <li>Review of current workflows</li>
            <li>Identify 3 to 5 AI opportunities</li>
            <li>Simple implementation roadmap</li>
            <li>Practical recommendations your team can understand</li>
            <li>Optional Loom recap</li>
          </ul>
          <p className="price">Introductory price: $199</p>
          <a href="#" className="btn primary">
            Book Your Audit
          </a>
          <p className="note">Limited early-client pricing for testimonials and case studies.</p>
        </article>
      </section>

      <section className="section glass">
        <h2>From audit to implementation</h2>
        <p>
          After the audit, companies can choose to have ASPIREai build the systems, workflows, and
          tools recommended in the roadmap.
        </p>
        <div className="grid cards">
          {buildOptions.map((item) => (
            <article className="card glass" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section human-first glass">
        <h2>AI works best when people feel supported.</h2>
        <p>
          ASPIREai is built around one belief: people matter.
        </p>
        <p>
          We help companies use AI in a way that gives teams more clarity, more confidence, and
          more time to do meaningful work.
        </p>
        <blockquote className="quote-card">AI is the tool. People are the creators.</blockquote>
      </section>

      <section className="section">
        <h2>Built for companies that want to move forward with clarity.</h2>
        <div className="grid cards">
          {audiences.map((item) => (
            <article className="glass card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass">
        <h2>How it works</h2>
        <div className="grid process-grid">
          {processSteps.map((step, idx) => (
            <article key={step} className="card step-card">
              <p className="step-number">{idx + 1}</p>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing-section">
        <h2>Simple starting point. Clear next steps.</h2>
        <div className="grid pricing-grid">
          {pricing.map((plan) => (
            <article key={plan.title} className="glass price-card">
              <h3>{plan.title}</h3>
              <p className="price-tag">{plan.price}</p>
              <p>{plan.description}</p>
              <a href="#" className="btn primary">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta glass final-cta">
        <h2>Ready to bring AI into your company without overwhelm?</h2>
        <p>
          Start with one clear audit. Leave with a practical roadmap your team can actually use.
        </p>
        <a href="#" className="btn primary">
          Book Your AI Audit
        </a>
      </section>

      <footer className="footer">
        <p className="brand">ASPIREai</p>
        <p>Human-led. AI-powered. Built for real people.</p>
        <p>Where People Matter ☮️</p>
      </footer>
    </main>
  );
}
