'use client'
import { useFormContext } from "react-hook-form";

export default function Step2Experience({ next, back }: { next: () => void; back: () => void }) {
  const { register, trigger } = useFormContext()

  const handleNext = async () => {
    const valid = await trigger("experience")
    if (valid) next()
  }

  return (
    <div>
      <h2>이 술을 마셔본 적이 있나요?</h2>
      <label><input type="radio" value="yes" {...register("experience")} /> 예</label>
      <label><input type="radio" value="no" {...register("experience")} /> 아니오</label>
      <div>
        <button type="button" onClick={back}>이전</button>
        <button type="button" onClick={handleNext}>다음</button>
      </div>
    </div>
  )
}
