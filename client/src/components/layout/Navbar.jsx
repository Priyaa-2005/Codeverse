import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold shadow-lg shadow-violet-600/20">
            &lt;/&gt;
          </div>

          <span className="text-xl font-bold tracking-tight">
            Code<span className="text-violet-400">Verse</span>
          </span>
        </a>

       
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
          >
            Home
          </a>

          <a
            href="#platforms"
            className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
          >
            Platforms
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-zinc-300 transition hover:text-violet-400"
          >
            About
          </a>
        </div>

       
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-300 transition hover:text-white">
            Login
          </button>

          <button className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-500">
            Get Started
          </button>
        </div>

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-zinc-800 p-2 text-zinc-300 transition hover:border-violet-500 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-violet-400"
            >
              Home
            </a>

            <a
              href="#platforms"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-violet-400"
            >
              Platforms
            </a>

            <a
              href="#features"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-violet-400"
            >
              Features
            </a>

            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-zinc-300 hover:text-violet-400"
            >
              About
            </a>

            <div className="mt-2 flex gap-3 border-t border-zinc-800 pt-4">
              <button className="flex-1 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-300">
                Login
              </button>

              <button className="flex-1 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold">
                Get Started
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;