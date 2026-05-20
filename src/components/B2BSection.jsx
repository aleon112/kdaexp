import { motion } from 'framer-motion'

const PARTNER_BENEFITS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10h16M10 2v16"/>
        <circle cx="10" cy="10" r="8"/>
      </svg>
    ),
    title: 'Широкий ассортимент',
    body: '6 серий · 33 SKU — готовое решение для торгового зала или интернет-магазина.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="16" height="12" rx="2"/>
        <path d="M2 9h16M6 5V3M14 5V3"/>
      </svg>
    ),
    title: 'Оперативные поставки',
    body: 'Работаем по договору поставки. Широкая география, гибкие условия отгрузки.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 7v6l8 5 8-5V7l-8-5Z"/>
        <path d="m4 7 8 5 8-5"/>
        <path d="M12 12v8"/>
      </svg>
    ),
    title: 'Маркетинговая поддержка',
    body: 'Фотоматериалы, описания, POS-материалы — всё для продаж в вашем канале.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8"/>
        <path d="M10 6v4l3 2"/>
      </svg>
    ),
    title: 'Персональный менеджер',
    body: 'Ответим на вопросы, поможем с первым заказом и выбором ассортимента под вашу аудиторию.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { type: 'spring', stiffness: 180, damping: 24, delay },
})

export default function B2BSection() {
  return (
    <section id="b2b" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — info */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-accent-light text-brand-accent text-xs font-semibold tracking-[0.14em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                Партнёрам
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark leading-tight text-balance">
                Станьте дистрибьютором<br />KDA Эксперт
              </h2>
              <p className="mt-4 text-base text-brand-gray-text leading-relaxed">
                Аптеки, маркетплейсы, салоны красоты, интернет-магазины — работаем с любым форматом. Готовы обсудить условия под вашу специфику.
              </p>
            </motion.div>

            {/* Benefits grid */}
            <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {PARTNER_BENEFITS.map((b, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.1 + i * 0.06)}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-brand-gray-light border border-brand-gray-med/30"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-accent-light flex items-center justify-center text-brand-accent">
                    {b.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-dark">{b.title}</p>
                    <p className="text-xs text-brand-gray-text leading-relaxed mt-0.5">{b.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — CTA card */}
          <motion.div {...fadeUp(0.15)}>
            <div
              className="relative rounded-[2rem] overflow-hidden p-8 md:p-10"
              style={{ background: 'linear-gradient(135deg, #0A7986 0%, #0d5f6b 100%)' }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-[0.12em] uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Актуальный прайс 2025
                </div>

                <h3 className="text-2xl font-extrabold text-white leading-tight mb-3">
                  Скачайте прайс-лист<br />и условия сотрудничества
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Полный ассортимент с ценами, минимальными объёмами и условиями доставки — одним файлом.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { val: '6', label: 'серий' },
                    { val: '33', label: 'позиции' },
                    { val: 'RRC', label: 'цены' },
                  ].map(({ val, label }) => (
                    <div key={val} className="bg-white/10 rounded-2xl p-3 text-center">
                      <p className="text-xl font-black text-white">{val}</p>
                      <p className="text-[10px] text-white/60 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:partner@kda-expert.ru?subject=Запрос прайс-листа KDA Эксперт"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-white text-brand-accent text-sm font-bold rounded-2xl hover:bg-brand-accent-light active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 4h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"/>
                      <path d="m2 4.5 6 4 6-4"/>
                    </svg>
                    Запросить прайс по email
                  </a>
                  <a
                    href="https://t.me/kda_expert_partner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-2xl hover:bg-white/20 active:scale-[0.98] transition-all duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14.5 2 1.5 7l5 2 2 5 2-4 4-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="m6.5 9 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Написать в Telegram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
