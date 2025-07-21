'use client'

import { useFormContext } from "react-hook-form"

export default function Step1Alcohol({ next }: { next: () => void }) {
  const { register, trigger, formState } = useFormContext()

  const handleNext = async () => {
    const valid = await trigger("alcohol")
    if (valid) next()
  }

  return (
    <div>
      <h2>주종을 선택하세요</h2>
      <select {...register("alcohol")}>
        <option value="">선택하세요</option>
        <option value="whisky">위스키</option>
        <option value="soju">소주</option>
        <option value="wine">와인</option>
      </select>
      <button type="button" onClick={handleNext}>다음</button>
    </div>
  )
}
