import React from 'react'
import { Heart, Github, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/0 pointer-events-none" />
      <nav className="relative mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-xl rounded-full" />
            <Heart className="relative h-7 w-7 text-pink-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">Lovable</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8 text-slate-200/90">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#docs" className="hover:text-white transition-colors">Docs</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-slate-200 hover:bg-white/10 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href="#get-started"
            className="rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 px-4 py-2 font-medium text-white shadow-[0_8px_30px_rgb(79,70,229,0.35)] hover:opacity-95 transition-opacity"
          >
            Start building
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200/90">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </div>
  )
}

export default Navbar
