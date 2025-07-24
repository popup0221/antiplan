'use client';

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useHeader } from "../(contexts)/HeaderContext";
import Funnel from "./(components)/(funnel)/Funnel";

export default function Recommend() {
  const { setHeaderContent } = useHeader();
  const [progress, setProgress] = useState(25);
  const [step, setStep] = useState(1);

  const handleIncreaseProgress = () => {
    setProgress((p) => Math.min(p + 25, 100));
    setStep((s) => Math.min(s + 1, 4));
  };

  const handleDecreaseProgress = () => {
    setProgress((p) => Math.min(p - 25, 0));
    setStep((s) => Math.min(s - 1, 0));
  }

  useEffect(() => {
    setHeaderContent(
      <div className="flex items-center pr-4">
        <Progress className="mr-4" value={progress} />
        <p>
          {step}/{4}
        </p>
      </div>,
    );
    return () => setHeaderContent(null);
  }, [setHeaderContent, progress, step]);

  return (
    <div className="mt-4">
      <Funnel onStepChange={handleIncreaseProgress} />
    </div>
  )
}
