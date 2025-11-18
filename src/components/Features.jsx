import React from 'react'
import { Code2, Database, Rocket, Sparkles, ShieldCheck, Boxes } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Sparkles,
    title: 'Generative UI',
    desc: 'Describe your idea and watch pixel-perfect interfaces appear instantly.',
  },
  {
    icon: Code2,
    title: 'Production API',
    desc: 'FastAPI endpoints generated with validation, routing, and testing.',
  },
  {
    icon: Database,
    title: 'Built-in Database',
    desc: 'Mongo-backed models with schemas and queries scaffolded for you.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    desc: 'Best-practice auth, input validation, and error handling baked in.',
  },
  {
    icon: Boxes,
    title: 'Composable blocks',
    desc: 'Reuse components and patterns across projects with one click.',
  },
  {
    icon: Rocket,
    title: 'Deploy in minutes',
    desc: 'One command to go live with preview URLs you can share.',
  },
]

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to ship</h2>
          <p className="mt-3 text-slate-300">From idea to deployed product without switching tools.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)] transition-shadow"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-tr from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-2xl" />
              <f.icon className="h-6 w-6 text-white" />
              <h3 className="mt-3 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
