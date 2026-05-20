import { motion } from 'framer-motion'
import { SERIES } from '../data/series'

const STEPS = [
  {
    step: '1',
    label: 'Очищение',
    desc: 'Гель или пенка — удаляет загрязнения, не нарушая барьер',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2C6.7 2 4 4.7 4 8c0 2.5 1.4 4.6 3.5 5.7V16h5v-2.3C14.6 12.6 16 10.5 16 8c0-3.3-2.7-6-6-6Z"/>
        <path d="M7.5 16.5h5M8.5 19h3"/>
      </svg>
    ),
  },
  {
    step: '2',
    label: 'Тонизирование',
    desc: 'Тоник выравнивает pH и подготавливает кожу к следующим шагам',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 3v14M6 7c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 6-4 10c-2.2-4-4-7.8-4-10Z"/>
      </svg>
    ),
  },
  {
    step: '3',
    label: 'Сыворотка',
    desc: 'Концентрированный уход с целевыми активами — ядро протокола',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3v8a3 3 0 0 0 6 0V3"/>
        <path d="M5 3h10"/>
        <path d="M9 9h2"/>
      </svg>
    ),
  },
  {
    step: '4',
    label: 'Крем / Уход',
    desc: 'Завершает протокол, запечатывает активы и восстанавливает барьер',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="14" height="10" rx="2"/>
        <path d="M7 8V6a3 3 0 0 1 6 0v2"/>
        <path d="M10 12v3"/>
      </svg>
    ),
  },
  {
    step: '5',
    label: 'SPF днём',
    desc: 'Защита от УФ — обязательный финальный шаг утреннего ухода',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="4"/>
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4"/>
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

export default function ProtocolSection() {
  return (
    <section id="protocol" className="py-24 bg-brand-gray-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="mb-16 max-w-xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-accent-light text-brand-accent text-xs font-semibold tracking-[0.14em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            Как это работает
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark leading-tight text-balance">
            Полный протокол<br />в каждой серии
          </h2>
          <p className="mt-3 text-base text-brand-gray-text leading-relaxed">
            Не нужно собирать уход из разных брендов. В каждой серии KDA Эксперт — все шаги совместимы и усиливают друг друга.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left — steps */}
          <div className="flex flex-col gap-4">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.step}
                {...fadeUp(0.06 + i * 0.07)}
                className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-brand-gray-med/40 shadow-card"
              >
                {/* Step number + connector */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="w-9 h-9 rounded-xl bg-brand-accent flex items-center justify-center text-white font-bold text-sm">
                    {s.step}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="w-px h-4 bg-brand-accent/20 mt-1" />
                  )}
                </div>

                {/* Icon + text */}
                <div className="flex items-start gap-3 flex-1">
                  <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-brand-accent-light flex items-center justify-center text-brand-accent">
                    {s.icon}
                  </span>
                  <div>
                    <p className="font-bold text-brand-dark text-sm">{s.label}</p>
                    <p className="text-xs text-brand-gray-text leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — series chips + note */}
          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] border border-brand-gray-med/40 shadow-card p-7">
              <p className="text-sm font-bold text-brand-gray-text uppercase tracking-widest mb-5">Выберите задачу кожи</p>
              <div className="flex flex-wrap gap-2.5">
                {SERIES.map(s => (
                  <a
                    key={s.id}
                    href="#series"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 hover:shadow-sm active:scale-[0.97]"
                    style={{
                      color: s.color,
                      borderColor: `${s.color}30`,
                      background: s.colorBg,
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: s.color }}
                    />
                    {s.task}
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-brand-gray-med/50">
                <p className="text-sm text-brand-gray-text leading-relaxed">
                  Каждая серия охватывает <span className="font-semibold text-brand-dark">все 5 шагов</span> — от очищения до защиты. Средства подобраны так, чтобы не конфликтовать и усиливать эффект друг друга.
                </p>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: '6', label: 'серий', color: '#0A7986', bg: '#E8F4F5' },
                { val: '33', label: 'SKU', color: '#8254C4', bg: '#F3EEFB' },
                { val: '5+', label: 'шагов в серии', color: '#D62242', bg: '#FDE8EC' },
              ].map(({ val, label, color, bg }) => (
                <div
                  key={val}
                  className="flex flex-col items-center justify-center py-4 rounded-2xl border border-brand-gray-med/30"
                  style={{ background: bg }}
                >
                  <span className="text-2xl font-black" style={{ color }}>{val}</span>
                  <span className="text-[10px] text-brand-gray-text font-medium mt-0.5 text-center">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
