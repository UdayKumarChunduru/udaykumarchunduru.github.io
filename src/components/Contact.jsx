import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Linkedin, Github, Telegram, Send, CheckCircle, AlertCircle } from 'lucide-react'

const WEB3FORMS_ACCESS_KEY = '65be30be-f70c-4d5e-b2dc-bd7b621c8958'

const socials = [
  { icon: <Mail size={16} />, label: 'udaykumarchunduru54@gmail.com', href: 'mailto:udaykumarchunduru54@gmail.com' },
  { icon: <Linkedin size={16} />, label: 'linkedin.com/in/udaykumarchunduru', href: 'https://www.linkedin.com/in/udaykumarchunduru' },
  { icon: <Github size={16} />, label: 'github.com/udaykumarchunduru', href: 'https://github.com/udaykumarchunduru' },
  { icon: <Telegram size={16} />, label: 't.me/fortecipher', href: 'https://www.t.me/fortecipher' },
]

export default function Contact() {
  const [ref, visible] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: 'Job Opportunity', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Contact: ${form.subject}`,
          from_name: form.name,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: 'Job Opportunity', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputCls = `w-full bg-transparent border dark:border-white/10 border-black/10 rounded-lg
    px-4 py-3 text-sm dark:text-white text-zinc-900 placeholder:dark:text-zinc-600 placeholder:text-zinc-400
    focus:outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/15
    transition-all duration-200 font-sans`

  return (
    <section id="contact" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10">
            Let's work <span className="gradient-text">together.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left info */}
            <div>
              <p className="text-sm dark:text-zinc-400 text-zinc-500 leading-relaxed mb-8">
                Open to DevOps, Cloud, SRE, and Platform Engineering roles.<br />
                Available immediately for full-time, part-time, or contract positions — on-site, hybrid, or remote.
              </p>

              <div className="space-y-4">
                {socials.map(s => (
                  <a key={s.label} href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm dark:text-zinc-400 text-zinc-500
                               hover:text-violet-500 transition-colors duration-200 group">
                    <span className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center
                                     text-violet-500 border dark:border-white/8 border-black/8
                                     group-hover:border-violet-500/40 transition-all duration-200 shrink-0">
                      {s.icon}
                    </span>
                    {s.label}
                  </a>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl glass border-l-2 border-violet-500">
                <p className="text-xs dark:text-zinc-400 text-zinc-500 leading-relaxed">
                  <span className="font-bold dark:text-white text-zinc-900">Location:</span> Hyderabad, Telangana, India<br />
                  <span className="font-bold dark:text-white text-zinc-900">Relocation:</span> Open to anywhere<br />
                  <span className="font-bold dark:text-white text-zinc-900">Notice period:</span> Immediate / 0 days
                </p>
              </div>
            </div>

            {/* Right form */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-base font-bold dark:text-white text-zinc-900 mb-5">Send a message</h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                  <CheckCircle size={40} className="text-green-400" />
                  <p className="font-semibold dark:text-white text-zinc-900">Message sent!</p>
                  <p className="text-sm dark:text-zinc-400 text-zinc-500">I will get back to you soon.</p>
                  <button onClick={() => setStatus('idle')}
                    className="mt-2 text-xs text-violet-500 hover:text-violet-400 transition-colors">
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider
                                        dark:text-zinc-400 text-zinc-500 mb-1.5">Name</label>
                      <input name="name" value={form.name} onChange={handleChange}
                        placeholder="Your name" required className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider
                                        dark:text-zinc-400 text-zinc-500 mb-1.5">Email</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com" required className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider
                                      dark:text-zinc-400 text-zinc-500 mb-1.5">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange}
                      className={inputCls + ' cursor-pointer dark:bg-[#111] bg-white'}>
                      <option>Job Opportunity</option>
                      <option>Collaboration</option>
                      <option>Consulting</option>
                      <option>General</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider
                                      dark:text-zinc-400 text-zinc-500 mb-1.5">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell me about the role or project..." required rows={4}
                      className={inputCls + ' resize-y min-h-[100px]'} />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-xs text-red-400 bg-red-400/10
                                    border border-red-400/20 rounded-lg px-3 py-2">
                      <AlertCircle size={14} />
                      Something went wrong. Please email me directly at udaykumarchunduru54@gmail.com
                    </div>
                  )}

                  <button type="submit" disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg
                               bg-violet-600 text-white text-sm font-bold
                               hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed
                               transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25">
                    {status === 'sending' ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
