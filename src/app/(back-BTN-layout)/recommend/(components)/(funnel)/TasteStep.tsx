'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { Taste } from './schemas';
import { taste as tasteLiterals } from './literals';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  onNext: (tastes: Taste[]) => void;
}

export default function TasteStep({ onNext }: Props) {
  const [selectedTastes, setSelectedTastes] = useState<Taste[]>([]);

  const tasteOptions = Object.entries(tasteLiterals) as [Taste, string][];

  const handleToggleTaste = (taste: Taste) => {
    setSelectedTastes((prev) =>
      prev.includes(taste) ? prev.filter((t) => t !== taste) : [...prev, taste],
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">선호하는 맛을 선택해주세요.</h1>
        <p className="text-gray-500">여러 개 선택할 수 있어요.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {tasteOptions.map(([value, label]) => (
          <Label
            key={value}
            htmlFor={value}
            className={cn(
              'flex h-24 cursor-pointer items-center justify-center rounded-md text-lg bg-primary hover:bg-accent hover:text-accent-foreground',
              selectedTastes.includes(value) && 'border border-white text-primary-foreground hover:bg-primary/90',
            )}
          >
            <Checkbox id={value} onCheckedChange={() => handleToggleTaste(value)} checked={selectedTastes.includes(value)} className="sr-only" />
            {label}
          </Label>
        ))}
      </div>

      <Button className="relative bottom-0" size="lg" onClick={() => onNext(selectedTastes)} disabled={selectedTastes.length === 0}>
        다음
      </Button>
    </div>
  );
}