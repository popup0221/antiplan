'use client';
import { createContext, useContext, useState } from 'react';

type HeaderContextType = {
  headerContent: React.ReactNode;
  setHeaderContent: (content: React.ReactNode) => void;
  handlePrevEvent: () => void;
  setHandlePrevEvent: (handler: () => void) => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [headerContent, setHeaderContent] = useState<React.ReactNode>(null);
  const [handlePrevEvent, setHandlePrevEvent] = useState<() => void | undefined>(() => {});

  return (
    <HeaderContext.Provider value={{ headerContent, setHeaderContent, handlePrevEvent, setHandlePrevEvent }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) throw new Error('useHeader must be used within a HeaderProvider');
  return context;
}