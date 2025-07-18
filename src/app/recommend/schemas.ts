import { z } from "zod";

export const recommendFormSchema = z.object({
  alcohol: z.string().min(1, '주종을 선택해주세요.'),
  experience: z.string().min(1, '경험 수준을 선택해주세요.'),
  taste: z.array(z.string()).min(1, '선호하는 맛을 하나 이상 선택해주세요.'),
  memo: z.string().max(200, '메모는 200자 이하로 입력해주세요.').optional(),
});

export type RecommendForm = z.infer<typeof recommendFormSchema>;
