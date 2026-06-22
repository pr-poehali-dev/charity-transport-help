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
    title: 'В медицинские учреждения',
    text: 'Доставим на приём, обследование или процедуры точно ко времени.',
  },
  {
    icon: 'MapPinned',
    title: 'Межгород',
    text: 'Междуреченск, Новокузнецк, Мыски, ГРЭС и другие направления.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Сопровождение',
    text: 'С заботой и любовью к каждому на всём пути следования.',
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
    text: 'Просторный и аккуратный автомобиль с разных ракурсов — комфорт начинается снаружи.',
  },
  {
    img: SALON_IMG,
    title: 'Чистый, уютный салон',
    text: 'Ступенькоход, жёсткие и мягкие носилки, надёжные крепления и фиксаторы.',
  },
];

const careServices = [
  { icon: 'UserRound', title: 'Сиделки' },
  { icon: 'Scissors', title: 'Парикмахеры' },
  { icon: 'Hand', title: 'Массажисты' },
  { icon: 'Sparkles', title: 'Педикюр' },
  { icon: 'SprayCan', title: 'Уборка квартир' },
];

const rentItems = [
  'Костыли',
  'Ступенькоход',
  'Направляющие для колясок',
  'Противопролежневый матрас',
  'Ванночка для мытья головы',
  'Памперсы',
  'Фиксаторы для конечностей',
  'Поручни',
  'Утка',
  'Кислородный концентратор',
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

const Index = () => {
  const [serviceType, setServiceType] = useState('transport');

  return (
    <div className="min-h-screen bg-background bg-grain text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between gap-4 py-3">
          <a href={PHONE_HREF}>
            <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full font-medium gap-2 animate-emergency">
              <Icon name="Phone" size={16} />
              Экстренный вызов
            </Button>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm">
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

          <a href="#top" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white border border-border overflow-hidden flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/projects/65d26ed8-0279-4bdb-bbbf-1047dfc913f3/files/07d14520-7031-4397-a8b1-eb9ad7e0c6bb.jpg"
                alt="Логотип голубь"
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <span className="font-display text-lg font-semibold leading-none hidden sm:block">
              Твори Добрые Дела
            </span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="container pt-10 md:pt-16 pb-6">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-5">
          <div className="lg:col-span-7 bg-card rounded-[2rem] border border-border p-8 md:p-12 flex flex-col justify-center animate-rise">
            <span className="inline-flex items-center gap-2 text-sm text-primary font-medium mb-5">
              <Icon name="Sparkle" size={16} />
              МГОО «Твори Добрые Дела»
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-5">
              Транспортировка лежачих и малоподвижных людей
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mb-8">
              Мы стараемся сделать всё для комфортной и полноценной жизни людей с
              ограниченными возможностями здоровья.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={PHONE_HREF}>
                <Button
                  size="lg"
                  className="bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full text-base gap-2 animate-emergency"
                >
                  <Icon name="PhoneCall" size={18} />
                  Экстренный вызов
                </Button>
              </a>
              <a href="#request">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base border-primary/30 text-primary hover:bg-secondary"
                >
                  Оставить заявку
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[2rem] overflow-hidden border border-border min-h-[280px] relative animate-rise" style={{ animationDelay: '.15s' }}>
            <img src={HERO_IMG} alt="Забота о людях" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          <div className="bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover-lift">
            <Icon name="HandHeart" size={36} className="mb-8 opacity-90" />
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Творим добрые дела
              </h2>
              <p className="opacity-90">С заботой и любовью к каждому.</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-[2rem] p-8 md:p-10 hover-lift flex flex-col justify-center">
            <span className="font-display text-5xl md:text-6xl font-bold text-warm">10+</span>
            <p className="text-muted-foreground mt-2">
              лет волонтёрства. Для нас творить добрые дела — это образ жизни.
            </p>
          </div>

          <div className="bg-secondary border border-border rounded-[2rem] p-8 md:p-10 hover-lift flex flex-col justify-center">
            <Icon name="Users" size={32} className="text-primary mb-4" />
            <p className="text-secondary-foreground">
              Мы делаем всё для комфортной и полноценной жизни людей с
              ограниченными возможностями здоровья.
            </p>
          </div>
        </div>
      </section>

      {/* Transport services */}
      <section id="services" className="container py-8 md:py-12">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
            Помощь в транспортировке
          </h2>
          <p className="text-muted-foreground text-lg">
            Сопровождение с заботой и любовью к каждому.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-5">
          {transportServices.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-[2rem] p-7 hover-lift"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent text-accent-foreground grid place-items-center mb-5">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary border border-border rounded-[2rem] p-7 md:p-9">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-5">
            Каждая услуга включает
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {transportIncludes.map((t) => (
              <div key={t} className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={22} className="text-primary shrink-0 mt-0.5" />
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport & equipment */}
      <section className="container py-8 md:py-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
          Наш транспорт и оборудование
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Чисто, безопасно, удобно — для каждой поездки.
        </p>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {equipment.map((e) => (
            <div
              key={e.title}
              className="bg-card border border-border rounded-[2rem] overflow-hidden hover-lift"
            >
              <div className="h-60 overflow-hidden">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold mb-2">{e.title}</h3>
                <p className="text-muted-foreground">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Care services + Rent */}
      <section className="container py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-card border border-border rounded-[2rem] p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold mb-2">
              Помощь в повседневных делах и уходе
            </h2>
            <p className="text-muted-foreground mb-7">Рядом, когда это нужно.</p>
            <div className="flex flex-wrap gap-3">
              {careServices.map((c) => (
                <div
                  key={c.title}
                  className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2.5 hover-lift"
                >
                  <Icon name={c.icon} size={18} className="text-primary" />
                  <span className="font-medium">{c.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-10">
            <h2 className="font-display text-3xl font-bold mb-2">
              Средства для реабилитации
            </h2>
            <p className="opacity-90 mb-7">Аренда оборудования на любой срок.</p>
            <div className="flex flex-wrap gap-2.5">
              {rentItems.map((r) => (
                <span
                  key={r}
                  className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-3.5 py-2 text-sm"
                >
                  <Icon name="Check" size={14} />
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container py-8 md:py-12">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          Что говорят о нас люди
        </h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card border border-border rounded-[2rem] p-7 hover-lift flex flex-col"
            >
              <div className="flex gap-1 text-warm mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" size={16} fallback="Star" />
                ))}
              </div>
              <p className="text-foreground/90 mb-5 flex-1">«{r.text}»</p>
              <span className="font-display text-xl font-semibold">{r.name}</span>
            </div>
          ))}
        </div>

        <div className="bg-accent text-accent-foreground rounded-[2rem] p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-1">
              Поделитесь своим отзывом
            </h3>
            <p className="opacity-80">Ваши слова помогают нам становиться лучше.</p>
          </div>
          <a href="#request">
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2">
              <Icon name="MessageCircleHeart" size={18} />
              Оставить отзыв
            </Button>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-8 md:py-12">
        <div className="grid lg:grid-cols-12 gap-4 md:gap-5">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground">
              Не нашли ответ? Позвоните нам — поможем.
            </p>
          </div>
          <div className="lg:col-span-8 bg-card border border-border rounded-[2rem] p-3 md:p-5">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-xl hover:no-underline px-3">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-3">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="container py-8 md:py-12">
        <div className="bg-card border border-border rounded-[2rem] p-8 md:p-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
            Оставить заявку
          </h2>
          <p className="text-muted-foreground mb-8">
            Заполните форму — мы свяжемся с вами и всё организуем.
          </p>

          <form className="grid md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <Label className="mb-2 block">Выбор услуги</Label>
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
              <Label className="mb-2 block">Имя</Label>
              <Input className="rounded-2xl h-12" placeholder="Как к вам обращаться" />
            </div>
            <div>
              <Label className="mb-2 block">Телефон</Label>
              <Input className="rounded-2xl h-12" placeholder="+7 ___ ___ __ __" />
            </div>
            <div>
              <Label className="mb-2 block">Желаемое время</Label>
              <Input className="rounded-2xl h-12" type="datetime-local" />
            </div>

            {serviceType === 'transport' || serviceType === 'intercity' ? (
              <>
                <div>
                  <Label className="mb-2 block">Адрес подачи машины</Label>
                  <Input className="rounded-2xl h-12" placeholder="Откуда забрать" />
                </div>
                <div className="md:col-span-2">
                  <Label className="mb-2 block">Конечный адрес</Label>
                  <Input className="rounded-2xl h-12" placeholder="Куда доставить" />
                </div>
              </>
            ) : (
              <div className="md:col-span-2">
                <Label className="mb-2 block">Адрес оказания услуги</Label>
                <Input className="rounded-2xl h-12" placeholder="Куда приехать" />
              </div>
            )}

            <div className="md:col-span-2">
              <Label className="mb-2 block">Комментарий</Label>
              <Textarea className="rounded-2xl" placeholder="Дополнительные пожелания (необязательно)" rows={3} />
            </div>

            <div className="md:col-span-2">
              <Button
                size="lg"
                className="w-full md:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-base"
              >
                <Icon name="Send" size={18} />
                Отправить заявку
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Donation */}
      <section className="container py-8 md:py-12">
        <div className="bg-warm text-[hsl(var(--warm-foreground))] rounded-[2rem] p-8 md:p-12 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-3">
                Твори добро с нами
              </h2>
              <p className="text-lg opacity-95 max-w-md">
                Верим, что вместе сможем реализовать всё задуманное. Поддержать
                наши благотворительные проекты можно добровольным пожертвованием.
              </p>
            </div>
            <div className="bg-background/95 text-foreground rounded-[1.5rem] p-7 space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Smartphone" size={22} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">СБП по номеру</p>
                  <p className="font-display text-2xl font-semibold">{PHONE}</p>
                </div>
              </div>
              <div className="h-px bg-border" />
              <div className="flex items-center gap-3">
                <Icon name="CreditCard" size={22} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Номер карты</p>
                  <p className="font-display text-2xl font-semibold tracking-wide">
                    4817 7601 1998 3587
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funeral — delicate */}
      <section className="container pb-12">
        <div className="bg-muted/60 border border-border rounded-[2rem] p-7 md:p-9 flex items-start gap-4">
          <Icon name="Flower2" size={24} className="text-muted-foreground shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-semibold mb-1">
              Организация похорон
            </h3>
            <p className="text-muted-foreground">
              В трудную минуту мы также готовы бережно взять на себя организацию
              похорон и помочь со всеми необходимыми хлопотами. Звоните — поддержим
              с уважением и деликатностью.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white border border-border overflow-hidden flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/projects/65d26ed8-0279-4bdb-bbbf-1047dfc913f3/files/07d14520-7031-4397-a8b1-eb9ad7e0c6bb.jpg"
                alt="Логотип голубь"
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <span className="font-display text-lg font-semibold">
              МГОО «Твори Добрые Дела»
            </span>
          </a>

          <a href={PHONE_HREF} className="font-display text-2xl font-semibold hover:text-primary transition-colors">
            {PHONE}
          </a>

          <div className="flex items-center gap-3">
            {['Send', 'MessageCircle', 'Phone'].map((ic) => (
              <a
                key={ic}
                href={ic === 'Phone' ? PHONE_HREF : '#'}
                className="w-10 h-10 rounded-full bg-secondary grid place-items-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name={ic} size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;