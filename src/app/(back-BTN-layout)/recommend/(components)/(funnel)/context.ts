import type { Alcohol, Experience, Taste } from "./schemas";

export type 주종선택 = { alcohol?: Alcohol; experience?: Experience; taste?: Taste; memo?: string };
export type 경험선택 = { alcohol: Alcohol; experience?: Experience; taste?: Taste; memo?: string };
export type 맛선택 = { alcohol: Alcohol; experience: Experience; taste?: Taste; memo?: string };
export type 메모입력 = { alcohol: Alcohol; experience: Experience; taste: Taste; memo?: string };