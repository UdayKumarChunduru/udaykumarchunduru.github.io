import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

// Terminal lines typed one by one
const LINES = [
  { t: 'cmd',    v: 'kubectl get nodes' },
  { t: 'out',    v: 'NAME     STATUS   ROLES   AGE   VERSION' },
  { t: 'out',    v: 'node-01  Ready    infra   2y4m  v1.29' },
  { t: 'cmd',    v: 'cat profile.yaml' },
  { t: 'kv',     k: 'name:',         v: 'Uday Kumar Chunduru' },
  { t: 'kv',     k: 'role:',         v: 'DevOps Engineer' },
  { t: 'kv',     k: 'cloud:',        v: 'AWS — EKS, VPC, IAM, ALB' },
  { t: 'kv',     k: 'cicd:',         v: 'GitHub Actions · Argo CD' },
  { t: 'kv',     k: 'iac:',          v: 'Terraform · Ansible' },
  { t: 'kv',     k: 'security:',     v: 'SonarQube · Trivy · Falco' },
  { t: 'kv',     k: 'status:',       v: 'Immediately Available ✓' },
  { t: 'cmd',    v: 'echo "Ready."' },
  { t: 'out',    v: 'Ready.' },
]

function Terminal() {
  const [shown, setShown] = useState([])

  useEffect(() => {
    let i = 0
    function next() {
      if (i >= LINES.length) return

        const line = LINES[i]
        setShown(prev => [...prev, line])
        i++

        setTimeout(next, line.t === 'cmd' ? 500 : 90)
    }
    const t = setTimeout(next, 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="rounded-xl overflow-hidden border dark:border-white/8 border-black/8 shadow-2xl">
      {/* Bar */}
      <div className="flex items-center gap-2 px-4 py-3 dark:bg-zinc-900 bg-zinc-100 border-b dark:border-white/5 border-black/5">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="mx-auto font-mono text-xs dark:text-zinc-500 text-zinc-400">uday@devops:~$</span>
      </div>
      {/* Body */}
      <div className="dark:bg-zinc-950 bg-zinc-50 p-5 font-mono text-xs leading-relaxed min-h-[260px]">
        {shown.map((line, i) => (
          <div key={i} className="flex gap-2 mb-0.5">
            {line.t === 'cmd' && (
              <><span className="text-green-400 shrink-0">$</span>
                <span className="text-violet-400">{line.v}</span></>
            )}
            {line.t === 'out' && (
              <span className="dark:text-zinc-400 text-zinc-500 pl-4">{line.v}</span>
            )}
            {line.t === 'kv' && (
              <span className="pl-4">
                <span className="text-yellow-400">{line.k}</span>
                <span className="dark:text-zinc-300 text-zinc-600"> {line.v}</span>
              </span>
            )}
          </div>
        ))}
        {shown.length < LINES.length && (
          <div className="flex gap-2">
            <span className="text-green-400">$</span>
            <span className="w-2 h-4 bg-violet-400 inline-block cursor-blink align-middle" />
          </div>
        )}
      </div>
    </div>
  )
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    // 100svh = exactly viewport minus mobile browser UI — no blank space
    <section id="hero" className="flex items-center" style={{ minHeight: '100svh', paddingTop: 64 }}>
      <div className="max-w-6xl mx-auto px-5 w-full py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Text content ── */}
          <div>
            {/* Available badge */}
            <motion.div {...fade(0)} className="mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full
                               bg-green-500/10 border border-green-500/25 text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 dot-pulse" />
                Available · Immediate Joiner
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 {...fade(0.08)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-4">
              I build the pipes<br />
              that ship the code<br />
              <span className="gradient-text">reliably.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p {...fade(0.14)} className="text-base dark:text-zinc-400 text-zinc-500 leading-relaxed mb-6 max-w-lg">
              <span className="dark:text-white text-zinc-800 font-semibold">Uday Kumar Chunduru</span> — DevOps Engineer with
              2.4 years of enterprise experience. AWS · Kubernetes · Terraform · Argo CD · DevSecOps.
              Based in <span className="dark:text-white text-zinc-800 font-medium">Hyderabad, India</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(0.2)} className="flex flex-wrap gap-3 mb-8">
              <a href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold
                           bg-violet-600 text-white hover:bg-violet-700 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25">
                View Projects <ArrowRight size={15} />
              </a>
              <a href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold
                           border dark:border-white/10 border-black/10 dark:text-zinc-300 text-zinc-700
                           hover:border-violet-500/50 hover:text-violet-500 transition-all duration-200">
                Get in Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div {...fade(0.26)} className="flex items-center gap-4">
              {[
                { href: 'https://github.com/udaykumarchunduru', icon: <Github size={18} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/udaykumarchunduru', icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: 'mailto:udaykumarchunduru54@gmail.com', icon: <Mail size={18} />, label: 'Email' },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs dark:text-zinc-500 text-zinc-400
                             hover:text-violet-500 transition-colors duration-200">
                  {s.icon} {s.label}
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div {...fade(0.32)} className="flex gap-6 pt-6 mt-6 border-t dark:border-white/5 border-black/5">
              {[
                { val: '2.4', label: 'Years Exp' },
                { val: '20+', label: 'Microservices' },
                { val: '30+', label: 'Tools' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold gradient-text">{s.val}</div>
                  <div className="text-xs dark:text-zinc-500 text-zinc-400 uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Terminal ── */}
          <motion.div {...fade(0.18)} className="hidden lg:block">
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
