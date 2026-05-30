import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center transition-all duration-300 ${
        scrolled
          ? 'dark:bg-[#0A0A0A]/90 bg-slate-50/90 backdrop-blur-xl border-b dark:border-white/5 border-black/5 shadow-sm'
          : 'dark:bg-transparent bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-5 w-full flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" onClick={e => { e.preventDefault(); scrollTo('#hero') }}
            className="font-mono font-bold text-lg dark:text-white text-zinc-900 tracking-tight">
            UKC<span className="text-violet-500">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <li key={l.label}>
                <button onClick={() => scrollTo(l.href)}
                  className="text-xs font-semibold uppercase tracking-widest dark:text-zinc-400 text-zinc-500
                             hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200">
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button onClick={() => setDark(d => !d)}
              className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center
                         dark:text-zinc-400 text-zinc-500 hover:text-violet-500 transition-colors">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => scrollTo('#contact')}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold
                         border border-violet-500/40 text-violet-400 hover:bg-violet-500 hover:text-white
                         hover:border-violet-500 transition-all duration-200">
              Hire Me
            </button>
            <button onClick={() => setMenuOpen(o => !o)}
              className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center
                         dark:text-zinc-400 text-zinc-600">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 dark:bg-[#111] bg-white border-b
                       dark:border-white/5 border-black/5 py-4 px-5 md:hidden">
            {links.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)}
                className="block w-full text-left py-3 text-sm font-semibold
                           dark:text-zinc-300 text-zinc-700 border-b dark:border-white/5 border-black/5
                           hover:text-violet-500 transition-colors last:border-none">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo('#contact')}
              className="mt-4 w-full py-3 rounded-lg text-sm font-bold
                         bg-violet-600 text-white hover:bg-violet-700 transition-colors">
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
