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

const ordinationOfferings = [
  {
    title: "Digital Ordination Certificate",
    description: "Delivered by email as a personalized PDF.",
    detailsTitle: "Includes:",
    details: [
      "Personalized name",
      "Ministry seal",
      "Thunderbird emblem",
      "Founder signature",
      "Official ceremonial ordination wording"
    ],
    priceLabel: "Suggested price:",
    price: "$22–$44 USD"
  },
  {
    title: "Premium Printed Certificate",
    description: "A physical certificate mailed to the recipient.",
    detailsTitle: "Style:",
    details: [
      "White certificate paper",
      "Black typography",
      "Soft gold seal or stamp",
      "Thunderbird emblem",
      "Elegant ceremonial layout"
    ],
    priceLabel: "Suggested price:",
    price: "$55–$125 USD"
  },
  {
    title: "Ministry Membership",
    description: "A future community offering for people who want to join the ministry more deeply.",
    detailsTitle: "May include:",
    details: [
      "Monthly virtual calls",
      "EARTH SCHOOL reflections",
      "Conscious living discussions",
      "Guided spiritual teachings",
      "Community connection",
      "Digital welcome package"
    ]
  }
];

const connectedProjects = [
  { name: "EARTH SCHOOL Podcast", href: "https://www.youtube.com/@EarthSchoolThePodcast" },
  { name: "A Spiritual Warrior’s Path to Re-Enlightening", href: "https://www.amazon.com/Spiritual-Warriors-Path-Re-Enlightening-ebook/dp/B0BR66M6TJ" }
];

const socialContacts = [
  { label: "LinkedIn", text: "Jessica Simmonds on LinkedIn", href: "https://www.linkedin.com/in/jessica-simmonds-aspire4/" },
  { label: "Instagram", text: "A Spiritual Warrior’s Path on Instagram", href: "https://www.instagram.com/aspiritualwarriorspath" },
  { label: "Personal Site", text: "www.aspiritualwarriorspath.com", href: "https://www.aspiritualwarriorspath.com" },
  { label: "Email", text: "jessgoodvibesonly@gmail.com", href: "mailto:jessgoodvibesonly@gmail.com" }
];

const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" };

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero section" id="top">
        <div className="hero-logo-wrap">
          <img src="/the-new-simulation-ministry.png" alt="THE NEW SIMULATION MINISTRY" className="hero-logo" />
        </div>
        <p className="kicker">Led by Rev. Dr. Jessica Simmonds</p>
        <h1>THE NEW SIMULATION MINISTRY</h1>
        <p className="lead">A real spiritual community for people exploring life as a temporary human experience.</p>
        <p className="support">Bringing Back the 80’s Movement</p>
        <a href="https://www.aspiritualwarriorspath.com" className="inline-link" {...externalLinkProps}>A Spiritual Warrior’s Path</a>
        <blockquote className="hero-quote">
          <p>“Can you see your own face right now?”</p>
          <cite>— Rev. Dr. Jessica Simmonds</cite>
        </blockquote>
        <p className="support">
          A school of awareness and sacred conversation where consciousness, perception, creativity, love, and choice
          help shape how we live this human chapter.
        </p>
      </section>

      <section className="section content">
        <h2>What This Is</h2>
        <p>
          THE NEW SIMULATION MINISTRY is a real ministry and active community led by Rev. Dr. Jessica Simmonds. This
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
        <a href="https://earth-school-five.vercel.app" className="inline-link" {...externalLinkProps}>Visit EARTH SCHOOL</a>
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

      <section className="section content ordination-section" id="ordination">
        <h2>BECOME ORDAINED</h2>
        <p>
          The New Simulation Ministry offers symbolic and ceremonial ordination for individuals who resonate with conscious living,
          compassion, creativity, reflection, and spiritual exploration.
        </p>
        <p>
          This is a modern spiritual and community ministry exploring awareness, consciousness, personal growth, creativity,
          compassion, and the idea that life is a temporary human experience.
        </p>

        <div className="ordination-cards" role="list">
          {ordinationOfferings.map((offering) => (
            <article className="ordination-card" key={offering.title} role="listitem">
              <div className="ordination-seal" aria-hidden="true">THUNDERBIRD</div>
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
              <h4>{offering.detailsTitle}</h4>
              <ul className="detail-list">
                {offering.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {offering.price && (
                <p className="price-note">
                  <span>{offering.priceLabel}</span> {offering.price}
                </p>
              )}
            </article>
          ))}
        </div>

        <p className="credibility-note">
          <strong>Important note:</strong> Ordination through The New Simulation Ministry is offered as symbolic, ceremonial, and
          spiritual/community recognition. Legal authority to perform weddings or official ceremonies may vary by location.
          Members are responsible for checking their own local laws and requirements.
        </p>

        <a
          href="mailto:jessgoodvibesonly@gmail.com?subject=Ordination%20Request%20-%20The%20New%20Simulation%20Ministry"
          className="button"
        >
          Request Ordination
        </a>
      </section>

      <section className="section content" id="join">
        <h2>Join the Conversation</h2>
        <p>
          This ministry is for seekers, creators, spiritual thinkers, curious minds, and anyone who has ever felt that
          life is more than it appears to be.
        </p>
        <a
          href="https://forms.gle/X8zBMWuxZBCuB7L8A"
          className="button join-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the Conversation
        </a>
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

      <footer className="footer">THE NEW SIMULATION MINISTRY · Peace, Light, and Levity · <a href="https://jessgoodvibesonly.vercel.app" className="inline-link" {...externalLinkProps}>JessGoodVibesOnly</a></footer>
    </main>
  );
}
