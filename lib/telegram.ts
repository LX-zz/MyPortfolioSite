import type { LeadInput } from "@/lib/validation";

type TelegramConfig = {
  botToken: string;
  chatId: string;
};

function getTelegramConfig(): TelegramConfig {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!botToken || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set.");
  }

  return { botToken, chatId };
}

function formatValue(value: string | undefined) {
  return value?.trim() || "-";
}

export function formatLeadMessage(data: LeadInput) {
  return [
    "Новая заявка с сайта 2К Digital",
    "",
    `Имя: ${data.name}`,
    `Телефон: ${formatValue(data.phone)}`,
    `Telegram: ${formatValue(data.telegram)}`,
    `Вид сайта: ${data.service}`,
    `Бюджет: ${data.budget}`,
    `Комментарий: ${formatValue(data.comment)}`,
    "",
    `Время: ${new Date().toLocaleString("ru-RU", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "Europe/Moscow",
    })}`,
  ].join("\n");
}

export async function sendTelegramLead(data: LeadInput) {
  const { botToken, chatId } = getTelegramConfig();
  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      disable_web_page_preview: true,
      text: formatLeadMessage(data),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram API error: ${response.status} ${errorText}`);
  }
}
