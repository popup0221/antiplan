"use client";

import { useFunnel } from "@use-funnel/browser";
import type { 맛선택, 메모입력, 주종선택, 도수선택 } from "../context";
import { 맛선택_Schema, 메모입력_Schema, 주종선택_Schema, 도수선택_Schema } from "../schemas";
import AlcoholStep from "./AlcoholStep";
import MemoStep from "./MemoStep";
import TasteStep from "./TasteStep";
import ProofStep from "./ProofStep";

interface FunnelProps {
  onStepChange: () => void;
}

export default function Funnel({ onStepChange }: FunnelProps) {
  const funnel = useFunnel<{
    주종선택: 주종선택;
    // 경험선택: 경험선택;
    도수선택: 도수선택;
    맛선택: 맛선택;
    메모입력: 메모입력;
  }>({
    id: "recommend alcohol",
    steps: {
      주종선택: { parse: 주종선택_Schema.parse },
      // 경험선택: { parse: 경험선택_Schema.parse },
      도수선택: { parse: 도수선택_Schema.parse },
      맛선택: { parse: 맛선택_Schema.parse },
      메모입력: { parse: 메모입력_Schema.parse },
    },
    initial: {
      step: "주종선택",
      context: {},
    },
  });

  const handleSubmit = (context: 메모입력) => {
    alert(`추천 요청이 완료되었습니다:\n${JSON.stringify(context, null, 2)}`);
  };

  return (
    <funnel.Render
      주종선택={({ history }) => (
        <AlcoholStep
          onNext={(alcohol) => {
            onStepChange();
            history.push("도수선택", { alcohol });
          }}
        />
      )}

      // 경험선택={({ history }) => (
      //   <ExperienceStep
      //     onNext={(experience) => {
      //       onStepChange();
      //       history.push("도수선택", { experience });
      //     }}
      //   />
      // )}

      도수선택={({ history }) => (
        <ProofStep
          onNext={(proof) => {
            onStepChange();
            history.push("맛선택", { proof });
          }}
        />
      )}

      맛선택={({ history }) => (
        <TasteStep
          onNext={(taste) => {
            onStepChange();
            history.push("메모입력", { taste });
          }}
        />
      )}

      메모입력={({ context }) => (
        <MemoStep onSubmit={(memo) => handleSubmit({ ...context, memo })} />
      )}
    />
  )

}
