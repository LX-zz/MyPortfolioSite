import { z } from "zod";

import { budgetOptions, serviceOptions } from "@/types/lead";

const optionalText = (max: number) =>
  z.preprocess(
    (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
    z.string().trim().max(max).optional(),
  );

export const leadSchema = z
  .object({
    name: z.string().trim().min(2, "Укажите имя").max(80, "Имя слишком длинное"),
    phone: optionalText(32),
    telegram: optionalText(64),
    service: z.enum(serviceOptions, { message: "Выберите вид сайта" }),
    budget: z.enum(budgetOptions, { message: "Выберите бюджет" }),
    comment: optionalText(1000),
    consent: z
      .preprocess((value) => value === "on" || value === true, z.boolean())
      .refine(Boolean, "Нужно согласие на обработку данных"),
    website: z.string().max(120).optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.phone && !data.telegram) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Укажите телефон или Telegram",
      });
      ctx.addIssue({
        code: "custom",
        path: ["telegram"],
        message: "Укажите Telegram или телефон",
      });
    }
  });

export type LeadInput = z.infer<typeof leadSchema>;
