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
  { name: "EARTH SCHOOL: A Temporary Human Experience", href: "https://jessgoodvibesonly.vercel.app" },
  { name: "The EARTH SCHOOL Podcast", href: "" },
  { name: "A Spiritual Warrior’s Path", href: "https://www.instagram.com/aspiritualwarriorspath" },
  { name: "jessgoodvibesonly", href: "https://jessgoodvibesonly.vercel.app" }
];

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" };

export default function HomePage() {
  const handleJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent("The New Simulation Ministry Inquiry");
    const body = encodeURIComponent(`Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\n\nMessage:\n${message || "N/A"}`);

    window.location.href = `mailto:jessgoodvibesonly@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="page">
      <section className="hero section" id="top">
        <div className="hero-logo-wrap">
          <img src="/the-new-simulation-ministry.png" alt="The New Simulation Ministry logo" className="hero-logo" />
        </div>
        <p className="kicker">Led by Rev. Dr. Jessica Simmonds</p>
        <h1>THE NEW SIMULATION MINISTRY</h1>
        <p className="lead">A real spiritual community for people exploring life as a temporary human experience.</p>
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
        <form className="form" onSubmit={handleJoin}>
          <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
          <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
          <label>Message<textarea name="message" rows={5} placeholder="Share what brought you here..." required /></label>
          <button type="submit" className="button">Send Inquiry</button>
        </form>
      </section>

      <section className="section content">
        <h2>Connected Projects</h2>
        <ul className="contact-list">
          {connectedProjects.map((project) => (
            <li key={project.name}>
              {project.href ? (
                <a href={project.href} {...externalLinkProps}>{project.name}</a>
              ) : (
                <span>{project.name}</span>
              )}
              {project.href ? (
                <a href={project.href} {...externalLinkProps}>Visit</a>
              ) : (
                <span className="podcast-placeholder">Podcast link coming soon</span>
              )}
            </li>
          ))}
          <li>
            <span>Facebook Group</span>
            <span className="podcast-placeholder">Facebook group link coming soon</span>
          </li>
        </ul>
      </section>

      <section className="section content">
        <h2>Social / Contact</h2>
        <ul className="contact-list">
          <li><span>Instagram</span><a href="https://www.instagram.com/aspiritualwarriorspath" {...externalLinkProps}>@aspiritualwarriorspath</a></li>
          <li><span>LinkedIn</span><a href="https://www.linkedin.com/in/jessica-simmonds-aspire4/" {...externalLinkProps}>Jessica Simmonds</a></li>
          <li><span>Personal Site</span><a href="https://jessgoodvibesonly.vercel.app" {...externalLinkProps}>jessgoodvibesonly.vercel.app</a></li>
          <li><span>Email</span><a href="mailto:jessgoodvibesonly@gmail.com">jessgoodvibesonly@gmail.com</a></li>
        </ul>
      </section>

      <footer className="footer">THE NEW SIMULATION MINISTRY · Peace, Light, and Levity</footer>
    </main>
  );
}
