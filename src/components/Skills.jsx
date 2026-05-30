import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const groups = [
  {
    icon: '☁',
    name: 'Cloud Platform',
    tags: ['AWS EC2','Amazon EKS','VPC','IAM','S3','ALB','Route53',
           'CloudWatch','ECR','Lambda','DynamoDB','SNS','Secrets Manager'],
  },
  {
    icon: '⎈',
    name: 'Containers & Orchestration',
    tags: ['Docker','Kubernetes','Amazon EKS','kind','Helm',
           'Nginx Ingress','ALB Ingress','HPA','Docker Compose'],
  },
  {
    icon: '⚡',
    name: 'CI/CD & GitOps',
    tags: ['GitHub Actions','Argo CD','Jenkins','GitLab CI','GitOps'],
  },
  {
    icon: '🏗',
    name: 'Infrastructure as Code',
    tags: ['Terraform','Ansible','Terraform Modules','Remote State','DynamoDB Locking'],
  },
  {
    icon: '🔒',
    name: 'Security & DevSecOps',
    tags: ['SonarQube','Trivy','Snyk','OWASP Dependency-Check',
           'Gitleaks','Falco','Kyverno'],
  },
  {
    icon: '📊',
    name: 'Monitoring & Observability',
    tags: ['Prometheus','Grafana','Elasticsearch','Logstash',
           'Kibana','Alertmanager','PagerDuty'],
  },
  {
    icon: '🤖',
    name: 'AI & Automation',
    tags: ['Python','FastAPI','React','Open Router API',
           'LLM Integration','Prompt Engineering'],
  },
  {
    icon: '🛠',
    name: 'Build, Scripting & Collab',
    tags: ['Maven','Gradle','Nexus','npm','Bash',
           'Linux (Ubuntu)','Git','GitHub','GitLab','Jira','Confluence'],
  },
]

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <section id="skills" className="py-20 px-5 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">What I work with</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Skills & Tools</h2>
          <p className="text-sm dark:text-zinc-400 text-zinc-500 mb-10 max-w-xl">
            The full stack across cloud infrastructure, CI/CD automation, security, and observability.
          </p>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {groups.map((g, gi) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: gi * 0.06 }}
                className="group glass glass-hover rounded-xl p-5 transition-all duration-200 relative overflow-hidden"
              >
                {/* Top accent line on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 to-pink-500
                                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl leading-none">{g.icon}</span>
                  <span className="text-sm font-bold dark:text-zinc-100 text-zinc-800">{g.name}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
