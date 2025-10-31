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
    area: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "🎉 Заявка принята!",
      description: "Наш специалист свяжется с вами через 10 минут",
    });
    setFormData({ name: '', phone: '', area: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-sm opacity-70"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl">
                  <Icon name="Wind" size={30} className="text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  DuctCool
                </h1>
                <p className="text-xs font-semibold text-muted-foreground">Канальные системы</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
              <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
              <a href="#how" className="hover:text-primary transition-colors">Как работает</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </nav>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary shadow-lg hidden md:flex"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Sparkles" size={18} className="mr-2" />
              Бесплатный расчёт
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-4 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 px-5 py-2.5 text-sm font-bold">
                ⚡ Скрытое охлаждение для вашего пространства
              </Badge>
              
              <h2 className="text-6xl lg:text-8xl font-black leading-none">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Канальные
                </span>
                <br />
                кондиционеры
              </h2>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-medium">
                Невидимая система климат-контроля для квартир, пентхаусов и коммерческих помещений. 
                Полная свобода дизайна без видимых блоков.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg h-16 px-10 shadow-2xl shadow-primary/50 font-bold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Zap" size={24} className="mr-2" />
                  Получить расчёт за 2 минуты
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg h-16 px-10 border-2 font-bold hover:bg-accent/10 hover:border-accent"
                >
                  <Icon name="PlayCircle" size={24} className="mr-2" />
                  Смотреть портфолио
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: '500+', label: 'Установок', color: 'from-primary to-primary/70' },
                  { value: '7 лет', label: 'Гарантия', color: 'from-secondary to-secondary/70' },
                  { value: '24/7', label: 'Поддержка', color: 'from-accent to-accent/70' }
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl blur-lg group-hover:blur-xl transition"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-lg">
                      <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-[3rem] blur-3xl animate-pulse"></div>
              <Card className="relative p-10 lg:p-14 bg-white/90 backdrop-blur-xl shadow-2xl border-2 border-primary/20 rounded-[3rem]">
                <div className="text-center space-y-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-2xl">
                      <Icon name="Disc" size={64} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Скрытая установка
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      Оборудование полностью скрыто в потолке. Видны только элегантные решётки.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['primary', 'secondary', 'accent'].map((color, i) => (
                      <div key={i} className={`h-2 bg-gradient-to-r from-${color} to-${color}/50 rounded-full`}></div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 px-4 lg:px-8 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold">Преимущества канальных систем</Badge>
            <h2 className="text-5xl lg:text-6xl font-black">
              Почему выбирают <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">канальные</span> системы?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: 'EyeOff', 
                title: 'Невидимость', 
                desc: 'Блоки скрыты в потолке — только декоративные решётки',
                gradient: 'from-primary to-primary/70'
              },
              { 
                icon: 'Home', 
                title: 'Весь дом — один климат', 
                desc: 'Одна система охлаждает все комнаты равномерно',
                gradient: 'from-secondary to-secondary/70'
              },
              { 
                icon: 'Volume2', 
                title: 'Тишина', 
                desc: 'Уровень шума ниже 25 дБ — тише шёпота',
                gradient: 'from-accent to-accent/70'
              },
              { 
                icon: 'Paintbrush', 
                title: 'Свобода дизайна', 
                desc: 'Не портит интерьер — никаких видимых блоков',
                gradient: 'from-primary to-secondary'
              },
              { 
                icon: 'Droplets', 
                title: 'Увлажнение + очистка', 
                desc: 'Встроенные системы фильтрации и увлажнения воздуха',
                gradient: 'from-secondary to-accent'
              },
              { 
                icon: 'TrendingDown', 
                title: 'Экономия энергии', 
                desc: 'Инверторные технологии снижают потребление на 40%',
                gradient: 'from-accent to-primary'
              }
            ].map((advantage, i) => (
              <Card 
                key={i} 
                className="p-8 hover:shadow-2xl transition-all duration-500 group border-2 hover:border-primary/50 hover:-translate-y-3"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${advantage.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl`}>
                  <Icon name={advantage.icon} size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">{advantage.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 font-bold">Этапы работы</Badge>
            <h2 className="text-5xl lg:text-6xl font-black">
              Как происходит <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">установка</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Замер и расчёт', 
                desc: 'Выезд инженера, замеры помещения, расчёт мощности',
                icon: 'Ruler'
              },
              { 
                step: '02', 
                title: 'Проектирование', 
                desc: 'Создание схемы воздуховодов и размещения оборудования',
                icon: 'Pencil'
              },
              { 
                step: '03', 
                title: 'Монтаж', 
                desc: 'Установка внутреннего блока, прокладка воздуховодов',
                icon: 'Wrench'
              },
              { 
                step: '04', 
                title: 'Запуск', 
                desc: 'Пусконаладка, тестирование, обучение пользованию',
                icon: 'CheckCircle2'
              }
            ].map((stage, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition"></div>
                <Card className="relative p-8 border-2 group-hover:border-primary/50 transition">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-6xl font-black text-primary/10">{stage.step}</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon name={stage.icon} size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground font-medium">{stage.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-4 lg:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-bold">Наши работы</Badge>
            <h2 className="text-5xl lg:text-6xl font-black">
              Реализованные <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">проекты</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Пентхаус "Москва-Сити"', area: '280 м²', rooms: 6, type: 'Премиум' },
              { name: 'Квартира ЖК "Сколково"', area: '150 м²', rooms: 4, type: 'Элитное жильё' },
              { name: 'Офис "Сбер"', area: '420 м²', rooms: 12, type: 'Коммерция' },
              { name: 'Коттедж в Рублёвке', area: '350 м²', rooms: 8, type: 'Загородный дом' },
              { name: 'Салон красоты "Лотос"', area: '180 м²', rooms: 5, type: 'Бизнес' },
              { name: 'Апартаменты "Остров"', area: '220 м²', rooms: 5, type: 'Премиум' }
            ].map((project, i) => (
              <Card 
                key={i} 
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-secondary/50"
              >
                <div className="h-64 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
                  <Icon name="Building2" size={100} className="text-white/20 group-hover:scale-110 transition-transform" />
                  <Badge className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm shadow-xl font-bold">
                    {project.type}
                  </Badge>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon name="Maximize2" size={20} className="text-primary" />
                      </div>
                      <span className="font-semibold">{project.area}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon name="Layers" size={20} className="text-accent" />
                      </div>
                      <span className="font-semibold">{project.rooms} зон климат-контроля</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-24 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold">Тарифы</Badge>
            <h2 className="text-5xl lg:text-6xl font-black">
              Прозрачное <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">ценообразование</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Стандарт',
                price: '180 000',
                popular: false,
                features: [
                  'Система на 2-3 комнаты',
                  'Японское оборудование Daikin',
                  'Монтаж воздуховодов',
                  'Гарантия 3 года',
                  'Бесплатное ТО 1 год'
                ],
                gradient: 'from-primary to-primary/80'
              },
              {
                name: 'Премиум',
                price: '320 000',
                popular: true,
                features: [
                  'Система на 4-6 комнат',
                  'Топовое оборудование Mitsubishi',
                  'Увлажнение + ионизация',
                  'Гарантия 5 лет',
                  'Бесплатное ТО 3 года',
                  'Умное управление'
                ],
                gradient: 'from-secondary to-secondary/80'
              },
              {
                name: 'Индивидуальный',
                price: 'от 500 000',
                popular: false,
                features: [
                  'Система на весь дом/офис',
                  'VRV/VRF мультизональные системы',
                  'Полная автоматизация',
                  'Гарантия 7 лет',
                  'Бессрочное обслуживание',
                  'Персональный инженер'
                ],
                gradient: 'from-accent to-accent/80'
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`p-8 space-y-6 relative overflow-hidden ${
                  plan.popular 
                    ? 'border-4 border-secondary shadow-2xl scale-105' 
                    : 'border-2'
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-bl-[3rem] flex items-center justify-center">
                      <Icon name="Crown" size={32} className="text-white" />
                    </div>
                    <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-accent text-white px-6 py-2 font-bold shadow-xl">
                      🔥 Топ выбор
                    </Badge>
                  </>
                )}
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-black">{plan.name}</h3>
                  <div className="flex items-end gap-2">
                    <span className={`text-5xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'от 500 000' && <span className="text-muted-foreground pb-2 font-semibold">₽</span>}
                  </div>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full h-14 text-lg font-bold shadow-xl ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90' 
                      : 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70'
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать тариф
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-4 lg:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 font-bold">FAQ</Badge>
            <h2 className="text-5xl lg:text-6xl font-black">
              Частые <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">вопросы</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Чем канальная система отличается от обычных сплит-систем?',
                a: 'Канальная система полностью скрыта в потолке и охлаждает сразу все помещения через воздуховоды. В отличие от настенных блоков, она не занимает место на стенах и не портит дизайн интерьера.'
              },
              {
                q: 'Сколько времени занимает установка?',
                a: 'Установка канальной системы занимает от 3 до 7 дней в зависимости от площади и сложности проекта. Мы работаем без остановки ремонта.'
              },
              {
                q: 'Можно ли установить в готовую квартиру с ремонтом?',
                a: 'Да, но это потребует частичного демонтажа потолков для прокладки воздуховодов. Рекомендуем устанавливать на этапе чистовой отделки.'
              },
              {
                q: 'Какой уровень шума у канальных систем?',
                a: 'Современные канальные системы работают очень тихо — 18-25 дБ. Это тише шёпота. Основной блок устанавливается в техническом помещении, поэтому шума практически нет.'
              }
            ].map((faq, i) => (
              <Card 
                key={i} 
                className="p-8 border-2 hover:border-primary/50 hover:shadow-xl transition-all group"
              >
                <h3 className="text-xl font-bold mb-4 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name="HelpCircle" size={24} className="text-white" />
                  </div>
                  {faq.q}
                </h3>
                <p className="text-muted-foreground pl-16 leading-relaxed font-medium">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-12 space-y-4 text-white">
            <h2 className="text-5xl lg:text-6xl font-black">Бесплатная консультация</h2>
            <p className="text-2xl font-medium opacity-90">Расчёт стоимости за 10 минут</p>
          </div>

          <Card className="p-10 lg:p-12 bg-white shadow-2xl border-4 border-white/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Александр"
                    className="h-14 border-2 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Телефон</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="h-14 border-2 text-lg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Площадь помещения (м²)</label>
                <Input
                  required
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  placeholder="120"
                  className="h-14 border-2 text-lg"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-16 text-xl font-black bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-2xl"
              >
                <Icon name="Sparkles" size={24} className="mr-3" />
                Получить бесплатный расчёт
              </Button>
              <p className="text-xs text-muted-foreground text-center font-medium">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 lg:px-8 bg-gradient-to-br from-foreground to-foreground/90 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Icon name="Wind" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    DuctCool
                  </h3>
                  <p className="text-xs text-white/70 font-semibold">Канальные системы</p>
                </div>
              </div>
              <p className="text-sm text-white/70 font-medium">
                Профессиональная установка канальных кондиционеров с 2017 года
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70 font-medium">
                <li><a href="#how" className="hover:text-white transition">Установка</a></li>
                <li><a href="#projects" className="hover:text-white transition">Проектирование</a></li>
                <li><a href="#prices" className="hover:text-white transition">Обслуживание</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <ul className="space-y-3 text-sm text-white/70 font-medium">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span>+7 (495) 999-00-11</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span>info@ductcool.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span>Москва, Кутузовский пр-т, 12</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Режим работы</h4>
              <ul className="space-y-2 text-sm text-white/70 font-medium">
                <li>Пн-Вс: 9:00 - 21:00</li>
                <li className="text-accent font-bold">Консультации 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70 font-medium">
            <p>&copy; 2024 DuctCool. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
