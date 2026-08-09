import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Car,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  FileSearch,
  Gauge,
  Headphones,
  Landmark,
  LayoutDashboard,
  PanelsTopLeft,
  PencilRuler,
  SearchCheck,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";

import { budgetOptions, serviceOptions } from "@/types/lead";

export const siteConfig = {
  name: "2К Digital",
  tagline: "Сайты под ключ для малого бизнеса",
  description:
    "Дизайн, разработка, запуск и базовая SEO-подготовка без лишней сложности.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contacts: {
    telegram: "@username",
    telegramUrl: "https://t.me/username",
    email: "hello@example.ru",
    city: "Москва",
    workTime: "ежедневно с 10:00 до 21:00",
  },
  nav: [
    { label: "Услуги", href: "#services" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Цены", href: "#pricing" },
    { label: "Контакты", href: "#contacts" },
  ],
  advantages: [
    "Адаптация под смартфоны",
    "Подключение аналитики",
    "Поддержка после запуска",
  ],
};

export const services = [
  {
    title: "Лендинг",
    description: "Одностраничный сайт для рекламы услуги или товара.",
    icon: PanelsTopLeft,
  },
  {
    title: "Корпоративный сайт",
    description: "Многостраничный сайт для компании и презентации услуг.",
    icon: Building2,
  },
  {
    title: "Интернет-магазин",
    description: "Каталог товаров, корзина и оформление заказа.",
    icon: ShoppingCart,
  },
  {
    title: "Редизайн сайта",
    description: "Обновление внешнего вида и структуры старого сайта.",
    icon: PencilRuler,
  },
  {
    title: "Базовая SEO-оптимизация",
    description: "Настройка заголовков, метаданных, структуры, sitemap и robots.txt.",
    icon: SearchCheck,
  },
  {
    title: "Поддержка сайта",
    description: "Исправление ошибок, обновление информации и развитие проекта.",
    icon: Headphones,
  },
];

export const portfolioProjects = [
  {
    slug: "detailing",
    title: "Сайт детейлинг-центра",
    direction: "Автоуслуги",
    description: "Витрина премиальных услуг, запись на консультацию и акцент на визуальном доверии.",
    technologies: ["Next.js", "SEO", "Аналитика"],
    icon: Sparkles,
  },
  {
    slug: "autoservice",
    title: "Сайт автосервиса",
    direction: "Сервис и ремонт",
    description: "Структура услуг, быстрые заявки, блоки доверия и понятная навигация для клиентов.",
    technologies: ["React", "Каталог услуг", "Формы"],
    icon: Wrench,
  },
  {
    slug: "construction",
    title: "Сайт строительной компании",
    direction: "Строительство",
    description: "Презентация направлений, портфолио объектов и сбор заявок на расчет.",
    technologies: ["Next.js", "CMS-ready", "Адаптив"],
    icon: BriefcaseBusiness,
  },
  {
    slug: "cafe",
    title: "Сайт кафе",
    direction: "HoReCa",
    description: "Меню, атмосфера заведения, контакты и сценарии быстрого бронирования.",
    technologies: ["UI", "Меню", "Mobile first"],
    icon: Store,
  },
  {
    slug: "car-rental",
    title: "Сайт аренды автомобилей",
    direction: "Прокат",
    description: "Каталог машин, фильтрация, карточки предложений и заявка на бронь.",
    technologies: ["Каталог", "Фильтры", "UX"],
    icon: Car,
  },
  {
    slug: "lawyer",
    title: "Сайт юридических услуг",
    direction: "Консалтинг",
    description: "Сдержанный коммерческий сайт с услугами, кейсами и формой обращения.",
    technologies: ["SEO", "Контент", "Формы"],
    icon: Landmark,
  },
];

export const processSteps = [
  "Обсуждение задачи",
  "Анализ бизнеса и конкурентов",
  "Создание структуры и дизайна",
  "Разработка сайта",
  "Проверка и запуск",
  "Поддержка и развитие",
];

export const pricingPlans = [
  {
    title: "Лендинг",
    price: "от 15 000 ₽",
    icon: LayoutDashboard,
    features: [
      "до 7 смысловых блоков",
      "адаптивная верстка",
      "форма заявки",
      "базовая SEO-настройка",
      "подключение аналитики",
    ],
  },
  {
    title: "Сайт компании",
    price: "от 30 000 ₽",
    icon: Building2,
    highlighted: true,
    features: [
      "до 10 страниц",
      "индивидуальная структура",
      "формы заявок",
      "адаптивная верстка",
      "базовая SEO-настройка",
    ],
  },
  {
    title: "Интернет-магазин",
    price: "от 50 000 ₽",
    icon: ShoppingCart,
    features: [
      "каталог",
      "карточки товаров",
      "корзина",
      "оформление заказа",
      "управление товарами",
    ],
  },
];

export const faqs = [
  {
    question: "Сколько времени занимает разработка?",
    answer:
      "Небольшой лендинг обычно занимает от нескольких рабочих дней после согласования структуры и материалов. Более крупные сайты оцениваются отдельно: сроки зависят от количества страниц, интеграций и готовности контента.",
  },
  {
    question: "Что потребуется от заказчика?",
    answer:
      "Нужны описание задачи, контакты, материалы о компании, примеры сайтов, которые нравятся, и базовая информация по услугам или товарам. Если материалов пока нет, структуру можно собрать вместе.",
  },
  {
    question: "Можно ли изменить сайт после запуска?",
    answer:
      "Да. После запуска можно менять тексты, добавлять блоки, подключать новые формы, дорабатывать дизайн и развивать функциональность.",
  },
  {
    question: "Поможете ли вы с доменом и хостингом?",
    answer:
      "Да, помогу выбрать домен, подготовить хостинг и разместить сайт. Доступы и платежи за домен или хостинг остаются на стороне владельца проекта.",
  },
  {
    question: "Входит ли продвижение в стоимость?",
    answer:
      "В базовую стоимость входит техническая SEO-подготовка: метаданные, структура, sitemap, robots.txt и базовые рекомендации. Полноценное продвижение считается отдельной задачей и не дает гарантированного выхода в топ.",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "Обычно работа делится на этапы: старт после предоплаты, затем оплата оставшейся части после проверки результата. Точные условия фиксируются перед началом проекта.",
  },
];

export const siteFormOptions = {
  services: serviceOptions,
  budgets: budgetOptions,
};

export const qualityPoints = [
  { label: "Скорость", icon: Gauge },
  { label: "Безопасность", icon: ShieldCheck },
  { label: "SEO-структура", icon: FileSearch },
  { label: "Аналитика", icon: BarChart3 },
  { label: "Чистый код", icon: Code2 },
  { label: "Гибкие настройки", icon: Settings2 },
  { label: "Рост заявок", icon: ChartNoAxesCombined },
  { label: "Проверка запуска", icon: CheckCircle2 },
];
