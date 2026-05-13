export default function Page() {
  return (
    <main className="min-h-screen bg-[#050014] text-white overflow-hidden">
      <section className="relative px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed55,transparent_35%),radial-gradient(circle_at_bottom,#ec489955,transparent_35%)]" />

        <div className="relative max-w-6xl mx-auto">
          <p className="text-pink-300 uppercase tracking-[0.35em] text-sm mb-6">
            Aspire Agency Global presents
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">Aspire AI Academy</h1>

          <p className="mt-6 text-2xl md:text-3xl text-cyan-200 font-semibold">
            AI education for business owners, entrepreneurs, CEOs, and future-ready teams.
          </p>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/75">
            A practical, human-centered AI academy helping leaders understand, use, and implement
            AI inside their businesses without overwhelm, confusion, or losing the human touch.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#programs"
              className="rounded-full bg-pink-500 px-8 py-4 font-bold text-white shadow-[0_0_30px_#ec4899]"
            >
              Explore Programs
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cyan-300 px-8 py-4 font-bold text-cyan-200"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {["AI for CEOs", "AI for Entrepreneurs", "AI for Business Teams"].map((title) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-cyan-200">{title}</h2>
              <p className="mt-4 text-white/70">
                Learn how to use AI strategically, ethically, and practically to save time, improve
                systems, create content, support teams, and grow smarter.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-pink-300 uppercase tracking-[0.3em] text-sm mb-4">Academy Tracks</p>

          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Practical AI training for real business growth.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Foundations for Leaders",
                text: "Understand what AI is, how to use it safely, and where it belongs inside your business."
              },
              {
                title: "AI for Content & Brand Growth",
                text: "Use AI for LinkedIn, blogs, emails, offers, video scripts, podcast workflows, and brand visibility."
              },
              {
                title: "AI Systems & Automation",
                text: "Build repeatable workflows for admin, customer service, hiring, sales, research, and operations."
              },
              {
                title: "AI Strategy for CEOs",
                text: "Identify where AI can save money, increase output, strengthen teams, and create long-term advantage."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8"
              >
                <h3 className="text-2xl font-bold text-pink-200">{item.title}</h3>
                <p className="mt-4 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-[#0b0220]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black">This is not cold tech training.</h2>

          <p className="mt-6 text-xl text-white/75">
            Aspire AI Academy teaches people how to work with AI, not be replaced by it. Our focus
            is human intelligence, creativity, leadership, and practical implementation.
          </p>

          <div className="mt-12 grid md:grid-cols-4 gap-4">
            {["Human-first", "Practical", "Strategic", "Future-ready"].map((word) => (
              <div
                key={word}
                className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-5 py-6 font-bold text-cyan-100"
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-pink-300 uppercase tracking-[0.3em] text-sm mb-4">Who It’s For</p>

            <h2 className="text-4xl md:text-5xl font-black">
              Built for leaders who know AI matters but need a clear path.
            </h2>

            <p className="mt-6 text-white/70 text-lg">
              Perfect for founders, CEOs, solopreneurs, consultants, coaches, creative businesses,
              service providers, agencies, startups, and teams ready to modernize.
            </p>
          </div>

          <div className="rounded-3xl border border-pink-400/30 bg-pink-400/10 p-8">
            <h3 className="text-2xl font-bold text-pink-200 mb-5">Students will learn how to:</h3>

            <ul className="space-y-4 text-white/75">
              <li>✦ Use AI confidently in daily business operations</li>
              <li>✦ Create better content faster</li>
              <li>✦ Build simple automations and workflows</li>
              <li>✦ Improve customer experience</li>
              <li>✦ Support teams with AI tools</li>
              <li>✦ Think strategically about the future of work</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 text-center bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black">
            Bring AI into your business with clarity, confidence, and purpose.
          </h2>

          <p className="mt-6 text-xl text-white/70">
            Aspire AI Academy is designed to help leaders move from curiosity to capability.
          </p>

          <a
            href="mailto:jessgoodvibesonly@gmail.com"
            className="inline-block mt-10 rounded-full bg-cyan-400 px-10 py-4 font-black text-black shadow-[0_0_35px_#22d3ee]"
          >
            Contact Aspire AI Academy
          </a>
        </div>
      </section>
    </main>
  );
}
