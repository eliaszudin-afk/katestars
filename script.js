(function () {
  'use strict';

  // ============================================================
  //                       I18N — словари
  // ============================================================
  // ru — отдельный словарь, чтобы можно было переключиться обратно
  // после смены языка. По умолчанию HTML тоже на ru, так что при
  // первой загрузке у ru-пользователя замена работает «в ноль».
  const TR = {
    ru: {
      meta: {
        title: 'Катя и Звёзды — астролог, практик сюцай. Вильнюс',
        description: 'Персональные PDF-разборы натальной карты и китайских чисел сюцай. Понятно, тёпло, без эзотерических облаков.'
      },
      aria: {
        menu: 'Меню',
        themeToggle: 'Переключить тему',
        langGroup: 'Язык'
      },
      nav: { story: 'Моя история', approach: 'Подход', services: 'Услуги', how: 'Как это работает', testimonials: 'Отзывы', cta: 'Записаться', contact: 'Контакты' },
      hero: {
        eyebrow: 'Астролог · практик сюцай · Вильнюс',
        lede: 'Помогаю понять, почему у тебя именно такая жизнь — и что с этим делать.',
        sub: 'Натальная карта, китайские числа сюцай, твой характер — и честный разговор о том, куда ты идёшь. Без эзотерических облаков и обещаний судьбы.',
        ctaPrimary: 'Записаться на разбор',
        ctaSecondary: 'Посмотреть услуги'
      },
      story: {
        eyebrow: 'Моя история',
        title: 'Привет, я Катя',
        p1: 'Рада, что ты здесь. Заглянуть на страницу к специалисту можно по разным причинам: от поиска новых ориентиров до простого интереса узнать о себе чуть больше.',
        p2: 'Мой собственный путь начался в момент, когда мне самой потребовалась твёрдая почва под ногами. Долгое время моей главной трудностью была жёсткая самокритика — я была своим самым строгим судьёй. Всё изменилось, когда я погрузилась в астрологию. Она буквально дала мне право быть собой, и это знание принесло мне глубокое чувство самоценности. Теперь внешние мнения не имеют значения — потому что я сама знаю свою ценность и ясно вижу свой путь.',
        p3: 'Но мне всегда хотелось знать о человеке ещё больше и видеть все его грани. Так я пришла к сюцай. Эти знания помогли мне ещё лучше слышать себя и дали ответы на многие вопросы. При этом моё стремление видеть личность под разными углами и давать максимум пользы постоянно ведёт меня дальше. Я не стою на месте и продолжаю обучаться, находя новые механики для познания человека.',
        p4: 'В своих разборах я объединяю две системы — астрологию и сюцай. Это позволяет дать по-настоящему объёмный и глубокий взгляд на твою жизнь, помогая тебе снова почувствовать свою силу.',
        p5: 'Я здесь, чтобы помочь тебе найти точку опоры, если она вдруг потерялась — или просто подсветить путь к твоим настоящим желаниям. Со мной путь к целям становится понятнее, а жизнь — осознаннее и легче.',
        cta: 'Если чувствуешь отклик — <a href="#services">загляни в раздел «Услуги»</a>, подскажу, с чего удобнее начать.'
      },
      approach: {
        eyebrow: 'Мой подход',
        title: 'Астрология плюс сюцай — почему вместе',
        lede: 'В моей работе две системы. Одна западная, древняя и подробная. Другая — восточная, лаконичная и точная по времени. По отдельности каждая из них говорит важное, но половину.',
        card1: { title: 'Астрология', body: 'Натальная карта рассказывает, какой ты по рождению: характер, темперамент, способ принимать решения, сильные стороны, болевые точки. Это твой портрет — глубокий, но статичный.' },
        card2: { title: 'Сюцай', body: 'Китайская цифровая психология. По дате рождения считаются числа, которые показывают, как твой характер ведёт себя в реальной жизни — по годам, в отношениях, в деньгах. Это твой календарь.' },
        card3: { title: 'Вместе', body: 'Астрология отвечает на вопрос «кто я?». Сюцай — «почему именно сейчас?». Когда они сходятся, у тебя в руках не туманный прогноз, а понятная карта: где ты, что в тебе сильно и какой год тебя ждёт.' }
      },
      services: {
        eyebrow: 'Услуги',
        title: 'Что можно у меня заказать',
        lede: 'Все разборы — персональный PDF на несколько страниц. По желанию добавлю голосовое сопровождение в Telegram. Без спешки, без созвонов — твой документ, к которому можно возвращаться.',
        groupSelf: 'Кто я',
        groupFuture: 'Что меня ждёт',
        groupOthers: 'Про близких',
        formatStandard: 'PDF на несколько страниц · 5–7 дней',
        formatPackage: 'Два PDF · 7–10 дней',
        formatChild: 'PDF на несколько страниц · 2–3 дня',
        code: { shortName: 'Код души', title: 'Код души', who: 'Тебе сюда, если хочешь понять себя «изнутри» — почему ты реагируешь именно так, в чём твоя настоящая сила и где привычные ловушки.', item1: 'Характер по натальной карте: темперамент, базовые сценарии, уязвимости.', item2: 'Ключевые числа сюцай: как характер проявляется в решениях и привычках.', item3: 'Точки опоры и зоны, где ты сама себе мешаешь.' },
        path: { shortName: 'Путь души', title: 'Путь души', who: 'Тебе сюда, если ты знаешь, кто ты, но не понимаешь, куда идёшь. Про предназначение, точки силы и сценарии, которые тянутся годами.', item1: 'Лунные узлы и дома предназначения по натальной карте.', item2: 'Долгие циклы жизни по сюцай — что включается и выключается в твоей биографии.', item3: 'Темы, которые возвращаются, и почему именно к тебе.' },
        portrait: { shortName: 'Полный портрет (пакет)', title: 'Полный портрет', badge: 'пакет · −10 €', who: '«Код души» и «Путь души» вместе. Полная картина: кто ты по рождению и куда ведёт твой путь. Два отдельных PDF, удобно читать по очереди.', item1: 'Всё, что входит в «Код души».', item2: 'Всё, что входит в «Путь души».', item3: 'Связки между ними — то, что видно только когда смотришь на оба разбора сразу.' },
        solar: { shortName: 'Соляр (прогноз на год)', title: 'Соляр — прогноз на год', who: 'Тебе сюда, если хочешь жить год не вслепую: знать сильные месяцы, осторожные периоды и темы, которые сейчас активны.', item1: 'Соляр — карта года: главные темы, важные периоды, поддержки.', item2: 'Годовой цикл сюцай — где силы много, где её надо беречь.', item3: 'Карта года по месяцам с конкретными темами и рекомендациями.' },
        money: { shortName: 'Карьера и деньги', title: 'Карьера и деньги', who: 'Тебе сюда, если ищешь дело по душе или хочешь понять, почему деньги ведут себя в твоей жизни именно так.', item1: 'Дома работы, призвания и денег по натальной карте.', item2: 'Сильные стороны для работы и типичные ошибки.', item3: 'Денежные циклы по сюцай: когда копится, когда тратится, когда вкладываться.' },
        yearAhead: { shortName: 'Год вперёд (пакет)', title: 'Год вперёд', badge: 'пакет · −15 €', who: '«Соляр» и «Карьера и деньги» в одном пакете. Картина года плюс отдельный фокус на работе и финансах — чтобы спланировать год объёмно.', item1: 'Всё, что входит в «Соляр».', item2: 'Всё, что входит в «Карьера и деньги».', item3: 'Сводка: где в году главные финансовые и рабочие точки.' },
        compat: { shortName: 'Совместимость', title: 'Совместимость', who: 'Тебе сюда, если хочется понять связку с конкретным человеком — партнёром, мамой, ребёнком, коллегой.', item1: 'Синастрия натальных карт: где сходитесь, где трение, что вас держит.', item2: 'Сравнение чисел сюцай: как разворачивается ваше взаимодействие во времени.', item3: 'Мягкие практические рекомендации — что с этим делать.' },
        child: { shortName: 'Разбор для ребёнка', title: 'Разбор для ребёнка', who: 'Тебе сюда, если хочется понять своего ребёнка, а не переделать его. Какой он, что ему нужно, где помочь, а где отойти в сторону.', item1: 'Характер ребёнка: темперамент, как он(а) воспринимает мир.', item2: 'Сильные стороны, способности и где ребёнку нужна поддержка.', item3: 'Что делать родителю, чтобы помочь раскрыться, а не закрыться.' },
        iAndPartner: { shortName: 'Я и партнёр (пакет)', title: 'Я и партнёр', badge: 'пакет · −10 €', who: '«Код души» по тебе плюс «Совместимость» с твоим человеком. Сначала понимаешь себя, потом — что между вами и почему именно так.', item1: 'Всё, что входит в «Код души».', item2: 'Всё, что входит в «Совместимость».', item3: 'Какие твои особенности встречаются с какими особенностями партнёра.' },
        hint: 'Не знаешь, что выбрать? <a href="#contact">Напиши мне</a> — подскажу, с чего удобнее начать.<br><span class="services__hint-sub">По желанию к любому PDF добавлю голосовое сопровождение в Telegram.</span>'
      },
      testimonials: {
        eyebrow: 'Отзывы',
        title: 'Что говорят те, с кем я работала',
        t1: '«Катин разбор — это не астрология, а скорее очень точное зеркало. Я впервые прочитала про себя так, как если бы говорил близкий человек, который меня давно понимает.»',
        t1Author: '— Имя клиентки, город',
        t2: '«Брала разбор на год. К сентябрю поймала себя на том, что сверяюсь с её PDF, как с навигатором — и почти всё совпадает. Без ощущения, что мне что-то напророчили.»',
        t2Author: '— Имя клиентки, город',
        t3: '«Самое ценное — Катя пишет понятно. Никаких ретроградных Меркуриев и намёков. Сел, прочитал, сделал выводы.»',
        t3Author: '— Имя клиента, город'
      },
      how: {
        eyebrow: 'Как это работает',
        title: 'Простой путь от запроса до PDF',
        s1: { title: 'Напиши', body: 'Через форму или в Telegram. Форма открывает письмо в твоей почте — ничего не уходит автоматически.' },
        s2: { title: 'Я отвечу', body: 'В течение 24 часов уточню пару деталей и подтвержу, какая услуга тебе подходит.' },
        s3: { title: 'Оплата', body: 'Удобным переводом — детали обсудим в личной переписке. После подтверждения оплаты начинаю работу.' },
        s4: { title: 'PDF', body: 'Готовый PDF приходит в Telegram или на email — за 5–7 дней (разбор ребёнка — 2–3 дня). По желанию — голосовое сопровождение.' }
      },
      contact: {
        eyebrow: 'Контакты',
        title: 'Записаться или просто написать',
        lede: 'Удобнее всего — в мессенджере. Если хочется подумать и расписать запрос — заполни форму ниже, она откроет письмо в твоей почте.',
        btnTelegramLabel: 'Telegram', btnInstagramLabel: 'Instagram', btnEmailLabel: 'Email',
        nameLabel: 'Как тебя зовут',
        contactLabel: 'Как с тобой связаться <span class="form-hint">(Telegram, email — что удобнее)</span>',
        serviceLabel: 'Что интересует',
        serviceDefault: '— выбери из списка —',
        serviceUnsure: 'Пока не знаю, нужен совет',
        opt: {
          code: 'Код души — 40 €', path: 'Путь души — 35 €', portrait: 'Полный портрет (пакет) — 65 €',
          solar: 'Соляр (прогноз на год) — 40 €', money: 'Карьера и деньги — 35 €', yearAhead: 'Год вперёд (пакет) — 60 €',
          compat: 'Совместимость — 25 €', child: 'Разбор для ребёнка — 25 €', iAndPartner: 'Я и партнёр (пакет) — 55 €'
        },
        primaryDataLabel: 'Данные для разбора',
        primaryDataLabelChild: 'Данные ребёнка',
        primaryDataLabelYours: 'Твои данные',
        primaryDataHint: 'Дата и место — обязательно. Время — желательно, но если не знаешь, оставь пустым.',
        birthDateLabel: 'Дата рождения',
        birthDatePlaceholder: '6 июня 1985',
        birthTimeLabel: 'Время рождения <span class="form-hint">(желательно)</span>',
        birthTimePlaceholder: '14:45',
        birthPlaceLabel: 'Место рождения',
        birthPlacePlaceholder: 'Лиссабон, Португалия',
        residenceLegend: 'Где будешь жить большую часть года',
        residenceHint: 'Для соляра важно место, где ты проведёшь больше шести месяцев запрашиваемого года.',
        residenceLabel: 'Город и страна',
        residencePlaceholder: 'Лиссабон, Португалия',
        partnerLegend: 'Данные партнёра / второго человека',
        partnerHint: 'Так же — дата и место обязательно, время желательно.',
        partnerDatePlaceholder: '14 марта 1983',
        partnerTimePlaceholder: '08:20',
        partnerPlacePlaceholder: 'Тбилиси, Грузия',
        messageLabel: 'Пара слов о запросе <span class="form-hint">(необязательно)</span>',
        messagePlaceholder: 'Что для тебя сейчас важнее всего понять?',
        consent: 'Нажимая «Отправить», ты соглашаешься, что я могу написать тебе в ответ по указанным контактам. Никаких рассылок и третьих лиц.',
        submitHint: 'Откроется письмо в твоей почте — отправь его, и я отвечу в течение 24 часов.',
        submit: 'Отправить',
        statusMissing: 'Пожалуйста, заполни имя и контакт.',
        statusReady: 'Сейчас откроется почтовый клиент — нажми «Отправить» в нём.'
      },
      mail: {
        subject: 'Заявка с сайта',
        labelName: 'Имя', labelContact: 'Контакт', labelService: 'Интересует',
        sectionPrimary: 'Данные для разбора', labelBirthDate: 'Дата рождения', labelBirthTime: 'Время рождения', labelBirthPlace: 'Место рождения',
        sectionResidence: 'Место проживания на запрашиваемый год',
        sectionPartner: 'Данные партнёра',
        sectionMessage: 'О запросе'
      },
      common: { order: 'Записаться' },
      footer: { sig: '© <span id="year"></span> Екатерина · Вильнюс · сделано с теплом', story: 'История' }
    },

    en: {
      meta: {
        title: 'Katya & Stars — astrologer, suucai practitioner. Vilnius',
        description: 'Personal PDF readings of natal charts and Chinese suucai numbers. Clear, warm, no esoteric fog.'
      },
      aria: { menu: 'Menu', themeToggle: 'Toggle theme', langGroup: 'Language' },
      nav: { story: 'My story', approach: 'Approach', services: 'Services', how: 'How it works', testimonials: 'Reviews', cta: 'Get a reading', contact: 'Contacts' },
      hero: {
        eyebrow: 'Astrologer · suucai practitioner · Vilnius',
        lede: 'I help you understand why your life is the way it is — and what to do about it.',
        sub: 'Natal chart, Chinese suucai numbers, your character — and an honest conversation about where you’re headed. No esoteric fog, no promises of fate.',
        ctaPrimary: 'Get a reading',
        ctaSecondary: 'See services'
      },
      story: {
        eyebrow: 'My story',
        title: 'Hi, I’m Katya',
        p1: 'Glad you’re here. People come to a specialist for different reasons: from looking for a new point of orientation to simply being curious about themselves.',
        p2: 'My own path began at a moment when I needed solid ground under my feet. For a long time my hardest struggle was harsh self-criticism — I was my own strictest judge. Everything changed when I immersed myself in astrology. It literally gave me the right to be myself, and that knowledge brought me a deep sense of self-worth. External opinions no longer matter — because I know my own value and clearly see my path.',
        p3: 'But I always wanted to know more about a person and see all their facets. That’s how I came to suucai. This knowledge helped me hear myself even better and answered many questions. At the same time, my drive to see a personality from different angles and offer maximum value keeps moving me forward. I don’t stand still and I keep learning, finding new mechanics for understanding people.',
        p4: 'In my readings I combine two systems — astrology and suucai. This gives a truly multidimensional and deep view of your life, helping you feel your own strength again.',
        p5: 'I’m here to help you find a point of support if it has slipped away — or simply to highlight the path to what you really want. With me the road to your goals becomes clearer, and life — more conscious and lighter.',
        cta: 'If something resonates — <a href="#services">take a look at Services</a>, I’ll suggest where it’s comfortable to start.'
      },
      approach: {
        eyebrow: 'My approach',
        title: 'Astrology plus suucai — why together',
        lede: 'There are two systems in my work. One Western, ancient and detailed. The other — Eastern, concise and precise about time. On their own each says something important, but only half.',
        card1: { title: 'Astrology', body: 'A natal chart tells who you are by birth: character, temperament, decision-making style, strengths, sore points. It’s your portrait — deep, but static.' },
        card2: { title: 'Suucai', body: 'Chinese digital psychology. From your birth date numbers are calculated showing how your character behaves in real life — by years, in relationships, in money. It’s your calendar.' },
        card3: { title: 'Together', body: 'Astrology answers “who am I?”. Suucai — “why now?”. When they line up, you don’t hold a foggy forecast — you hold a clear map: where you are, what’s strong in you, and what kind of year is ahead.' }
      },
      services: {
        eyebrow: 'Services',
        title: 'What you can order from me',
        lede: 'All readings are personal PDFs of several pages. On request I’ll add audio commentary in Telegram. No rush, no calls — your document to come back to.',
        groupSelf: 'Who I am',
        groupFuture: 'What’s ahead',
        groupOthers: 'About loved ones',
        formatStandard: 'PDF of several pages · 5–7 days',
        formatPackage: 'Two PDFs · 7–10 days',
        formatChild: 'PDF of several pages · 2–3 days',
        code: { shortName: 'Soul Code', title: 'Soul Code', who: 'Come here if you want to understand yourself from the inside — why you react the way you do, where your real strength is, and where your usual traps are.', item1: 'Character from the natal chart: temperament, base scenarios, vulnerabilities.', item2: 'Key suucai numbers: how your character shows up in decisions and habits.', item3: 'Points of support and zones where you get in your own way.' },
        path: { shortName: 'Soul Path', title: 'Soul Path', who: 'Come here if you know who you are but don’t understand where you’re going. About purpose, points of power, and scripts that have been pulling at you for years.', item1: 'Lunar nodes and purpose houses from the natal chart.', item2: 'Long life cycles in suucai — what turns on and off in your biography.', item3: 'Themes that keep coming back, and why specifically to you.' },
        portrait: { shortName: 'Full Portrait (package)', title: 'Full Portrait', badge: 'package · −10 €', who: 'Soul Code and Soul Path together. The full picture: who you are by birth and where your path is leading. Two separate PDFs, comfortable to read in turn.', item1: 'Everything in Soul Code.', item2: 'Everything in Soul Path.', item3: 'The connections between them — visible only when you look at both readings at once.' },
        solar: { shortName: 'Solar Return (yearly forecast)', title: 'Solar Return — yearly forecast', who: 'Come here if you want to live the year not blindfolded: to know the strong months, the careful periods, and the themes active right now.', item1: 'Solar return — chart of the year: main themes, important periods, supports.', item2: 'Suucai yearly cycle — where there’s plenty of energy, where you need to protect it.', item3: 'Map of the year by month, with concrete themes and recommendations.' },
        money: { shortName: 'Career & money', title: 'Career & money', who: 'Come here if you’re looking for work close to your heart, or want to understand why money behaves in your life the way it does.', item1: 'Houses of work, vocation and money from the natal chart.', item2: 'Strengths for work and typical mistakes.', item3: 'Money cycles in suucai: when it accumulates, when it spends, when to invest.' },
        yearAhead: { shortName: 'Year ahead (package)', title: 'Year ahead', badge: 'package · −15 €', who: 'Solar Return and Career & money in one package. The picture of the year plus a separate focus on work and finances — to plan the year in depth.', item1: 'Everything in Solar Return.', item2: 'Everything in Career & money.', item3: 'Summary: the main financial and work points of the year.' },
        compat: { shortName: 'Compatibility', title: 'Compatibility', who: 'Come here if you want to understand a connection with a specific person — partner, mother, child, colleague.', item1: 'Synastry of natal charts: where you align, where there’s friction, what holds you together.', item2: 'Suucai number comparison: how your interaction unfolds over time.', item3: 'Gentle, practical recommendations — what to do with it.' },
        child: { shortName: 'Reading for a child', title: 'Reading for a child', who: 'Come here if you want to understand your child rather than reshape them. Who they are, what they need, where to help, and where to step aside.', item1: 'The child’s character: temperament, how they perceive the world.', item2: 'Strengths, talents, and where the child needs support.', item3: 'What to do as a parent to help them open up rather than close off.' },
        iAndPartner: { shortName: 'Me & partner (package)', title: 'Me & partner', badge: 'package · −10 €', who: 'Soul Code for you plus Compatibility with your person. First you understand yourself, then — what’s between you and why exactly this way.', item1: 'Everything in Soul Code.', item2: 'Everything in Compatibility.', item3: 'How your traits meet your partner’s.' },
        hint: 'Not sure what to choose? <a href="#contact">Write to me</a> — I’ll suggest where it’s comfortable to start.<br><span class="services__hint-sub">On request I’ll add audio commentary in Telegram to any PDF.</span>'
      },
      testimonials: {
        eyebrow: 'Reviews',
        title: 'What those I’ve worked with say',
        t1: '“Katya’s reading isn’t astrology, it’s more like a very precise mirror. For the first time I read about myself the way a close person who has known me for ages would speak.”',
        t1Author: '— Client name, city',
        t2: '“I ordered the yearly reading. By September I caught myself checking her PDF like a navigator — and almost everything matched. Without the feeling that something had been prophesied to me.”',
        t2Author: '— Client name, city',
        t3: '“The most valuable thing — Katya writes clearly. No retrograde Mercuries, no hints. You sit down, read, draw your conclusions.”',
        t3Author: '— Client name, city'
      },
      how: {
        eyebrow: 'How it works',
        title: 'A simple path from request to PDF',
        s1: { title: 'Write', body: 'Through the form or Telegram. The form opens an email in your client — nothing is sent automatically.' },
        s2: { title: 'I reply', body: 'Within 24 hours I clarify a couple of details and confirm which reading fits.' },
        s3: { title: 'Payment', body: 'A convenient transfer — details by direct message. Once payment is confirmed, I start the work.' },
        s4: { title: 'PDF', body: 'The PDF arrives in Telegram or by email — within 5–7 days (child reading — 2–3 days). On request — audio commentary.' }
      },
      contact: {
        eyebrow: 'Contacts',
        title: 'Get a reading or just say hi',
        lede: 'The easiest way is in a messenger. If you want to think and write it out — fill the form below, it’ll open a letter in your email client.',
        btnTelegramLabel: 'Telegram', btnInstagramLabel: 'Instagram', btnEmailLabel: 'Email',
        nameLabel: 'What’s your name',
        contactLabel: 'How to reach you <span class="form-hint">(Telegram, email — whichever is comfortable)</span>',
        serviceLabel: 'What interests you',
        serviceDefault: '— pick from the list —',
        serviceUnsure: 'Not sure yet, need advice',
        opt: {
          code: 'Soul Code — 40 €', path: 'Soul Path — 35 €', portrait: 'Full Portrait (package) — 65 €',
          solar: 'Solar Return (yearly) — 40 €', money: 'Career & money — 35 €', yearAhead: 'Year ahead (package) — 60 €',
          compat: 'Compatibility — 25 €', child: 'Reading for a child — 25 €', iAndPartner: 'Me & partner (package) — 55 €'
        },
        primaryDataLabel: 'Reading data',
        primaryDataLabelChild: 'Child’s data',
        primaryDataLabelYours: 'Your data',
        primaryDataHint: 'Date and place — required. Time — desired, but if you don’t know, leave empty.',
        birthDateLabel: 'Date of birth',
        birthDatePlaceholder: 'June 6, 1985',
        birthTimeLabel: 'Time of birth <span class="form-hint">(desired)</span>',
        birthTimePlaceholder: '14:45',
        birthPlaceLabel: 'Place of birth',
        birthPlacePlaceholder: 'Lisbon, Portugal',
        residenceLegend: 'Where you’ll spend most of the year',
        residenceHint: 'For the solar return, the place where you’ll spend more than six months of the requested year matters.',
        residenceLabel: 'City and country',
        residencePlaceholder: 'Lisbon, Portugal',
        partnerLegend: 'Data of partner / second person',
        partnerHint: 'Same — date and place required, time desired.',
        partnerDatePlaceholder: 'March 14, 1983',
        partnerTimePlaceholder: '08:20',
        partnerPlacePlaceholder: 'Tbilisi, Georgia',
        messageLabel: 'A few words about your request <span class="form-hint">(optional)</span>',
        messagePlaceholder: 'What feels most important to understand right now?',
        consent: 'By clicking “Send” you agree that I may write back to you at the contacts provided. No newsletters, no third parties.',
        submitHint: 'An email will open in your client — send it, and I’ll reply within 24 hours.',
        submit: 'Send',
        statusMissing: 'Please fill in your name and contact.',
        statusReady: 'The email client should open — press “Send” inside it.'
      },
      mail: {
        subject: 'Inquiry from website',
        labelName: 'Name', labelContact: 'Contact', labelService: 'Interested in',
        sectionPrimary: 'Reading data', labelBirthDate: 'Date of birth', labelBirthTime: 'Time of birth', labelBirthPlace: 'Place of birth',
        sectionResidence: 'Place of residence for the requested year',
        sectionPartner: 'Partner data',
        sectionMessage: 'About the request'
      },
      common: { order: 'Book' },
      footer: { sig: '© <span id="year"></span> Ekaterina · Vilnius · made with warmth', story: 'Story' }
    },

    lt: {
      meta: {
        title: 'Katia ir Žvaigždės — astrologė, suucai praktikė. Vilnius',
        description: 'Asmeniniai natalinės kortelės ir kinietiškųjų suucai skaičių PDF aprašymai. Aiškiai, šiltai, be ezoterinių miglų.'
      },
      aria: { menu: 'Meniu', themeToggle: 'Keisti temą', langGroup: 'Kalba' },
      nav: { story: 'Mano istorija', approach: 'Požiūris', services: 'Paslaugos', how: 'Kaip tai veikia', testimonials: 'Atsiliepimai', cta: 'Užsisakyti', contact: 'Kontaktai' },
      hero: {
        eyebrow: 'Astrologė · suucai praktikė · Vilnius',
        lede: 'Padedu suprasti, kodėl tavo gyvenimas yra būtent toks — ir ką su tuo daryti.',
        sub: 'Natalinė kortelė, kinietiški suucai skaičiai, tavo charakteris — ir sąžiningas pokalbis apie tai, kur tu eini. Be ezoterinių miglų ir likimo pažadų.',
        ctaPrimary: 'Užsisakyti aprašymą',
        ctaSecondary: 'Žiūrėti paslaugas'
      },
      story: {
        eyebrow: 'Mano istorija',
        title: 'Sveika, aš Katia',
        p1: 'Smagu, kad esi čia. Žmogus pas specialistą gali užsukti dėl įvairių priežasčių: nuo naujų gairių paieškos iki paprasčiausio noro daugiau sužinoti apie save.',
        p2: 'Mano paties kelias prasidėjo tuomet, kai man pačiai prireikė tvirto pagrindo po kojomis. Ilgą laiką didžiausias sunkumas buvo griežta savikritika — buvau pati griežčiausia teisėja sau. Viskas pasikeitė, kai pasinėriau į astrologiją. Ji tiesiog suteikė man teisę būti savimi, ir šis žinojimas atnešė gilų savivertės jausmą. Dabar svetimos nuomonės nebeturi reikšmės — nes pati žinau savo vertę ir aiškiai matau savo kelią.',
        p3: 'Bet visada norėjosi sužinoti apie žmogų dar daugiau ir pamatyti visus jo aspektus. Taip atėjau iki suucai. Šios žinios padėjo dar geriau girdėti save ir davė atsakymus į daug klausimų. Tuo pačiu siekis matyti asmenybę iš įvairių pusių ir duoti maksimaliai naudos nuolat veda mane toliau. Aš nestoviu vietoje ir mokausi toliau, atrasdama naujus mechanizmus žmogui pažinti.',
        p4: 'Savo aprašymuose jungiu dvi sistemas — astrologiją ir suucai. Tai leidžia duoti tikrai erdvų ir gilų žvilgsnį į tavo gyvenimą, padedant tau vėl pajusti savo jėgą.',
        p5: 'Esu čia, kad padėčiau tau rasti atramos tašką, jei jis staiga dingo — arba tiesiog apšviestų kelią į tikrus tavo norus. Su manimi kelias į tikslus tampa aiškesnis, o gyvenimas — sąmoningesnis ir lengvesnis.',
        cta: 'Jei jauti atgarsį — <a href="#services">žvilgtelėk į Paslaugas</a>, pasakysiu, nuo ko patogiausia pradėti.'
      },
      approach: {
        eyebrow: 'Mano požiūris',
        title: 'Astrologija plius suucai — kodėl kartu',
        lede: 'Mano darbe yra dvi sistemos. Viena vakarietiška, sena ir detali. Kita — rytietiška, lakoniška ir tiksli laiku. Atskirai kiekviena pasako svarbų dalyką, bet tik pusę.',
        card1: { title: 'Astrologija', body: 'Natalinė kortelė pasakoja, koks tu esi iš prigimties: charakteris, temperamentas, sprendimų priėmimo būdas, stiprybės, skausmingos vietos. Tai tavo portretas — gilus, bet statiškas.' },
        card2: { title: 'Suucai', body: 'Kinietiška skaitmeninė psichologija. Pagal gimimo datą skaičiuojami skaičiai, kurie rodo, kaip tavo charakteris elgiasi realiame gyvenime — pagal metus, santykiuose, pinigų klausimuose. Tai tavo kalendorius.' },
        card3: { title: 'Kartu', body: 'Astrologija atsako į klausimą „kas aš esu?“. Suucai — „kodėl būtent dabar?“. Kai jos susiderina, tavo rankose ne miglota prognozė, o aiškus žemėlapis: kur tu esi, kas tavyje stipru ir kokie metai tavęs laukia.' }
      },
      services: {
        eyebrow: 'Paslaugos',
        title: 'Ką galima pas mane užsisakyti',
        lede: 'Visi aprašymai — asmeninis kelių puslapių PDF. Pageidaujant pridėsiu balso komentarus per Telegram. Be skubos, be skambučių — tavo dokumentas, prie kurio gali grįžti.',
        groupSelf: 'Kas aš esu',
        groupFuture: 'Kas manęs laukia',
        groupOthers: 'Apie artimuosius',
        formatStandard: 'Kelių puslapių PDF · 5–7 dienos',
        formatPackage: 'Du PDF · 7–10 dienų',
        formatChild: 'Kelių puslapių PDF · 2–3 dienos',
        code: { shortName: 'Sielos kodas', title: 'Sielos kodas', who: 'Tau čia, jei nori suprasti save „iš vidaus“ — kodėl reaguoji būtent taip, kur tavo tikroji jėga ir kur įprasti spąstai.', item1: 'Charakteris pagal natalinę kortelę: temperamentas, baziniai scenarijai, pažeidžiamumai.', item2: 'Pagrindiniai suucai skaičiai: kaip charakteris pasireiškia sprendimuose ir įpročiuose.', item3: 'Atramos taškai ir zonos, kur pati sau trukdai.' },
        path: { shortName: 'Sielos kelias', title: 'Sielos kelias', who: 'Tau čia, jei žinai, kas tu esi, bet nesupranti, kur eini. Apie paskirtį, jėgos taškus ir scenarijus, kurie metais traukiasi paskui.', item1: 'Mėnulio mazgai ir paskirties namai pagal natalinę kortelę.', item2: 'Ilgi gyvenimo ciklai pagal suucai — kas tavo biografijoje įsijungia ir išsijungia.', item3: 'Temos, kurios grįžta, ir kodėl būtent pas tave.' },
        portrait: { shortName: 'Pilnas portretas (rinkinys)', title: 'Pilnas portretas', badge: 'rinkinys · −10 €', who: '„Sielos kodas“ ir „Sielos kelias“ kartu. Pilnas vaizdas: kas tu esi iš prigimties ir kur veda tavo kelias. Du atskiri PDF, patogu skaityti po eilę.', item1: 'Viskas, kas yra „Sielos kode“.', item2: 'Viskas, kas yra „Sielos kelyje“.', item3: 'Ryšiai tarp jų — tai, ką matai tik žiūrint į abu aprašymus iš karto.' },
        solar: { shortName: 'Soliaras (metų prognozė)', title: 'Soliaras — metų prognozė', who: 'Tau čia, jei nori gyventi metus ne aklai: žinoti stiprius mėnesius, atsargius laikotarpius ir temas, kurios dabar aktyvios.', item1: 'Soliaras — metų kortelė: pagrindinės temos, svarbūs laikotarpiai, paramos.', item2: 'Suucai metų ciklas — kur jėgos daug, kur ją reikia tausoti.', item3: 'Metų žemėlapis pagal mėnesius su konkrečiomis temomis ir rekomendacijomis.' },
        money: { shortName: 'Karjera ir pinigai', title: 'Karjera ir pinigai', who: 'Tau čia, jei ieškai darbo pagal širdį arba nori suprasti, kodėl pinigai tavo gyvenime elgiasi būtent taip.', item1: 'Darbo, pašaukimo ir pinigų namai pagal natalinę kortelę.', item2: 'Stiprybės darbe ir tipinės klaidos.', item3: 'Suucai pinigų ciklai: kada kaupiasi, kada leidžiasi, kada investuoti.' },
        yearAhead: { shortName: 'Metai į priekį (rinkinys)', title: 'Metai į priekį', badge: 'rinkinys · −15 €', who: '„Soliaras“ ir „Karjera ir pinigai“ viename rinkinyje. Metų vaizdas plius atskiras fokusas į darbą ir finansus — kad galėtum suplanuoti metus iš esmės.', item1: 'Viskas, kas yra „Soliare“.', item2: 'Viskas, kas yra „Karjeroje ir piniguose“.', item3: 'Suvestinė: pagrindiniai finansiniai ir darbo taškai metuose.' },
        compat: { shortName: 'Suderinamumas', title: 'Suderinamumas', who: 'Tau čia, jei nori suprasti ryšį su konkrečiu žmogumi — partneriu, mama, vaiku, kolega.', item1: 'Natalinių kortelių sinastrija: kur sutampate, kur trintis, kas jus laiko kartu.', item2: 'Suucai skaičių palyginimas: kaip jūsų sąveika atsiskleidžia laike.', item3: 'Švelnios praktinės rekomendacijos — ką su tuo daryti.' },
        child: { shortName: 'Aprašymas vaikui', title: 'Aprašymas vaikui', who: 'Tau čia, jei nori suprasti savo vaiką, o ne perdaryti. Koks jis, ko jam reikia, kur padėti, o kur pasitraukti.', item1: 'Vaiko charakteris: temperamentas, kaip jis(i) suvokia pasaulį.', item2: 'Stiprybės, gebėjimai ir kur vaikui reikia paramos.', item3: 'Ką daryti tėvui, kad padėtų atsiskleisti, o ne užsisklęsti.' },
        iAndPartner: { shortName: 'Aš ir partneris (rinkinys)', title: 'Aš ir partneris', badge: 'rinkinys · −10 €', who: '„Sielos kodas“ tau plius „Suderinamumas“ su tavo žmogumi. Pirmiausia supranti save, paskui — kas tarp jūsų ir kodėl būtent taip.', item1: 'Viskas, kas yra „Sielos kode“.', item2: 'Viskas, kas yra „Suderinamume“.', item3: 'Kaip tavo bruožai susitinka su partnerio bruožais.' },
        hint: 'Nesi tikra, ką pasirinkti? <a href="#contact">Parašyk man</a> — pasakysiu, nuo ko patogiausia pradėti.<br><span class="services__hint-sub">Pageidaujant prie bet kurio PDF pridėsiu balso komentarus per Telegram.</span>'
      },
      testimonials: {
        eyebrow: 'Atsiliepimai',
        title: 'Ką sako tos, su kuriomis dirbau',
        t1: '„Katios aprašymas — tai ne astrologija, o veikiau labai tikslus veidrodis. Pirmą kartą perskaičiau apie save taip, lyg kalbėtų artimas žmogus, kuris seniai mane supranta.“',
        t1Author: '— Kliento vardas, miestas',
        t2: '„Užsisakiau metų aprašymą. Rugsėjį susimąsčiau, kad sveriu savo žingsnius pagal jos PDF kaip pagal navigatorių — ir beveik viskas sutampa. Be jausmo, kad man kažką išpranašavo.“',
        t2Author: '— Kliento vardas, miestas',
        t3: '„Vertingiausia — Katia rašo aiškiai. Jokio retrogradinio Merkurijaus ir užuominų. Atsisėdi, perskaitai, padarai išvadas.“',
        t3Author: '— Kliento vardas, miestas'
      },
      how: {
        eyebrow: 'Kaip tai veikia',
        title: 'Paprastas kelias nuo užklausos iki PDF',
        s1: { title: 'Parašyk', body: 'Per formą arba Telegram. Forma atvers laišką tavo el. pašte — niekas neišsiunčiama automatiškai.' },
        s2: { title: 'Atsakau', body: 'Per 24 valandas patikslinu detales ir patvirtinu, kuri paslauga tau tinka.' },
        s3: { title: 'Apmokėjimas', body: 'Patogus pavedimas — detales aptarsime asmeniškai. Patvirtinus apmokėjimą, pradedu darbą.' },
        s4: { title: 'PDF', body: 'Paruoštas PDF ateina per Telegram arba el. paštu — per 5–7 dienas (vaiko aprašymas — 2–3 dienos). Pageidaujant — balso komentarai.' }
      },
      contact: {
        eyebrow: 'Kontaktai',
        title: 'Užsisakyti arba tiesiog parašyti',
        lede: 'Patogiausia — per žinučių programą. Jei norisi pagalvoti ir surašyti užklausą — užpildyk formą žemiau, ji atvers laišką tavo el. pašte.',
        btnTelegramLabel: 'Telegram', btnInstagramLabel: 'Instagram', btnEmailLabel: 'El. paštas',
        nameLabel: 'Koks tavo vardas',
        contactLabel: 'Kaip su tavimi susisiekti <span class="form-hint">(Telegram, el. paštas — kas patogiau)</span>',
        serviceLabel: 'Kas tave domina',
        serviceDefault: '— pasirink iš sąrašo —',
        serviceUnsure: 'Dar nežinau, reikia patarimo',
        opt: {
          code: 'Sielos kodas — 40 €', path: 'Sielos kelias — 35 €', portrait: 'Pilnas portretas (rinkinys) — 65 €',
          solar: 'Soliaras (metiniai) — 40 €', money: 'Karjera ir pinigai — 35 €', yearAhead: 'Metai į priekį (rinkinys) — 60 €',
          compat: 'Suderinamumas — 25 €', child: 'Aprašymas vaikui — 25 €', iAndPartner: 'Aš ir partneris (rinkinys) — 55 €'
        },
        primaryDataLabel: 'Duomenys aprašymui',
        primaryDataLabelChild: 'Vaiko duomenys',
        primaryDataLabelYours: 'Tavo duomenys',
        primaryDataHint: 'Data ir vieta — privaloma. Laikas — pageidautina, bet jei nežinai, palik tuščią.',
        birthDateLabel: 'Gimimo data',
        birthDatePlaceholder: '1985 m. birželio 6 d.',
        birthTimeLabel: 'Gimimo laikas <span class="form-hint">(pageidautina)</span>',
        birthTimePlaceholder: '14:45',
        birthPlaceLabel: 'Gimimo vieta',
        birthPlacePlaceholder: 'Lisabona, Portugalija',
        residenceLegend: 'Kur praleisi didžiąją metų dalį',
        residenceHint: 'Soliarui svarbi vieta, kur prabūsi daugiau nei pusę nurodytų metų.',
        residenceLabel: 'Miestas ir šalis',
        residencePlaceholder: 'Lisabona, Portugalija',
        partnerLegend: 'Partnerio / antro žmogaus duomenys',
        partnerHint: 'Taip pat — data ir vieta privaloma, laikas pageidautinas.',
        partnerDatePlaceholder: '1983 m. kovo 14 d.',
        partnerTimePlaceholder: '08:20',
        partnerPlacePlaceholder: 'Tbilisis, Gruzija',
        messageLabel: 'Pora žodžių apie užklausą <span class="form-hint">(neprivaloma)</span>',
        messagePlaceholder: 'Ką dabar svarbiausia suprasti?',
        consent: 'Spausdama „Siųsti“ sutinki, kad galiu tau atrašyti pagal nurodytus kontaktus. Jokių naujienlaiškių ir trečiųjų šalių.',
        submitHint: 'Atsivers laiškas tavo el. paštas — nusiųsk jį, ir aš atsakysiu per 24 valandas.',
        submit: 'Siųsti',
        statusMissing: 'Užpildyk vardą ir kontaktą.',
        statusReady: 'Iškart atsivers el. pašto klientas — spausk „Siųsti“ jame.'
      },
      mail: {
        subject: 'Užklausa iš svetainės',
        labelName: 'Vardas', labelContact: 'Kontaktas', labelService: 'Domina',
        sectionPrimary: 'Duomenys aprašymui', labelBirthDate: 'Gimimo data', labelBirthTime: 'Gimimo laikas', labelBirthPlace: 'Gimimo vieta',
        sectionResidence: 'Gyvenimo vieta nurodytais metais',
        sectionPartner: 'Partnerio duomenys',
        sectionMessage: 'Apie užklausą'
      },
      common: { order: 'Užsirašyti' },
      footer: { sig: '© <span id="year"></span> Ekaterina · Vilnius · sukurta su šiluma', story: 'Istorija' }
    }
  };

  // ============================================================
  //                  I18N helpers + apply
  // ============================================================
  const SUPPORTED = ['ru', 'en', 'lt'];

  function detectLang() {
    const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
    for (let i = 0; i < list.length; i++) {
      const code = String(list[i] || '').toLowerCase().slice(0, 2);
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return 'en'; // дефолт по требованию
  }

  function getNested(obj, path) {
    if (!obj || !path) return null;
    const parts = path.split('.');
    let cur = obj;
    for (let i = 0; i < parts.length; i++) {
      if (cur == null) return null;
      cur = cur[parts[i]];
    }
    return (cur == null) ? null : cur;
  }

  let currentLang = 'ru';

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    currentLang = lang;
    const dict = TR[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    // title и meta description обновляются вручную (data-i18n не цепляет <title> через querySelectorAll('[data-i18n]') — кстати, цепляет, но безопасности ради)
    if (dict.meta && dict.meta.title) document.title = dict.meta.title;

    // 1. textContent для всех [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = getNested(dict, key);
      if (typeof val === 'string') el.textContent = val;
    });

    // 2. innerHTML для всех [data-i18n-html] (содержат ссылки/спаны)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      const val = getNested(dict, key);
      if (typeof val === 'string') el.innerHTML = val;
    });

    // 3. произвольные атрибуты через data-i18n-attr="attrName:path.to.key,attr2:path2"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      spec.split(',').forEach(function (pair) {
        const idx = pair.indexOf(':');
        if (idx === -1) return;
        const attr = pair.slice(0, idx).trim();
        const key = pair.slice(idx + 1).trim();
        const val = getNested(dict, key);
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });

    // 4. Год в футере — после innerHTML на footer.sig тег <span id="year"> восстанавливается из словаря, надо вписать год снова.
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // 5. подсветка активного языка в свитчере
    document.querySelectorAll('.lang-switcher [data-lang]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    // 6. обновим aria-label у theme-toggle (зависит от темы И от языка)
    updateThemeAriaLabel();
  }

  // ============================================================
  //                          Тема
  // ============================================================
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  let sessionOverride = null;

  function updateThemeAriaLabel() {
    if (!themeBtn) return;
    const isDark = root.getAttribute('data-theme') === 'dark';
    const dict = TR[currentLang] || TR.en;
    const base = (dict.aria && dict.aria.themeToggle) || 'Toggle theme';
    themeBtn.setAttribute('aria-label', base + (isDark ? ' (light)' : ' (dark)'));
  }

  function setTheme(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    updateThemeAriaLabel();
  }

  setTheme(darkQuery && darkQuery.matches ? 'dark' : 'light');

  if (darkQuery) {
    const handler = function (e) {
      if (sessionOverride == null) setTheme(e.matches ? 'dark' : 'light');
    };
    if (darkQuery.addEventListener) darkQuery.addEventListener('change', handler);
    else if (darkQuery.addListener) darkQuery.addListener(handler);
  }

  function applyThemeWithWipe(newTheme, cx, cy) {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || cx == null) { setTheme(newTheme); return; }
    const w = window.innerWidth, h = window.innerHeight;
    const maxR = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy));
    const startClip = 'circle(0px at ' + cx + 'px ' + cy + 'px)';
    const endClip = 'circle(' + maxR + 'px at ' + cx + 'px ' + cy + 'px)';
    const overlay = document.createElement('div');
    overlay.className = 'theme-wipe';
    overlay.style.background = newTheme === 'dark' ? '#0B1020' : '#FAF6F0';
    overlay.style.clipPath = startClip;
    overlay.style.webkitClipPath = startClip;
    overlay.style.transition =
      'clip-path 620ms cubic-bezier(.65, .05, .35, 1), -webkit-clip-path 620ms cubic-bezier(.65, .05, .35, 1)';
    document.body.appendChild(overlay);
    void overlay.offsetHeight;
    requestAnimationFrame(function () {
      overlay.style.clipPath = endClip;
      overlay.style.webkitClipPath = endClip;
    });
    setTimeout(function () { setTheme(newTheme); }, 310);
    setTimeout(function () { overlay.remove(); }, 740);
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function (e) {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      sessionOverride = next;
      const r = themeBtn.getBoundingClientRect();
      const cx = (e && e.clientX) ? e.clientX : r.left + r.width / 2;
      const cy = (e && e.clientY) ? e.clientY : r.top + r.height / 2;
      applyThemeWithWipe(next, cx, cy);
    });
  }

  // ============================================================
  //                  Применение языка (init)
  // ============================================================
  applyLang(detectLang());

  // Свитчер языка
  document.querySelectorAll('.lang-switcher [data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const lang = btn.getAttribute('data-lang');
      if (!lang || lang === currentLang) return;
      applyLang(lang);
    });
  });

  // ============================================================
  //                        Мобильное меню
  // ============================================================
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('primary-nav');
  if (toggle && nav && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('nav--open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('nav--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============================================================
  //                  Форма: условные поля + mailto
  // ============================================================
  const serviceSelect = document.getElementById('f-service');
  const residenceSection = document.getElementById('residenceSection');
  const partnerSection = document.getElementById('partnerSection');
  const primaryDataLabel = document.getElementById('primaryDataLabel');

  function normalizeService(v) { return (v || '').toLowerCase(); }

  function updateFormSections() {
    if (!serviceSelect) return;
    const v = normalizeService(serviceSelect.value);
    // покрываем русский, английский, литовский
    const needsResidence =
      v.indexOf('соляр') !== -1 || v.indexOf('год вперёд') !== -1 || v.indexOf('год вперед') !== -1 ||
      v.indexOf('solar') !== -1 || v.indexOf('year ahead') !== -1 ||
      v.indexOf('soliar') !== -1 || v.indexOf('metai į priekį') !== -1;
    const needsPartner =
      v.indexOf('совместим') !== -1 || v.indexOf('я и партн') !== -1 ||
      v.indexOf('compat') !== -1 || v.indexOf('me & partner') !== -1 ||
      v.indexOf('suderinamum') !== -1 || v.indexOf('aš ir partner') !== -1;
    const isChild =
      v.indexOf('ребёнк') !== -1 || v.indexOf('ребенк') !== -1 ||
      v.indexOf('child') !== -1 ||
      v.indexOf('vaiku') !== -1;

    if (residenceSection) residenceSection.hidden = !needsResidence;
    if (partnerSection) partnerSection.hidden = !needsPartner;

    if (primaryDataLabel) {
      const dict = TR[currentLang] || TR.en;
      let lbl;
      if (isChild) lbl = dict.contact.primaryDataLabelChild;
      else if (needsPartner) lbl = dict.contact.primaryDataLabelYours;
      else lbl = dict.contact.primaryDataLabel;
      primaryDataLabel.textContent = lbl;
    }
  }

  if (serviceSelect) {
    serviceSelect.addEventListener('change', updateFormSections);
    updateFormSections();
  }

  // Кнопка «Заказать»: подставляем услугу в форму, триггерим update
  document.querySelectorAll('[data-service]').forEach(function (link) {
    link.addEventListener('click', function () {
      const service = link.getAttribute('data-service');
      if (!serviceSelect || !service) return;
      let matched = false;
      Array.from(serviceSelect.options).forEach(function (opt) {
        const text = opt.textContent.trim();
        if (text === service || text.indexOf(service) === 0) {
          serviceSelect.value = opt.value || opt.textContent;
          matched = true;
        }
      });
      if (!matched) {
        const opt = document.createElement('option');
        opt.value = service;
        opt.textContent = service;
        opt.selected = true;
        serviceSelect.appendChild(opt);
      }
      updateFormSections();
    });
  });

  // ============================================================
  //                  Скролл-ревилы + ОБСЕРВЕР
  // ============================================================
  function tagGroup(selector) {
    document.querySelectorAll(selector).forEach(function (el, i) {
      el.classList.add('reveal');
      el.setAttribute('data-delay', String(Math.min(i, 3) * 100));
    });
  }
  tagGroup('.service-card');
  tagGroup('.testimonial');
  tagGroup('.how-step');
  tagGroup('.contact-btn');
  tagGroup('.contact-form');
  tagGroup('.services__group');

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    document.querySelectorAll('.approach-lines').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    document.querySelectorAll('.approach-lines').forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ============================================================
  //                       Cursor glow
  // ============================================================
  const cursorGlow = document.querySelector('.cursor-glow');
  if (cursorGlow && !reduceMotion) {
    const supportsHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (supportsHover) {
      let cgX = 0, cgY = 0, cgRaf = null, cgActive = false;
      function cgApply() {
        cgRaf = null;
        cursorGlow.style.left = cgX + 'px';
        cursorGlow.style.top = cgY + 'px';
        if (!cgActive) { cursorGlow.classList.add('is-active'); cgActive = true; }
      }
      window.addEventListener('mousemove', function (e) {
        cgX = e.clientX; cgY = e.clientY;
        if (cgRaf == null) cgRaf = requestAnimationFrame(cgApply);
      }, { passive: true });
      document.addEventListener('mouseleave', function () {
        cursorGlow.classList.remove('is-active'); cgActive = false;
      });
    }
  }

  // ============================================================
  //                  Параллакс hero-фото
  // ============================================================
  const heroPhoto = document.querySelector('.hero__photo');
  const hasFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (heroPhoto && hasFinePointer && !reduceMotion) {
    let mouseX = 0, mouseY = 0, scrollOffset = 0, raf = null;
    const heroSection = heroPhoto.closest('.hero');
    function onMove(e) {
      const rect = heroSection.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
      schedule();
    }
    function onScroll() {
      const rect = heroSection.getBoundingClientRect();
      scrollOffset = Math.max(-60, Math.min(60, -rect.top * 0.08));
      schedule();
    }
    function apply() {
      raf = null;
      const tx = mouseX * 12;
      const ty = mouseY * 12 + scrollOffset;
      heroPhoto.style.transform = 'translate3d(' + tx.toFixed(2) + 'px, ' + ty.toFixed(2) + 'px, 0)';
    }
    function schedule() { if (raf == null) raf = requestAnimationFrame(apply); }
    heroSection.addEventListener('mousemove', onMove, { passive: true });
    heroSection.addEventListener('mouseleave', function () { mouseX = 0; mouseY = 0; schedule(); });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============================================================
  //                       Tilt карточек
  // ============================================================
  if (hasFinePointer && !reduceMotion) {
    document.querySelectorAll('.tilt').forEach(function (card) {
      let raf = null, tx = 0, ty = 0, rx = 0, ry = 0;
      function onMove(e) {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        rx = (0.5 - py) * 3;
        ry = (px - 0.5) * 3;
        tx = (px - 0.5) * 4;
        ty = (py - 0.5) * 4;
        schedule();
      }
      function onLeave() { rx = 0; ry = 0; tx = 0; ty = 0; schedule(); }
      function apply() {
        raf = null;
        card.style.transform =
          'perspective(900px) translate3d(' + tx.toFixed(2) + 'px, ' + ty.toFixed(2) + 'px, 0)' +
          ' rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
      }
      function schedule() { if (raf == null) raf = requestAnimationFrame(apply); }
      card.addEventListener('mousemove', onMove, { passive: true });
      card.addEventListener('mouseleave', onLeave);
    });
  }

  // ============================================================
  //                       Отправка mailto
  // ============================================================
  const TARGET_EMAIL = 'hello.katestars@gmail.com';
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      function val(name) {
        const el = form.elements[name];
        return (el && el.value ? el.value : '').trim();
      }
      const name = val('name');
      const contact = val('contact');
      const service = val('service');
      const message = val('message');
      const birthDate = val('birth_date');
      const birthTime = val('birth_time');
      const birthPlace = val('birth_place');
      const residence = val('residence');
      const pDate = val('partner_birth_date');
      const pTime = val('partner_birth_time');
      const pPlace = val('partner_birth_place');

      const dict = TR[currentLang] || TR.en;

      if (!name || !contact) {
        if (status) status.textContent = dict.contact.statusMissing;
        return;
      }

      const subject = service
        ? dict.mail.subject + ' · ' + service
        : dict.mail.subject;

      const lines = [];
      lines.push(dict.mail.labelName + ': ' + name);
      lines.push(dict.mail.labelContact + ': ' + contact);
      if (service) lines.push(dict.mail.labelService + ': ' + service);

      const wantsResidence = !residenceSection || !residenceSection.hidden;
      const wantsPartner = !partnerSection || !partnerSection.hidden;

      if (birthDate || birthTime || birthPlace) {
        lines.push('');
        lines.push('— ' + dict.mail.sectionPrimary + ' —');
        if (birthDate) lines.push(dict.mail.labelBirthDate + ': ' + birthDate);
        if (birthTime) lines.push(dict.mail.labelBirthTime + ': ' + birthTime);
        if (birthPlace) lines.push(dict.mail.labelBirthPlace + ': ' + birthPlace);
      }
      if (wantsResidence && residence) {
        lines.push('');
        lines.push('— ' + dict.mail.sectionResidence + ' —');
        lines.push(residence);
      }
      if (wantsPartner && (pDate || pTime || pPlace)) {
        lines.push('');
        lines.push('— ' + dict.mail.sectionPartner + ' —');
        if (pDate) lines.push(dict.mail.labelBirthDate + ': ' + pDate);
        if (pTime) lines.push(dict.mail.labelBirthTime + ': ' + pTime);
        if (pPlace) lines.push(dict.mail.labelBirthPlace + ': ' + pPlace);
      }
      if (message) {
        lines.push('');
        lines.push('— ' + dict.mail.sectionMessage + ' —');
        lines.push(message);
      }

      const mailto =
        'mailto:' + encodeURIComponent(TARGET_EMAIL) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));

      window.location.href = mailto;
      if (status) status.textContent = dict.contact.statusReady;
    });
  }
})();
