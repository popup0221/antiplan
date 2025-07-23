'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  onSubmit: (memo?: string) => void;
}

export default function MemoStep({ onSubmit }: Props) {
  const [memo, setMemo] = useState('');

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">추가적인 요청사항이 있나요?</h1>
        <p className="text-gray-500">자유롭게 작성해주세요. (선택사항)</p>
      </div>

      <Textarea
        placeholder="예: 너무 비싸지 않았으면 좋겠어요."
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        className="min-h-[150px] text-base"
      />

      <Button
        className="relative bottom-0"
        size="lg"
        onClick={() => onSubmit(memo || undefined)}
      >
        추천 받기
      </Button>
    </div>
  );
}
