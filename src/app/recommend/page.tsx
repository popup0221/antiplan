'use client'

import { useEffect, useState } from "react";
import { useHeader } from "@/components/layout/contexts/HeaderContext";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function Recommend() {
  const { setHeaderContent } = useHeader();
  const [progress, setProgress] = useState(25);
  const [step, setStep] = useState(1);

  const handleIncreaseProgress = () => setProgress((p) => Math.min(p + 25, 100))

  useEffect(() => {
    setHeaderContent(
      <div className="flex items-center pr-4">
        <Progress className="mr-4" value={progress} />
        <span>{step}/4</span>
      </div>
    );
    return () => setHeaderContent(null);
  }, [setHeaderContent, progress]);

  // 예시: 버튼 클릭 시 진행률 증가
  return (
    <div>
      <div>추천받기 페이지 내용</div>
      <Button onClick={handleIncreaseProgress}>
        +
      </Button>
    </div>
  );
}