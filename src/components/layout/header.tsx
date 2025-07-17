'use client';

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useHeader } from './contexts/HeaderContext';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { headerContent } = useHeader();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <header className="flex h-full w-full items-center">
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
        </Button>
      )}
      {headerContent}
    </header>
  );
}
