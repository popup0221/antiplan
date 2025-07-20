'use client'

import { useFunnel } from "@use-funnel/next";
import { useHeader } from "../(contexts)/HeaderContext"; 
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { steps, alcohol } from "./literals";
import { recommendFormSchema, type RecommendForm } from "./schemas";

export default function Recommend() {
  const { setHeaderContent } = useHeader();
  const [progress, setProgress] = useState(25);
  const [step, setStep] = useState(1);

  const handleIncreaseProgress = () => {
    setProgress((p) => Math.min(p + 25, 100))
    setStep((s) => Math.min(s + 1, 4));
  }

  useEffect(() => {
    setHeaderContent(
      <div className="flex items-center pr-4">
        <Progress className="mr-4" value={progress} />
        <p>{step}/{4}</p>
      </div>
    );
    return () => setHeaderContent(null);
  }, [setHeaderContent, progress]);

  // 각 단계별 폼
  return (
    <div>
      
    </div>
  );
}