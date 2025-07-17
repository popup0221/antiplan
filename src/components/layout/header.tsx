'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useHeader } from './contexts/HeaderContext';

export default function Header() {
  const header = useHeader();
  const router = useRouter();

  const pathname = usePathname();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <header className="flex h-14 w-full items-center">
      {pathname !== '/' && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBack}
        >
          <Image
            className="dark:invert"
            src="/chevron.svg"
            alt="뒤로가기"
            width={24}
            height={24}
          />
          <Header />
        </Button>
      )}
    </header>
  );
}
