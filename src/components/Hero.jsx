import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroMain from '../assets/hero-main.png'
import { MARKETPLACE_LINKS } from '../data/series'

const TRUST = [
  {
    color: '#0A7986', bg: '#E8F4F5',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7"/>
        <path d="M6 9.8c.5 1.1 1.5 1.7 3 1.7s2.5-.6 3-1.7"/>
        <circle cx="6.5" cy="7.5" r=".5" fill="currentColor"/>
        <circle cx="11.5" cy="7.5" r=".5" fill="currentColor"/>
      </svg>
    ),
    text: '6 серий · 33 SKU',
    sub: 'полный протокол в каждой',
  },
  {
    color: '#164379', bg: '#E8F0FA',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2 3 5v4c0 3.8 2.5 6.4 6 7.5 3.5-1.1 6-3.7 6-7.5V5L9 2Z"/>
        <path d="m6.5 9 2 2 3-3.5"/>
      </svg>
    ),
    text: 'Аптечный стандарт',
    sub: 'безопасности',
  },
  {
    color: '#8254C4', bg: '#F3EEFB',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3v8a4 4 0 0 0 8 0V3"/><path d="M3 3h12"/>
      </svg>
    ),
    text: 'Доказанные активы',
    sub: 'ретинол, HA, SymWhite',
  },
  {
    color: '#D62242', bg: '#FDE8EC',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="14" height="11" rx="2"/>
        <path d="M2 8h14M6 4V2M12 4V2"/>
      </svg>
    ),
    text: 'Ozon · WB · ЯМ',
    sub: 'АптекиПлюс',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: 'spring', stiffness: 200, damping: 26, delay },
})

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  const badgeY     = useTransform(scrollYProgress, [0, 1], [0, -90])
  const badgeScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.88])
  const badgeOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}
    >
      {/* ── Full-width background image ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroMain}
          alt="KDA Эксперт — 6 специализированных серий ухода за кожей"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'left 40%' }}
          loading="eager"
        />
        {/* Gradient overlay: strong white on far left fading to transparent — makes text readable */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.88) 28%, rgba(255,255,255,0.55) 44%, rgba(255,255,255,0) 62%)',
          }}
        />
      </motion.div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div
        className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-[48%_52%]"
        style={{ alignItems: 'stretch' }}
      >

        {/* LEFT — Text panel (transparent, sits over colorful bg) */}
        <div className="flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 pt-28 pb-10 md:pt-0 md:pb-0">

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.05)} className="mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent-light text-brand-accent text-[10px] font-bold tracking-[0.18em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              Экспертный уход за кожей
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-extrabold tracking-[-0.025em] leading-[1.07] text-brand-dark"
            style={{ fontSize: 'clamp(2rem, 3vw, 3.3rem)' }}
          >
            Уход, который{' '}
            <span className="text-brand-accent">подобран</span>{' '}
            под задачу кожи.
          </motion.h1>

          {/* Accent line */}
          <motion.div {...fadeUp(0.13)} className="mt-4 mb-5 w-10 h-[2px] bg-brand-accent rounded-full" />

          {/* Description */}
          <motion.p
            {...fadeUp(0.16)}
            className="text-sm md:text-[15px] text-brand-gray-text leading-relaxed"
            style={{ maxWidth: '46ch' }}
          >
            KDA Эксперт — система из 6 специализированных серий. Сухость, акне, жирность, чувствительность, пигментация, возрастные изменения — под каждую задачу своя серия и свой протокол ухода.
          </motion.p>

          {/* CTA row */}
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3 mt-7">
            <a
              href="#series"
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-brand-accent text-white text-sm font-bold rounded-full hover:bg-brand-accent/90 active:scale-[0.97] transition-all duration-200 shadow-[0_4px_18px_rgba(10,121,134,0.28)]"
            >
              Выбрать свою серию
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5.5 2.5 8 5l-2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <a
              href="#b2b"
              className="inline-flex items-center px-5 py-3 border border-brand-accent/30 text-brand-accent text-sm font-semibold rounded-full hover:bg-brand-accent-light transition-all duration-200"
            >
              Партнёрам — скачать прайс
            </a>
          </motion.div>

          {/* Trust grid */}
          <motion.div {...fadeUp(0.25)} className="grid grid-cols-2 gap-2.5 mt-8" style={{ maxWidth: '380px' }}>
            {TRUST.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl"
                style={{ background: item.bg }}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center bg-white/60"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>
                <div>
                  <p className="text-[11px] font-bold text-brand-dark leading-tight">{item.text}</p>
                  <p className="text-[10px] text-brand-gray-text leading-snug">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — spacer only */}
        <div className="hidden md:block" />
      </div>

      {/* ── Floating badge — parallax scroll + entrance ────────────────────── */}
      {/* Outer: scroll-driven parallax */}
      <motion.div
        style={{ y: badgeY, scale: badgeScale, opacity: badgeOpacity, top: 'clamp(90px, 18%, 160px)' }}
        className="absolute z-20 right-6 md:right-10 lg:right-16"
      >
        {/* Inner: entrance animation */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65, type: 'spring', stiffness: 200, damping: 26 }}
        >
          <div className="flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-white/90 shadow-[0_8px_32px_rgba(10,121,134,0.18)] whitespace-nowrap">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-accent-light flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1v1.5M6.5 10.5V12M1 6.5h1.5M10.5 6.5H12M2.8 2.8l1.1 1.1M9.1 9.1l1.1 1.1M9.1 3.9l-1.1 1.1M4.9 8.1l-1.1 1.1" stroke="#0A7986" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="text-[13px] font-semibold text-brand-dark tracking-wide">
              6 серий для разных задач кожи
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Marketplace strip ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="border-t border-brand-gray-med/40 bg-white"
      >
        <div className="px-6 md:px-10 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[10px] font-bold text-brand-gray-text uppercase tracking-widest">Доступно на</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'АптекиПлюс',    href: MARKETPLACE_LINKS.apteki, color: '#00A651' },
              { label: 'Ozon',           href: MARKETPLACE_LINKS.ozon,   color: '#005BFF' },
              { label: 'Wildberries',    href: MARKETPLACE_LINKS.wb,     color: '#CB11AB' },
              { label: 'Яндекс Маркет', href: MARKETPLACE_LINKS.yandex, color: '#FC3F1D' },
            ].map(({ label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 text-[11px] font-bold rounded-full border transition-all duration-200 hover:shadow-sm active:scale-[0.97]"
                style={{ color, borderColor: `${color}30`, background: `${color}0A` }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
