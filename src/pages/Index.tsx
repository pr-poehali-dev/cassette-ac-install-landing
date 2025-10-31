import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Wrench',
      title: 'Установка',
      description: 'Профессиональный монтаж кассетных кондиционеров любой сложности'
    },
    {
      icon: 'Settings',
      title: 'Обслуживание',
      description: 'Регулярное техническое обслуживание и чистка оборудования'
    },
    {
      icon: 'Timer',
      title: 'Срочный ремонт',
      description: 'Оперативное устранение неисправностей в день обращения'
    },
    {
      icon: 'ClipboardCheck',
      title: 'Консультация',
      description: 'Бесплатный расчёт и подбор оптимальной системы охлаждения'
    }
  ];

  const advantages = [
    { icon: 'Award', title: 'Опыт 15+ лет', description: 'Более 2000 успешных проектов' },
    { icon: 'Shield', title: 'Гарантия 5 лет', description: 'Официальная гарантия на все работы' },
    { icon: 'Clock', title: 'Быстрая установка', description: 'Монтаж за 1-2 дня' },
    { icon: 'Users', title: 'Команда профи', description: 'Сертифицированные специалисты' },
    { icon: 'Percent', title: 'Скидки до 30%', description: 'Специальные предложения каждый месяц' },
    { icon: 'HeadphonesIcon', title: 'Поддержка 24/7', description: 'Всегда на связи для вас' }
  ];

  const prices = [
    {
      title: 'Базовый',
      price: '25 000',
      features: ['Установка кондиционера', 'Пусконаладочные работы', 'Гарантия 1 год', 'Консультация специалиста']
    },
    {
      title: 'Стандарт',
      price: '45 000',
      features: ['Всё из Базового', 'Монтаж фреоновой трассы до 5м', 'Гарантия 3 года', 'Обслуживание 1 раз в год'],
      popular: true
    },
    {
      title: 'Премиум',
      price: '75 000',
      features: ['Всё из Стандарт', 'Монтаж трассы до 15м', 'Гарантия 5 лет', 'Обслуживание 2 раза в год', 'Приоритетная поддержка']
    }
  ];

  const portfolio = [
    { title: 'Офис IT-компании', area: '250 м²', units: '6 кассетных систем' },
    { title: 'Торговый центр', area: '1200 м²', units: '18 кассетных систем' },
    { title: 'Ресторан премиум-класса', area: '180 м²', units: '4 кассетные системы' },
    { title: 'Фитнес-клуб', area: '450 м²', units: '10 кассетных систем' }
  ];

  const testimonials = [
    {
      name: 'Алексей Морозов',
      company: 'Директор ООО "ТехноПром"',
      text: 'Установили 12 кассетных кондиционеров в производственном цехе. Работа выполнена качественно, в срок. Температура стала комфортной для сотрудников.',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      company: 'Управляющая рестораном',
      text: 'Очень довольна результатом! Кондиционеры работают тихо, не мешают гостям. Установка прошла быстро, без пыли и грязи.',
      rating: 5
    },
    {
      name: 'Игорь Петров',
      company: 'Владелец спортзала',
      text: 'Профессиональная команда! Помогли выбрать оптимальную систему под наш бюджет. Теперь в зале всегда свежо и комфортно.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает установка?',
      answer: 'Установка одного кассетного кондиционера занимает 1-2 дня в зависимости от сложности объекта. Для больших объектов сроки обсуждаются индивидуально.'
    },
    {
      question: 'Какая гарантия на оборудование?',
      answer: 'Мы предоставляем гарантию от 1 до 5 лет на установленное оборудование в зависимости от выбранного тарифа. Гарантия производителя — до 3 лет.'
    },
    {
      question: 'Как часто нужно обслуживать кондиционер?',
      answer: 'Рекомендуем проводить профилактическое обслуживание 1-2 раза в год. Это продлевает срок службы оборудования и поддерживает эффективность работы.'
    },
    {
      question: 'Работаете ли вы с коммерческими объектами?',
      answer: 'Да, мы специализируемся на установке кондиционеров для офисов, торговых центров, ресторанов, производственных помещений и других коммерческих объектов.'
    },
    {
      question: 'Есть ли возможность рассрочки?',
      answer: 'Да, мы предлагаем рассрочку на 6-12 месяцев без переплат. Также работаем с корпоративными клиентами по безналичному расчёту.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Wind" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-secondary">КлиматПро</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition">Услуги</a>
            <a href="#advantages" className="hover:text-primary transition">Преимущества</a>
            <a href="#prices" className="hover:text-primary transition">Цены</a>
            <a href="#portfolio" className="hover:text-primary transition">Портфолио</a>
            <a href="#testimonials" className="hover:text-primary transition">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
          </nav>
          <a href="#contact">
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Профессиональный монтаж с 2009 года
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Установка <span className="text-primary">кассетных</span> кондиционеров
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Создаём идеальный климат в вашем офисе, магазине или производстве. Быстро, качественно, с гарантией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Установок</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <Icon name="Snowflake" size={80} className="text-primary mx-auto mb-4" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Комфортный климат</h3>
                    <p className="text-muted-foreground">круглый год для вашего бизнеса</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по установке и обслуживанию кассетных кондиционеров
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Почему мы</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition">
                  <Icon name={advantage.icon} size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Тарифы</Badge>
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий пакет услуг</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card key={index} className={`relative ${price.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}>
                {price.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{price.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{price.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={price.popular ? 'default' : 'outline'}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Портфолио</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-white/80">Реализованные проекты по установке кондиционеров</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition">
                <CardHeader>
                  <div className="w-full h-48 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Building2" size={64} className="text-white/50" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-white/70">
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Maximize" size={16} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="Wind" size={16} />
                      <span>{project.units}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-none shadow-sm">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Бесплатная консультация</h2>
            <p className="text-xl text-white/90">Оставьте заявку, и мы перезвоним вам в течение 15 минут</p>
          </div>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/90 border-white/30"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-white/90 border-white/30"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение (необязательно)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/90 border-white/30"
                    placeholder="Опишите ваш объект и задачу..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-sm text-white/70 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wind" size={28} className="text-primary" />
                <span className="text-xl font-bold">КлиматПро</span>
              </div>
              <p className="text-white/70">
                Профессиональная установка кассетных кондиционеров с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-white transition">Установка</a></li>
                <li><a href="#services" className="hover:text-white transition">Обслуживание</a></li>
                <li><a href="#services" className="hover:text-white transition">Ремонт</a></li>
                <li><a href="#services" className="hover:text-white transition">Консультация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@climatpro.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-white/70">
                <li>Пн-Пт: 9:00 - 20:00</li>
                <li>Сб-Вс: 10:00 - 18:00</li>
                <li className="text-accent font-semibold">Выезд 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2024 КлиматПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
