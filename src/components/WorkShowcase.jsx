export default function WorkShowcase() {
  const projects = [
    { id: 1, title: 'Chromatic Flow', tag: 'Exploration' },
    { id: 2, title: 'Iridescent Merge', tag: 'Brand Visual' },
    { id: 3, title: 'Liquid Title Pack', tag: 'Title Design' },
    { id: 4, title: 'Neon Morphs', tag: 'Styleframes' },
    { id: 5, title: 'Futurist HUD', tag: 'Product' },
    { id: 6, title: 'Soft Metals', tag: 'Identity' }
  ];

  return (
    <section id="work" className="relative z-10 border-t border-white/10 bg-black" aria-label="Selected Work">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-2xl text-white/60">A snapshot of explorations and client pieces across motion, 3D, and brand systems.</p>
          </div>
          <a href="#contact" className="hidden rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 md:inline-block">Hire us</a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              {/* Visual Placeholder: animated gradient card as a motion preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <div className="absolute inset-0 animate-[pulse_7s_ease-in-out_infinite] bg-[conic-gradient(at_50%_50%,#22d3ee_0deg,#a78bfa_90deg,#22c55e_180deg,#f472b6_270deg,#22d3ee_360deg)] opacity-[0.85]" />
                <div className="absolute inset-0 mix-blend-soft-light bg-[radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_20%,rgba(255,255,255,0)_80%,rgba(255,255,255,0.05)_100%)]" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-xs text-white/60">{p.tag}</p>
                </div>
                <span className="text-xs text-white/60">Case study →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
