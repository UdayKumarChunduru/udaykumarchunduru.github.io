import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    icon: '🤖',
    name: 'AI Kubernetes Troubleshooting Agent',
    desc: 'Full-stack platform that collects Kubernetes cluster diagnostics and uses an LLM to generate root cause analysis with confidence scoring and suggested kubectl fix commands.',
    highlights: [
      'FastAPI engine collects pod logs, events, node conditions via kubectl and K8s API',
      'LLM analysis via Open Router API — confidence scoring for CrashLoopBackOff, OOMKilled, ImagePullBackOff',
      'React frontend with user auth, real-time investigation progress, and persistent history via Ingest',
      'Deployed with Docker Compose against a local kind cluster — under 60 seconds to root cause',
    ],
    stack: ['Python','FastAPI','React','Open Router API','Kubernetes','kind','Docker Compose','Bash'],
    repo: 'https://github.com/udaykumarchunduru/ai-kubernetes-troubleshooting-agent',
    accent: 'from-violet-500 to-blue-500',
  },
  {
    icon: '🛡',
    name: 'Secure DevSecOps Platform for Kubernetes',
    desc: 'End-to-end DevSecOps pipeline covering CI security, supply-chain scanning, runtime threat detection, admission policy enforcement, and full-stack observability — four layers of security depth.',
    highlights: [
      '5-layer CI security: Gitleaks → SonarQube → OWASP → Snyk → Trivy — zero Critical policy',
      'Falco runtime threat detection + Kyverno admission policies for cluster security enforcement',
      'Prometheus + Grafana + ELK Stack full observability stack with Alertmanager routing',
      'AWS Lambda auto-remediation triggered by Falco CRITICAL alerts via SNS — auto pod quarantine',
    ],
    stack: ['Jenkins','SonarQube','Trivy','OWASP','Snyk','Gitleaks','Falco','Kyverno','Prometheus','Grafana','ELK','AWS Lambda','SNS'],
    repo: 'https://github.com/udaykumarchunduru/secure-devops-platform',
    accent: 'from-pink-500 to-violet-500',
  },
]

export default function Projects() {
  const [ref, visible] = useInView()

  return (
    <section id="projects" className="py-20 px-5 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">What I build</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Personal Projects</h2>
          <p className="text-sm dark:text-zinc-400 text-zinc-500 mb-10 max-w-lg">
            Built during my career break — AI-powered Kubernetes tooling and DevSecOps platform engineering.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 25 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="group glass glass-hover rounded-xl p-6 flex flex-col gap-5 relative overflow-hidden transition-all duration-300"
              >
                {/* Top gradient line */}
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${p.accent}
                                 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400`} />

                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{p.icon}</span>
                    <h3 className="text-base font-bold dark:text-white text-zinc-900 leading-tight">{p.name}</h3>
                  </div>
                  <a href={p.repo} target="_blank" rel="noopener"
                    className="shrink-0 w-8 h-8 rounded-lg glass flex items-center justify-center
                               dark:text-zinc-400 text-zinc-500 hover:text-violet-500
                               border dark:border-white/8 border-black/8 hover:border-violet-500/40
                               transition-all duration-200">
                    <Github size={15} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed">{p.desc}</p>

                {/* Highlights */}
                <ul className="space-y-2 flex-1">
                  {p.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2 text-xs dark:text-zinc-400 text-zinc-500 leading-relaxed">
                      <span className="text-violet-500 shrink-0 mt-px">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t dark:border-white/5 border-black/5">
                  {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
