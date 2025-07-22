import type { Alcohol, Experience, Taste } from "./schemas";

export const alcohol: Record<Alcohol, string> = {
  "whisky": "위스키",
  "cocktail": "칵테일",
  "wine": "와인"
} as const;

export const experience: Record<Experience, string> = {
  beginner: "입문자",
  intermediate: "중급자",
  expert: "전문가",
} as const;

export const taste: Record<Taste, string> = {
  smoky: "스모키",
  spicy: "스파이시",
  fruity: "프루티",
  sweet: "스위트",
  dry: "드라이",
  floral: "플로럴",
} as const;

