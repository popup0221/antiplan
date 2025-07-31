import type { Alcohol, Experience, Taste, Proof, Base } from "./schemas";

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

export const taste: Record<Taste[number], string> = {
  smoky: "스모키",
  spicy: "스파이시",
  fruity: "프루티",
  sweet: "스위트",
  dry: "드라이",
  floral: "플로럴",
} as const;

export const proof: Record<Proof, string> = {
  low: "낮게 (~15%)",
  medium: "중간(15~30%)",
  high: "높게(30%~)",
} as const;

export const base: Record<Base, string> = {
  whisky: "위스키",
  noplan: "무계획",
  rum: "럼",
  tequila: "데낄라",
  vodka: "보드카",
  gin: "진",
} as const;
