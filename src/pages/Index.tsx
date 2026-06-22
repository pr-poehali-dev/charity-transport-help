import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PHONE = '+7 913 079 51 21';
const PHONE_HREF = 'tel:+79130795121';
const LOGO =
  'https://cdn.poehali.dev/projects/65d26ed8-0279-4bdb-bbbf-1047dfc913f3/files/07d14520-7031-4397-a8b1-eb9ad7e0c6bb.jpg';
const HERO_IMG =
  'https://cdn.poehali.dev/projects/65d26ed8-0279-4bdb-bbbf-1047dfc913f3/files/facf81b6-4d40-455c-9045-b948361caffe.jpg';
const VAN_IMG =
  'https://cdn.poehali.dev/projects/65d26ed8-0279-4bdb-bbbf-1047dfc913f3/files/df44f85d-31c7-4ba9-8679-8ea07c6cbf1e.jpg';
const SALON_IMG =
  'https://cdn.poehali.dev/projects/65d26ed8-0279-4bdb-bbbf-1047dfc913f3/files/f42c3e5f-2bc7-4b84-89f9-158c0d61b135.jpg';

const nav = [
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Вопросы', href: '#faq' },
];

const transportServices = [
  {
    icon: 'Cross',
    title: 'По Междуреченску',
    text: 'Доставим в любую больницу, клинику или на обследование точно ко времени.',
    price: 'от 800 ₽',
    note: 'Подъём на этаж, сопровождение — включено',
  },
  {
    icon: 'MapPinned',
    title: 'Межгород',
    text: 'Новокузнецк, Мыски, ГРЭС и другие направления. Возможен индивидуальный маршрут.',
    price: 'от 2 000 ₽',
    note: 'Стоимость по индивидуальному маршруту — по договорённости',
  },
  {
    icon: 'HeartHandshake',
    title: 'Сопровождение',
    text: 'С заботой и любовью к каждому на всём пути следования.',
    price: 'от 500 ₽/ч',
    note: 'Сопровождение внутри учреждения — включено',
  },
];

const transportIncludes = [
  'Посадка и бережный перенос человека',
  'Подъём и спуск по этажам',
  'Сопровождение внутри медучреждения',
];

const equipment = [
  {
    img: VAN_IMG,
    title: 'Nissan NV200 Vanette',
    text: 'Просторный и аккуратный автомобиль — комфорт начинается снаружи.',
  },
  {
    img: SALON_IMG,
    title: 'Чистый, уютный салон',
    text: 'Ступенькоход, жёсткие и мягкие носилки, надёжные крепления и фиксаторы.',
  },
];

const careServices = [
  { icon: 'UserRound', title: 'Сиделки', price: 'от 200 ₽/ч', priceDay: 'от 1 800 ₽/сут' },
  { icon: 'Scissors', title: 'Парикмахеры', price: 'от 600 ₽' },
  { icon: 'Hand', title: 'Массажисты', price: 'от 800 ₽/сеанс' },
  { icon: 'Sparkles', title: 'Педикюр', price: 'от 700 ₽' },
  { icon: 'SprayCan', title: 'Уборка квартир', price: 'от 1 500 ₽' },
];

const rentItems = [
  { name: 'Костыли', price: 'от 100 ₽/сут' },
  { name: 'Ступенькоход', price: 'от 500 ₽/сут' },
  { name: 'Направляющие для колясок', price: 'по договорённости' },
  { name: 'Противопролежневый матрас', price: 'от 150 ₽/сут' },
  { name: 'Ванночка для мытья головы', price: 'от 100 ₽/сут' },
  { name: 'Памперсы', price: 'по договорённости' },
  { name: 'Фиксаторы для конечностей', price: 'по договорённости' },
  { name: 'Поручни', price: 'по договорённости' },
  { name: 'Утка', price: 'от 50 ₽/сут' },
  { name: 'Кислородный концентратор', price: 'от 400 ₽/сут' },
];

const reviews = [
  {
    name: 'Ольга Петровна',
    text: 'Перевозили маму на обследование в Новокузнецк. Аккуратно, спокойно, по-доброму. Спасибо вам огромное!',
  },
  {
    name: 'Сергей',
    text: 'Помогли поднять отца на пятый этаж без лифта. Ступенькоход — спасение. Отношение очень тёплое.',
  },
  {
    name: 'Марина',
    text: 'Брали в аренду концентратор и матрас. Привезли быстро, всё объяснили. Чувствуется забота.',
  },
];

const faqItems = [
  {
    q: 'Как быстро вы можете приехать?',
    a: 'В большинстве случаев выезжаем в день обращения. Срочные перевозки согласовываем по телефону.',
  },
  {
    q: 'Вы перевозите полностью лежачих людей?',
    a: 'Да. У нас есть носилки, ступенькоход и крепления — безопасно поднимем, перенесём и сопроводим.',
  },
  {
    q: 'Сопровождаете ли внутри больницы?',
    a: 'Да, сопровождаем до кабинета и обратно, помогаем на всех этапах.',
  },
  {
    q: 'Можно ли арендовать оборудование отдельно?',
    a: 'Конечно. Костыли, матрасы, концентраторы и многое другое доступны в аренду без транспортировки.',
  },
];

const RequestBtn = ({ label = 'Оставить заявку', gold = false }) => (
  <a href="#request">
    <Button
      size="lg"
      className={
        gold
          ? 'rounded-full text-base gap-2 bg-gold text-gold-fg hover:opacity-90 font-semibold'
          : 'rounded-full text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90'
      }
    >
      <Icon name="ClipboardList" size={18} />
      {label}
    </Button>
  </a>
);

const Index = () => {
  const [serviceType, setServiceType] = useState('transport');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background bg-grain text-foreground">

      {/* ───── HEADER ───── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <div className="container flex items-center justify-between gap-3 py-3">

          {/* Экстренный вызов */}
          <a href={PHONE_HREF}>
            <Button className="bg-destructive hover:bg-destructive/90 text-white rounded-full font-medium gap-2 animate-emergency text-sm px-4">
              <Icon name="Phone" size={15} />
              <span className="hidden xs:inline">Экстренный вызов</span>
              <span className="xs:hidden">Вызов</span>
            </Button>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white border border-border overflow-hidden flex items-center justify-center shrink-0">
              <img src={LOGO} alt="Логотип голубь" className="w-full h-full object-contain scale-110" />
            </div>
            <span className="font-display text-base font-semibold leading-tight hidden sm:block">
              Твори Добрые Дела
            </span>
          </a>

          {/* Burger — mobile only */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span className={`block h-0.5 w-5 bg-foreground rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 bg-foreground rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-foreground rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-rise">
            <nav className="container flex flex-col py-4 gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 rounded-2xl text-base font-medium hover:bg-secondary hover:text-primary transition-colors"
                >
                  {n.label}
                </a>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                <a href="#request" onClick={() => setMenuOpen(false)}>
                  <Button className="w-full rounded-2xl bg-gold text-gold-fg font-semibold gap-2 hover:opacity-90">
                    <Icon name="ClipboardList" size={17} />
                    Оставить заявку
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ───── HERO ───── */}
      <section id="top" className="container pt-8 md:pt-14 pb-6">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 bg-card rounded-[2rem] border border-border p-7 md:p-12 flex flex-col justify-center animate-rise">
            <span className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-4">
              <Icon name="Sparkle" size={15} />
              МГОО «Твори Добрые Дела»
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05] mb-4">
              Транспортировка лежачих и малоподвижных людей
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mb-7">
              Мы стараемся сделать всё для комфортной и полноценной жизни людей с ограниченными возможностями здоровья.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF}>
                <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white rounded-full text-base gap-2 animate-emergency">
                  <Icon name="PhoneCall" size={18} />
                  Экстренный вызов
                </Button>
              </a>
              <RequestBtn />
            </div>
          </div>

          <div
            className="lg:col-span-5 rounded-[2rem] overflow-hidden border border-border min-h-[240px] relative animate-rise"
            style={{ animationDelay: '.15s' }}
          >
            <img src={HERO_IMG} alt="Забота о людях" className="absolute inset-0 w-full h-full object-cover" />
            {/* Gold badge */}
            <div className="absolute bottom-4 left-4 bg-gold text-gold-fg rounded-2xl px-4 py-2 text-sm font-semibold flex items-center gap-2 shadow-lg">
              <Icon name="Star" size={15} />
              Более 10 лет заботы
            </div>
          </div>
        </div>
      </section>

      {/* ───── ABOUT ───── */}
      <section id="about" className="container py-10 md:py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-primary text-white rounded-[2rem] p-7 md:p-10 flex flex-col justify-between hover-lift">
            <Icon name="HandHeart" size={34} className="mb-6 opacity-90" />
            <div>
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-2">Творим добрые дела</h2>
              <p className="opacity-90 text-sm md:text-base">С заботой и любовью к каждому.</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-[2rem] p-7 md:p-10 hover-lift flex flex-col justify-center">
            <span className="font-display text-5xl md:text-6xl font-bold text-gold">10+</span>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              лет волонтёрства. Для нас творить добрые дела — это образ жизни.
            </p>
          </div>

          <div className="bg-secondary border border-border rounded-[2rem] p-7 md:p-10 hover-lift flex flex-col justify-center sm:col-span-2 md:col-span-1">
            <Icon name="Users" size={30} className="text-primary mb-4" />
            <p className="text-secondary-foreground text-sm md:text-base">
              Делаем всё для комфортной и полноценной жизни людей с ограниченными возможностями здоровья.
            </p>
          </div>
        </div>
      </section>

      {/* ───── TRANSPORT SERVICES ───── */}
      <section id="services" className="container py-8 md:py-12">
        <div className="mb-7">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">Помощь в транспортировке</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-5">Сопровождение с заботой и любовью к каждому.</p>
          <div className="flex flex-wrap gap-2">
            {['г. Междуреченск', 'Новокузнецк', 'Мыски', 'ГРЭС', 'Индивидуальный маршрут — по договорённости'].map((city) => (
              <span key={city} className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground rounded-full px-4 py-1.5 text-sm font-medium">
                <Icon name="MapPin" size={13} className="text-primary" />
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {transportServices.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-[2rem] p-6 md:p-7 hover-lift flex flex-col">
              <div className="w-11 h-11 rounded-2xl bg-accent text-accent-foreground grid place-items-center mb-5">
                <Icon name={s.icon} size={20} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4 flex-1">{s.text}</p>
              <div className="border-t border-border pt-4 flex flex-col gap-1">
                <span className="font-display text-2xl font-bold text-primary">{s.price}</span>
                <span className="text-xs text-muted-foreground">{s.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary border border-border rounded-[2rem] p-6 md:p-9 mb-5">
          <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mb-4">Каждая услуга включает</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {transportIncludes.map((t) => (
              <div key={t} className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="font-medium text-sm md:text-base">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA после транспорта */}
        <div className="bg-gold-light border border-gold rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-xl md:text-2xl font-semibold text-gold-fg mb-1">Нужна транспортировка?</p>
            <p className="text-sm text-gold-fg/70">Оставьте заявку — перезвоним и всё организуем.</p>
          </div>
          <RequestBtn label="Заказать транспорт" gold />
        </div>
      </section>

      {/* ───── TRANSPORT & EQUIPMENT ───── */}
      <section className="container py-8 md:py-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">Наш транспорт и оборудование</h2>
        <p className="text-muted-foreground text-base md:text-lg mb-7">Чисто, безопасно, удобно — для каждой поездки.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-5">
          {equipment.map((e) => (
            <div key={e.title} className="bg-card border border-border rounded-[2rem] overflow-hidden hover-lift">
              <div className="h-52 md:h-64 overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2">{e.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── CARE SERVICES ───── */}
      <section className="container py-8 md:py-12 space-y-5">

        {/* Уход */}
        <div className="bg-card border border-border rounded-[2rem] p-7 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-1">Помощь в повседневных делах</h2>
              <p className="text-muted-foreground text-sm md:text-base">Рядом, когда это нужно.</p>
            </div>
            <RequestBtn label="Выбрать услугу" />
          </div>
          <div className="divide-y divide-border">
            {careServices.map((c) => (
              <div key={c.title} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-secondary grid place-items-center shrink-0">
                    <Icon name={c.icon} size={16} className="text-primary" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{c.title}</span>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="font-semibold text-primary text-sm md:text-base">{c.price}</p>
                  {c.priceDay && <p className="text-xs text-muted-foreground">{c.priceDay}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Аренда */}
        <div className="bg-card border border-border rounded-[2rem] p-7 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <h2 className="font-display text-2xl md:text-4xl font-bold mb-1">Средства для реабилитации</h2>
              <p className="text-muted-foreground text-sm md:text-base">Аренда оборудования на любой срок.</p>
            </div>
            <a href="#request">
              <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 gap-2 shrink-0">
                <Icon name="ClipboardList" size={17} />
                Арендовать
              </Button>
            </a>
          </div>
          <div className="divide-y divide-border">
            {rentItems.map((r) => (
              <div key={r.name} className="flex items-center justify-between py-3.5">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={16} className="text-primary shrink-0" />
                  <span className="text-sm md:text-base">{r.name}</span>
                </div>
                <span className="font-semibold text-primary text-sm shrink-0 ml-4">{r.price}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ───── REVIEWS ───── */}
      <section id="reviews" className="container py-8 md:py-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-7">Что говорят о нас люди</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card border border-border rounded-[2rem] p-6 md:p-7 hover-lift flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" size={15} className="text-gold" />
                ))}
              </div>
              <p className="text-foreground/90 mb-5 flex-1 text-sm md:text-base">«{r.text}»</p>
              <span className="font-display text-lg md:text-xl font-semibold">{r.name}</span>
            </div>
          ))}
        </div>

        <div className="bg-accent text-accent-foreground rounded-[2rem] p-6 md:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">Поделитесь своим отзывом</h3>
            <p className="opacity-80 text-sm">Ваши слова помогают нам становиться лучше.</p>
          </div>
          <a href="#request">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2 shrink-0">
              <Icon name="MessageCircleHeart" size={17} />
              Оставить отзыв
            </Button>
          </a>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section id="faq" className="container py-8 md:py-12">
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">Частые вопросы</h2>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">Не нашли ответ? Позвоните нам — поможем.</p>
            <a href={PHONE_HREF}>
              <Button variant="outline" className="rounded-full border-primary/40 text-primary gap-2 hover:bg-secondary">
                <Icon name="Phone" size={16} />
                {PHONE}
              </Button>
            </a>
          </div>
          <div className="lg:col-span-8 bg-card border border-border rounded-[2rem] p-3 md:p-5">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-lg md:text-xl hover:no-underline px-3">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-3 text-sm md:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ───── REQUEST FORM ───── */}
      <section id="request" className="container py-8 md:py-12">
        <div className="bg-card border border-border rounded-[2rem] p-7 md:p-12">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gold-light grid place-items-center shrink-0">
              <Icon name="ClipboardList" size={22} className="text-gold" />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-1">Оставить заявку</h2>
              <p className="text-muted-foreground text-sm md:text-base">Заполните форму — мы свяжемся и всё организуем.</p>
            </div>
          </div>

          <form className="grid md:grid-cols-2 gap-4 md:gap-5">
            <div className="md:col-span-2">
              <Label className="mb-2 block text-sm font-medium">Выбор услуги</Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="rounded-2xl h-12">
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transport">Транспортировка в медучреждение</SelectItem>
                  <SelectItem value="intercity">Транспортировка межгород</SelectItem>
                  <SelectItem value="sitter">Сиделка</SelectItem>
                  <SelectItem value="hairdresser">Парикмахер</SelectItem>
                  <SelectItem value="massage">Массажист</SelectItem>
                  <SelectItem value="pedicure">Педикюр</SelectItem>
                  <SelectItem value="cleaning">Уборка квартиры</SelectItem>
                  <SelectItem value="rent">Аренда оборудования</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block text-sm font-medium">Имя</Label>
              <Input className="rounded-2xl h-12" placeholder="Как к вам обращаться" />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium">Телефон</Label>
              <Input className="rounded-2xl h-12" placeholder="+7 ___ ___ __ __" />
            </div>
            <div>
              <Label className="mb-2 block text-sm font-medium">Желаемое время</Label>
              <Input className="rounded-2xl h-12" type="datetime-local" />
            </div>

            {serviceType === 'transport' || serviceType === 'intercity' ? (
              <>
                <div>
                  <Label className="mb-2 block text-sm font-medium">Адрес подачи машины</Label>
                  <Input className="rounded-2xl h-12" placeholder="Откуда забрать" />
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium">Конечный адрес</Label>
                  <Input className="rounded-2xl h-12" placeholder="Куда доставить" />
                </div>
                <div>
                  <Label className="mb-2 block text-sm font-medium">Вес пациента (кг)</Label>
                  <Input className="rounded-2xl h-12" type="number" placeholder="Например: 75" />
                </div>
                {serviceType === 'transport' && (
                  <div>
                    <Label className="mb-2 block text-sm font-medium">Номер палаты / кабинета</Label>
                    <Input className="rounded-2xl h-12" placeholder="Например: Палата 12, 3 этаж" />
                  </div>
                )}
                {serviceType === 'intercity' && (
                  <div className="md:col-span-2 bg-secondary rounded-2xl px-5 py-4 flex items-start gap-3">
                    <Icon name="Info" size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-secondary-foreground">
                      <strong>Межгород:</strong> стоимость поездки рассчитывается индивидуально в зависимости от маршрута и расстояния. Мы свяжемся с вами и согласуем цену до выезда.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="md:col-span-2">
                <Label className="mb-2 block text-sm font-medium">Адрес оказания услуги</Label>
                <Input className="rounded-2xl h-12" placeholder="Куда приехать" />
              </div>
            )}

            <div className="md:col-span-2">
              <Label className="mb-2 block text-sm font-medium">Комментарий</Label>
              <Textarea className="rounded-2xl" placeholder="Дополнительные пожелания (необязательно)" rows={3} />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2 text-base sm:w-auto w-full"
              >
                <Icon name="Send" size={18} />
                Отправить заявку
              </Button>
              <a href={PHONE_HREF} className="sm:w-auto w-full">
                <Button size="lg" variant="outline" className="rounded-full border-primary/40 text-primary gap-2 w-full">
                  <Icon name="Phone" size={18} />
                  Позвонить напрямую
                </Button>
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* ───── DONATION ───── */}
      <section className="container py-8 md:py-12">
        <div className="bg-primary text-white rounded-[2rem] p-7 md:p-12 relative overflow-hidden">
          {/* decorative gold circle */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold opacity-20 blur-2xl pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 rounded-full px-4 py-1.5 mb-5">
                <Icon name="Heart" size={14} />
                Поддержать нас
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">Твори добро с нами</h2>
              <p className="opacity-90 text-sm md:text-base max-w-md">
                Верим, что вместе сможем реализовать всё задуманное. Поддержите наши благотворительные проекты добровольным пожертвованием.
              </p>
            </div>
            <div className="bg-white text-foreground rounded-[1.5rem] p-6 md:p-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-light grid place-items-center shrink-0">
                  <Icon name="Smartphone" size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">СБП по номеру</p>
                  <p className="font-display text-xl md:text-2xl font-semibold">{PHONE}</p>
                </div>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-light grid place-items-center shrink-0">
                  <Icon name="CreditCard" size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Номер карты</p>
                  <p className="font-display text-xl md:text-2xl font-semibold tracking-wide">4817 7601 1998 3587</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FUNERAL (delicate) ───── */}
      <section className="container pb-12">
        <div className="bg-muted/60 border border-border rounded-[2rem] p-6 md:p-9 flex items-start gap-4">
          <Icon name="Flower2" size={22} className="text-muted-foreground shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-semibold mb-1">Организация похорон</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              В трудную минуту мы также готовы бережно взять на себя организацию похорон и помочь со всеми необходимыми хлопотами. Позвоните — поддержим с уважением и деликатностью.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-border bg-card">
        <div className="container py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-border overflow-hidden flex items-center justify-center shrink-0">
              <img src={LOGO} alt="Логотип голубь" className="w-full h-full object-contain scale-110" />
            </div>
            <span className="font-display text-base md:text-lg font-semibold">МГОО «Твори Добрые Дела»</span>
          </a>

          <a href={PHONE_HREF} className="font-display text-xl md:text-2xl font-semibold hover:text-primary transition-colors">
            {PHONE}
          </a>

          <div className="flex items-center gap-3">
            {[
              { icon: 'Send', href: '#' },
              { icon: 'MessageCircle', href: '#' },
              { icon: 'Phone', href: PHONE_HREF },
            ].map(({ icon, href }) => (
              <a
                key={icon}
                href={href}
                className="w-10 h-10 rounded-full bg-secondary grid place-items-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Icon name={icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;