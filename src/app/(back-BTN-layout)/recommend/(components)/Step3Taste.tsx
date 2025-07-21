'use client'
import { useFormContext } from "react-hook-form";

export default function Step3Taste({ next, back }: { next: () => void; back: () => void }) {
  const { register, trigger } = useFormContext()

  const handleNext = async () => {
    const valid = await trigger("taste")
    if (valid) next()
  }

  return (
    <div>
      <h2>어떤 맛을 선호하세요?</h2>
      <label><input type="checkbox" value="smoky" {...register("taste")} /> 스모키</label>
      <label><input type="checkbox" value="spicy" {...register("taste")} /> 스파이시</label>
      <label><input type="checkbox" value="fruity" {...register("taste")} /> 프루티</label>
      <div>
        <button type="button" onClick={back}>이전</button>
        <button type="button" onClick={handleNext}>다음</button>
      </div>
    </div>
  )
}
