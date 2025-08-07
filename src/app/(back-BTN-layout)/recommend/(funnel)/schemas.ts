import { z } from 'zod';

export const AlcoholSchema = z.enum(['whisky', 'cocktail', 'wine']);
export const ExperienceSchema = z.enum(['beginner', 'intermediate', 'expert']);
export const TasteSchema = z.array(z.enum(['bitter', 'sweet', 'sour', 'milky', 'fruity', 'coffee', 'herbal', 'cinnamon', 'chocolate', 'smoky']));
export const ProofSchema = z.enum(['low', 'medium', 'high']);
export const BaseSchema = z.enum(['whisky', 'noplan', 'rum', 'tequila', 'vodka', 'gin']);

export const 주종선택_Schema = z.object({
  alcohol: AlcoholSchema.optional(),
  // experience: ExperienceSchema.optional(),
  proof: ProofSchema.optional(),
  taste: TasteSchema.optional(),
  base: BaseSchema.optional(),
  memo: z.string().optional(),
});

export const 경험선택_Schema = z.object({
  alcohol: AlcoholSchema,
  experience: ExperienceSchema.optional(),
  proof: ProofSchema.optional(),
  taste: TasteSchema.optional(),
  base: BaseSchema.optional(),
  memo: z.string().optional(),
});

export const 도수선택_Schema = z.object({
  alcohol: AlcoholSchema,
  // experience: ExperienceSchema,
  proof: ProofSchema.optional(),
  taste: TasteSchema.optional(),
  base: BaseSchema.optional(),
  memo: z.string().optional(),
});

export const 맛선택_Schema = z.object({
  alcohol: AlcoholSchema,
  // experience: ExperienceSchema,
  proof: ProofSchema,
  taste: TasteSchema.optional(),
  base: BaseSchema.optional(),
  memo: z.string().optional(),
});

export const 기주선택_Schema = z.object({
    alcohol: AlcoholSchema,
  // experience: ExperienceSchema,
  proof: ProofSchema,
  taste: TasteSchema,
  base: BaseSchema.optional(),
  memo: z.string().optional(),
})

export const 메모입력_Schema = z.object({
  alcohol: AlcoholSchema,
  // experience: ExperienceSchema,
  proof: ProofSchema,
  taste: TasteSchema,
  base: BaseSchema,
  memo: z.string().optional(),
});

export type Alcohol = z.infer<typeof AlcoholSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Taste = z.infer<typeof TasteSchema>;
export type Proof = z.infer<typeof ProofSchema>;
export type Base = z.infer<typeof BaseSchema>;
