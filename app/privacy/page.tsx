import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика обработки персональных данных посетителей сайта 2К Digital.",
};

const lastUpdated = "7 августа 2026 года";

const processedData = [
  "имя;",
  "номер телефона;",
  "Telegram или иной контакт, указанный пользователем;",
  "выбранный вид сайта, примерный бюджет и комментарий к заявке;",
  "дата и время отправки формы, технические данные, необходимые для работы сайта и защиты от злоупотреблений.",
];

const purposes = [
  "связаться с пользователем по его обращению;",
  "уточнить задачу, подготовить предложение и рассчитать ориентировочную стоимость;",
  "вести переписку по проекту и сохранять историю обращений;",
  "обеспечивать безопасность сайта, предотвращать спам и несанкционированный доступ.",
];

const userRights = [
  "получить информацию об обработке своих персональных данных;",
  "запросить уточнение, блокирование или удаление данных;",
  "отозвать согласие на обработку персональных данных;",
  "направить обращение по вопросам обработки данных через указанные контакты.",
];

export default function PrivacyPage() {
  return (
    <main className="container-page pb-20 pt-32">
      <article className="mx-auto max-w-4xl rounded-lg border border-cyan-100/10 bg-[#071013]/90 p-6 leading-7 text-neutral-300 shadow-[0_24px_80px_rgba(0,0,0,0.26)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
          Документ
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Политика конфиденциальности</h1>
        <p className="mt-4 text-sm text-neutral-500">Дата обновления: {lastUpdated}</p>

        <p className="mt-8">
          Настоящая политика описывает, как 2К Digital обрабатывает персональные данные
          посетителей сайта при отправке формы заявки, обращении через указанные контакты и
          использовании сайта.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">1. Оператор данных</h2>
        <p className="mt-3">
          Оператор персональных данных: 2К Digital, владелец сайта {siteConfig.url}. Для обращений
          по вопросам персональных данных можно использовать электронную почту{" "}
          <a className="text-cyan-100 underline-offset-4 hover:underline" href={`mailto:${siteConfig.contacts.email}`}>
            {siteConfig.contacts.email}
          </a>{" "}
          или Telegram{" "}
          <a className="text-cyan-100 underline-offset-4 hover:underline" href={siteConfig.contacts.telegramUrl}>
            {siteConfig.contacts.telegram}
          </a>
          .
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">2. Какие данные обрабатываются</h2>
        <p className="mt-3">Через форму заявки и контакты сайта могут обрабатываться:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {processedData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-3">
          Сайт не предназначен для сбора специальных категорий персональных данных, биометрических
          данных и данных несовершеннолетних. Не указывайте такую информацию в свободном комментарии.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">3. Цели обработки</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {purposes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-white">4. Правовые основания</h2>
        <p className="mt-3">
          Обработка выполняется на основании согласия пользователя, которое он дает при отправке
          формы, а также для подготовки ответа на обращение и возможного заключения договора на
          разработку или поддержку сайта.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">5. Действия с данными</h2>
        <p className="mt-3">
          Оператор может осуществлять сбор, запись, систематизацию, хранение, уточнение,
          использование, передачу в пределах используемых сервисов связи и хостинга, блокирование,
          удаление и уничтожение персональных данных.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">6. Передача третьим лицам</h2>
        <p className="mt-3">
          Данные не продаются и не публикуются. Доступ к ним может быть предоставлен только
          сервисам, которые технически помогают обработать обращение: хостингу, почтовым сервисам,
          мессенджерам, системам аналитики или подрядчикам, участвующим в обработке заявки. Такие
          лица должны использовать данные только для заявленных целей.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">7. Срок хранения</h2>
        <p className="mt-3">
          Данные заявки хранятся до достижения целей обработки, отзыва согласия или до момента,
          когда хранение больше не требуется для переписки, подготовки предложения, исполнения
          договора или защиты законных интересов оператора. Ориентировочный срок хранения
          обращений — до 3 лет после последнего взаимодействия, если иной срок не требуется законом.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">8. Защита данных</h2>
        <p className="mt-3">
          Оператор принимает разумные организационные и технические меры: ограничивает доступ к
          заявкам, использует парольную защиту административного раздела, применяет серверную
          проверку данных формы и хранит данные только в объеме, необходимом для обработки
          обращения.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">9. Cookies и аналитика</h2>
        <p className="mt-3">
          Сайт может использовать технические cookies, необходимые для корректной работы страниц и
          административных функций. Если будут подключены системы аналитики, они могут собирать
          обезличенные технические сведения о посещениях: страницы, источник перехода, устройство,
          браузер и приблизительное местоположение.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">10. Права пользователя</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          {userRights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-white">11. Отзыв согласия</h2>
        <p className="mt-3">
          Чтобы отозвать согласие или запросить удаление данных, отправьте обращение на{" "}
          <a className="text-cyan-100 underline-offset-4 hover:underline" href={`mailto:${siteConfig.contacts.email}`}>
            {siteConfig.contacts.email}
          </a>{" "}
          или в Telegram{" "}
          <a className="text-cyan-100 underline-offset-4 hover:underline" href={siteConfig.contacts.telegramUrl}>
            {siteConfig.contacts.telegram}
          </a>
          . В обращении укажите контакт, который использовался при отправке заявки.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-white">12. Изменение политики</h2>
        <p className="mt-3">
          Политика может обновляться при изменении сайта, состава обрабатываемых данных,
          используемых сервисов или требований законодательства. Актуальная версия всегда размещается
          на этой странице.
        </p>
      </article>
    </main>
  );
}
