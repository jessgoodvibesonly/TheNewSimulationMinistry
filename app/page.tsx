import Image from "next/image";

const tracks = [
  ["AI Foundations", "Understand AI and how to apply it safely in business.", "🧠"],
  ["Content & Brand Growth", "Create posts, emails, blogs, offers, scripts, and campaigns faster.", "✍️"],
  ["Systems & Automation", "Build workflows that save time and reduce repetitive tasks.", "⚙️"],
  ["CEO Strategy", "Use AI to improve decisions, operations, and growth.", "📈"],
];

const formats = [
  "Self-Paced Courses",
  "Live Cohorts",
  "AI Bootcamps",
  "Team Training",
  "1:1 Coaching",
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02030d] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(236,72,153,.42),transparent_28%),radial-gradient(circle_at_90%_15%,rgba(34,211,238,.35),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(124,58,237,.45),transparent_35%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:60px_60px] opacity-25" />

      <header className="sticky top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-cyan-300/25 bg-black/55 px-4 py-3 shadow-[0_0_45px_rgba(34,211,238,.18)] backdrop-blur-xl">
          <a href="#" className="relative flex items-center">
            <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-2xl" />
            <Image
              src="/ASPIREai.png"
              alt="Aspire AI Academy"
              width={150}
              height={80}
              priority
              className="relative h-12 w-auto drop-shadow-[0_0_18px_rgba(34,211,238,.8)] sm:h-14"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#tracks" className="hover:text-cyan-300">Tracks</a>
            <a href="#learn" className="hover:text-cyan-300">Learn</a>
            <a href="#formats" className="hover:text-cyan-300">Programs</a>
            <a href="#contact" className="hover:text-cyan-300">Apply</a>
          </div>

          <a
            href="#contact"
            className="rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-400 px-4 py-3 text-sm font-bold shadow-[0_0_25px_rgba(236,72,153,.6)] sm:px-6"
          >
            Apply Now
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        <div className="grid gap-10 rounded-[2rem] border border-violet-400/25 bg-[#070b1d]/80 p-5 shadow-[0_0_90px_rgba(124,58,237,.25)] backdrop-blur-xl md:grid-cols-2 md:p-10 lg:p-14">
          <div className="relative flex min-h-[320px] items-center justify-center rounded-[2rem] bg-black/25 p-6">
            <div className="absolute h-72 w-72 rounded-full bg-pink-500/35 blur-3xl" />
            <div className="absolute h-72 w-72 translate-x-16 rounded-full bg-cyan-400/25 blur-3xl" />
            <Image
              src="/ASPIREai.png"
              alt="Aspire AI Academy logo"
              width={620}
              height={620}
              priority
              className="relative z-10 w-full max-w-md drop-shadow-[0_0_45px_rgba(34,211,238,.55)]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-5 w-fit rounded-full border border-pink-400/40 bg-pink-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-pink-200">
              Premium AI Academy
            </div>

            <h1 className="text-5xl font-black leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Aspire AI Academy
            </h1>

            <p className="mt-6 text-xl font-semibold text-cyan-200 md:text-2xl">
              AI training for business owners, entrepreneurs, CEOs, and future-ready teams.
            </p>

            <p className="mt-5 max-w-xl text-white/70">
              Learn how to use AI to save time, streamline operations, create content,
              improve customer experience, support your team, and grow your business
              without losing the human touch.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-400 px-7 py-4 text-center font-bold shadow-[0_0_30px_rgba(34,211,238,.35)]">
                Apply for the Academy →
              </a>
              <a href="#tracks" className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-center font-bold hover:bg-white/10">
                Explore Tracks →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-3xl border border-cyan-300/20 bg-white/[0.04] p-5 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["2,000+", "Entrepreneurs Trained"],
            ["85+", "Countries Reached"],
            ["4.9/5", "Average Rating"],
            ["100+", "AI Tools & Systems Taught"],
          ].map(([num, label]) => (
            <div key={label} className="rounded-2xl bg-black/30 p-5">
              <div className="text-3xl font-black">{num}</div>
              <div className="mt-1 text-sm text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="tracks" className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-pink-400/20 bg-white/[0.04] p-8 backdrop-blur-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-pink-300">Who it’s for</p>
          <h2 className="text-4xl font-black">
            Built for leaders who want <span className="text-pink-400">results.</span>
          </h2>
          <ul className="mt-8 space-y-3 text-white/80">
            <li>✦ Business Owners & Entrepreneurs</li>
            <li>✦ CEOs & Executives</li>
            <li>✦ Founders & Startups</li>
            <li>✦ Consultants & Coaches</li>
            <li>✦ Teams & Departments</li>
            <li>✦ Creators & Professionals</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-8 backdrop-blur-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Academy Tracks</p>
          <h2 className="text-3xl font-black">Practical AI training for real business growth.</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tracks.map(([title, text, icon]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50">
                <div className="mb-5 text-4xl">{icon}</div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-sm text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="learn" className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-cyan-300/20 bg-white/[0.04] p-8 backdrop-blur-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">What students learn</p>
          <h2 className="text-3xl font-black">Turn AI knowledge into action.</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Use AI confidently in daily business operations",
              "Create better content faster",
              "Build automations and workflows",
              "Improve customer experience",
              "Support your team with AI tools",
              "Think strategically about the future of work",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-black/25 p-4 text-white/75">
                <span className="text-cyan-300">✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-pink-300/20 bg-white/[0.04] p-8 backdrop-blur-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-pink-300">Why Aspire AI Academy?</p>
          <h2 className="text-3xl font-black">We teach AI the human way.</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["💗", "Human-First", "Technology should empower people, not replace them."],
              ["🛡️", "Practical", "Real strategies you can use immediately."],
              ["🎯", "Strategic", "Learn how AI fits into business goals."],
              ["✨", "Future-Ready", "Build skills for the next era of work."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="mx-auto max-w-7xl px-4 py-8">
        <div className="rounded-3xl border border-violet-300/20 bg-white/[0.04] p-8 backdrop-blur-xl">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-violet-300">Flexible Program Formats</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {formats.map((format) => (
              <div key={format} className="rounded-3xl border border-white/10 bg-black/30 p-6 text-center font-bold">
                <div className="mb-4 text-4xl">▣</div>
                {format}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-12 pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#071026] p-8 shadow-[0_0_80px_rgba(34,211,238,.14)] md:p-12">
          <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">
                The future belongs to those who build it.
                <br />
                Let’s build yours <span className="text-pink-400">together.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-white/65">
                Join leaders learning how to use AI with clarity, confidence, and purpose.
              </p>
            </div>

            <a href="mailto:jessgoodvibesonly@gmail.com" className="rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-400 px-8 py-5 text-center text-lg font-black shadow-[0_0_35px_rgba(236,72,153,.45)]">
              Apply for the Academy →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
