'use client'

import { useEffect, useState } from "react";
import { useHeader } from "@/components/layout/contexts/HeaderContext";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function Recommend() {
  const total = 4;

  const { setHeaderContent } = useHeader();
  const [progress, setProgress] = useState(25);
  const [step, setStep] = useState(1);

  const handleIncreaseProgress = () => {
    setProgress((p) => Math.min(p + 25, 100))
    setStep((s) => Math.min(s + 1, total));
  }

  useEffect(() => {
    setHeaderContent(
      <div className="flex items-center pr-4">
        <Progress className="mr-4" value={progress} />
        <p>{step}/{total}</p>
      </div>
    );
    return () => setHeaderContent(null);
  }, [setHeaderContent, progress]);

  return (
    <div>
      <div>추천받기 페이지 내용
        <Button onClick={handleIncreaseProgress}>next</Button>
      </div>
    </div>
  );
}