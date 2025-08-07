"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { base as baseLiterals } from "../literals";
import type { Base } from "../schemas";

interface Props {
  onNext: (base: Base) => void;
}

export default function BaseStep({ onNext }: Props) {
  const [selectedBase, setSelectedBase] = useState<Base | null>(null);

  const baseOptions = Object.entries(baseLiterals) as [Base, string][];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">선호하는 기주를 선택해주세요.</h1>
        <p className="text-gray-500">하나만 선택할 수 있어요.</p>
      </div>

      <RadioGroup
        value={selectedBase ?? ""}
        onValueChange={(value) => setSelectedBase(value as Base)}
        className="grid grid-cols-2 gap-4"
      >
        {baseOptions.map(([value, label]) => (
          <Label
            key={value}
            htmlFor={value}
            className={cn(
              "flex h-20 cursor-pointer items-center justify-center rounded-md text-center text-base bg-primary hover:bg-accent hover:text-accent-foreground",
              selectedBase === value && "border border-white text-primary-foreground",
            )}
          >
            <RadioGroupItem value={value} id={value} className="sr-only" />
            {label}
          </Label>
        ))}
      </RadioGroup>

      <Button
        className="fixed bottom-10 left-0 right-0 w-[90%] h-12 mx-auto rounded-md text-lg"
        size="lg"
        onClick={() => selectedBase && onNext(selectedBase)}
        disabled={!selectedBase}
      >
        다음
      </Button>
    </div>
  );
}