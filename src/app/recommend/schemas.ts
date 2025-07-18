import { z } from "zod";

export const alcoholSchema = z.object({
  alcohol: z.string().min(1, "주종을 선택해주세요."),
});
export const experienceSchema = alcoholSchema.extend({
  experience: z.string().min(1, "경험 수준을 선택해주세요."),
});
export const tasteSchema = experienceSchema.extend({
  taste: z.array(z.string()).min(1, "선호하는 맛을 하나 이상 선택해주세요."),
});
export const memoSchema = tasteSchema.extend({
  memo: z.string().max(200, "메모는 200자 이하로 입력해주세요.").optional(),
});

export type AlcoholForm = z.infer<typeof alcoholSchema>;
export type ExperienceForm = z.infer<typeof experienceSchema>;
export type TasteForm = z.infer<typeof tasteSchema>;
export type MemoForm = z.infer<typeof memoSchema>;
