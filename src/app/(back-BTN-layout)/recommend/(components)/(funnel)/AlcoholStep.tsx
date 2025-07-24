'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { Alcohol } from './schemas';
import { alcohol as alcoholLiterals } from './literals';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  onNext: (alcohol: Alcohol) => void;
}

export default function AlcoholStep({ onNext }: Props) {
  const [selectedAlcohol, setSelectedAlcohol] = useState<Alcohol | null>(null);

  const alcoholOptions = Object.entries(alcoholLiterals) as [Alcohol, string][];

  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">어떤 주종을 추천해드릴까요?</h1>
        <p className="text-gray-500">하나를 선택해주세요.</p>
      </div>

      <RadioGroup
        value={selectedAlcohol ?? ''}
        onValueChange={(value) => setSelectedAlcohol(value as Alcohol)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {alcoholOptions.map(([value, label]) => (
          <Label
            key={value}
            htmlFor={value}
            className={cn(
              'flex h-24 cursor-pointer items-center justify-center rounded-md text-lg bg-primary hover:bg-accent hover:text-accent-foreground',
              selectedAlcohol === value && 'border border-white text-primary-foreground',
            )}
          >
            <RadioGroupItem value={value} id={value} className="sr-only" />
            {label}
          </Label>
        ))}
      </RadioGroup>

      <Button className="fixed bottom-10 left-0 right-0 w-[90%] h-12 mx-auto" size="lg" onClick={() => selectedAlcohol && onNext(selectedAlcohol)} disabled={!selectedAlcohol}>
        다음
      </Button>
    </div>
  );
}
