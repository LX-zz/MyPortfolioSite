import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description:
    "Согласие пользователя на обработку персональных данных при отправке заявки на сайте 2К Digital.",
};

const lastUpdated = "7 августа 2026 года";

const personalData = [
  "имя;",
  "номер телефона;",
  "Telegram или иной контакт для связи;",
  "вид сайта, примерный бюджет и комментарий к проекту;",
  "технические сведения об отправке заявки, включая дату и время.",
];

const processingActions = [
  "сбор и запись;",
  "систематизация и хранение;",
  "уточнение и использование для связи;",
  "передача сервисам, которые технически помогают обработать обращение;",
  "блокирование, удаление и уничтожение.",
];

export default function ConsentPage() {
  return (
    <main className="container-page pb-20 pt-32">
      <article className="mx-auto max-w-4xl rounded-lg border border-cyan-100/10 bg-[#071013]/90 p-6 leading-7 text-neutral-300 shadow-[0_24px_80px_rgba(0,0,0,0.26)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Документ
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">
          Согласие на обработку персональных данных
        </h1>
        <p className="mt-4 text-sm text-neutral-500">Дата обновления: {lastUpdated}</p>

        <p className="mt-8">
          Отправляя форму заявки на сайте {siteConfig.name}, пользователь свободно, своей волей и
          в своем интересе дает согласие оператору 2К Digital на обработку персональных данных на
          условиях, описанных ниже и в{" "}
          <a className="text-cyan-100 underline-offset-4 hover:underline" href="/privacy">
            политике конфиденциальности
          </a>
          .
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">1. Состав данных</h2>
        <p className="mt-3">Пользователь соглашается на обработку следующих данных:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {personalData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-white">2. Цели обработки</h2>
        <p className="mt-3">
          Данные обрабатываются для связи с пользователем, уточнения задачи, подготовки предложения,
          расчета ориентировочной стоимости, ведения переписки по проекту и защиты сайта от спама
          или злоупотреблений.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">3. Действия с данными</h2>
        <p className="mt-3">Оператор может выполнять следующие действия:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {processingActions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-white">4. Передача и хранение</h2>
        <p className="mt-3">
          Данные могут передаваться сервисам связи, хостинга, почты, аналитики и иным техническим
          подрядчикам, если это необходимо для обработки обращения. Данные не продаются и не
          публикуются.
        </p>
        <p className="mt-3">
          Согласие действует до достижения целей обработки, отзыва согласия пользователем или до
          наступления иных законных оснований для прекращения обработки. Ориентировочный срок
          хранения обращений — до 3 лет после последнего взаимодействия, если иной срок не требуется
          законом.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">5. Отзыв согласия</h2>
        <p className="mt-3">
          Пользователь может отозвать согласие, запросить уточнение или удаление данных, написав на{" "}
          <a className="text-cyan-100 underline-offset-4 hover:underline" href={`mailto:${siteConfig.contacts.email}`}>
            {siteConfig.contacts.email}
          </a>{" "}
          или в Telegram{" "}
          <a className="text-cyan-100 underline-offset-4 hover:underline" href={siteConfig.contacts.telegramUrl}>
            {siteConfig.contacts.telegram}
          </a>
          . После получения обращения оператор прекратит обработку данных, если их дальнейшее
          хранение не требуется по закону или для защиты законных интересов.
        </p>
      </article>
    </main>
  );
}
