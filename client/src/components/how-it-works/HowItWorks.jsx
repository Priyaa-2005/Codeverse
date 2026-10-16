const steps = [
  {
    number: "01",
    icon: "🔗",
    title: "Connect Your Platforms",
    description:
      "Connect your favorite coding platforms such as LeetCode, CodeChef, Codeforces, HackerRank and more.",
  },
  {
    number: "02",
    icon: "📊",
    title: "Track Your Coding",
    description:
      "Keep your coding activity, solved problems, streaks and progress organized in one place.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Analyze & Improve",
    description:
      "Use analytics, goals and personalized insights to identify weaknesses and continuously improve.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-t border-zinc-900 bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Your coding journey,
            <br />
            <span className="text-violet-400">simplified.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            CodeVerse makes it simple to connect, track and improve your
            coding journey from one powerful platform.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">

          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-7 hidden h-px bg-violet-500/30 md:block" />

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900"
            >
              {/* Number */}
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-sm font-bold text-violet-400">
                {step.number}
              </div>

              {/* Icon */}
              <div className="mt-6 text-3xl">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;