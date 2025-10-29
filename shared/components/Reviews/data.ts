import { IReviewData } from "@/shared/types/types";

export const reviews: IReviewData[] = [
  {
    id: 1,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Ирина',
    city: 'Москва',
    rate: 5,
    route: 'Москва - Новомосковск',
    date: new Date('2023-03-30').getTime(),
    review: 'Поездка прошла отлично! Быстро подобрали водителя, водитель приехал вовремя, уточнил все нужные детали, довёз аккуратно, безопасно и вовремя. Впечатления отличные, обязательно поедем с этой компанией ещё раз!'
  },
  {
    id: 2,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Екатерина',
    city: 'Москва',
    rate: 5,
    route: 'Ивангород - Санкт-Петербург',
    date: new Date('2023-03-26').getTime(),
    review: 'Спасибо большое за поездку! Вежливый водитель, поездка была без лишних нервов, удобная оплата. Машина была подана во время, приехала на место назначения быстрей, чем ожидала 🙂 Если в следующий раз мне понадобиться такси, я обращусь опять к вам!'
  },
  {
    id: 3,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Инна',
    city: 'Казань',
    rate: 5,
    route: 'Казань Аэропорт - Ульяновск',
    date: new Date('2023-03-22').getTime(),
    review: 'Неоднократно пользуемся услугами фирмы City2city. Нас вполне устраивает схема работы фирмы с клиентами: заказ машины делается без излишней бюрократии, всё просто и чётко. Накануне пассажира уведомляют о номере назначенной машины и водитель, как правило, связывается с пассажиром по ватсапу или телефону, подтверждая тем самым гарантии выполнения заказа. Водители, услугами которых мы пользовались (Руслан, Рустам), оставили очень приятное впечатление - доброжелательные, заботливые профессионалы, спасибо им большое. Фирме city2city желаем дальнейшего процветания!'
  },
  {
    id: 4,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Руслан',
    city: 'Ижевск',
    rate: 5,
    route: 'Ижевск - Афанасьево',
    date: new Date('2023-03-08').getTime(),
    review: 'Большое спасибо! Водителю что сразу откликнулись выручил доставил до места! Всем рекомендую! А водителю не гвоздя не жезла и удачи на дорогах!'
  },
  {
    id: 5,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Алексей',
    city: 'Сыктывкар',
    rate: 5,
    route: 'Сыктывкар - Котлас',
    date: new Date('2023-03-06').getTime(),
    review: 'Все очень понравилось, комфортно, удобно и быстро. Спасибо.'
  },
  {
    id: 6,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Юлия',
    city: 'Кострома',
    rate: 5,
    route: 'Кострома - Долгопрудный',
    date: new Date('2023-03-06').getTime(),
    review: 'Поездка прошла замечательно, перевозила щенка, да и цена меня вполне устроила по сравнению с другими перевозчиками. Планирую в дальнейшем пользоваться услугами city2city, рекомендую.'
  },
  {
    id: 7,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Павел',
    city: 'Москва',
    rate: 5,
    route: 'Уральск - Самара',
    date: new Date('2023-03-02').getTime(),
    review: 'Езжу с ребятами не в первый раз, как всегда все прошло отлично. Обратился за помощью в 22 вечера, уже в 4 утра машина ждала у подъезда. Доехали быстро и без задержек, максимальная пунктуальность и комфорт. Рекомендую.'
  },
  {
    id: 8,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Максим',
    city: 'Воронеж',
    rate: 5,
    route: 'Воронеж - Жердевка',
    date: new Date('2023-02-27').getTime(),
    review: 'Все отлично, большое спасибо'
  },
  {
    id: 9,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Светлана',
    city: 'Казань',
    rate: 5,
    route: 'Казань - Ульяновск',
    date: new Date('2023-02-18').getTime(),
    review: 'Я осталась очень довольна сервисом компании City2City. От принятия заказа до доставки по указанному адресу - все прошло гладко и четко. Спасибо водителю Руслану за приятную и комфортабельную поездку.'
  },
  {
    id: 10,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Наталья',
    city: 'Дмитров',
    rate: 5,
    route: 'Дмитров - Липецк',
    date: new Date('2023-02-15').getTime(),
    review: 'Доехала быстро, безопасно, душевно! Высший класс! И большое спасибо!'
  },
  {
    id: 11,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Татьяна',
    city: 'Липецк',
    rate: 5,
    route: 'Липецк - Волгоград',
    date: new Date('2023-02-14').getTime(),
    review: 'Очень довольна поездкой! Все четко, спокойно и профессионально. Высшие похвалы и высшая оценка. Спасибо огромное.'
  },
  {
    id: 12,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Наталия',
    city: 'Остров',
    rate: 5,
    route: 'г.Остров - г.Дубна',
    date: new Date('2023-02-13').getTime(),
    review: 'Огромное спасибо за предоставленные транспортные услуги. Сломалась машина. Находясь в незнакомом городе, не сразу соображаешь, как правильно поступить и как добираться. Но тут попался этот сайт. Это наше спасение просто! Оператор все объяснил, быстро нашел машину и рассчитал стоимость пути. Наш водитель - Сергей. Ему огромное спасибо! В машине чисто! Водитель умел поддержать любую тему для разговора. 12 часов пути пролетели незаметно! Очень комфортное вождение. Однозначно, буду пользоваться этими услугами и советовать другим! Ребята, вам процветания и успехов!!!'
  },
  {
    id: 13,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Роман',
    city: 'Иркутск',
    rate: 5,
    route: 'Аэропорт Иркутск - МРС Сахюрта',
    date: new Date('2023-02-12').getTime(),
    review: 'В начале февраля по ряду причин пришлось искать транспорт с аэропорта Иркутска до Байкала, а затем обратно. Поиск выдал сервис city2city. Если честно поначалу были опасения и недоверие оставленным отзывам. Воспользовавшись два раза услугами, могу смело рекомендовать. Все поездки выполнены точно и в срок. Водители вежливые и пунктуальные. Спасибо сервису и водителям. Обязательно воспользуюсь услугами снова.'
  },
  {
    id: 14,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Юлия',
    city: 'Псков',
    rate: 5,
    route: 'село Грушевка - Псков',
    date: new Date('2022-11-14').getTime(),
    review: 'Огромное спасибо за организацию поездки!!! Заказ осуществляли из Нижнего Новгорода в 21:30, оператор быстро нашел машину, обговорили детали поездки в течении получаса скинули все данные водителя, через 10 минут перезвонил сам водитель. Прибыл к месту назначения вовремя, отзвонился, т.к у пассажира не было мобильного для связи. Время поездки длительное 17 часов. Отдельное спасибо водителю Илье, за предоставленную возможность быть на связи с пассажиром. По приезду в пункт назначения так же отзвонился и отправил сообщение, что всё в порядке. Рекомендуем city2city, клиентоориентированность на высшем уровне. Будем пользоваться услугами данного перевозчика. Всё четко и профессионально!'
  },
  {
    id: 15,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Елизавета',
    city: 'Киров',
    rate: 5,
    route: 'Киров - Кирс - Пермь',
    date: new Date('2022-11-14').getTime(),
    review: 'Была командировка, нам достался отличный водитель Руслан! Выражаем большую благодарность! Машина чистая, есть все необходимое, приехал вовремя, чувствуется, что большой опыт вождения. Рекомендую пользоваться услугами данного перевозчика!'
  },
  {
    id: 16,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Юлия',
    city: 'Волгоград',
    rate: 5,
    route: 'Волгоград - Садовое',
    date: new Date('2022-11-11').getTime(),
    review: 'Благодарим за Чудесную поездку, водитель Валентин. Приехал за 15 мин до назначенного времени. Заранее уточнил какое нужно кресло для ребёнка. Долетели быстро. Очень вежливый, машина Чистая, просторная, в багажник всё поместилось. Я осталась очень довольна поездкой.'
  },
  {
    id: 17,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Сунгат',
    city: 'Курумоч',
    rate: 5,
    route: 'Аэропорт Курумоч до границы Казахстана и обратно',
    date: new Date('2022-11-11').getTime(),
    review: 'Все было на высшем уровне? Очень ответственный и юморной водитель)'
  },
  {
    id: 18,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Кира',
    city: 'Курск',
    rate: 5,
    route: 'Курск - Белгород аэропорт',
    date: new Date('2021-12-10').getTime(),
    review: 'В отличие от остальных такси яндекс, максим и т.д. Которые не дают 100%гарантию, что машина точно будет подана и вы не опаздаете на рейс. В этой компании замечательный оператор. Вызов делала в 21 час на 5 утра за 5 минут нашёл машину скинул все данные водителя, тут же перезвонил сам водитель, что машина будет точно и я не волновалась и могла спать спокойно. Не намного дороже чем в том же максиме, но Вы зато будите спокойно спать и не дёргаться, что можите получить нервы утром и опаздать на рейс. Водитель пунктуален, вежлив, вёл аккуратно и в тоже время быстро. Спасибо'
  },
  {
    id: 19,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Марина',
    city: 'Липецк',
    rate: 5,
    route: 'Липецк - Воронеж',
    date: new Date('2022-11-07').getTime(),
    review: '28 августа 2021 ездила по делам в Воронеж. Хотела поблагодарить водителя Игоря, машина Hyundai Sonata T110BX136. Спасибо вам огромное, Игорь! Практически долетели до места назначения! При этом чувствовалось, что человек - ПРОФЕССИОНАЛ своего дела! Комфортное вождение, внимательность, спокойствие, - всё это вселило уверенность, что день будет удачным. Так и получилось! Спасибо за чёткую организацию моей поездки! Надеюсь, на дальнейшее сотрудничество именно с city2city!'
  },
  {
    id: 20,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Edward',
    city: 'Moscow',
    rate: 5,
    route: 'Moscow to uglich',
    date: new Date('2021-11-20').getTime(),
    review: 'Thank you very much! it was my first time visiting Russia, and I two bad experience in other companies, with taxis ,one at the airport, girlfriend stood me was waiting for her was not In a,good frame of mind, stupidly got in to fake taxi the ,taxi I booked never came .they have set up at airport ,. fancy car pulled up , long story short he wanted me to pay him ,350 euro ,I didn\'t given to Money ,he pretend to call the police,we waited in the car and I left ,he give up .. Other bad experience , Got lost in Moscow taxi over charge me . ..I never write review, I just wanted to say thank , and all have say ,if anyone is looking for taxi ,my advice is book city\'s 2 city. Thank you'
  },
  {
    id: 21,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Татьяна',
    city: 'Волгоград',
    rate: 5,
    route: 'Волгоград (аэропорт) - Нижняя Добринка и обратно',
    date: new Date('2021-07-27').getTime(),
    review: 'Спасибо за организацию поездок. Раннее бронирование реально помогает с низкими ценами :). Отдельно спасибо Александру. Доставил дедушку туда и обратно с комфортом и вовремя. Фирме - повнимательнее относиться к цифрам. А так, впечатление очень положительное. Будем пользоваться и дальше.'
  },
  {
    id: 22,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Вера',
    city: 'Псков',
    rate: 5,
    route: 'Псков,ж.д.вокзал - Пушкинские горы',
    date: new Date('2021-07-27').getTime(),
    review: '27 июля 2021года нас встретил Дмитрий и довёз до Пушкинских гор. Очень понравилась его пунктуальность, вежливость. Машину вёл спокойно, уверенно и довольно быстро нас доставил к месту. Мы впервые воспользовались услугами City2City и не пожалели об этом. Будем всем вас рекомендовать.'
  },
  {
    id: 23,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Виктория',
    city: 'Платов',
    rate: 5,
    route: 'Платов - КПП Куйбышево',
    date: new Date('2021-07-19').getTime(),
    review: 'Спасибо за предоставленную услугу)Вы,как всегда,на высоте. С вами уже не первый раз. Вам можно доверять! Благодарю за вашу работу)'
  },
  {
    id: 24,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Алиса',
    city: 'Ивантеевка',
    rate: 5,
    route: 'Ивантеевка - Рязань',
    date: new Date('2021-07-11').getTime(),
    review: 'Очень понравилась поездка и особенно водитель Александр, Kia K5 H447AT790, советую всем ездить с этим водителем. Очень вежливый, общительный, классная музыка в машине, очень чистый салон, водит шикарно. Я бы поставила 10 звёзд. Побольше бы таких хороших водителей. Советую всем эту фирму такси.Все прям на высшем уровне.'
  },
  {
    id: 25,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Ксения',
    city: 'Краснодар',
    rate: 5,
    route: 'Краснодар - Анапа',
    date: new Date('2021-07-06').getTime(),
    review: 'Я очень довольна! Водитель, Максим, вежливый и внимательный. Приехал вовремя, помог погрузить вещи в багажник, бережно. Ехал спокойно.'
  },
  {
    id: 26,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Дарья',
    city: 'Тула',
    rate: 5,
    route: 'Тула - Орехово Зуево',
    date: new Date('2021-06-22').getTime(),
    review: 'Все прошло хорошо, доехали быстро, водитель хороший'
  },
  {
    id: 27,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Евгения',
    city: 'Краснодар',
    rate: 5,
    route: 'Ст.Голубицкая - Краснодар (аэр.Пашковский)',
    date: new Date('2021-06-21').getTime(),
    review: 'С удовольствием оставляю свой отзыв о поездке, надеюсь, что он будет полезен другим людям! Подходил к концу наш отдых на Азовском море. Был заказан трансфер до Пашковского на 3взр+1реб у другой компании. За день до поездки должно прийти сообщение с информацией об автомобиле и водителе. Тишина... в 14.00 звоню сама и слышу "мы назначим до вечера и обязательно вам позвоним". Время 17.00, тишина. Я вновь набираю номер телефона, никто не берет трубку... ситуация наколяется, время к ночи, выезжать утром в 8.00, чтобы не попасть в пробки, а авто нет!! мои попытки дозвониться закончились в 20.30, потому что в это время я уже оставляла заказ на трансфер в city2city. А вот теперь самое главное! Через 5 минут после заявки мне перезвонили для уточнения деталей (количество пассажиров, возраст ребёнка, чтобы подобрать автокресло по возрасту). Ещё через 10 минут звонок от водителя для уточнения условий, адреса, багажа. Все! Я спокойная иду спать. На утро, за 10 минут до назнаого времени водитель сообщил, что ожидает нас. Вышли, познакомились с водителем (Максим), загрузили багаж и в путь! Моей главным требованием было комфортное и безопасное вождение, тк ехали с 10месячным малышом. В дороге должен был состояться сон (по графику). И он состоялся! Даже дольше обычного! Все потому, что вождение было плавным, уверенным, комфортным! Максим без лишних просьб подстраивался под наши запросы (включить кондиционер, сделать музыку на минимум, разрешить спор по посадкам в полях)) Доехали чуть меньше, чем за 3 часа!, хотя все местные жители предвещали нам 5-7 часовую поездку до аэропорта в воскресенье. Благодарю city2city за клиентоориентировпнность, сервис, персонал, оперативность! Благодарю нашего водителя Максима за профессиональную и комфортную поездку! Я довольна!'
  },
  {
    id: 28,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Владимир',
    city: 'Краснодар',
    rate: 5,
    route: 'Краснодар троицкий',
    date: new Date('2023-06-10').getTime(),
    review: 'Очень комфортно и быстро'
  },
  {
    id: 29,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Ирина',
    city: 'Санкт-Петербург',
    rate: 5,
    route: 'Санкт-Петербург',
    date: new Date('2021-06-15').getTime(),
    review: 'Довезли с комфортом. Быстро. Всё устроило. Спасибо большое.'
  },
  {
    id: 30,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Сергей',
    city: 'Петрозаводск',
    rate: 5,
    route: 'Петрозаводск - Вытегра',
    date: new Date('2023-06-15').getTime(),
    review: 'Очень вежливые и терпеливые операторы. Все чётко поясняют, перезванивают если обещали. Очень положительные впечатления. Водитель тоже на уровне. Все пунктуально и комфортно. По моей просьбе сделали чек с кодом и квитанцию. Квитанцию даже на почту отправили. Причем договаривался накануне поездки! В общем рекомендую!'
  },
  {
    id: 31,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Дмитрий',
    city: 'Пермь',
    rate: 5,
    route: 'Пермь - Йошкар-Ола',
    date: new Date('2023-06-13').getTime(),
    review: 'Поездка прошла отлично. Вежливый и аккуратный водитель. Спасибо!'
  },
  {
    id: 32,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Ольга',
    city: 'Сыктывкар',
    rate: 5,
    route: 'Сыктывкар - Малмыж',
    date: new Date('2021-06-08').getTime(),
    review: 'Всё было супер? Водители очень хорошие, общительные, вежливые. До места назначения вместо 10 часов, доехали за 7. Я очень довольна, буду теперь заказывать только это такси. Спасибо Вам???'
  },
  {
    id: 33,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Юрий',
    city: 'Платов',
    rate: 5,
    route: 'Платов - Луганск',
    date: new Date('2023-06-08').getTime(),
    review: 'Все прошло отлично. Очень хороший водитель. Время в дороге прошло незаметно.'
  },
  {
    id: 34,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Владимир',
    city: 'Ростов',
    rate: 5,
    route: 'Ростов - Донецк ДНР',
    date: new Date('2021-06-06').getTime(),
    review: 'Спасибо большое службе такси. Очень внимательные, добрые сотрудники. Приятно с данной службой иметь дело'
  },
  {
    id: 35,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Федор',
    city: 'Москва',
    rate: 5,
    route: 'Москва - Боровский район, деревня Тишнево',
    date: new Date('2021-06-05').getTime(),
    review: 'Хорошая фирма со всем вытекающим. Автопарк хороший, за ТО машинами следят. Водители имеют хороший уровень ориентации на местности и в навигации. Хорошие и стабильные расценки.'
  },
  {
    id: 36,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Анна',
    city: 'Ростов-на-Дону',
    rate: 5,
    route: 'Ростов - Тверь',
    date: new Date('2021-06-04').getTime(),
    review: 'Очень довольны поездкой. Всё было вовремя. Рита - замечательный водитель'
  },
  {
    id: 37,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Константин',
    city: 'Хабаровск',
    rate: 5,
    route: 'Хабаровск - Комсомольск-на-Амуре',
    date: new Date('2021-06-02').getTime(),
    review: 'Машина подана вовремя. Салон чистый, техническое состояние нормальное, водитель адекватный. В целом, предоставленной услугой доволен.'
  },
  {
    id: 38,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Вячеслав',
    city: 'Тюмень',
    rate: 5,
    route: 'Тюмень - Тобольск',
    date: new Date('2021-06-02').getTime(),
    review: 'Поездка прошла отлично. Профессиональный водитель. Хорошая машина. Доехали быстро и комфортно'
  },
  {
    id: 39,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Наталья',
    city: 'Платов',
    rate: 5,
    route: 'Платов Ростов-на-Дону - ст. Октябрьская Краснодарский край',
    date: new Date('2021-06-02').getTime(),
    review: 'Водитель своевременно встретил в аэропорту, доехали до места назначения хорошо. До этого, в 2019 году пользовались услугами данного такси, водители вежливы, пунктуальны, ответственны. Большое спасибо!'
  },
  {
    id: 40,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Николай',
    city: 'Ростов на Дону',
    rate: 5,
    route: 'Аэропорт Ростов на дону - Успенска Граница',
    date: new Date('2021-06-02').getTime(),
    review: 'Всё хорошо!'
  },
  {
    id: 41,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Иван и Мария',
    city: 'Екатеренбург',
    rate: 5,
    route: 'Екатеринбург Ханты - Мансийск',
    date: new Date('2020-09-07').getTime(),
    review: 'Выражаем огромную благодарность за приятную и безопасную поездку Ринату Геннадьевичу! С удовольствием обратимся ещё 🙂'
  },
  {
    id: 42,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Виктория',
    city: 'Воронеж',
    rate: 5,
    route: 'из г.Воронеж в г.Старый Оскол',
    date: new Date('2020-07-12').getTime(),
    review: 'Высокое качество работы! Необходимо было уехать ночью из г.Воронеж в г.Старый Оскол. Автовокзал уже не работает, обратились в данную компанию такси. Водитель Василий （Kia Optima）забрал нас от ж/д вокзала г.Воронеж （Придача）и доставил до адреса г. Старый Оскол. Доехали быстро, более чем комфортно! Вождение аккуратное （ехала с ребенком）! ВАСИЛИЙ, СПАСИБО ВАМ БОЛЬШОЕ!!!'
  },
  {
    id: 43,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Ирина',
    city: 'Волгодонск',
    rate: 5,
    route: 'Ростова--на-Дону в Волгодонск',
    date: new Date('2019-06-22').getTime(),
    review: 'Нужно было доехать ночью от ж//д вокзала г. Ростова--на-Дону в Волгодонск. Водитель Евгений встретил у вагона, помог донести вещи, помог с двумя маленькими детьми. Вел аккуратно, доехали быстро. Большое спасибо. Буду пользоваться услугами компании в дальнейшем.'
  },
  {
    id: 44,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Наталья',
    city: 'Кемерово',
    rate: 5,
    route: 'Ростов - Ейск',
    date: new Date('2019-06-04').getTime(),
    review: 'Спасибо вам за доброе отношение к людям оценка 5+из 5'
  },
  {
    id: 45,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Евгений',
    city: 'Москва',
    rate: 5,
    route: 'Москва - Курск',
    date: new Date('2019-02-05').getTime(),
    review: 'Спасибо за поездку!'
  },
  {
    id: 46,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Светлана',
    city: 'Москва',
    rate: 5,
    route: 'Воронеж - Белгород',
    date: new Date('2018-11-30').getTime(),
    review: 'Очень быстрая, оперативная работа. Благодарна за помощь в решении проблемы со временем (не могла точно знать время отъезда, так как ждали врача, а хотелось не терять время после выписки из больницы!!!). Еще раз ОГРОМНОЕ СПАСИБО ВАДИМУ за оперативную работу!!! 🙂'
  },
  {
    id: 47,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Лариса',
    city: 'Брюховецкая',
    rate: 5,
    route: 'Ростов - Брюховецкая',
    date: new Date('2018-10-22').getTime(),
    review: 'Не знаю поверит кто или нет, но это было идеально!!! Опытный водитель, отлично знающий дорогу, при этом очень деликатный и понимающий ожидания пассажиров, комфортная и быстроходная машина. В дальнейшем будем обращаться только в вашу фирму 🙂'
  },
  {
    id: 48,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Fernando Juarez',
    city: 'Kazan',
    rate: 5,
    route: 'Kazan-Saransk',
    date: new Date('2018-06-29').getTime(),
    review: 'Thanks for helping with the booking'
  },
  {
    id: 49,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Андрей',
    city: 'Москва',
    rate: 5,
    route: 'Москва - Саратов',
    date: new Date('2018-06-19').getTime(),
    review: 'оперативно'
  },
  {
    id: 50,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Иван Зотов',
    city: 'Самара',
    rate: 5,
    route: 'Самара - кпп Маштаково',
    date: new Date('2018-06-11').getTime(),
    review: 'только положительные эмоции'
  },
  {
    id: 51,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Виктория',
    city: 'Москва',
    rate: 5,
    route: 'из Москвы в Питер',
    date: new Date('2018-05-28').getTime(),
    review: 'Всё четко, корректно, профессионально.'
  },
  {
    id: 52,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Егор',
    city: 'Краснодар',
    rate: 5,
    route: 'Краснодар - Сочи',
    date: new Date('2018-05-20').getTime(),
    review: 'Четко и быстро ответили на все вопросы. Цены очень конкурентные. Обязательно воспользуюсь сервисом в будущем.'
  },
  {
    id: 53,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Лариса',
    city: 'Курск',
    rate: 5,
    route: 'КурскМосква',
    date: new Date('2018-05-20').getTime(),
    review: 'быстро'
  },
  {
    id: 54,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Рустам',
    city: 'Ростов на Дону',
    rate: 5,
    route: 'из Ростова в Ейск',
    date: new Date('2017-08-16').getTime(),
    review: 'Добрый день всем. Пользовались услугами этого такси 2 раза. Первый раз когда ехали в отпуск, второй обратно. Заказывали такси от Ростова до Ейска. Машины иномарки, кондиционер, водители русские, вежливые, молодцы!! Особая благодарность Евгению за оказанную помощь нашему ребенку. Рекомендую Всем!!!'
  },
  {
    id: 55,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Юрий',
    city: 'Краснодар',
    rate: 5,
    route: 'Краснодар - Анапа',
    date: new Date('2017-06-26').getTime(),
    review: 'Отличный сервис, огромное спасибо Александру, встретил вовремя, очень аккуратно вел, все очень понравилось.'
  },
  {
    id: 56,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Ирина',
    city: 'Москва',
    rate: 5,
    route: 'Москва - Рязань',
    date: new Date('2017-03-01').getTime(),
    review: 'Спасибо. Мне ответили на все вопросы.'
  },
  {
    id: 57,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Влад',
    city: 'Псков',
    rate: 5,
    route: 'Новгород - Питер',
    date: new Date('2017-01-09').getTime(),
    review: 'Спасибо! Ответили быстро и четко.'
  },
  {
    id: 58,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Алексей',
    city: 'Тюмень',
    rate: 5,
    route: 'Тюмень - Тобольск',
    date: new Date('2016-12-12').getTime(),
    review: 'Это такси очень хорошее, заказы берут быстро и легко, машина во время приезжает на место положения и везет куда нужно, без пробок и с идеальной безопасности, мне очень нравится эта компания такси.'
  },
  {
    id: 59,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Фарида',
    city: 'Уфа',
    rate: 5,
    route: 'Уфа - Челябинск',
    date: new Date('2016-11-20').getTime(),
    review: 'Здравствуйте! Оперативно и полно получила ответы на интересующие меня вопросы по заказу. Спасибо Вадиму! И вашей команде.'
  },
  {
    id: 60,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Анна',
    city: 'Туапсе',
    rate: 5,
    route: 'Туапсе - Краснодар',
    date: new Date('2016-09-01').getTime(),
    review: 'По всей работе пока не скажу, но в части приема заказа и стоимости - все супер!'
  },
  {
    id: 61,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Надежда',
    city: 'Краснодар',
    rate: 5,
    route: 'Краснодар - Москва',
    date: new Date('2016-08-28').getTime(),
    review: 'Спасибо за оперативность и информативность!!'
  },
  {
    id: 62,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Наталья',
    city: 'Пашковский',
    rate: 5,
    route: 'Аэропорт Пашковский - Джубга',
    date: new Date('2016-08-21').getTime(),
    review: 'Водитель приехал заранее, машина была подана к подъезду, хотя территория дома закрыта. Вежливый, интересный человек. Аккуратное вождение без нарушений. Очень рекомендую и кампания и конкретно этого водителя. Большое спасибо!'
  },
  {
    id: 63,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Оксана',
    city: 'Краснодар',
    rate: 5,
    route: 'Карснодар - Кабардинка',
    date: new Date('2016-08-17').getTime(),
    review: 'Хочу поблагодарить работников такси за хорошую работу,(отправляла семью с Краснодара до Кабардинки 16.08.2016г.), остались очень довольны, все было оперативно, аккуратно и приятно, водитель хоть и молодой парень, но профессионал в своем деле. Успехов вам и процветания!!!'
  },
  {
    id: 64,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Ольга',
    city: 'Краснодар',
    rate: 5,
    route: 'Краснодар - Анапа',
    date: new Date('2016-08-02').getTime(),
    review: 'Спасибо за оперативность'
  },
  {
    id: 65,
    avatar: 'https://city2city.ru/wp-content/themes/city2city_verstka/img/ava-default.png',
    username: 'Олег',
    city: 'Ростов на Дону',
    rate: 5,
    route: 'Ростов - Успенка',
    date: new Date('2016-07-16').getTime(),
    review: 'пока хорошие'
  }
];