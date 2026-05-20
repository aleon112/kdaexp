import { motion } from 'framer-motion'
import logoDark from '../assets/logo-dark.svg'
import { MARKETPLACE_LINKS } from '../data/series'

const NAV = [
  { label: 'Серии',      href: '#series' },
  { label: 'О продукте', href: '#benefits' },
  { label: 'Протокол',   href: '#protocol' },
  { label: 'Где купить', href: '#buy' },
  { label: 'Партнёрам',  href: '#b2b' },
]

const MARKETS = [
  { label: 'АптекиПлюс',    href: MARKETPLACE_LINKS.apteki },
  { label: 'Ozon',           href: MARKETPLACE_LINKS.ozon },
  { label: 'Wildberries',    href: MARKETPLACE_LINKS.wb },
  { label: 'Яндекс Маркет', href: MARKETPLACE_LINKS.yandex },
]

const SERIES_LINKS = [
  { label: 'Ревиталайзер',   href: '#series' },
  { label: 'Гидратант',      href: '#series' },
  { label: 'Депигментатор',  href: '#series' },
  { label: 'Себо-регулятор', href: '#series' },
  { label: 'Анти-акне',      href: '#series' },
  { label: 'Модератор',      href: '#series' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white overflow-hidden">

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a href="#hero">
              <img src={logoDark} alt="KDA Эксперт" className="h-8 w-auto brightness-0 invert" />
            </a>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Система из 6 специализированных серий ухода за кожей. Аптечный стандарт безопасности.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://t.me/kda_expert"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-accent hover:text-white transition-all duration-200"
                aria-label="Telegram"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 2 1 7l5 2 2 5 2-4 4-8Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="m6 9 2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="https://vk.com/kda_expert"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-brand-accent hover:text-white transition-all duration-200"
                aria-label="ВКонтакте"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 4h3l2 5 2-5h3v8h-2V7l-1.5 4h-3L3 7v5H1V4Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Серии */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-4">Серии</p>
            <ul className="flex flex-col gap-2.5">
              {SERIES_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-4">Навигация</p>
            <ul className="flex flex-col gap-2.5">
              {NAV.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Где купить */}
          <div>
            <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-4">Где купить</p>
            <ul className="flex flex-col gap-2.5">
              {MARKETS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    {label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-60 transition-opacity">
                      <path d="M2 8 8 2M5 2h3v3"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10">
              <a
                href="mailto:partner@kda-expert.ru"
                className="text-sm text-brand-accent hover:text-white transition-colors duration-200 font-semibold"
              >
                partner@kda-expert.ru
              </a>
              <p className="text-xs text-white/30 mt-1">для партнёров</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © 2025 KDA Эксперт. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
