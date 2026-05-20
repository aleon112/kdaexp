import { motion } from 'framer-motion'
import { SERIES, MARKETPLACE_LINKS } from '../data/series'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 24 } },
}

function TestTubeIcon({ color }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2v5.5a2 2 0 0 0 4 0V2"/>
      <path d="M3 2h6"/>
    </svg>
  )
}

function SkuBadge({ count, color, colorBg }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold"
      style={{ color, background: colorBg }}
    >
      {count} {count === 1 ? 'средство' : count < 5 ? 'средства' : 'средств'}
    </span>
  )
}

function SeriesCard({ series }) {
  const { name, task, color, colorBg, image, sku, description, actives } = series

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
      className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden border border-brand-gray-med/40 shadow-card hover:shadow-diffuse transition-shadow duration-500"
    >
      {/* Color top bar */}
      <div className="h-1.5 w-full flex-shrink-0" style={{ background: color }} />

      {/* Product image */}
      <div
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colorBg} 0%, white 100%)` }}
      >
        <img
          src={image}
          alt={`KDA Эксперт — серия ${name}`}
          className="w-full h-52 object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-spring"
          loading="lazy"
        />
        {/* SKU badge overlay */}
        <div className="absolute top-3 right-3">
          <SkuBadge count={sku} color={color} colorBg={`${colorBg}`} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Name + task */}
        <div>
          <h3
            className="text-lg font-extrabold tracking-tight leading-tight"
            style={{ color }}
          >
            {name}
          </h3>
          <p className="text-sm text-brand-gray-text mt-0.5 font-medium">{task}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-brand-dark/70 leading-relaxed">
          {description}
        </p>

        {/* Actives */}
        <div className="flex items-start gap-1.5 pt-1">
          <span className="flex-shrink-0 mt-0.5">
            <TestTubeIcon color={color} />
          </span>
          <p className="text-[11px] text-brand-gray-text leading-relaxed">
            {actives}
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Marketplace buttons */}
        <div className="flex flex-col gap-2 mt-2">
          {[
            { label: 'Ozon',        href: MARKETPLACE_LINKS.ozon,   accent: '#005BFF' },
            { label: 'Wildberries', href: MARKETPLACE_LINKS.wb,     accent: '#CB11AB' },
            { label: 'Яндекс',     href: MARKETPLACE_LINKS.yandex, accent: '#FC3F1D' },
          ].map(({ label, href, accent }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 active:scale-[0.97]"
              style={{ color: accent, borderColor: `${accent}25`, background: `${accent}08` }}
              onMouseEnter={e => { e.currentTarget.style.background = `${accent}14`; e.currentTarget.style.borderColor = `${accent}45` }}
              onMouseLeave={e => { e.currentTarget.style.background = `${accent}08`; e.currentTarget.style.borderColor = `${accent}25` }}
            >
              {label}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 10.5 10.5 2.5M6.5 2.5h4v4"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function SeriesNavigator() {
  return (
    <section id="series" className="py-24 bg-brand-gray-light">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          className="mb-14 max-w-xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-accent-light text-brand-accent text-xs font-semibold tracking-[0.14em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Навигатор по сериям
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark leading-tight text-balance">
            Найдите свою серию<br />по задаче кожи
          </h2>
          <p className="mt-3 text-base text-brand-gray-text leading-relaxed">
            6 серий — 6 задач. Выберите свою — и получите полноценный протокол ухода, где все средства совместимы и работают на одну цель.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERIES.map(series => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-center text-sm text-brand-gray-text"
        >
          Не знаете с чего начать?{' '}
          <a href="#plan" className="text-brand-accent font-semibold underline underline-offset-2 hover:no-underline">
            Читайте инструкцию выбора
          </a>
        </motion.p>
      </div>
    </section>
  )
}
