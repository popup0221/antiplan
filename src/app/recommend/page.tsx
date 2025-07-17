'use client';

import { useEffect } from "react";
import { useHeader } from "@/components/layout/contexts/HeaderContext";

export default function Recommend() {
  const { setHeaderContent } = useHeader();

  useEffect(() => {
    setHeaderContent(<span>추천받기 페이지</span>);
    return () => setHeaderContent(null); // 언마운트 시 초기화
  }, [setHeaderContent]);

  return <div>추천받기 페이지 내용</div>;
}