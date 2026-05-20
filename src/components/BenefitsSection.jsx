import { motion } from 'framer-motion'
import bgBenefits from '../assets/bg-benefits.png'

const FEATURES = [
  {
    num: '01',
    color: '#0A7986',
    bg: '#E8F4F5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2 3.5 6v5c0 4.7 3.1 8 7.5 9.3C15.4 19 18.5 15.7 18.5 11V6L11 2Z"/>
        <path d="m8 11 2.5 2.5 4-4.5"/>
      </svg>
    ),
    title: 'Аптечный стандарт безопасности',
    body: 'Все формулы протестированы по протоколам дерматологической безопасности. Отсутствие гормонов, антибиотиков и агрессивных консервантов.',
  },
  {
    num: '02',
    color: '#D62242',
    bg: '#FDE8EC',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4v9a4 4 0 0 0 8 0V4"/><path d="M5 4h12"/>
      </svg>
    ),
    title: 'Доказанные активы',
    body: 'Ретинол, 4D гиалуроновая кислота, SymWhite 377, ниацинамид, пептиды — только вещества с клинически подтверждённой эффективностью.',
  },
  {
    num: '03',
    color: '#8254C4',
    bg: '#F3EEFB',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M7.5 11h7M11 7.5v7"/>
      </svg>
    ),
    title: '6 специализированных серий',
    body: 'Каждая серия создана под конкретную задачу кожи. Средства внутри серии синергичны и работают как единый протокол.',
  },
  {
    num: '04',
    color: '#164379',
    bg: '#E8F0FA',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="16" height="13" rx="2"/>
        <path d="M3 10h16M8 6V4a3 3 0 0 1 6 0v2"/>
      </svg>
    ),
    title: '33 SKU на Ozon · WB · ЯМ',
    body: 'Полный ассортимент на крупнейших маркетплейсах и в сети АптекиПлюс. Быстрая доставка по всей России.',
  },
  {
    num: '05',
    color: '#1993A2',
    bg: '#E5F5F7',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10h14M4 14h14M4 6h14"/>
      </svg>
    ),
    title: 'Полный протокол в каждой',
    body: 'От очищения до защиты — все шаги ухода собраны в одной серии. Не нужно совмещать бренды и проверять совместимость.',
  },
  {
    num: '06',
    color: '#8A7660',
    bg: '#F7F2EE',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M11 7v4l2.5 2.5"/>
      </svg>
    ),
    title: 'Без лишних шагов',
    body: 'Минималистичный подход: только то, что действительно работает. Каждое средство решает задачу — без балластных ингредиентов.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: 'spring', stiffness: 180, damping: 24, delay },
})

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative py-24 overflow-hidden"
    >
      {/* Background image */}
      <img
        src={bgBenefits}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      {/* Subtle white overlay so text stays readable */}
      <div className="absolute inset-0 bg-white/40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">

        {/* Header — two-column like reference */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full bg-white/70 backdrop-blur-sm border border-brand-accent/20 text-brand-accent text-xs font-semibold tracking-[0.14em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
              О продукте
            </span>
            <h2
              className="font-extrabold tracking-tight text-brand-dark leading-[1.05]"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4rem)' }}
            >
              Почему<br />
              <span className="text-brand-accent">KDA Эксперт?</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.08)} className="md:pb-2">
            <p className="text-base text-brand-dark/70 leading-relaxed">
              Система создана для тех, кто устал от универсальных средств без результата.
            </p>
            <p className="text-base text-brand-dark/70 leading-relaxed mt-3">
              Каждая деталь —{' '}
              <span className="font-semibold text-brand-accent">про эффективность.</span>
            </p>
          </motion.div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              {...fadeUp(i * 0.07)}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              className="relative flex flex-col p-6 rounded-[1.75rem] bg-white/80 backdrop-blur-sm border border-white shadow-card hover:shadow-diffuse transition-shadow duration-500 overflow-hidden"
            >
              {/* Big ghost number — top right */}
              <span
                className="absolute top-0 right-3 text-[5.5rem] font-black leading-none select-none pointer-events-none"
                style={{ color: f.color, opacity: 0.08 }}
              >
                {f.num}
              </span>

              {/* Icon */}
              <span
                className="inline-flex items-center justify-center w-11 h-11 rounded-2xl mb-5 flex-shrink-0"
                style={{ background: f.bg, color: f.color }}
              >
                {f.icon}
              </span>

              <h3 className="text-[15px] font-bold text-brand-dark leading-snug mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-brand-gray-text leading-relaxed flex-1">
                {f.body}
              </p>

              {/* Colored bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-[1.75rem]"
                style={{ background: f.color, opacity: 0.7 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
