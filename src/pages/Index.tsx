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
      title: "✅ Заявка отправлена!",
      description: "Мастер свяжется с вами в течение 15 минут",
    });
    setFormData({ name: '', phone: '', area: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-border/40 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-coral rounded-2xl blur-md opacity-60"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon name="Wrench" size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl font-black bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">
                  ClimateInstall
                </h1>
                <p className="text-xs font-medium text-muted-foreground">Монтаж с гарантией</p>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#stages" className="hover:text-primary transition-colors">Этапы</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#guarantee" className="hover:text-primary transition-colors">Гарантия</a>
            </nav>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-coral to-coral/90 hover:from-coral/90 hover:to-coral/80 shadow-lg shadow-coral/30 hidden md:flex font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Вызвать мастера
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <Badge className="bg-coral/10 text-coral border-coral/30 px-4 py-2 text-sm font-bold inline-flex items-center gap-2">
                <Icon name="BadgeCheck" size={16} />
                Сертифицированные монтажники
              </Badge>
              
              <h2 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">
                  Установка
                </span>
                <br />
                канальных<br />кондиционеров
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Профессиональный монтаж скрытых систем кондиционирования под ключ. 
                Работаем с квартирами, домами и коммерческими объектами.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg h-14 px-8 shadow-xl shadow-primary/30 font-bold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Calculator" size={22} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg h-14 px-8 border-2 border-accent font-bold hover:bg-accent hover:text-white"
                >
                  <Icon name="MessageCircle" size={22} className="mr-2" />
                  Онлайн-консультация
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '12+', label: 'лет опыта', icon: 'Award', color: 'from-primary to-primary/70' },
                  { value: '800+', label: 'установок', icon: 'TrendingUp', color: 'from-secondary to-secondary/70' },
                  { value: '5 лет', label: 'гарантия', icon: 'Shield', color: 'from-coral to-coral/70' }
                ].map((stat, i) => (
                  <Card key={i} className="p-4 bg-white/90 backdrop-blur-sm border-2 hover:shadow-lg transition group">
                    <Icon name={stat.icon} size={28} className={`mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                    <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground mt-1">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/40 to-coral/40 rounded-3xl blur-3xl animate-pulse"></div>
              <Card className="relative p-8 bg-white/95 backdrop-blur-xl shadow-2xl border-2 border-primary/20 rounded-3xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-coral rounded-3xl blur-lg opacity-50"></div>
                      <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-primary via-secondary to-coral rounded-3xl flex items-center justify-center shadow-xl">
                        <Icon name="HardHat" size={48} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-black mt-6 mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Монтаж под ключ
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      От замера до запуска системы
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: 'Ruler', text: 'Бесплатный выезд и замер', color: 'primary' },
                      { icon: 'FileText', text: 'Составление сметы за 1 день', color: 'secondary' },
                      { icon: 'Hammer', text: 'Монтаж за 3-5 дней', color: 'coral' },
                      { icon: 'CheckCircle2', text: 'Гарантия 5 лет на работы', color: 'accent' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-muted/30 to-transparent hover:from-muted/50 transition">
                        <div className={`w-10 h-10 rounded-lg bg-${item.color}/10 flex items-center justify-center flex-shrink-0`}>
                          <Icon name={item.icon} size={20} className={`text-${item.color}`} />
                        </div>
                        <span className="font-semibold text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 lg:px-8 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 font-bold">Наши услуги</Badge>
            <h2 className="text-4xl lg:text-5xl font-black">
              Что мы <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">устанавливаем</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по монтажу канальных систем кондиционирования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: 'Building2', 
                title: 'Квартиры и пентхаусы',
                desc: 'Монтаж в жилых помещениях любой площади с учётом дизайна интерьера',
                price: 'от 120 000 ₽',
                color: 'primary'
              },
              { 
                icon: 'Home', 
                title: 'Частные дома и коттеджи',
                desc: 'Установка многозональных систем для загородной недвижимости',
                price: 'от 250 000 ₽',
                color: 'secondary'
              },
              { 
                icon: 'Store', 
                title: 'Коммерческие объекты',
                desc: 'Офисы, магазины, рестораны — проектирование и монтаж под задачи бизнеса',
                price: 'от 180 000 ₽',
                color: 'coral'
              },
              { 
                icon: 'Sparkles', 
                title: 'Ремонт и обслуживание',
                desc: 'Диагностика, чистка, замена комплектующих, гарантийное обслуживание',
                price: 'от 5 000 ₽',
                color: 'accent'
              },
              { 
                icon: 'Fan', 
                title: 'Системы вентиляции',
                desc: 'Приточно-вытяжная вентиляция с рекуперацией в дополнение к кондиционированию',
                price: 'от 90 000 ₽',
                color: 'primary'
              },
              { 
                icon: 'Thermometer', 
                title: 'Модернизация систем',
                desc: 'Замена старого оборудования, расширение зон кондиционирования',
                price: 'от 80 000 ₽',
                color: 'secondary'
              }
            ].map((service, i) => (
              <Card key={i} className="p-6 hover:shadow-xl transition group border-2 hover:border-primary/30 bg-white/90 backdrop-blur-sm">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${service.color} to-${service.color}/70 flex items-center justify-center mb-4 group-hover:scale-110 transition shadow-lg`}>
                  <Icon name={service.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-black mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
                <div className={`text-2xl font-black bg-gradient-to-r from-${service.color} to-${service.color}/70 bg-clip-text text-transparent`}>
                  {service.price}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Stages */}
      <section id="stages" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold">Процесс установки</Badge>
            <h2 className="text-4xl lg:text-5xl font-black">
              Этапы <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">монтажа</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс от заявки до сдачи объекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: '01',
                icon: 'Phone',
                title: 'Заявка',
                desc: 'Оставляете заявку на сайте или по телефону. Мастер связывается в течение 15 минут'
              },
              { 
                step: '02',
                icon: 'Home',
                title: 'Выезд и замер',
                desc: 'Бесплатный выезд инженера на объект, замеры помещений, консультация'
              },
              { 
                step: '03',
                icon: 'FileCheck',
                title: 'Расчёт и договор',
                desc: 'Составляем смету с фиксированной ценой, заключаем договор с гарантиями'
              },
              { 
                step: '04',
                icon: 'Hammer',
                title: 'Монтаж',
                desc: 'Установка оборудования за 3-5 дней, уборка мусора, запуск и настройка системы'
              }
            ].map((stage, i) => (
              <Card key={i} className="relative p-6 bg-white/90 backdrop-blur-sm border-2 hover:border-secondary/40 hover:shadow-xl transition group">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-coral rounded-2xl flex items-center justify-center shadow-lg font-black text-2xl text-white">
                  {stage.step}
                </div>
                <Icon name={stage.icon} size={36} className="text-secondary mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-black mb-2">{stage.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{stage.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-gradient-to-r from-coral/10 to-primary/10 border-2 border-coral/30">
              <div className="flex items-center gap-4">
                <Icon name="Clock" size={32} className="text-coral" />
                <div className="text-left">
                  <div className="text-2xl font-black bg-gradient-to-r from-coral to-primary bg-clip-text text-transparent">
                    Средний срок монтажа
                  </div>
                  <div className="text-lg font-semibold text-muted-foreground">
                    От заявки до запуска: 7-10 дней
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="prices" className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-coral/10 text-coral border-coral/20 font-bold">Прозрачные цены</Badge>
            <h2 className="text-4xl lg:text-5xl font-black">
              Стоимость <span className="bg-gradient-to-r from-coral to-primary bg-clip-text text-transparent">монтажа</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Базовый',
                price: '120 000',
                area: 'до 60 м²',
                features: [
                  'Канальный кондиционер 1 зона',
                  'Стандартная прокладка трасс',
                  'Монтаж внутреннего блока',
                  'Установка внешнего блока',
                  'Пусконаладочные работы',
                  'Гарантия 3 года'
                ],
                color: 'accent',
                popular: false
              },
              {
                name: 'Оптимальный',
                price: '250 000',
                area: 'до 120 м²',
                features: [
                  'Многозональная система 2-3 зоны',
                  'Скрытая прокладка трасс',
                  'Дизайнерские решётки',
                  'Система управления',
                  'Wi-Fi модуль',
                  'Гарантия 5 лет',
                  'Бесплатное ТО 1 год'
                ],
                color: 'primary',
                popular: true
              },
              {
                name: 'Премиум',
                price: '450 000',
                area: 'до 250 м²',
                features: [
                  'VRF-система на весь дом',
                  'Индивидуальное проектирование',
                  'Интеграция с умным домом',
                  'Премиум оборудование',
                  'Монтаж вентиляции',
                  'Гарантия 7 лет',
                  'Бесплатное ТО 3 года'
                ],
                color: 'coral',
                popular: false
              }
            ].map((plan, i) => (
              <Card key={i} className={`relative p-6 ${plan.popular ? 'border-4 border-primary shadow-2xl scale-105' : 'border-2'} bg-white/95 backdrop-blur-sm hover:shadow-xl transition`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-6 py-2 text-sm shadow-lg">
                      ⭐ Популярный
                    </Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                  <div className="text-sm font-semibold text-muted-foreground mb-4">{plan.area}</div>
                  <div className={`text-5xl font-black bg-gradient-to-r from-${plan.color} to-${plan.color}/70 bg-clip-text text-transparent`}>
                    {plan.price} ₽
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={18} className={`text-${plan.color} flex-shrink-0 mt-0.5`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? `bg-gradient-to-r from-${plan.color} to-${plan.color}/80 hover:from-${plan.color}/90 hover:to-${plan.color}/70 shadow-lg` : 'variant-outline'} font-bold`}
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Выбрать пакет
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg mb-4">
              💡 Точная стоимость рассчитывается после замера объекта
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать мой объект
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-accent/10 text-accent border-accent/20 font-bold">Надёжность</Badge>
            <h2 className="text-4xl lg:text-5xl font-black">
              Наши <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">гарантии</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'FileCheck',
                title: 'Договор с фиксацией цены',
                desc: 'Стоимость не изменится после начала работ'
              },
              {
                icon: 'Shield',
                title: 'Гарантия до 7 лет',
                desc: 'На монтажные работы и установленное оборудование'
              },
              {
                icon: 'Users',
                title: 'Сертифицированные мастера',
                desc: 'Обучение на заводах производителей оборудования'
              },
              {
                icon: 'Wrench',
                title: 'Бесплатный сервис',
                desc: 'Техобслуживание в период гарантии включено'
              }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center bg-white/90 backdrop-blur-sm border-2 hover:border-accent/40 hover:shadow-xl transition group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition shadow-lg">
                  <Icon name={item.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-black mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-coral/10">
        <div className="container mx-auto max-w-2xl">
          <Card className="p-8 lg:p-12 bg-white/95 backdrop-blur-xl shadow-2xl border-2 border-primary/20">
            <div className="text-center mb-8">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-coral rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-primary via-secondary to-coral rounded-3xl flex items-center justify-center shadow-xl">
                  <Icon name="Send" size={40} className="text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-black mb-3">
                <span className="bg-gradient-to-r from-primary to-coral bg-clip-text text-transparent">
                  Бесплатный расчёт
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку — мастер свяжется через 15 минут
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">Ваше имя</label>
                <Input
                  placeholder="Иван"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-12 border-2 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="h-12 border-2 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Площадь помещения (м²)</label>
                <Input
                  type="number"
                  placeholder="80"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="h-12 border-2 focus:border-primary"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary via-secondary to-coral hover:from-primary/90 hover:via-secondary/90 hover:to-coral/90 text-lg h-14 shadow-xl font-bold"
              >
                <Icon name="Sparkles" size={22} className="mr-2" />
                Получить бесплатный расчёт
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-8 bg-foreground text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Wrench" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-black">ClimateInstall</h3>
              </div>
              <p className="text-sm text-white/70">
                Профессиональный монтаж канальных кондиционеров с 2012 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@climate-install.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3">Режим работы</h4>
              <div className="space-y-1 text-sm text-white/70">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
                <p className="text-coral font-semibold mt-2">Заявки принимаем 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/50">
            © 2024 ClimateInstall. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
