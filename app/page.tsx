import Image from "next/image";

const weeklyCurriculum = [
  "AI Foundations for Business",
  "AI Content Systems",
  "AI Marketing & Sales",
  "AI Automation & Operations",
  "AI Team Productivity",
  "Building Your AI Business Stack"
];

const outcomes = [
  "Save time",
  "Increase output",
  "Reduce overwhelm",
  "Improve workflows",
  "Build modern systems",
  "Lead confidently into the AI era"
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$497",
    detail: "For solo founders and first-time AI operators"
  },
  {
    name: "Operator",
    price: "$1,497",
    detail: "For owners and leaders implementing across the business"
  },
  {
    name: "Executive Team",
    price: "Custom",
    detail: "For leadership teams rolling out AI at scale"
  }
];

const stats = [
  { value: "2,000+", label: "Business Leaders Reached" },
  { value: "85+", label: "Countries" },
  { value: "4.9/5", label: "Average Experience Rating" }
];

export default function HomePage() {
  return (
    <main className="academy-page">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="orb orb-three" aria-hidden="true" />

      <section className="hero glass-shell">
        <div className="hero-logo-wrap">
          <div className="hero-logo-glow" aria-hidden="true" />
          <Image
            src="/ASPIREai.png"
            alt="Aspire AI Academy logo"
            width={96}
            height={96}
            className="hero-logo"
            priority
          />
        </div>

        <span className="badge">Aspire AI Academy</span>
        <h1>Premium AI Education for Modern Business Leaders</h1>
        <p className="subheadline">Human Intelligence. AI Amplified.</p>
        <p className="hero-body">
          We help entrepreneurs, CEOs, and teams build practical AI systems that elevate execution,
          decision-making, and long-term competitive advantage.
        </p>
        <div className="hero-actions">
          <a href="#pricing" className="btn btn-primary">Apply Now</a>
          <a href="#flagship-course" className="btn btn-ghost">View Flagship Course</a>
        </div>
      </section>

      <section className="section glass-shell" id="flagship-course">
        <span className="mini-badge">Flagship Program</span>
        <h2>AI Operator™</h2>
        <p className="section-subtitle">A 6-Week AI Business Accelerator for Entrepreneurs, CEOs & Teams</p>
        <p className="section-copy">
          Learn how to use AI to save 10+ hours per week, create content faster, automate repetitive
          tasks, improve marketing, streamline operations, build AI systems into your business, and
          stay competitive in the AI era.
        </p>
      </section>

      <section className="section glass-shell" id="learn">
        <h2>What You&apos;ll Learn</h2>
        <div className="grid learn-grid">
          {weeklyCurriculum.map((week, index) => (
            <article className="learn-card" key={week}>
              <p className="week-label">Week {index + 1}</p>
              <h3>{week}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass-shell" id="outcomes">
        <h2>Outcomes</h2>
        <div className="grid outcome-grid">
          {outcomes.map((outcome) => (
            <article className="outcome-card" key={outcome}>{outcome}</article>
          ))}
        </div>
      </section>

      <section className="section glass-shell" id="social-proof">
        <h2>Trusted Across the Global Business Community</h2>
        <div className="grid stat-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass-shell" id="pricing">
        <h2>Pricing</h2>
        <div className="grid pricing-grid">
          {pricingPlans.map((plan) => (
            <article className="price-card" key={plan.name}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p>{plan.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer glass-shell">
        <p className="brand">Aspire AI Academy</p>
        <p>Human Intelligence. AI Amplified.</p>
      </footer>
    </main>
  );
}
