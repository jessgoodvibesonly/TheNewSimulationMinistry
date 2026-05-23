"use client";

const credibilityItems = [
  "Reverend / Spiritual Minister",
  "Published Author of A Spiritual Warrior’s Path to Re-Enlightening",
  "Clinical Hypnotherapist",
  "Spiritual Life Coach",
  "Past Life Regression and Life Between Lives practitioner",
  "Meditation, Reiki, and transformational awareness work",
  "Creator of EARTH SCHOOL: A Temporary Human Experience"
];

const explorationItems = [
  "Life as a temporary human experience",
  "Earth School lessons",
  "Consciousness and awareness",
  "Simulation theory as a spiritual metaphor",
  "Creativity as a sacred force",
  "Love, choice, and personal transformation",
  "Peace, light, and levity",
  "Spiritual conversations without rigid dogma"
];

const gatheringItems = [
  "Virtual ministry calls",
  "Reflection circles",
  "Teachings and guided conversations",
  "Awareness practices",
  "Community connection",
  "Spiritual exploration without rigid dogma"
];

const connectedProjects = [
  { name: "EARTH SCHOOL Podcast", href: "https://www.youtube.com/@EarthSchoolThePodcast" },
  { name: "A Spiritual Warrior’s Path to Re-Enlightening", href: "https://www.amazon.com/Spiritual-Warriors-Path-Re-Enlightening-ebook/dp/B0BR66M6TJ" }
];

const socialContacts = [
  { label: "LinkedIn", text: "Jessica Simmonds on LinkedIn", href: "https://www.linkedin.com/in/jessica-simmonds-aspire4/" },
  { label: "Instagram", text: "A Spiritual Warrior’s Path on Instagram", href: "https://www.instagram.com/aspiritualwarriorspath" },
  { label: "Personal Site", text: "jessgoodvibesonly", href: "https://jessgoodvibesonly.vercel.app" },
  { label: "Email", text: "jessgoodvibesonly@gmail.com", href: "mailto:jessgoodvibesonly@gmail.com" }
];

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" };

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero section" id="top">
        <div className="hero-logo-wrap">
          <img src="/the-new-simulation-ministry.png" alt="The New Simulation Ministry logo" className="hero-logo" />
        </div>
        <p className="kicker">Led by Rev. Dr. Jessica Simmonds</p>
        <h1>THE NEW SIMULATION MINISTRY</h1>
        <p className="lead">A real spiritual community for people exploring life as a temporary human experience.</p>
        <blockquote className="hero-quote">
          <p>“Can you see your own face right now?”</p>
          <cite>— Rev. Dr. Jessica Simmonds</cite>
        </blockquote>
        <p className="support">
          A school of awareness and sacred conversation where consciousness, perception, creativity, love, and choice
          help shape how we live this human chapter.
        </p>
        <a href="#join" className="button">Join the Conversation</a>
      </section>

      <section className="section content">
        <h2>What This Is</h2>
        <p>
          The New Simulation Ministry is a real ministry and active community led by Rev. Dr. Jessica Simmonds. This
          is a welcoming and grounded space for seekers and spiritual thinkers exploring awareness, spirituality,
          simulation theory, Earth School, consciousness, creativity, and personal transformation.
        </p>
        <p>
          Virtual calls and intentional conversations happen here so people can reflect, ask deeper questions, and grow
          through a modern and sacred approach to spiritual life.
        </p>
      </section>

      <section className="section content">
        <h2>Founded by Rev. Dr. Jessica Simmonds</h2>
        <ul className="detail-list">
          {credibilityItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section content">
        <h2>What This Community Explores</h2>
        <div className="cards">
          {explorationItems.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section content">
        <h2>EARTH SCHOOL: A Temporary Human Experience</h2>
        <p>
          EARTH SCHOOL is part of the larger ministry vision—an expanding body of teachings, stories, and practices
          centered on the temporary human experience as a profound path of awareness.
        </p>
        <a href="https://jessgoodvibesonly.vercel.app" className="inline-link" {...externalLinkProps}>Visit EARTH SCHOOL</a>
      </section>

      <section className="section content">
        <h2>Community Gatherings</h2>
        <p>We host sacred and welcoming spaces for reflection, expansion, and real connection across experiences.</p>
        <ul className="detail-list two-col">
          {gatheringItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section content" id="join">
        <h2>Join the Conversation</h2>
        <p>
          This ministry is for seekers, creators, spiritual thinkers, curious minds, and anyone who has ever felt that
          life is more than it appears to be.
        </p>
      </section>

      <section className="section content">
        <h2>Connected Projects</h2>
        <ul className="contact-list">
          {connectedProjects.map((project) => (
            <li key={project.name}>
              <span>{project.name}</span>
              <a href={project.href} {...externalLinkProps}>{project.name}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="section content">
        <h2>Social / Contact</h2>
        <ul className="contact-list">
          {socialContacts.map((item) => (
            <li key={item.text}>
              <span>{item.label}</span>
              <a href={item.href} {...externalLinkProps}>{item.text}</a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">THE NEW SIMULATION MINISTRY · Peace, Light, and Levity</footer>
    </main>
  );
}
