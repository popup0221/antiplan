'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useHeader } from '../(contexts)/HeaderContext'; 

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { headerContent, handlePrevEvent } = useHeader();

  const onClickPrevEvent = () => {
    handlePrevEvent();

    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <header className="fixed flex w-full h-12 items-center justify-between">
      {pathname !== '/' && (
        <Button
          variant="ghost"
          onClick={onClickPrevEvent}
        >
          <Image
            className="dark:invert"
            src="/chevron.svg"
            alt="뒤로가기"
            width={24}
            height={24}
          />
        </Button>
      )}
      <div className='w-full'>
        {headerContent}
      </div>
    </header>
  );
}
