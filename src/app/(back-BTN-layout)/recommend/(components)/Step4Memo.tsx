'use client'
import { useFormContext } from "react-hook-form";

export default function Step4Memo({ back }: { back: () => void }) {
  const { register } = useFormContext()

  return (
    <div>
      <h2>추가 메모를 입력하세요 (선택)</h2>
      <textarea {...register("memo")} rows={4} />
      <div>
        <button type="button" onClick={back}>이전</button>
        <button type="submit">제출</button>
      </div>
    </div>
  )
}
