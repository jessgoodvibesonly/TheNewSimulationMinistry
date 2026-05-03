const helpCards = [
  "Organizing workflows",
  "Saving time",
  "Improving communication",
  "Supporting teams",
  "Simplifying operations",
  "Helping decision-making"
];

const audience = [
  "Businesses",
  "Founders",
  "Teams",
  "Agencies",
  "Studios",
  "Nonprofits",
  "Educators"
];

const functions = [
  "Operations",
  "Marketing",
  "Sales",
  "Hiring",
  "Customer support",
  "Internal systems"
];

export default function HomePage() {
  return (
    <main>
      <section className="hero section">
        <div className="hero-content">
          <p className="eyebrow">Aspire AI</p>
          <h1>ASPIRE AI IS THE MOTHERSHIP FOR MODERN COMPANIES</h1>
          <p className="subheadline">
            Helping people and technology work together to build better businesses.
          </p>
          <p>
            Aspire AI is a human-led, AI-powered system that helps companies simplify their
            work, support their teams, and move forward with clarity.
          </p>
          <p>
            This is not about replacing people. This is about helping people do their best
            work.
          </p>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-glow" aria-hidden="true" />
          <img src="/aspire-ai-mothership.png" alt="Aspire AI mothership" className="hero-image" />
          <div className="beam" aria-hidden="true" />
        </div>
      </section>

      <section className="section glass">
        <h2>A Better Way to Work with AI</h2>
        <p>
          AI should make work feel lighter, not heavier. Aspire AI helps your team remove
          friction, reduce overwhelm, and focus on what matters most. You stay in control,
          while AI supports the flow of your business in the background.
        </p>
      </section>

      <section className="section">
        <h2>What Aspire AI Helps With</h2>
        <div className="grid cards">
          {helpCards.map((card) => (
            <article className="glass card" key={card}>
              <h3>{card}</h3>
              <p>
                Thoughtful AI assistance that keeps your people confident, aligned, and moving
                forward.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section glass">
        <h2>Who This Is For</h2>
        <ul className="pill-list">
          {audience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>The Mothership Model</h2>
        <p>
          Aspire AI acts as your central intelligence layer, connecting people, systems, and
          priorities across the company. It brings calm coordination to every area of your
          business.
        </p>
        <div className="grid function-grid">
          {functions.map((item) => (
            <div className="glass function-item" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section glass human-first">
        <h2>Human First</h2>
        <p className="lead">People matter. AI is a tool. People are the creators.</p>
        <p>
          Aspire AI is designed to protect what makes your company special: your people. Their
          ideas, intuition, and care are the center of every decision. AI simply helps unlock
          more of their potential.
        </p>
      </section>

      <section className="section">
        <h2>Why This Matters Now</h2>
        <p>
          AI is moving quickly. Companies do not need more noise or confusion. They need a clear,
          supportive way to adopt AI with confidence. Aspire AI helps you move at the right pace,
          with clarity every step of the way.
        </p>
      </section>

      <section className="section cta glass">
        <h2>Ready to bring AI into your company in a way that feels right?</h2>
        <div className="actions">
          <a href="#" className="btn primary">
            Book a Call
          </a>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </section>

      <footer className="footer">
        <p className="brand">Aspire AI</p>
        <p>Human-led. AI-powered. Built for real people.</p>
        <p>Where People Matter ☮️</p>
      </footer>
    </main>
  );
}
