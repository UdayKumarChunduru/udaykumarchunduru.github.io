import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MapPin, Briefcase, GraduationCap, Zap } from 'lucide-react'

const facts = [
  { icon: <MapPin size={14} />, label: 'Location',   value: 'Hyderabad, Telangana, India' },
  { icon: <Zap size={14} />,    label: 'Status',     value: 'Immediately Available',  accent: true },
  { icon: <Briefcase size={14} />, label: 'Exp',     value: '2.4 Years — DevOps' },
  { icon: <GraduationCap size={14} />, label: 'Degree', value: 'B.Tech, Mechanical Eng.' },
]

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">Who I am</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">About Me</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Text — spans 2 cols */}
            <div className="lg:col-span-2 space-y-4 text-sm sm:text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              <p>
                I am a <strong className="dark:text-white text-zinc-900">DevOps Engineer</strong> with 2.4 years of
                hands-on enterprise experience building AWS-based infrastructure, Kubernetes platforms, and CI/CD
                pipelines for production microservice applications.
              </p>
              <p>
                My enterprise work involved a telecom-scale platform for{' '}
                <strong className="dark:text-white text-zinc-900">Charter Communications (Spectrum)</strong> — a Fortune 500
                US company — where I containerised 20+ Java microservices onto Amazon EKS, implemented GitOps
                deployments with Argo CD, provisioned reusable Terraform modules for AWS infrastructure, and integrated
                SonarQube and Trivy as security gates in the delivery pipeline.
              </p>
              <p>
                Outside of enterprise work I build personal projects in{' '}
                <strong className="dark:text-white text-zinc-900">AI-powered Kubernetes tooling</strong> and{' '}
                <strong className="dark:text-white text-zinc-900">DevSecOps automation</strong> — because the best
                way to understand a tool deeply is to build something real with it.
              </p>
              <p>
                I have a Mechanical Engineering background, which gives me a systems-thinking approach to infrastructure
                debugging — trace what changed, isolate the cause, fix the root.
              </p>
            </div>

            {/* Facts card */}
            <div className="glass rounded-xl p-5 space-y-0 h-fit">
              {facts.map((f, i) => (
                <div key={f.label}
                  className={`flex items-center gap-3 py-3.5 ${i < facts.length - 1 ? 'border-b dark:border-white/5 border-black/5' : ''}`}>
                  <span className="text-violet-500 shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider dark:text-zinc-500 text-zinc-400">{f.label}</p>
                    <p className={`text-sm font-semibold mt-0.5 ${f.accent ? 'text-green-400' : 'dark:text-zinc-200 text-zinc-700'}`}>
                      {f.value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-4 flex gap-2">
                <a href="https://github.com/udaykumarchunduru" target="_blank" rel="noopener"
                  className="flex-1 py-2 text-center text-xs font-bold rounded-lg
                             border dark:border-white/10 border-black/10 dark:text-zinc-300 text-zinc-600
                             hover:border-violet-500/50 hover:text-violet-500 transition-all">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/udaykumarchunduru" target="_blank" rel="noopener"
                  className="flex-1 py-2 text-center text-xs font-bold rounded-lg
                             bg-violet-600 text-white hover:bg-violet-700 transition-all">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
