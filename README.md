# Катя и Звёзды — katestars.com

Персональный сайт астролога-практика сюцай. Статический одностраничный лендинг.
Языки: русский, английский, литовский (автодетект из браузера).

## Структура

| Файл | Что внутри |
|---|---|
| `index.html` | разметка и весь видимый текст (русская версия как fallback) |
| `styles.css` | оформление, темы, анимации, адаптив |
| `script.js` | локализации (i18n), переключение темы, скролл-эффекты, форма |
| `CNAME` | домен для GitHub Pages |
| `images/` | фотографии |

## Локальный просмотр

```bash
python3 -m http.server 8000
# открыть http://localhost:8000
```

## Где править контент

Тексты по умолчанию (русский) живут в `index.html`. Переводы на английский
и литовский — в `script.js`, в начале файла внутри объекта `TR`.

### Изменить услугу

В `index.html` найди карточку `<article class="service-card">` нужной услуги,
поправь цену в `<span class="service-card__price">`. Перевод названия и
описания — в `script.js` → `TR.ru/en/lt.services.<service>` (например
`TR.ru.services.code` для «Код души»).

### Вернуть отзывы клиенток

Секция отзывов **сейчас выключена** — на сайте не было реальных, а фейк-плейсхолдеры
вредят доверию. Когда Катя пришлёт 3–6 реальных цитат (можно анонимных вроде
«К., Лиссабон»), их легко вернуть:

1. В `index.html` после секции `#how` (см. ниже) вставить блок:
   ```html
   <section class="section" id="testimonials">
     <div class="container">
       <p class="eyebrow eyebrow--centered reveal" data-i18n="testimonials.eyebrow">Отзывы</p>
       <h2 class="section__title reveal" data-delay="100" data-i18n="testimonials.title">Что говорят те, с кем я работала</h2>
       <div class="testimonials-grid">
         <figure class="testimonial">
           <blockquote data-i18n="testimonials.t1">«…»</blockquote>
           <figcaption data-i18n="testimonials.t1Author">— К., Лиссабон</figcaption>
         </figure>
         <!-- t2, t3, … -->
       </div>
     </div>
   </section>
   ```
2. В `script.js` ключи `testimonials.*` уже есть во всех трёх языках — просто перепиши
   тексты под реальные.
3. В nav и footer-nav вернуть ссылку `<a href="#testimonials" data-i18n="nav.testimonials">Отзывы</a>`.

### Шаги «Как это работает»

Секция `#how` — четыре шага между «Услугами» и «Контактами». Контент в
`TR.ru/en/lt.how.{eyebrow, title, s1.title, s1.body, …, s4.body}`. Если меняется
срок ответа Кати (сейчас «24 часа»), способ оплаты (сейчас «удобным переводом»)
или сроки PDF — поправь в этих ключах для всех трёх языков.

### Поменять email или Telegram

- Email-кнопка и форма: `index.html` → ищи `hello@katestars.com` (2 места) +
  `script.js` → переменная `TARGET_EMAIL`.
- Telegram-username: `index.html` → ищи `Murrzilkas`.

## Деплой на GitHub Pages

Репозиторий: `eliaszudin-afk/katestars`. Домен `katestars.com` (GoDaddy).

### Первый раз

```bash
git add -A
git commit -m "Initial site"
git push origin main
```

В настройках репо: **Settings → Pages**:
- Source: `Deploy from a branch`
- Branch: `main` / root
- Custom domain: `katestars.com`
- Enforce HTTPS: ✓ (после того, как сертификат выпустится — 10–60 минут)

### DNS у GoDaddy

Для apex `katestars.com` — четыре A-записи:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Для `www.katestars.com` — один CNAME:

| Type | Name | Value |
|---|---|---|
| CNAME | www | eliaszudin-afk.github.io |

После добавления записей DNS пропагируется минут 10–60. Затем GitHub
выпустит сертификат Let's Encrypt автоматически.

### Обновление сайта

```bash
git add -A
git commit -m "Что поменялось"
git push
```

Через минуту-две сайт обновится по адресу `https://katestars.com`.
