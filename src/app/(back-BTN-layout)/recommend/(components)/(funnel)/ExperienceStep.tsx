'use client';

import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import type { Experience } from './schemas';
import { experience as experienceLiterals } from './literals';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props {
  onNext: (experience: Experience) => void;
}

export default function ExperienceStep({ onNext }: Props) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experienceOptions = Object.entries(experienceLiterals) as [Experience, string][];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">음주 경험이 어느 정도 되시나요?</h1>
        <p className="text-gray-500">하나를 선택해주세요.</p>
      </div>

      <RadioGroup
        value={selectedExperience ?? ''}
        onValueChange={(value) => setSelectedExperience(value as Experience)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {experienceOptions.map(([value, label]) => (
          <Label
            key={value}
            htmlFor={value}
            className={cn(
              'flex h-24 cursor-pointer items-center justify-center rounded-md text-lg bg-primary hover:bg-accent hover:text-accent-foreground',
              selectedExperience === value && 'border border-white text-primary-foreground hover:bg-primary/90',
            )} 
          >
            <RadioGroupItem value={value} id={value} className="sr-only" />
            {label}
          </Label>
        ))}
      </RadioGroup>

      <Button className="relative bottom-0" size="lg" onClick={() => selectedExperience && onNext(selectedExperience)} disabled={!selectedExperience}>
        다음
      </Button>
    </div>
  );
}