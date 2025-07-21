// schemas/onboardingSchema.ts
import { z } from "zod"

export const onboardingSchema = z.object({
  alcohol: z.string().min(1, "주종을 선택하세요."),
  experience: z.enum(["입문자", "경험자"], { message: "선택하세요." }),
  taste: z.array(z.string()).min(1, "최소 1개 이상 선택하세요."),
  memo: z.string().optional(),
})

export type OnboardingFormData = z.infer<typeof onboardingSchema>
