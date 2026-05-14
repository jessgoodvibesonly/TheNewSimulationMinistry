export default function Page() {
  const tracks = [
    ["AI Foundations", "Understand AI and use it confidently in business."],
    ["Content & Brand Growth", "Create posts, emails, scripts, offers, and campaigns faster."],
    ["Systems & Automation", "Build workflows that save time and reduce repetitive tasks."],
    ["CEO Strategy", "Use AI to support smarter growth and stronger decisions."],
  ];

  const card = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: 28,
    padding: 28,
    boxShadow: "0 0 40px rgba(0,255,255,0.08)",
  };

  return (
    <main style={{
      minHeight: "100vh",
      color: "white",
      background:
        "radial-gradient(circle at 15% 10%, rgba(236,72,153,.35), transparent 28%), radial-gradient(circle at 85% 15%, rgba(34,211,238,.30), transparent 30%), linear-gradient(135deg, #020617 0%, #07051f 45%, #020617 100%)",
      fontFamily: "Arial, Helvetica, sans-serif",
      overflow: "hidden",
    }}>
      <nav style={{
        maxWidth: 1180,
        margin: "24px auto 0",
        padding: "16px 22px",
        borderRadius: 26,
        background: "rgba(0,0,0,.55)",
        border: "1px solid rgba(34,211,238,.35)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 0 45px rgba(34,211,238,.22)",
        backdropFilter: "blur(18px)",
      }}>
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute",
            inset: -18,
            background: "rgba(236,72,153,.35)",
            filter: "blur(28px)",
            borderRadius: "50%",
          }} />
          <img
            src="/ASPIREai.png"
            alt="Aspire AI Academy"
            style={{
              position: "relative",
              height: 58,
              width: "auto",
              display: "block",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 26, alignItems: "center", fontSize: 14 }}>
          <a href="#tracks" style={{ color: "white", textDecoration: "none" }}>Tracks</a>
          <a href="#learn" style={{ color: "white", textDecoration: "none" }}>Learn</a>
          <a href="#formats" style={{ color: "white", textDecoration: "none" }}>Programs</a>
          <a href="#contact" style={{
            color: "white",
            textDecoration: "none",
            padding: "12px 18px",
            borderRadius: 16,
            fontWeight: 700,
            background: "linear-gradient(90deg,#ec4899,#22d3ee)",
            boxShadow: "0 0 28px rgba(236,72,153,.45)",
          }}>
            Apply Now
          </a>
        </div>
      </nav>

      <section style={{
        maxWidth: 1180,
        margin: "48px auto 0",
        padding: "0 20px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 36,
          alignItems: "center",
          borderRadius: 36,
          padding: 42,
          background: "rgba(5,10,35,.82)",
          border: "1px solid rgba(139,92,246,.35)",
          boxShadow: "0 0 90px rgba(124,58,237,.28)",
        }}>
          <div style={{
            position: "relative",
            minHeight: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 32,
            background: "rgba(0,0,0,.35)",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              width: 340,
              height: 340,
              borderRadius: "50%",
              background: "rgba(236,72,153,.32)",
              filter: "blur(55px)",
            }} />
            <div style={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(34,211,238,.26)",
              filter: "blur(55px)",
              transform: "translateX(80px)",
            }} />
            <img
              src="/ASPIREai.png"
              alt="Aspire AI Academy"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 470,
                height: "auto",
                filter: "drop-shadow(0 0 36px rgba(34,211,238,.55))",
              }}
            />
          </div>

          <div>
            <div style={{
              display: "inline-block",
              padding: "9px 16px",
              borderRadius: 999,
              border: "1px solid rgba(236,72,153,.45)",
              color: "#f9a8d4",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 22,
            }}>
              Premium AI Academy
            </div>

            <h1 style={{
              fontSize: "clamp(52px, 7vw, 86px)",
              lineHeight: .92,
              margin: 0,
              fontWeight: 900,
              letterSpacing: -3,
            }}>
              Aspire AI Academy
            </h1>

            <p style={{
              fontSize: 24,
              lineHeight: 1.35,
              color: "#a5f3fc",
              fontWeight: 700,
              marginTop: 26,
            }}>
              AI training for business owners, entrepreneurs, CEOs, and future-ready teams.
            </p>

            <p style={{
              color: "rgba(255,255,255,.72)",
              fontSize: 18,
              lineHeight: 1.7,
              maxWidth: 560,
            }}>
              Learn how to use AI to save time, streamline operations, create content,
              improve customer experience, support your team, and grow your business
              without losing the human touch.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 30 }}>
              <a href="#contact" style={{
                color: "white",
                textDecoration: "none",
                padding: "16px 24px",
                borderRadius: 18,
                fontWeight: 800,
                background: "linear-gradient(90deg,#ec4899,#22d3ee)",
                boxShadow: "0 0 30px rgba(34,211,238,.35)",
              }}>
                Apply for the Academy →
              </a>

              <a href="#tracks" style={{
                color: "white",
                textDecoration: "none",
                padding: "16px 24px",
                borderRadius: 18,
                fontWeight: 800,
                border: "1px solid rgba(255,255,255,.25)",
                background: "rgba(255,255,255,.06)",
              }}>
                Explore Tracks →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        maxWidth: 1180,
        margin: "28px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: 16,
      }}>
        {[
          ["2,000+", "Entrepreneurs Trained"],
          ["85+", "Countries Reached"],
          ["4.9/5", "Average Rating"],
          ["100+", "AI Tools Taught"],
        ].map(([number, label]) => (
          <div key={label} style={card}>
            <div style={{ fontSize: 34, fontWeight: 900 }}>{number}</div>
            <div style={{ color: "rgba(255,255,255,.62)", marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </section>

      <section id="tracks" style={{
        maxWidth: 1180,
        margin: "28px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 22,
      }}>
        {tracks.map(([title, text]) => (
          <div key={title} style={card}>
            <div style={{ fontSize: 36, marginBottom: 18 }}>✦</div>
            <h2 style={{ fontSize: 25, margin: 0 }}>{title}</h2>
            <p style={{ color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}>{text}</p>
          </div>
        ))}
      </section>

      <section id="learn" style={{
        maxWidth: 1180,
        margin: "28px auto",
        padding: "0 20px",
      }}>
        <div style={card}>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)", margin: 0 }}>
            We teach AI the human way.
          </h2>
          <p style={{
            color: "rgba(255,255,255,.72)",
            fontSize: 20,
            lineHeight: 1.7,
            maxWidth: 850,
          }}>
            Aspire AI Academy helps leaders turn AI confusion into confidence,
            strategy, systems, content, automation, and real-world implementation.
          </p>
        </div>
      </section>

      <section id="formats" style={{
        maxWidth: 1180,
        margin: "28px auto",
        padding: "0 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: 16,
      }}>
        {["Self-Paced Courses", "Live Cohorts", "AI Bootcamps", "Team Training", "1:1 Coaching"].map((format) => (
          <div key={format} style={{ ...card, textAlign: "center", fontWeight: 800 }}>
            <div style={{ fontSize: 34, marginBottom: 12 }}>▣</div>
            {format}
          </div>
        ))}
      </section>

      <section id="contact" style={{
        maxWidth: 1180,
        margin: "40px auto 80px",
        padding: "0 20px",
      }}>
        <div style={{
          ...card,
          padding: 44,
          background:
            "radial-gradient(circle at right, rgba(34,211,238,.18), transparent 35%), rgba(255,255,255,.06)",
        }}>
          <h2 style={{ fontSize: "clamp(38px, 5vw, 60px)", margin: 0, lineHeight: 1 }}>
            The future belongs to those who build it.
            <br />
            <span style={{ color: "#f472b6" }}>Let’s build yours together.</span>
          </h2>

          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 19, lineHeight: 1.7, maxWidth: 780 }}>
            For business owners, entrepreneurs, CEOs, creators, consultants, and teams ready
            to use AI with clarity, confidence, and purpose.
          </p>

          <a href="mailto:jessgoodvibesonly@gmail.com" style={{
            display: "inline-block",
            marginTop: 20,
            color: "white",
            textDecoration: "none",
            padding: "18px 28px",
            borderRadius: 18,
            fontWeight: 900,
            background: "linear-gradient(90deg,#ec4899,#22d3ee)",
            boxShadow: "0 0 35px rgba(236,72,153,.45)",
          }}>
            Apply for the Academy →
          </a>
        </div>
      </section>
    </main>
  );
}
