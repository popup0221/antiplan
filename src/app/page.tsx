'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center h-full">
      <span className="text-sm text-gray-400 h-4">
        No plan ? Anti plan!
      </span>
  
      <div className="flex flex-row-reverse relative h-40 gap-2 my-56">
        <span className="text-white text-xl font-semibold leading-relaxed text-start writing-vertical-rl text-orientation-mixed">
          계획없이 사는
        </span>
        <span className="text-white text-xl font-semibold leading-relaxed text-end writing-vertical-rl text-orientation-mixed">
          계획을 세우자
        </span>
        <div className="absolute flex flex-col gap-1 items-center text-center -bottom-14 -left-14">
          <span className="text-gray-400 text-sm writing-vertical-rl">안티플랜</span>
          <Image
            className="dark:invert"
            src="/stamp.svg"
            alt="테스트 도장"
            width={19}
            height={19}
          />
        </div>
      </div>

      <div className="flex h-14 mt-20 w-full items-center justify-center gap-3">
        <Button variant="ghost" onClick={() => router.push('/recommend')}>
          추천받기
        </Button>
        <Button variant="ghost" onClick={() => router.push('/order')}>
          주문하기
        </Button>
      </div>
    </div>
  );
}
