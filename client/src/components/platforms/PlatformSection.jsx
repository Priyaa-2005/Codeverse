const platforms = [
  {
    name: "LeetCode",
    shortName: "LC",
    description: "Practice coding problems and prepare for technical interviews.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    name: "CodeChef",
    shortName: "CC",
    description: "Compete in contests and improve your competitive programming skills.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    name: "Codeforces",
    shortName: "CF",
    description: "Solve competitive programming problems and track your rating.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    name: "HackerRank",
    shortName: "HR",
    description: "Build programming skills through challenges and certifications.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    name: "GeeksforGeeks",
    shortName: "GFG",
    description: "Learn DSA, programming concepts and prepare for placements.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    name: "AtCoder",
    shortName: "AC",
    description: "Participate in programming contests and sharpen your problem-solving.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
];

function PlatformSection() {
  return (
    <section
      id="platforms"
      className="relative border-t border-zinc-900 bg-zinc-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Coding Platforms
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            All your coding platforms.
            <br />
            <span className="text-violet-400">
              One place.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Connect your favorite coding platforms and keep your
            entire coding journey organized inside CodeVerse.
          </p>

        </div>

        {/* Platform Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`group rounded-2xl border ${platform.border} bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900`}
            >

              {/* Platform Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${platform.bg} ${platform.color} text-sm font-bold`}
              >
                {platform.shortName}
              </div>

              {/* Content */}
              <h3 className="mt-5 text-xl font-semibold text-white">
                {platform.name}
              </h3>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-500">
                {platform.description}
              </p>

              {/* Action */}
              <button className="mt-5 text-sm font-semibold text-violet-400 transition group-hover:text-violet-300">
                Connect Platform →
              </button>

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500">
            More platforms coming soon.
            <span className="ml-2 text-violet-400">
              🚀
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default PlatformSection;