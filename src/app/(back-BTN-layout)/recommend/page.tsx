"use client";

import { useCallback, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { useHeader } from "../(contexts)/HeaderContext";
import Funnel from "./(funnel)/(components)/Funnel";

export default function Recommend() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);
  const { setHeaderContent, setHandlePrevEvent } = useHeader();

  const handlePrev = useCallback(() => {
    setProgress((p) => Math.max(p - 25, 0));
    setStep((s) => Math.max(s - 1, 0));
  }, []);

  useEffect(() => {
    setHandlePrevEvent(() => handlePrev);

    return () => {
      setHandlePrevEvent(() => () => {});
    };
  }, [setHandlePrevEvent, handlePrev]);
  
  useEffect(() => {
    setHeaderContent(
      <div className="flex items-center pr-4">
        <Progress className="mr-4" value={progress} />
        <p>
          {step}/{5}
        </p>
      </div>,
    );

    return () => {
      setHeaderContent(null);
    }
  }, [setHeaderContent, progress, step]);

  const handleIncreaseProgress = () => {
    setProgress((p) => Math.min(p + 25, 100));
    setStep((s) => Math.min(s + 1, 4));
  };
  
  return (
    <div className="mt-4 h-full">
      <Funnel onStepChange={handleIncreaseProgress} />
    </div>
  );
}
