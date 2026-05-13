import Image from "next/image";

const navItems = ["Programs", "Curriculum", "Outcomes", "Pricing"];

export default function HomePage() {
  return (
    <main className="academy-neon">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orb orb-cyan" aria-hidden="true" />
      <div className="bg-orb orb-magenta" aria-hidden="true" />

      <nav className="top-nav">
        <a href="#" className="brand" aria-label="Aspire AI home">
          <Image src="/ASPIREai.png" alt="Aspire AI" width={160} height={46} priority />
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </div>
        <a href="#" className="cta-link">
          Enroll Now
        </a>
      </nav>

      <section className="hero">
        <div className="hero-logo-wrap">
          <div className="logo-glow" aria-hidden="true" />
          <Image
            src="/ASPIREai.png"
            alt="Aspire AI Academy"
            width={640}
            height={640}
            className="hero-logo"
            priority
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">ASPIRE AI ACADEMY</p>
          <h1>Master AI Leadership in a Futuristic Learning Experience</h1>
          <p>
            Transform your team with strategy-first AI education designed for founders,
            executives, and operators. Build practical systems, ship faster, and stay ahead.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn btn-primary">
              Start Your Journey
            </a>
            <a href="#" className="btn btn-secondary">
              View Curriculum
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .academy-neon {
          min-height: 100vh;
          color: #eef5ff;
          background: radial-gradient(circle at 15% 15%, #0f214a 0%, #060814 46%, #04030a 100%);
          padding: 1rem clamp(1rem, 4vw, 3rem) 2rem;
          position: relative;
          overflow: hidden;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(0, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.08) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(circle at 50% 35%, black, transparent 82%);
          z-index: 0;
        }

        .bg-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          opacity: 0.4;
          z-index: 0;
        }

        .orb-cyan {
          width: clamp(220px, 35vw, 540px);
          height: clamp(220px, 35vw, 540px);
          background: #00f5ff;
          top: -7%;
          right: -10%;
        }

        .orb-magenta {
          width: clamp(260px, 38vw, 600px);
          height: clamp(260px, 38vw, 600px);
          background: #ff00e5;
          left: -10%;
          bottom: -15%;
        }

        .top-nav,
        .hero {
          position: relative;
          z-index: 1;
        }

        .top-nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.5rem 0;
        }

        .brand :global(img) {
          height: auto;
          width: clamp(130px, 18vw, 170px);
        }

        .nav-links {
          display: flex;
          gap: clamp(0.7rem, 2vw, 1.8rem);
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav-links a,
        .cta-link {
          color: #c8d7ff;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .cta-link {
          border: 1px solid rgba(0, 245, 255, 0.55);
          padding: 0.55rem 1rem;
          border-radius: 999px;
          box-shadow: 0 0 25px rgba(0, 245, 255, 0.22);
        }

        .hero {
          max-width: 1200px;
          margin: clamp(2rem, 6vw, 4.5rem) auto 0;
          display: grid;
          align-items: center;
          grid-template-columns: 1fr 1fr;
          gap: clamp(1.5rem, 4vw, 4rem);
        }

        .hero-logo-wrap {
          position: relative;
          display: grid;
          place-items: center;
          min-height: clamp(220px, 38vw, 520px);
        }

        .logo-glow {
          position: absolute;
          width: clamp(180px, 30vw, 420px);
          height: clamp(180px, 30vw, 420px);
          border-radius: 999px;
          background: conic-gradient(from 20deg, #ff00e5, #7a00ff, #00f5ff, #ff00e5);
          filter: blur(42px);
          opacity: 0.75;
          animation: pulse 6s ease-in-out infinite;
        }

        .hero-logo {
          width: clamp(170px, 36vw, 520px);
          height: auto;
          position: relative;
          filter: drop-shadow(0 0 20px rgba(255, 0, 229, 0.55))
            drop-shadow(0 0 30px rgba(0, 245, 255, 0.45));
        }

        .eyebrow {
          letter-spacing: 0.15em;
          color: #7ee7ff;
          font-size: 0.82rem;
          margin-bottom: 0.8rem;
        }

        .hero-copy h1 {
          margin: 0;
          line-height: 1.05;
          font-size: clamp(2rem, 6vw, 4rem);
          text-shadow: 0 0 28px rgba(0, 245, 255, 0.3);
        }

        .hero-copy p {
          color: #cdd7ef;
          font-size: clamp(1rem, 1.7vw, 1.2rem);
          line-height: 1.65;
          max-width: 58ch;
        }

        .hero-actions {
          margin-top: 1.6rem;
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
        }

        .btn {
          text-decoration: none;
          border-radius: 999px;
          padding: 0.75rem 1.2rem;
          font-weight: 600;
        }

        .btn-primary {
          color: #070814;
          background: linear-gradient(90deg, #00f5ff, #ff47f5);
          box-shadow: 0 0 24px rgba(255, 71, 245, 0.5);
        }

        .btn-secondary {
          color: #d2ecff;
          border: 1px solid rgba(210, 236, 255, 0.5);
          background: rgba(15, 22, 44, 0.45);
          backdrop-filter: blur(8px);
        }

        @media (max-width: 980px) {
          .top-nav {
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-copy p {
            margin: 0 auto;
          }

          .hero-actions {
            justify-content: center;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(0.92);
            opacity: 0.68;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.9;
          }
        }
      `}</style>
    </main>
  );
}
