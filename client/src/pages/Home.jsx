import Navbar from "../components/layout/Navbar";
import PlatformSection from "../components/platforms/PlatformSection";
import FeaturesSection from "../components/features/FeaturesSection";
import HowItWorks from "../components/how-it-works/HowItWorks";
import CTASection from "../components/cta/CTASection";
function Home() {
  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-zinc-950 text-white"
    >
      <Navbar />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative flex min-h-screen items-center px-6 pt-28">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* ==================== LEFT CONTENT ==================== */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              🚀 Your Coding Journey, Unified
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              One Dashboard.
              <br />

              <span className="text-violet-400">
                Every Coding Platform.
              </span>

              <br />

              One Coding Journey.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Track your coding progress, monitor your streaks, analyze your
              performance and manage every coding platform from one powerful
              dashboard.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="rounded-xl bg-violet-600 px-7 py-3.5 font-semibold shadow-lg shadow-violet-600/20 transition hover:bg-violet-500 hover:shadow-violet-500/30">
                Get Started →
              </button>

              <button className="rounded-xl border border-zinc-700 bg-zinc-900/50 px-7 py-3.5 font-semibold text-zinc-200 transition hover:border-violet-500 hover:bg-zinc-900">
                Explore Platforms
              </button>
            </div>

            {/* Small Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm lg:justify-start">
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-zinc-500">Platforms</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">1</p>
                <p className="text-zinc-500">Unified Dashboard</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">∞</p>
                <p className="text-zinc-500">Possibilities</p>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT DASHBOARD PREVIEW ==================== */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-2xl">
              {/* Fake Browser Header */}
              <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>

                <span className="text-xs text-zinc-500">
                  codeverse.dev/dashboard
                </span>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-4">
                {/* Welcome */}
                <div>
                  <p className="text-sm text-zinc-500">
                    Welcome back 👋
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Your Coding Overview
                  </h2>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-500">
                      Problems Solved
                    </p>

                    <p className="mt-2 text-2xl font-bold text-violet-400">
                      248
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                    <p className="text-xs text-zinc-500">
                      Current Streak
                    </p>

                    <p className="mt-2 text-2xl font-bold text-violet-400">
                      21 🔥
                    </p>
                  </div>
                </div>

                {/* Coding Activity */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      Coding Activity
                    </p>

                    <span className="text-xs text-violet-400">
                      This Week
                    </span>
                  </div>

                  <div className="mt-5 flex h-24 items-end gap-2">
                    {[35, 55, 40, 75, 60, 90, 65].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-violet-600/70 transition hover:bg-violet-500"
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Connected Platforms */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                  <p className="mb-3 text-sm font-medium">
                    Connected Platforms
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-lg bg-orange-500/10 px-3 py-1.5 text-xs text-orange-400">
                      LeetCode
                    </span>

                    <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
                      CodeChef
                    </span>

                    <span className="rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-400">
                      Codeforces
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PLATFORM SECTION ==================== */}
      <PlatformSection />

      {/* ==================== FEATURES SECTION ==================== */}
      <FeaturesSection />

      <HowItWorks/>

      <CTASection />
    </main>
  );
}

export default Home;