import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "✅ Заявка отправлена!",
      description: "Мы перезвоним вам в течение 15 минут",
    });
    setFormData({ name: '', phone: '', company: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Snowflake" size={26} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-secondary">CoolMaster</h1>
                <p className="text-xs text-muted-foreground">Профи по климату</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </nav>

            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 shadow-lg hidden md:flex"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2 text-sm font-semibold">
                ⚡ №1 по установке в Москве
              </Badge>
              
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Установка <span className="text-primary">кассетных</span> кондиционеров
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Создаём комфортный микроклимат в офисах, ресторанах, торговых центрах и на производстве. 
                Быстро. Качественно. С гарантией.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg h-14 px-8 shadow-xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Rocket" size={22} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2">
                  <Icon name="Calculator" size={22} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-primary">3200+</div>
                  <div className="text-sm text-muted-foreground">Объектов</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-accent">12 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Рекомендуют</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <Card className="relative p-8 lg:p-12 bg-white shadow-2xl border-2">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-xl">
                    <Icon name="Snowflake" size={48} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-3">Идеальный климат</h3>
                    <p className="text-lg text-muted-foreground">для вашего бизнеса круглый год</p>
                  </div>
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-100"></div>
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Наши услуги</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Полный цикл установки</h2>
            <p className="text-xl text-muted-foreground">От консультации до сервисного обслуживания</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: 'Search', 
                title: 'Выезд на объект', 
                desc: 'Бесплатный осмотр и замеры инженером в день обращения',
                color: 'primary'
              },
              { 
                icon: 'PenTool', 
                title: 'Проектирование', 
                desc: 'Разработка оптимальной схемы размещения оборудования',
                color: 'accent'
              },
              { 
                icon: 'Settings', 
                title: 'Монтаж системы', 
                desc: 'Профессиональная установка за 1-2 дня с гарантией',
                color: 'primary'
              },
              { 
                icon: 'BadgeCheck', 
                title: 'Запуск и настройка', 
                desc: 'Пусконаладка, тестирование и обучение персонала',
                color: 'accent'
              }
            ].map((service, i) => (
              <Card 
                key={i} 
                className="p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                  service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                } group-hover:scale-110 transition-transform`}>
                  <Icon 
                    name={service.icon} 
                    size={32} 
                    className={service.color === 'primary' ? 'text-primary' : 'text-accent'}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">Наши работы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground">Более 3000 довольных клиентов по всей России</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'ТЦ "Мега Парк"', area: '4500 м²', systems: 28, category: 'Торговля' },
              { name: 'Офис "Яндекс"', area: '2100 м²', systems: 18, category: 'Офисы' },
              { name: 'Ресторан "White Rabbit"', area: '650 м²', systems: 10, category: 'HoReCa' },
              { name: 'Завод "РосАвто"', area: '8200 м²', systems: 42, category: 'Производство' },
              { name: 'Фитнес "World Class"', area: '1800 м²', systems: 16, category: 'Спорт' },
              { name: 'Бизнес-центр "Сити"', area: '3200 м²', systems: 24, category: 'Офисы' }
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2">
                <div className="h-56 bg-gradient-to-br from-primary/30 via-primary/10 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <Icon name="Building" size={80} className="text-primary/20 group-hover:scale-110 transition-transform" />
                  <Badge className="absolute top-4 right-4 bg-white shadow-lg">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Ruler" size={18} className="text-primary" />
                      <span className="text-sm">Площадь: {project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Wind" size={18} className="text-accent" />
                      <span className="text-sm">{project.systems} кассетных систем</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Почему мы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Наши преимущества</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'Zap', title: 'Скорость', desc: 'Установка за 1-2 дня без остановки вашего бизнеса' },
              { icon: 'ShieldCheck', title: 'Гарантия 5 лет', desc: 'Официальная гарантия на оборудование и монтаж' },
              { icon: 'Award', title: 'Сертификаты', desc: 'Все специалисты имеют международные сертификаты' },
              { icon: 'Wallet', title: 'Экономия 20%', desc: 'Работаем напрямую с производителями оборудования' },
              { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Техническая поддержка в любое время суток' },
              { icon: 'FileText', title: 'Документы', desc: 'Полный пакет документов и акты выполненных работ' }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon} size={28} className="text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">Тарифы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">Без скрытых платежей и доплат</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Стандарт',
                price: '32 000',
                period: '/ система',
                features: [
                  'Установка 1 кассетной системы',
                  'Монтаж трассы до 5 метров',
                  'Пусконаладочные работы',
                  'Гарантия 2 года',
                  'Техподдержка'
                ]
              },
              {
                name: 'Бизнес',
                price: '26 500',
                period: '/ система',
                popular: true,
                features: [
                  'От 3-х систем со скидкой',
                  'Монтаж трассы до 8 метров',
                  'Пусконаладка + настройка',
                  'Гарантия 3 года',
                  'Техподдержка 24/7',
                  'Бесплатное ТО 1 год'
                ]
              },
              {
                name: 'Корпоративный',
                price: 'Индивидуально',
                period: '',
                features: [
                  'Крупные объекты от 10 систем',
                  'Персональный менеджер',
                  'Индивидуальный проект',
                  'Гарантия 5 лет',
                  'Поддержка 24/7',
                  'Договор на обслуживание'
                ]
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`p-8 space-y-6 relative ${
                  plan.popular 
                    ? 'border-4 border-accent shadow-2xl scale-105' 
                    : 'border-2'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1">
                    🔥 Хит продаж
                  </Badge>
                )}
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground pb-2">{plan.period}</span>}
                  </div>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full h-12 text-lg ${
                    plan.popular 
                      ? 'bg-accent hover:bg-accent/90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Заказать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">Отзывы</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Что говорят клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Михаил Петров',
                role: 'Директор ТЦ "Мега Парк"',
                text: 'Установили 28 кассетных систем за 3 дня! Работали чётко по графику, без простоев. Качество монтажа на высшем уровне.',
                rating: 5
              },
              {
                name: 'Елена Соколова',
                role: 'Управляющая рестораном',
                text: 'Очень профессиональный подход. Помогли подобрать оптимальное решение под наш бюджет. Кондиционеры работают идеально!',
                rating: 5
              },
              {
                name: 'Андрей Ковалёв',
                role: 'Владелец фитнес-клуба',
                text: 'Сотрудничаем уже 3 года. Установка, обслуживание — всё на отлично. Рекомендую как надёжного подрядчика.',
                rating: 5
              }
            ].map((review, i) => (
              <Card key={i} className="p-6 space-y-4 hover:shadow-xl transition-shadow border-2">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, j) => (
                    <Icon key={j} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20">FAQ</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Частые вопросы</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Сколько времени занимает установка?',
                a: 'Установка одной кассетной системы занимает 1-2 дня. Для крупных объектов составляем индивидуальный график работ.'
              },
              {
                q: 'Какая гарантия на работы?',
                a: 'Предоставляем официальную гарантию от 2 до 5 лет в зависимости от выбранного тарифа. Гарантия производителя — до 3 лет.'
              },
              {
                q: 'Работаете ли в выходные?',
                a: 'Да, работаем без выходных. Можем проводить монтаж в ночное время, чтобы не мешать работе вашего бизнеса.'
              },
              {
                q: 'Есть ли рассрочка на оплату?',
                a: 'Да, предлагаем рассрочку на 6-12 месяцев без процентов. Также работаем по безналичному расчёту с НДС.'
              }
            ].map((faq, i) => (
              <Card key={i} className="p-6 border-2 hover:border-primary/50 transition-colors">
                <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                  <Icon name="HelpCircle" size={24} className="text-primary flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-muted-foreground pl-9">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Бесплатная консультация</h2>
            <p className="text-xl text-white/90">Оставьте заявку — перезвоним через 15 минут</p>
          </div>

          <Card className="p-8 lg:p-12 bg-white text-foreground shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    className="h-12 border-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="h-12 border-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Компания (необязательно)</label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="ООО «Ваша компания»"
                  className="h-12 border-2"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-lg bg-accent hover:bg-accent/90 shadow-xl"
              >
                <Icon name="Send" size={22} className="mr-2" />
                Получить консультацию бесплатно
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 lg:px-8 bg-secondary text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="Snowflake" size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CoolMaster</h3>
                  <p className="text-xs text-white/70">Профи по климату</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Профессиональная установка кассетных кондиционеров с 2012 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white transition">Установка</a></li>
                <li><a href="#services" className="hover:text-white transition">Обслуживание</a></li>
                <li><a href="#services" className="hover:text-white transition">Ремонт</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span>info@coolmaster.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span>Москва, ул. Ленина, д. 10</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Пн-Пт: 9:00 - 21:00</li>
                <li>Сб-Вс: 10:00 - 18:00</li>
                <li className="text-accent font-semibold">Аварийная служба 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2024 CoolMaster. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
