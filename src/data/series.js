import k1 from '../assets/k1.png'
import k2 from '../assets/k2.png'
import k3 from '../assets/k3.png'
import k4 from '../assets/k4.png'
import k5 from '../assets/k5.png'
import k6 from '../assets/k6.png'

import pRevitalizer from '../assets/p-revitalizer.png'
import pSebo        from '../assets/p-sebo.png'
import pDepigment   from '../assets/p-depigment.png'
import pModerator   from '../assets/p-moderator.png'
import pHydrant     from '../assets/p-hydrant.png'
import pAntiacne    from '../assets/p-antiacne.png'

export const SERIES = [
  {
    id: 'revitalizer',
    name: 'Ревиталайзер',
    nameEn: 'Revitalizer',
    task: 'Упругость и антивозраст',
    taskLabel: 'ВОССТАНОВЛЕНИЕ',
    color: '#D62242',
    colorBg: '#FDE8EC',
    image: k1,
    cutout: pRevitalizer,
    sku: 10,
    description: 'Для тех, кто замечает первые возрастные изменения или хочет сохранить молодость кожи. Работает на плотность, рельеф и ровный тон — системно.',
    actives: 'Ретинол, Пептиды, Проксилан',
    marketUrl: 'https://www.ozon.ru/category/uvlazhnenie-i-pitanie-6561/?text=кда+эксперт',
  },
  {
    id: 'hydrant',
    name: 'Гидратант',
    nameEn: 'Hydrant',
    task: 'Глубокое увлажнение',
    taskLabel: 'УВЛАЖНЕНИЕ',
    color: '#164379',
    colorBg: '#E8F0FA',
    image: k2,
    cutout: pHydrant,
    sku: 8,
    description: 'Для тех, чья кожа стягивается, шелушится, ощущается как «пергамент». Восстанавливает водный баланс в разных слоях и укрепляет защитный барьер.',
    actives: '4D Гиалуроновая кислота, Пента-церамиды, Сквалан',
    marketUrl: 'https://www.ozon.ru/category/uvlazhnenie-i-pitanie-6561/?text=кда+эксперт',
  },
  {
    id: 'depigment',
    name: 'Депигментатор',
    nameEn: 'Depigmentator',
    task: 'Пигментация и тон',
    taskLabel: 'РОВНЫЙ ТОН',
    color: '#8254C4',
    colorBg: '#F3EEFB',
    image: k3,
    cutout: pDepigment,
    sku: 3,
    description: 'Для тех, кто хочет убрать пятна от акне, солнца или гормональных изменений. Осветление и профилактика новых пятен.',
    actives: 'SymWhite 377, Транексамовая кислота',
    marketUrl: 'https://www.ozon.ru/category/uvlazhnenie-i-pitanie-6561/?text=кда+эксперт',
  },
  {
    id: 'sebo',
    name: 'Себо-регулятор',
    nameEn: 'Sebo-Regulator',
    task: 'Контроль жирности',
    taskLabel: 'БАЛАНС И ЧИСТОТА',
    color: '#0A7986',
    colorBg: '#E8F4F5',
    image: k4,
    cutout: pSebo,
    sku: 5,
    description: 'Жирный блеск к полудню, расширенные поры, загрязнения — серия нормализует работу сальных желёз без агрессии и пересушивания.',
    actives: 'Ниацинамид, Цинк PCA',
    marketUrl: 'https://www.ozon.ru/category/uvlazhnenie-i-pitanie-6561/?text=кда+эксперт',
  },
  {
    id: 'antiacne',
    name: 'Анти-акне',
    nameEn: 'Anti-Acne',
    task: 'Воспаления и постакне',
    taskLabel: 'ПРОТИВ АКНЕ',
    color: '#1993A2',
    colorBg: '#E5F5F7',
    image: k5,
    cutout: pAntiacne,
    sku: 1,
    description: 'Комплекс 3-в-1: подавляет воспаление, восстанавливает кожу после него, выравнивает тон. Не пересушивает и не нарушает барьер.',
    actives: 'Коллоидная сера, AHA/BHA кислоты',
    marketUrl: 'https://www.ozon.ru/category/uvlazhnenie-i-pitanie-6561/?text=кда+эксперт',
  },
  {
    id: 'moderator',
    name: 'Модератор',
    nameEn: 'Sensitive',
    task: 'Чувствительная кожа',
    taskLabel: 'КОМФОРТ И ЗАБОТА',
    color: '#8A7660',
    colorBg: '#F7F2EE',
    image: k6,
    cutout: pModerator,
    sku: 6,
    description: 'Для кожи, которая реагирует на всё. Клинически протестированные ингредиенты снижают чувствительность и успокаивают без раздражения.',
    actives: 'SymCalmin, SymRelief, Центелла азиатская, Пента-церамиды',
    marketUrl: 'https://www.ozon.ru/category/uvlazhnenie-i-pitanie-6561/?text=кда+эксперт',
  },
]

export const MARKETPLACE_LINKS = {
  apteki: 'https://aptekiplus.ru',
  ozon:   'https://www.ozon.ru/category/uvlazhnenie-i-pitanie-6561/?text=кда+эксперт',
  wb:     'https://www.wildberries.ru/catalog/0/search.aspx?search=кда эксперт',
  yandex: 'https://market.yandex.ru/search?text=кда эксперт&merchant-filter=764547',
}
