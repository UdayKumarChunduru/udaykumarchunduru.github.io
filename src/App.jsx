import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(() =>
    (localStorage.getItem('ukc-theme') || 'dark') === 'dark'
  )

  useEffect(() => {
    const cls = dark ? 'dark' : 'light'
    document.documentElement.className = cls
    localStorage.setItem('ukc-theme', cls)
  }, [dark])

  return (
    <div className="dark:bg-[#0A0A0A] bg-slate-50 dark:text-white text-zinc-900 min-h-screen transition-colors duration-300">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
