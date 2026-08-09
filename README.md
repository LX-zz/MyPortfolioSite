# 2К Digital

Современный сайт-визитка веб-студии на русском языке. Проект рассчитан на создание сайтов под ключ, техническую поддержку и базовую SEO-подготовку без обещаний гарантированного выхода в топ поисковых систем.

## Что внутри

- Главная страница с фиксированным меню, мобильной навигацией, первым экраном, услугами, портфолио, этапами, тарифами, блоком об исполнителе, FAQ, контактами и формой заявки.
- Демонстрационные страницы портфолио.
- Отправка заявок из формы прямо в Telegram.
- Серверная обработка формы с Zod-валидацией, honeypot-полем и ограничением длины полей.
- Metadata, Open Graph, favicon, `robots.txt`, `sitemap.xml`, 404, loading и error states.
- Базовые страницы документов `/privacy` и `/consent`.

## Технологии

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Zod
- Lucide Icons
- ESLint

## Установка

```bash
npm install
```

## Настройка Telegram

Создайте `.env` на основе `.env.example` и задайте значения:

```env
TELEGRAM_BOT_TOKEN="replace-with-bot-token"
TELEGRAM_CHAT_ID="replace-with-chat-id"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

Как получить значения:

1. Откройте Telegram и найдите `@BotFather`.
2. Отправьте команду `/newbot`, придумайте имя и username бота.
3. Скопируйте токен, который выдаст BotFather, в `TELEGRAM_BOT_TOKEN`.
4. Напишите любое сообщение своему новому боту, например `test`.
5. Откройте в браузере `https://api.telegram.org/bot<ваш_токен>/getUpdates`.
6. Найдите `message.chat.id` и вставьте это число в `TELEGRAM_CHAT_ID`.

После этого заявки с сайта будут приходить сообщением в Telegram. База данных и админка для такой визитки не нужны: это дешевле, проще в поддержке и быстрее для запуска. Минус такого варианта один: история, поиск и статусы заявок будут не в отдельной панели, а в переписке Telegram.

## Запуск

Режим разработки:

```bash
npm run dev
```

После запуска сайт будет доступен на `http://localhost:3000`.

Production build:

```bash
npm run build
```

Production server:

```bash
npm run start
```

## Где менять контент

Основные данные вынесены в один файл:

```text
config/site.ts
```

Там меняются:

- название студии;
- контакты;
- пункты меню;
- преимущества;
- услуги;
- проекты портфолио;
- этапы работы;
- тарифы и цены;
- FAQ.

## Созданные страницы

- `/`
- `/portfolio/detailing`
- `/portfolio/autoservice`
- `/portfolio/construction`
- `/portfolio/cafe`
- `/portfolio/car-rental`
- `/portfolio/lawyer`
- `/privacy`
- `/consent`
- `/robots.txt`
- `/sitemap.xml`

## Подготовка к размещению

1. Замените контакты, Telegram, почту и цены в `config/site.ts`.
2. Создайте Telegram-бота и получите `TELEGRAM_BOT_TOKEN`.
3. Напишите боту один раз и получите `TELEGRAM_CHAT_ID`.
4. Укажите публичный адрес сайта в `NEXT_PUBLIC_SITE_URL`.
5. Добавьте переменные окружения на хостинге.
6. Выполните `npm install`.
7. Выполните `npm run build`.
8. Запустите приложение через `npm run start` или разместите проект на Vercel/аналогичном хостинге для Next.js.

На Vercel обычно делают так:

1. Подключают GitHub-репозиторий.
2. Добавляют переменные окружения `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `NEXT_PUBLIC_SITE_URL`.
3. В build command оставляют `npm run build`.
4. После деплоя отправляют тестовую заявку и проверяют сообщение в Telegram.

## Документы

Страницы `/privacy` и `/consent` содержат базовые тексты. Перед коммерческим запуском их необходимо проверить и адаптировать под владельца сайта, реальные реквизиты, способы обработки данных, сроки хранения и применимое законодательство.

## Проверка качества

Команды для проверки:

```bash
npm run typecheck
npm run lint
npm run build
```
