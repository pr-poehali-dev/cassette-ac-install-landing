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
      title: "Заявка принята!",
      description: "Специалист свяжется с вами в течение 10 минут",
    });
    setFormData({ name: '', phone: '', area: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Wind" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">AirPro</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-muted-foreground hover:text-foreground transition">Услуги</a>
              <a href="#works" className="text-muted-foreground hover:text-foreground transition">Работы</a>
              <a href="#why" className="text-muted-foreground hover:text-foreground transition">Преимущества</a>
              <a href="#price" className="text-muted-foreground hover:text-foreground transition">Цены</a>
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Получить расчет
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm bg-primary/20 text-primary border-primary/30">
              🎯 Установка за 1 день • Гарантия 5 лет
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Кассетные кондиционеры
              <span className="block text-primary mt-2">для вашего бизнеса</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Профессиональный монтаж систем климат-контроля для офисов, торговых центров, ресторанов и производств
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg h-14 px-8 glow-effect"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть портфолио
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition" />
                <div className="relative bg-card border border-border rounded-2xl p-6">
                  <div className="text-4xl font-bold text-primary mb-2">2.5k+</div>
                  <div className="text-sm text-muted-foreground">Объектов</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition" />
                <div className="relative bg-card border border-border rounded-2xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">17</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition" />
                <div className="relative bg-card border border-border rounded-2xl p-6">
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Довольны</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что входит в установку</h2>
            <p className="text-xl text-muted-foreground">Полный цикл работ под ключ</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'FileSearch', title: 'Выезд и замер', desc: 'Бесплатный выезд инженера на объект в день обращения' },
              { icon: 'Layers', title: 'Проект системы', desc: 'Разработка оптимальной схемы расположения оборудования' },
              { icon: 'Wrench', title: 'Монтаж', desc: 'Профессиональная установка с соблюдением всех норм' },
              { icon: 'CheckCircle2', title: 'Запуск и настройка', desc: 'Тестирование системы и обучение персонала' }
            ].map((item, i) => (
              <Card key={i} className="p-6 bg-card border-border hover:border-primary/50 transition group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">Реализованные объекты за последний год</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Торговый центр "Европа"', area: '3200 м²', units: 24, type: 'Торговля' },
              { title: 'Офисный центр "Сити"', area: '1800 м²', units: 16, type: 'Офис' },
              { title: 'Ресторан "Премьер"', area: '450 м²', units: 8, type: 'HoReCa' },
              { title: 'Фитнес-клуб "Энергия"', area: '920 м²', units: 12, type: 'Спорт' },
              { title: 'Производство "ТехноПро"', area: '5600 м²', units: 32, type: 'Производство' },
              { title: 'Бизнес-центр "Альфа"', area: '2400 м²', units: 18, type: 'Офис' }
            ].map((project, i) => (
              <Card key={i} className="overflow-hidden bg-card border-border group hover:border-primary/50 transition">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <Icon name="Building2" size={64} className="text-primary/30" />
                  <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm">
                    {project.type}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Maximize" size={16} className="text-primary" />
                      <span>Площадь: {project.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Wind" size={16} className="text-primary" />
                      <span>{project.units} кассетных систем</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: 'Zap', title: 'Быстро', desc: 'Монтаж за 1-2 дня. Работаем без выходных' },
              { icon: 'Shield', title: 'Надежно', desc: 'Гарантия 5 лет на работы и оборудование' },
              { icon: 'Award', title: 'Качественно', desc: 'Сертифицированные специалисты с опытом 10+ лет' },
              { icon: 'Wallet', title: 'Выгодно', desc: 'Работаем напрямую с производителями' },
              { icon: 'Clock', title: '24/7', desc: 'Круглосуточная техподдержка после установки' },
              { icon: 'FileCheck', title: 'Официально', desc: 'Договор, документы, акты выполненных работ' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Стандарт',
                price: '35 000',
                features: ['Установка 1 кассетной системы', 'Монтаж трассы до 5м', 'Пусконаладка', 'Гарантия 2 года']
              },
              {
                name: 'Бизнес',
                price: '28 000',
                popular: true,
                features: ['При заказе от 3 систем', 'Монтаж трассы до 7м', 'Пусконаладка', 'Гарантия 3 года', 'Обслуживание 1 год']
              },
              {
                name: 'Корпоративный',
                price: 'По запросу',
                features: ['Крупные объекты от 10 систем', 'Индивидуальный проект', 'Полное сопровождение', 'Гарантия 5 лет', 'Приоритетная поддержка']
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`p-8 bg-card border-border relative ${plan.popular ? 'border-primary border-2' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Популярный
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'По запросу' && <span className="text-muted-foreground"> ₽</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Заказать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        <div className="container mx-auto relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Бесплатная консультация</h2>
              <p className="text-xl text-muted-foreground">Оставьте заявку — перезвоним через 10 минут</p>
            </div>

            <Card className="p-8 bg-card/80 backdrop-blur-xl border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван"
                    className="h-12 bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="h-12 bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Площадь помещения (м²)</label>
                  <Input
                    required
                    value={formData.area}
                    onChange={(e) => setFormData({...formData, area: e.target.value})}
                    placeholder="150"
                    className="h-12 bg-background/50"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-lg glow-effect">
                  <Icon name="Send" size={20} className="mr-2" />
                  Получить расчет стоимости
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Wind" size={24} className="text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">AirPro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная установка кассетных кондиционеров с 2007 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground transition">Установка</a></li>
                <li><a href="#services" className="hover:text-foreground transition">Обслуживание</a></li>
                <li><a href="#services" className="hover:text-foreground transition">Ремонт</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span>+7 (495) 777-88-99</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>info@airpro.ru</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Пн-Вс: 8:00 - 22:00</li>
                <li className="text-primary font-semibold">Выезд 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AirPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
