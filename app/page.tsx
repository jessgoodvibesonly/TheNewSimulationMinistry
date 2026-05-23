"use client";

const coreBeliefs = [
  "Life is temporary",
  "Awareness changes the experience",
  "Love is the highest creative force",
  "We are here to learn",
  "Everyone is doing the best they can with the information and resources they have",
  "Peace, light, and levity matter"
];

const credibilityItems = [
  "Reverend / Spiritual Minister",
  "Published Author of A Spiritual Warrior’s Path to Re-Enlightening",
  "Clinical Hypnotherapist",
  "Spiritual Life Coach",
  "Past Life Regression and Life Between Lives practitioner",
  "Meditation, Reiki, and transformational awareness work",
  "Creator of EARTH SCHOOL: A Temporary Human Experience"
];

const gatheringItems = [
  "virtual ministry calls",
  "reflection circles",
  "teachings",
  "conversations",
  "awareness practices",
  "community connection",
  "spiritual exploration without rigid dogma"
];

export default function HomePage() {
  const handleJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent("The New Simulation Ministry Inquiry");
    const body = encodeURIComponent(
      `Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\n\nMessage:\n${message || "N/A"}`
    );

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
        <p className="lead">A spiritual community for people exploring life as a temporary human experience.</p>
        <p className="support">Awareness. Choice. Creativity. Love. Conscious participation in the human experience.</p>
        <a href="#join" className="button">Join the Ministry</a>
      </section>

      <section className="section content">
        <h2>What this is</h2>
        <p>
          The New Simulation Ministry is a real spiritual and community ministry led by Rev. Dr. Jessica Simmonds. It
          explores life as a school of awareness, a temporary human experience, and a reality shaped by perception,
          consciousness, creativity, love, and choice.
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
        <h2>EARTH SCHOOL: A Temporary Human Experience</h2>
        <p>
          EARTH SCHOOL is part of the larger ministry vision and explores these same ideas through writing, podcasting,
          immersive storytelling, and a future cross-platform and VR experience.
        </p>
        <a href="https://jessgoodvibesonly.vercel.app" className="inline-link">Visit EARTH SCHOOL</a>
      </section>

      <section className="section content">
        <h2>Community Gatherings</h2>
        <p>
          We host a sacred and welcoming space for reflection, expansion, and real connection across experiences.
        </p>
        <ul className="detail-list two-col">
          {gatheringItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section content">
        <h2>Core Beliefs</h2>
        <div className="cards">
          {coreBeliefs.map((belief) => (
            <article className="card" key={belief}>
              <h3>{belief}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section content">
        <h2>The EARTH SCHOOL Podcast</h2>
        <p>
          Short reflective episodes exploring awareness, perception, consciousness, creativity, and the temporary human
          experience.
        </p>
        <p className="podcast-placeholder">Podcast link coming soon</p>
      </section>

      <section className="section content" id="join">
        <h2>Join the Ministry</h2>
        <form className="form" onSubmit={handleJoin}>
          <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
          <label>Email<input type="email" name="email" placeholder="you@example.com" required /></label>
          <label>Message<textarea name="message" rows={5} placeholder="Share what brought you here..." required /></label>
          <button type="submit" className="button">Join the Ministry</button>
        </form>
      </section>

      <section className="section content">
        <h2>Social / Contact</h2>
        <ul className="contact-list">
          <li><span>Instagram</span><a href="https://www.instagram.com/aspiritualwarriorspath">@aspiritualwarriorspath</a></li>
          <li><span>LinkedIn</span><a href="https://www.linkedin.com/in/jessica-simmonds-aspire4/">Jessica Simmonds</a></li>
          <li><span>Personal Site</span><a href="https://jessgoodvibesonly.vercel.app">jessgoodvibesonly.vercel.app</a></li>
          <li><span>Email</span><a href="mailto:jessgoodvibesonly@gmail.com">jessgoodvibesonly@gmail.com</a></li>
        </ul>
      </section>

      <footer className="footer">THE NEW SIMULATION MINISTRY · Peace, Light, and Levity</footer>
    </main>
  );
}
