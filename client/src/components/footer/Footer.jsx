function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Code<span className="text-violet-500">Verse</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
              One platform to track, analyze and improve your complete
              coding journey.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white">Product</h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p className="cursor-pointer hover:text-violet-400">
                Dashboard
              </p>
              <p className="cursor-pointer hover:text-violet-400">
                Platforms
              </p>
              <p className="cursor-pointer hover:text-violet-400">
                Analytics
              </p>
              <p className="cursor-pointer hover:text-violet-400">
                DSA Roadmap
              </p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white">Resources</h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p className="cursor-pointer hover:text-violet-400">
                Documentation
              </p>
              <p className="cursor-pointer hover:text-violet-400">
                Blog
              </p>
              <p className="cursor-pointer hover:text-violet-400">
                Help Center
              </p>
              <p className="cursor-pointer hover:text-violet-400">
                Contact
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <div className="mt-4 space-y-3 text-sm text-zinc-500">
              <p className="cursor-pointer hover:text-violet-400">
                About
              </p>
              <p className="cursor-pointer hover:text-violet-400">
                Privacy
              </p>
              <p className="cursor-pointer hover:text-violet-400">
                Terms
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-zinc-900 pt-6 text-sm text-zinc-600 sm:flex-row">

          <p>
            © 2026 CodeVerse. All rights reserved.
          </p>

          <p>
            Built for developers who never stop learning. 🚀
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;