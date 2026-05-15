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

### Добавить отзыв

В `index.html` найди секцию `#testimonials`, скопируй блок `<figure class="testimonial">`,
замени текст в `<blockquote>` и подпись в `<figcaption>` — и продублируй текст в
`TR.ru/en/lt.testimonials.*`.

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
