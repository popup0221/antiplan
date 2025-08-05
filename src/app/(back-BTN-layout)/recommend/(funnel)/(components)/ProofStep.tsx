"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { proof as proofLiterals } from "../literals";
import type { Proof } from "../schemas";

interface Props {
  onNext: (proof: Proof) => void;
}

export default function ProofStep({ onNext }: Props) {
  const [selectedProof, setSelectedProof] = useState<Proof | null>(null);

  const proofOptions = Object.entries(proofLiterals) as [Proof, string][];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">선호하는 도수를 선택해주세요.</h1>
        <p className="text-gray-500">하나만 선택할 수 있어요.</p>
      </div>

      <RadioGroup
        value={selectedProof ?? ""}
        onValueChange={(value) => setSelectedProof(value as Proof)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {proofOptions.map(([value, label]) => (
          <Label
            key={value}
            htmlFor={value}
            className={cn(
              "flex h-24 cursor-pointer items-center justify-center rounded-md text-lg bg-primary hover:bg-accent hover:text-accent-foreground",
              selectedProof === value && "border border-white text-primary-foreground",
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
        onClick={() => selectedProof && onNext(selectedProof)}
        disabled={!selectedProof}
      >
        다음
      </Button>
    </div>
  );
}