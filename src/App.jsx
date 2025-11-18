import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(700px_circle_at_90%_30%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(800px_circle_at_50%_90%,rgba(168,85,247,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.8),rgba(2,6,23,0.95))]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Showcase />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <CTA />

      {/* Footer */}
      <footer className="py-10 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Lovable — Build with love.</p>
      </footer>
    </div>
  )
}

export default App
