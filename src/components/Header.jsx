'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoBlue from '../assets/logo-blue.svg'

const NAV_LINKS = [
  { label: 'Серии',       href: '#series' },
  { label: 'О продукте',  href: '#benefits' },
  { label: 'Где купить',  href: '#buy' },
  { label: 'Партнёрам',   href: '#b2b' },
]

const menuVariants = {
  closed: { opacity: 0, y: -8, pointerEvents: 'none' },
  open:   { opacity: 1, y: 0,  pointerEvents: 'auto' },
}

const itemVariants = {
  closed: { opacity: 0, y: 16 },
  open:   (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, type: 'spring', stiffness: 260, damping: 24 } }),
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Floating pill nav */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-4 px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 26, delay: 0.1 }}
          className={`
            flex items-center justify-between gap-4 w-full max-w-5xl
            px-4 py-2.5 rounded-full
            border border-white/60
            transition-all duration-500 ease-spring
            ${scrolled
              ? 'bg-white/80 backdrop-blur-xl shadow-pill'
              : 'bg-white/50 backdrop-blur-md shadow-card'}
          `}
        >
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0">
            <img src={logoBlue} alt="KDA Эксперт" className="h-11 w-auto" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="px-3 py-1.5 text-sm font-medium text-brand-dark/70 hover:text-brand-accent rounded-full hover:bg-brand-accent-light/60 transition-all duration-300 ease-expo"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#b2b"
              className="px-4 py-2 text-sm font-semibold text-brand-accent border border-brand-accent/30 rounded-full hover:bg-brand-accent-light transition-all duration-300 ease-expo"
            >
              Партнёрам
            </a>
            <a
              href="#series"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-brand-accent rounded-full hover:bg-brand-accent/90 active:scale-[0.97] transition-all duration-200 ease-spring shadow-[0_2px_12px_rgba(10,121,134,0.3)]"
            >
              Выбрать серию
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5.5 2.5 8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-brand-gray-light transition-colors"
            aria-label="Меню"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="block h-[1.5px] w-5 bg-brand-dark rounded-full origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] w-5 bg-brand-dark rounded-full"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="block h-[1.5px] w-5 bg-brand-dark rounded-full origin-center"
            />
          </button>
        </motion.nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-2 px-6"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                custom={i}
                variants={itemVariants}
                onClick={() => setOpen(false)}
                className="text-3xl font-bold text-brand-dark hover:text-brand-accent py-3 transition-colors"
              >
                {label}
              </motion.a>
            ))}
            <motion.div
              custom={NAV_LINKS.length}
              variants={itemVariants}
              className="flex flex-col gap-3 w-full mt-8"
            >
              <a
                href="#series"
                onClick={() => setOpen(false)}
                className="w-full py-4 text-center text-base font-bold text-white bg-brand-accent rounded-2xl active:scale-[0.97] transition-transform shadow-[0_4px_20px_rgba(10,121,134,0.35)]"
              >
                Выбрать серию
              </a>
              <a
                href="#b2b"
                onClick={() => setOpen(false)}
                className="w-full py-4 text-center text-base font-semibold text-brand-accent border-2 border-brand-accent/30 rounded-2xl"
              >
                Партнёрам
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
