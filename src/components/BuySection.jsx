import { motion } from 'framer-motion'
import { MARKETPLACE_LINKS } from '../data/series'

const MARKETPLACES = [
  {
    name: 'АптекиПлюс',
    desc: 'Аптечная сеть · офлайн и онлайн',
    href: MARKETPLACE_LINKS.apteki,
    color: '#00A651',
    bg: '#F0FAF5',
    badge: 'Аптека',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 4h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>
        <path d="M14 9v10M9 14h10"/>
      </svg>
    ),
  },
  {
    name: 'Ozon',
    desc: 'Быстрая доставка · Ozon Premium',
    href: MARKETPLACE_LINKS.ozon,
    color: '#005BFF',
    bg: '#EEF3FF',
    badge: 'Маркетплейс',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10"/>
        <path d="M9 14a5 5 0 0 1 10 0 5 5 0 0 1-10 0Z"/>
        <circle cx="14" cy="14" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'Wildberries',
    desc: 'Пункты выдачи по всей России',
    href: MARKETPLACE_LINKS.wb,
    color: '#CB11AB',
    bg: '#FDF0FB',
    badge: 'Маркетплейс',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 7h18l-2 14H7L5 7Z"/>
        <path d="M10 7V5a4 4 0 0 1 8 0v2"/>
        <path d="M11 13l2 2 4-4"/>
      </svg>
    ),
  },
  {
    name: 'Яндекс Маркет',
    desc: 'Доставка Яндекс · постаматы',
    href: MARKETPLACE_LINKS.yandex,
    color: '#FC3F1D',
    bg: '#FFF2EF',
    badge: 'Маркетплейс',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="12" r="7"/>
        <path d="M14 19v6"/>
        <path d="M10 22h8"/>
      </svg>
    ),
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: 'spring', stiffness: 180, damping: 24, delay },
})

export default function BuySection() {
  return (
    <section id="buy" className="py-24 bg-brand-gray-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-14 text-center max-w-lg mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-accent-light text-brand-accent text-xs font-semibold tracking-[0.14em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Где купить
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark leading-tight text-balance">
            KDA Эксперт везде,<br />где удобно вам
          </h2>
          <p className="mt-3 text-base text-brand-gray-text leading-relaxed">
            Полный ассортимент на крупнейших маркетплейсах России и в аптечной сети.
          </p>
        </motion.div>

        {/* Marketplace cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MARKETPLACES.map((m, i) => (
            <motion.a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(0.06 + i * 0.07)}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              className="group flex flex-col p-6 bg-white rounded-[2rem] border border-brand-gray-med/40 shadow-card hover:shadow-diffuse transition-shadow duration-500 cursor-pointer"
            >
              {/* Badge */}
              <span
                className="self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-5"
                style={{ color: m.color, background: m.bg }}
              >
                {m.badge}
              </span>

              {/* Icon */}
              <span
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: m.bg, color: m.color }}
              >
                {m.icon}
              </span>

              {/* Name */}
              <h3
                className="text-lg font-extrabold leading-tight mb-1"
                style={{ color: m.color }}
              >
                {m.name}
              </h3>
              <p className="text-xs text-brand-gray-text leading-relaxed flex-1">
                {m.desc}
              </p>

              {/* Arrow */}
              <div
                className="mt-5 flex items-center gap-1.5 text-xs font-bold transition-all duration-200 group-hover:gap-2.5"
                style={{ color: m.color }}
              >
                Перейти в магазин
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6h8M6.5 3 9.5 6l-3 3"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-10 flex items-center justify-center gap-3 text-sm text-brand-gray-text"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 1 2 4v4c0 3.3 2.4 5.8 6 6.5C11.6 13.8 14 11.3 14 8V4L8 1Z"/>
            <path d="m5.5 8 2 2 3-3"/>
          </svg>
          Оригинальная продукция с гарантией подлинности
        </motion.div>
      </div>
    </section>
  )
}
