import React from 'react'
import { motion } from 'framer-motion'

const gradients = [
  'from-pink-500/30 via-fuchsia-500/20 to-blue-500/30',
  'from-cyan-400/30 via-blue-500/20 to-purple-500/30',
  'from-amber-400/20 via-rose-500/20 to-indigo-500/20',
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Glow backdrops */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mb-6 w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/90 backdrop-blur"
        >
          AI-native builder for full‑stack apps
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Generate beautiful frontends and production backends in minutes
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-center text-lg text-slate-200"
        >
          Lovable turns ideas into live, hosted web apps. Ship faster with composable UI, API scaffolding, and database‑ready models — all generated for you.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#get-started" className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 px-6 py-3 text-white font-medium shadow-[0_10px_40px_rgba(99,102,241,0.35)] hover:opacity-95 transition-opacity">
            Start for free
          </a>
          <a href="#demo" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-slate-100 hover:bg-white/10 transition-colors">
            See a demo
          </a>
        </motion.div>

        {/* Code preview card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-6 shadow-2xl backdrop-blur"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-pink-500/20 via-fuchsia-500/10 to-blue-500/20 blur-3xl" />
          <div className="text-xs text-slate-200/80">lovable new app</div>
          <pre className="mt-3 rounded-xl bg-black/40 p-4 text-sm text-slate-100 overflow-auto">
{`# models.py\nclass Post(BaseModel):\n  title: str\n  content: str\n\n# main.py\n@app.post('/posts')\nasync def create_post(post: Post):\n  return db.create('post', post)\n\n# App.jsx\nexport default function App(){\n  const [posts, setPosts] = useState([])\n  useEffect(()=> fetch('/api/posts').then(r=>r.json()).then(setPosts), [])\n  return <Feed posts={posts} />\n}`}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
