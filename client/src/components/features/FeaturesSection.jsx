const features = [
  {
    icon: "📊",
    title: "Unified Dashboard",
    description:
      "View your coding activity, solved problems, streaks, and progress from every platform in one dashboard.",
  },
  {
    icon: "🔥",
    title: "Streak Tracking",
    description:
      "Track your daily coding consistency and stay motivated to maintain your coding streak.",
  },
  {
    icon: "📈",
    title: "Performance Analytics",
    description:
      "Analyze your coding performance and understand where you are improving and where you need more practice.",
  },
  {
    icon: "🎯",
    title: "Goals & Progress",
    description:
      "Set coding goals and track your progress to stay focused on your learning and placement preparation.",
  },
  {
    icon: "🧠",
    title: "DSA Roadmap",
    description:
      "Follow a structured DSA roadmap and keep track of the topics and problems you have completed.",
  },
  {
    icon: "🤖",
    title: "AI Coding Assistant",
    description:
      "Get intelligent guidance, explanations, and suggestions while working on coding problems.",
  },
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative border-t border-zinc-900 bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Powerful Features
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to
            <br />
            <span className="text-violet-400">level up your coding.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            CodeVerse brings your coding journey, progress, goals, and
            analytics together in one powerful platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-xl transition duration-300 group-hover:bg-violet-500/20">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {feature.description}
              </p>

              {/* Learn More */}
              <div className="mt-5 text-sm font-semibold text-violet-400 transition group-hover:text-violet-300">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;