import { Film, Camera, Layers, Palette } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Title Sequences',
    desc: 'Cinematic openers, kinetic typography, and brand anthems with editorial rhythm.'
  },
  {
    icon: Camera,
    title: 'Product Visuals',
    desc: 'Sleek renders, hero shots, and launch visuals that spotlight features and feel.'
  },
  {
    icon: Layers,
    title: 'Logo Animation',
    desc: 'Identity systems in motion — reveals, stings, and full motion language.'
  },
  {
    icon: Palette,
    title: 'Styleframes & Art Direction',
    desc: 'Look development, color scripting, and references for cohesive visual worlds.'
  }
];

export default function Services() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-black" aria-label="Services">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">What we do</h2>
            <p className="mt-3 max-w-2xl text-white/60">From concept to delivery, we build motion systems that scale across campaigns and platforms.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition hover:border-white/20"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-2xl" />
              <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3 ring-1 ring-inset ring-white/10">
                <s.icon className="text-white/90" size={22} />
              </div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
