import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const jobs = [
  {
    period: 'May 2022 — Sep 2024',
    role: 'DevOps Engineer',
    company: 'Cognizant · Hyderabad',
    client: 'Charter Communications (Spectrum)',
    bullets: [
      'Streamlined CI/CD pipelines for 20+ Java microservices using GitHub Actions and Gradle — reducing build-to-deploy cycle time by ~20%.',
      'Containerised services for 3 development teams onto Amazon EKS; supported ~20% cost improvement via HPA and resource right-sizing.',
      'Implemented GitOps deployments via Argo CD — reducing manual kubectl steps by ~70%.',
      'Provisioned AWS infrastructure using Terraform modules (VPC, EKS, ALB, IAM, Route53) with S3 remote state and DynamoDB locking — cutting provisioning from 2 days to under 3 hours.',
      'Configured Kubernetes Ingress with Helm — consolidating routing and reducing AWS ALB costs by ~30%.',
      'Integrated SonarQube static analysis and Trivy container scanning as mandatory CI security gates.',
      'Automated OS patch management across Linux servers using Ansible playbooks.',
    ],
    tags: ['GitHub Actions','Terraform','Argo CD','Amazon EKS','Helm','SonarQube','Trivy','Ansible','Jira'],
  },
  {
    period: 'Jan 2022 — May 2022',
    role: 'Software Engineer Intern',
    company: 'Cognizant · Remote',
    bullets: [
      'Completed structured onboarding covering SDLC, Linux, and enterprise workflows.',
      'Gained foundational exposure to Git, version control, and basic automation.',
      'Collaborated using Jira and Slack for issue tracking and team communication.',
    ],
    tags: ['Linux','Git','Jira','SDLC'],
  },
]

const certs = [
//   { icon: '🏆', name: 'AWS Certified Solutions Architect', sub: 'Associate (SAA-C03) · Amazon Web Services', status: 'In Progress' },
  { icon: '⭐', name: 'Cognizant Cheers — Best Performer', sub: 'Outstanding contributions to CI/CD automation' },
]

export default function Experience() {
  const [ref, visible] = useInView()

  return (
    <section id="experience" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">Where I've worked</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">Experience</h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Timeline — 2 cols wide */}
            <div className="lg:col-span-2 relative pl-5 border-l dark:border-white/8 border-black/8">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative mb-10 last:mb-0"
                >
                  {/* Dot */}
                  <span className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full bg-violet-500
                                   ring-4 dark:ring-[#0A0A0A] ring-slate-50" />

                  <p className="text-xs font-semibold text-violet-400 mb-1">{job.period}</p>
                  <h3 className="text-lg font-bold dark:text-white text-zinc-900 mb-0.5">{job.role}</h3>
                  <p className="text-sm dark:text-zinc-400 text-zinc-500 mb-2">{job.company}</p>

                  {job.client && (
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md mb-3
                                     bg-violet-500/10 border border-violet-500/25 text-violet-400">
                      Client: {job.client}
                    </span>
                  )}

                  <ul className="space-y-2 mb-3">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed">
                        <span className="text-violet-500 shrink-0 mt-0.5">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certs sidebar */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-4">Certifications</p>
              <div className="space-y-3">
                {certs.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={visible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 glass glass-hover rounded-xl p-4 transition-all"
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{c.icon}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold dark:text-white text-zinc-900 leading-tight">{c.name}</p>
                      <p className="text-xs dark:text-zinc-400 text-zinc-500 mt-0.5 leading-snug">{c.sub}</p>
                      {c.status && (
                        <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded
                                         bg-yellow-400/10 border border-yellow-400/25 text-yellow-400">
                          {c.status}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
