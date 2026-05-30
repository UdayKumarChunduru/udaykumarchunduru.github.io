import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t dark:border-white/5 border-black/5 py-8 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs dark:text-zinc-500 text-zinc-400">
          © {year} <span className="text-violet-500 font-semibold">Uday Kumar Chunduru</span> · Built with React + Vite + Tailwind
        </p>
        <div className="flex items-center gap-5">
          {[
            { href: 'https://github.com/udaykumarchunduru', icon: <Github size={15} /> },
            { href: 'https://www.linkedin.com/in/udaykumarchunduru', icon: <Linkedin size={15} /> },
            { href: 'mailto:udaykumarchunduru54@gmail.com', icon: <Mail size={15} /> },
          ].map(({ href, icon }) => (
            <a key={href} href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="dark:text-zinc-500 text-zinc-400 hover:text-violet-500 transition-colors duration-200">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
