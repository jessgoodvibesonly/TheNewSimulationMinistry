const explorationTopics = [
  "Life as a Temporary Human Experience",
  "Awareness as the Gateway",
  "Conscious Creation",
  "Earth School Lessons",
  "Spiritual Community",
  "Peace, Light, and Levity"
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero section">
        <div className="hero-logo-wrap">
          <img src="/the-new-simulation-ministry.png" alt="The New Simulation Ministry logo" className="hero-logo" />
        </div>
        <p className="kicker">Sacred · Modern · Minimal</p>
        <h1>THE NEW SIMULATION MINISTRY</h1>
        <p className="lead">A real spiritual community for people who feel life is more than it appears to be.</p>
        <a href="#join" className="button">Enter the Ministry</a>
        <p className="secondary">Led by Rev. Dr. Jessica Simmonds</p>
      </section>

      <section className="section content">
        <h2>About</h2>
        <p>The New Simulation Ministry is a spiritual and community ministry exploring life as a temporary human experience, a school, and a simulation-like reality where awareness, love, creativity, and choice shape our experience.</p>
      </section>

      <section className="section content">
        <h2>What We Explore</h2>
        <div className="cards">
          {explorationTopics.map((topic) => (
            <article className="card" key={topic}><h3>{topic}</h3></article>
          ))}
        </div>
      </section>

      <section className="section content">
        <h2>Virtual Gatherings</h2>
        <p>The ministry will include virtual calls, reflection circles, teachings, conversations, and community experiences.</p>
      </section>

      <section className="section content">
        <h2>Message from Jessica</h2>
        <blockquote>“I created The New Simulation Ministry for the people who have always felt there is something more happening here. This is a space for awakening, remembering, laughing, learning, and seeing life with new eyes.”</blockquote>
      </section>

      <section className="section content" id="join">
        <h2>Join / Contact</h2>
        <form className="form">
          <label>Name<input type="text" name="name" placeholder="Your name" /></label>
          <label>Email<input type="email" name="email" placeholder="you@example.com" /></label>
          <label>Message<textarea name="message" rows={5} placeholder="Share what brought you here..." /></label>
          <button type="submit" className="button">Join the Ministry</button>
        </form>
      </section>
    </main>
  );
}
