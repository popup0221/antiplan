'use client';

import { useFunnel } from "@use-funnel/browser";
import type { 주종선택, 경험선택, 맛선택, 메모입력 } from "./context";
import { 경험선택_Schema, 맛선택_Schema, 메모입력_Schema, 주종선택_Schema } from "./schemas";
import AlcoholStep from "./AlcoholStep";
import ExperienceStep from "./ExperienceStep";
import TasteStep from "./TasteStep";

export default function Funnel() {
  const funnel = useFunnel<{
    주종선택: 주종선택;
    경험선택: 경험선택;
    맛선택: 맛선택;
    메모입력: 메모입력;
  }>({
    id: "recommend alcohol",
    steps: {
      주종선택: { parse: 주종선택_Schema.parse },
      경험선택: { parse: 경험선택_Schema.parse },
      맛선택: { parse: 맛선택_Schema.parse },
      메모입력: { parse: 메모입력_Schema.parse },
    },
    initial: {
      step: "주종선택",
      context: {},
    },
  });

  switch (funnel.step) {
    case '주종선택': 
      return <AlcoholStep onNext={(alcohol) => funnel.history.push('경험선택', { alcohol })} />
    case '경험선택':
      return <ExperienceStep onNext={(experience) => funnel.history.push('맛선택', { experience })} />
    case '맛선택':
      return <TasteStep onNext={(taste) => funnel.history.push('메모입력', { taste })} />
    case '메모입력':
  }

}
