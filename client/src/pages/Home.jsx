import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <main
  id="home"
  className="min-h-screen bg-zinc-950 text-white"
>
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-6 inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            🚀 Your Coding Journey, Unified
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            One Dashboard.
            <br />

            <span className="text-violet-400">
              Every Coding Platform.
            </span>

            <br />

            One Coding Journey.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Practice, track, analyze and improve your coding journey
            without jumping between multiple coding platforms.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-violet-600 px-7 py-3 font-semibold transition hover:bg-violet-500">
              Get Started
            </button>

            <button className="rounded-xl border border-zinc-700 px-7 py-3 font-semibold text-zinc-200 transition hover:border-violet-500 hover:bg-zinc-900">
              Explore Platforms
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;