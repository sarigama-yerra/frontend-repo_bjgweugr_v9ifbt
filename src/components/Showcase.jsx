import React from 'react'
import { motion } from 'framer-motion'

const Showcase = () => {
  return (
    <section id="demo" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white">From prompt to product</h3>
            <p className="mt-3 text-slate-300">Give Lovable a plain‑English description. It scaffolds your backend, designs your UI, and wires everything together — then hosts it for you.</p>
            <ul className="mt-6 space-y-3 text-slate-200">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-pink-400" /> Database models generated from your schema</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-400" /> Routes and validation created automatically</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" /> Pixel‑perfect, responsive UI components</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-6 backdrop-blur"
          >
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-tr from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-3xl" />
            <img src="/screenshot.png" alt="Lovable demo" className="relative rounded-xl border border-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
