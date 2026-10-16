function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-zinc-900 bg-zinc-950 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Small Badge */}
        <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
          🚀 Start Your Coding Journey
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Ready to take control of your
          <br />
          <span className="text-violet-400">coding journey?</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Bring all your coding platforms, progress, goals and analytics
          together with CodeVerse.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-violet-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500 hover:shadow-violet-500/30">
            Get Started →
          </button>

          <button className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-8 py-3.5 font-semibold text-zinc-200 transition hover:border-violet-500 hover:bg-zinc-900">
            Explore Platforms
          </button>
        </div>

        {/* Small Trust Text */}
        <p className="mt-6 text-sm text-zinc-600">
          Built for developers who never stop learning.
        </p>
      </div>
    </section>
  );
}

export default CTASection;