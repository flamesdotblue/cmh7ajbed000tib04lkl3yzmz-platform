import { Mail, Instagram, Twitter } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-6">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">Let’s create something moving</h2>
            <p className="mt-3 max-w-xl text-white/60">Share a brief about your product, campaign, or brand world. We’ll reply with approach, timeline, and budget ranges.</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:studio@example.com" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                <Mail size={18} /> studio@example.com
              </a>
              <div className="flex items-center gap-2">
                <a aria-label="Instagram" href="#" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-3 text-white/80 transition hover:bg-white/10">
                  <Instagram size={18} />
                </a>
                <a aria-label="Twitter" href="#" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-3 text-white/80 transition hover:bg-white/10">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input type="email" className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Project details</label>
                <textarea rows={4} className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="Timeline, scope, references" />
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
                Send inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Chromewave Motion. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <span className="opacity-30">•</span>
            <a href="#" className="hover:text-white/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
