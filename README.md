# 2К Digital

Современный коммерческий сайт веб-студии на русском языке. Проект рассчитан на создание сайтов под ключ, техническую поддержку и базовую SEO-подготовку без обещаний гарантированного выхода в топ поисковых систем.

## Что внутри

- Главная страница с фиксированным меню, мобильной навигацией, первым экраном, услугами, портфолио, этапами, тарифами, блоком об исполнителе, FAQ, контактами и формой заявки.
- Демонстрационные страницы портфолио.
- Серверная обработка формы с Zod-валидацией, honeypot-полем и ограничением длины полей.
- Сохранение заявок в PostgreSQL через Prisma.
- Админ-страница `/admin/leads` с серверной проверкой пароля через `ADMIN_PASSWORD`.
- Смена статусов заявок: `Новая`, `В работе`, `Завершена`, `Отказ`.
- Metadata, Open Graph, favicon-заглушка, `robots.txt`, `sitemap.xml`, 404, loading и error states.
- Базовые страницы документов `/privacy` и `/consent`.

## Технологии

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Prisma 7
- PostgreSQL
- Zod
- Lucide Icons
- ESLint

## Установка

```bash
npm install
```

## Настройка окружения

Создайте `.env` на основе `.env.example` и задайте значения:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require"
DIRECT_URL=""
ADMIN_PASSWORD="replace-with-a-strong-password"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```
`ADMIN_PASSWORD` нужен только на сервере и не отправляется в браузер. Для локальной проверки в текущем проекте уже задан тестовый пароль `admin123`; перед реальным использованием замените его.
`DIRECT_URL` можно оставить пустым. Его задают, когда провайдер базы дает отдельную прямую строку подключения для миграций.

## Prisma и база данных

Сгенерировать Prisma Client:

```bash
npm run prisma:generate
```

Создать или обновить таблицы в PostgreSQL по миграциям:

```bash
npm run prisma:deploy
```

Открыть Prisma Studio:

```bash
npm run prisma:studio
```

`DATABASE_URL` должен указывать на PostgreSQL-базу: Neon, Supabase, Prisma Postgres, Railway, Render или свой VPS с Postgres.

Для обучения полезно запомнить:

- `prisma/schema.prisma` описывает модели данных;
- `prisma/migrations/**/migration.sql` хранит SQL-историю изменений базы;
- `DATABASE_URL` хранится только в `.env` или переменных окружения хостинга;
- `DIRECT_URL` используют для миграций, если у провайдера есть отдельный direct connection;
- `npm run prisma:deploy` применяет готовые миграции на сервере;
- `npm run prisma:migrate` используют для разработки новой миграции локально.

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

## Админка заявок

Страница заявок:

```text
/admin/leads
```

Введите пароль из `ADMIN_PASSWORD`. После входа отображается таблица заявок с датой, именем, телефоном, Telegram, услугой, бюджетом, статусом и комментарием.

В админке доступны:

- счетчики заявок по статусам;
- поиск по имени, телефону, Telegram, услуге, бюджету и комментарию;
- фильтр по статусу;
- быстрые ссылки для звонка и перехода в Telegram;
- смена статуса заявки;
- выгрузка текущего списка заявок в CSV.

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
- `/admin/leads`
- `/privacy`
- `/consent`
- `/robots.txt`
- `/sitemap.xml`

## Подготовка к размещению на сервере

1. Замените контакты, Telegram, почту и цены в `config/site.ts`.
2. Создайте PostgreSQL-базу у провайдера.
3. Скопируйте строку подключения в `DATABASE_URL`.
4. Задайте сильный `ADMIN_PASSWORD` в переменных окружения сервера.
5. Укажите публичный адрес сайта в `NEXT_PUBLIC_SITE_URL`.
6. Выполните `npm install`.
7. Выполните `npm run prisma:generate`.
8. Выполните `npm run prisma:deploy`.
9. Выполните `npm run build`.
10. Запустите приложение через `npm run start` или процесс-менеджер на сервере.

На Vercel обычно делают так:

1. Подключают GitHub-репозиторий.
2. Создают PostgreSQL-базу через Vercel Marketplace или отдельно у Neon/Supabase.
3. Добавляют переменные окружения `DATABASE_URL`, `ADMIN_PASSWORD`, `NEXT_PUBLIC_SITE_URL` и при необходимости `DIRECT_URL`.
4. В build command оставляют `npm run build`.
5. После первого деплоя запускают миграции командой `npm run prisma:deploy` в окружении с production `DATABASE_URL`.

Подробная памятка по процессу: `docs/postgres-deployment.md`.

## Документы

Страницы `/privacy` и `/consent` содержат базовые тексты. Перед коммерческим запуском их необходимо проверить и адаптировать под владельца сайта, реальные реквизиты, способы обработки данных, сроки хранения и применимое законодательство.

## Проверка качества

Команды для проверки:

```bash
npm run typecheck
npm run lint
npm run build
```
