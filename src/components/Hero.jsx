import Spline from '@splinetool/react-spline';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_20%,rgba(255,255,255,0.08),transparent)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-40">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Motion Graphics Studio
        </p>
        <h1 className="text-4xl leading-[1.1] font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          Futuristic visuals that move people
        </h1>
        <p className="mt-5 max-w-2xl text-white/70 md:text-lg">
          We craft immersive motion design for brands, products, and experiences — from liquid chrome worlds to crisp, cinematic titles.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black px-5 py-3 text-sm font-medium transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/30">
            View Work
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            <Play size={18} />
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
