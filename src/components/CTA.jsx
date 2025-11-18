import React from 'react'

const CTA = () => {
  return (
    <section id="get-started" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 via-fuchsia-500/10 to-blue-500/10 p-10 text-center backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
          <h3 className="relative text-3xl font-bold text-white">Build your next big idea today</h3>
          <p className="relative mx-auto mt-3 max-w-2xl text-slate-200">Join thousands of makers shipping faster with AI‑assisted full‑stack generation.</p>
          <div className="relative mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 px-6 py-3 text-white font-medium shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:opacity-95 transition-opacity">Create a project</a>
            <a href="#" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-slate-100 hover:bg-white/10 transition-colors">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
