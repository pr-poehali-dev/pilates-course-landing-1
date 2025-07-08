import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-white"></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                Онлайн курс пилатеса
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Пилатес для
                <span className="text-green-600 block">начинающих</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                3-месячный курс с прямыми эфирами для людей 20-45 лет. Обретите
                гибкость, силу и внутреннюю гармонию с персональным наставником.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              >
                Записаться на курс
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
              >
                Пробное занятие
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                <span>500+ учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                <span>3 месяца</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Video" size={16} />
                <span>Прямые эфиры</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/img/319fcfc5-496b-49df-a2a0-23861110a299.jpg"
              alt="Пилатес занятие"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Начните сегодня</p>
                  <p className="text-sm text-gray-600">
                    Первое занятие бесплатно
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О курсе */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О нашем курсе
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Специально разработанная программа для новичков, которая поможет
              вам освоить основы пилатеса и создать здоровую привычку на всю
              жизнь.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/img/f4747924-9a79-4957-904f-54156212bfbc.jpg"
                alt="Домашняя практика пилатеса"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Этапы обучения
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Основы (месяц 1)
                    </h4>
                    <p className="text-gray-600">
                      Изучение базовых принципов и дыхательных техник
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Развитие (месяц 2)
                    </h4>
                    <p className="text-gray-600">
                      Укрепление мышц кора и улучшение гибкости
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Мастерство (месяц 3)
                    </h4>
                    <p className="text-gray-600">
                      Продвинутые упражнения и создание собственной программы
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">Базовый</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-900">
                  5,990₽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>12 живых занятий</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Записи всех эфиров</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Программа питания</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-green-300 bg-green-50 hover:border-green-400 transition-colors relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                Популярный
              </Badge>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl">Премиум</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-900">
                  9,990₽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Всё из базового</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Персональные консультации</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Индивидуальная программа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Чат с тренером</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">VIP</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-900">
                  15,990₽
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Всё из премиум</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>1-на-1 занятия</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Анализ питания</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span>Пожизненный доступ</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-24 px-6 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Преимущества пилатеса
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Откройте для себя удивительные изменения, которые произойдут с
              вашим телом и разумом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="Heart" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Улучшение осанки
              </h3>
              <p className="text-gray-600">
                Укрепление глубоких мышц спины и коррекция положения
                позвоночника для здоровой осанки
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="Zap" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Гибкость и сила
              </h3>
              <p className="text-gray-600">
                Развитие мышечной силы без избыточной массы, улучшение гибкости
                и координации движений
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="Brain" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Снятие стресса
              </h3>
              <p className="text-gray-600">
                Концентрация на дыхании и движении помогает снизить уровень
                стресса и улучшить ментальное здоровье
              </p>
            </div>
          </div>

          <Card className="bg-white p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Что вы получите за 3 месяца:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Сильный мышечный корсет
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Развитие глубоких мышц для поддержки позвоночника
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Красивую осанку
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Выравнивание позвоночника и устранение зажимов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Гибкость и пластичность
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Увеличение амплитуды движений и подвижности суставов
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Внутреннее спокойствие
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Управление стрессом через дыхание и медитацию
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Для кого этот курс?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Новички в фитнесе и пилатесе</li>
                    <li>• Люди с сидячей работой</li>
                    <li>• Желающие улучшить осанку</li>
                    <li>• Те, кто ищет баланс тела и разума</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Что потребуется?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Коврик для йоги</li>
                    <li>• Удобная одежда</li>
                    <li>• Устойчивое интернет-соединение</li>
                    <li>• Желание изменить свою жизнь</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Отзывы и FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Отзывы наших учеников
            </h2>
            <p className="text-xl text-gray-600">
              Настоящие истории изменений от тех, кто уже прошел курс
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "За 3 месяца я полностью избавилась от болей в спине. Теперь
                  чувствую себя увереннее и сильнее!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">А</span>
                  </div>
                  <div>
                    <p className="font-semibold">Анна, 32 года</p>
                    <p className="text-sm text-gray-500">Менеджер</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Пилатес стал частью моей жизни. Отличная осанка и внутренняя
                  гармония - это то, что я искала!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">М</span>
                  </div>
                  <div>
                    <p className="font-semibold">Мария, 28 лет</p>
                    <p className="text-sm text-gray-500">Дизайнер</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Занятия в прямом эфире очень мотивируют! Инструктор всегда
                  поможет и подскажет."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">Е</span>
                  </div>
                  <div>
                    <p className="font-semibold">Елена, 41 год</p>
                    <p className="text-sm text-gray-500">Врач</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Часто задаваемые вопросы
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    Подходит ли курс полным новичкам?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Да, курс специально разработан для начинающих. Мы начинаем с
                    самых базовых упражнений и постепенно увеличиваем сложность.
                    Никакой предварительной подготовки не требуется.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    Сколько времени нужно заниматься в день?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Живые занятия длятся 60 минут и проходят 3 раза в неделю.
                    Дополнительно рекомендуем 15-20 минут самостоятельной
                    практики в дни между эфирами.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    Что если пропущу живое занятие?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Все эфиры записываются и остаются доступными в личном
                    кабинете. Вы сможете заниматься в удобное время по записи с
                    сохранением всех инструкций.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    Есть ли гарантия результата?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Мы гарантируем результат при регулярном посещении занятий.
                    Если через месяц вы не почувствуете улучшений, вернем 100%
                    стоимости курса.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Наши гарантии
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Shield"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Возврат денег
                      </h4>
                      <p className="text-gray-600 text-sm">
                        14 дней на принятие решения
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Certificate"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Сертификат
                      </h4>
                      <p className="text-gray-600 text-sm">
                        По окончании курса
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      name="Users"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Поддержка</h4>
                      <p className="text-gray-600 text-sm">
                        Персональные консультации
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Award" size={20} className="text-green-600" />О
                  вашем инструкторе
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Светлана Иванова</strong> - сертифицированный
                  инструктор пилатеса с 8-летним опытом. Более 1000 учеников
                  достигли своих целей под её руководством.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>• BASI Pilates</span>
                  <span>• 8 лет опыта</span>
                  <span>• 1000+ учеников</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Начните свой путь к здоровью уже сегодня
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Присоединяйтесь к нашему сообществу и откройте для себя силу
            пилатеса. Первое занятие абсолютно бесплатно!
          </p>

          <div className="max-w-md mx-auto mb-12">
            <Card className="p-6">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-gray-900">
                  Записаться на курс
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-white" />
                <Input placeholder="Телефон" className="bg-white" />
                <Input placeholder="Email" className="bg-white" />
                <Textarea
                  placeholder="Расскажите о ваших целях"
                  className="bg-white"
                />
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Записаться бесплатно
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} />
              <span>info@pilates-course.ru</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              <span>Пн-Пт: 9:00-21:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Пилатес Студия</h3>
              <p className="text-gray-400 text-sm mb-4">
                Профессиональные онлайн курсы пилатеса для здоровья тела и души
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={16} />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Icon name="Youtube" size={16} />
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <Icon name="Facebook" size={16} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Пилатес для начинающих</li>
                <li>Пилатес для беременных</li>
                <li>Реабилитационный пилатес</li>
                <li>Пилатес с оборудованием</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Инструкторы</li>
                <li>Отзывы</li>
                <li>Сертификаты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@pilates-course.ru</li>
                <li>Москва, ул. Примерная, 1</li>
                <li>Пн-Пт: 9:00-21:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Пилатес Студия. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
