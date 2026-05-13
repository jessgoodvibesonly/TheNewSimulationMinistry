const audience = [
  "Business owners & entrepreneurs",
  "CEOs, founders & executive teams",
  "Consultants, coaches & agencies",
  "Marketing, operations & sales leaders",
  "Creators & educators building digital brands",
  "Teams preparing for AI-enabled workflows"
];

const tracks = [
  {
    title: "Executive AI Strategy",
    text: "Turn AI from a trend into a practical growth plan with clear priorities and measurable outcomes.",
    badge: "Leadership"
  },
  {
    title: "Operations Automation",
    text: "Design repeatable systems that remove bottlenecks, reduce manual tasks, and increase team velocity.",
    badge: "Systems"
  },
  {
    title: "Content & Brand Intelligence",
    text: "Use AI to ideate, draft, and repurpose content while protecting your brand voice and standards.",
    badge: "Marketing"
  },
  {
    title: "Customer Experience AI",
    text: "Deploy AI support workflows that improve response time, personalization, and retention.",
    badge: "CX"
  }
];

const learningOutcomes = [
  "Choose the right AI tools for your exact business model",
  "Create high-quality prompts, workflows, and SOPs your team can actually use",
  "Save hours each week across operations, communication, and content",
  "Build responsible AI policies that protect trust and brand integrity",
  "Lead confident AI adoption without overwhelming your people",
  "Measure business impact with practical KPIs and implementation plans"
];

const formats = ["Live cohort intensives", "Private leadership workshops", "Team implementation labs", "On-demand micro lessons + toolkits"];

const differentiators = [
  "Human-first AI education grounded in real business operations",
  "Built for decision-makers, not just technical teams",
  "Strategic and practical: vision, systems, and execution",
  "Premium academy experience with implementation support"
];

export default function HomePage() {
  return (
    <main className="academy-page">
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="orb orb-three" aria-hidden="true" />

      <section className="hero">
        <span className="badge">Premium AI Academy</span>
        <h1>Aspire AI Academy</h1>
        <p className="subheadline">
          AI training for business owners, entrepreneurs, CEOs, and future-ready teams.
        </p>
        <p className="hero-body">
          Learn how to use AI to save time, streamline operations, create content, improve customer
          experience, support your team, and grow your business without losing the human touch.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn btn-primary">Apply for the Academy</a>
          <a href="#tracks" className="btn btn-ghost">Explore Tracks</a>
        </div>
      </section>

      <section className="panel">
        <h2>AI is no longer optional</h2>
        <p>
          The companies that lead the next decade will be the ones that train their people to use
          AI with strategy, speed, and responsibility. Aspire AI Academy helps you move from
          curiosity to confident execution.
        </p>
      </section>

      <section className="section">
        <h2>Who it&apos;s for</h2>
        <div className="grid">
          {audience.map((item) => (
            <article className="glass" key={item}>{item}</article>
          ))}
        </div>
      </section>

      <section className="section" id="tracks">
        <h2>Academy tracks</h2>
        <div className="grid tracks-grid">
          {tracks.map((track) => (
            <article className="track-card" key={track.title}>
              <span className="mini-badge">{track.badge}</span>
              <h3>{track.title}</h3>
              <p>{track.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>What students will learn</h2>
        <div className="grid">
          {learningOutcomes.map((item) => (
            <article className="glass" key={item}>{item}</article>
          ))}
        </div>
      </section>

      <section className="section panel">
        <h2>Why Aspire AI Academy is different</h2>
        <div className="stack">
          {differentiators.map((item) => (
            <p key={item}>✦ {item}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Program formats</h2>
        <div className="grid formats-grid">
          {formats.map((item) => (
            <article className="format-card" key={item}>{item}</article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Build an AI-ready company without losing your human edge.</h2>
        <p>
          Aspire AI Academy gives leaders and teams the training, systems, and confidence to adopt
          AI in a practical, strategic, and people-centered way.
        </p>
        <a href="#" className="btn btn-primary">Join Aspire AI Academy</a>
      </section>
    </main>
  );
}
