// components/OnboardingFunnel.tsx
'use client'

import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFunnel } from "@use-funnel/next"
import { onboardingSchema, OnboardingFormData } from "../schemas"

import Step1Alcohol from "./Step1Alcohol"
import Step2Experience from "./Step2Experience"
import Step3Taste from "./Step3Taste"
import Step4Memo from "./Step4Memo"

const steps = ["alcohol", "experience", "taste", "memo"] as const

export default function OnboardingFunnel() {
  const { Funnel, Step, next, back, step } = useFunnel(steps)
  const methods = useForm<OnboardingFormData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      alcohol: "",
      experience: undefined,
      taste: [],
      memo: "",
    },
    mode: "onChange",
  })

  const onSubmit = methods.handleSubmit((data) => {
    console.log("최종 제출:", data)
  })

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Funnel>
          <Step name="alcohol"><Step1Alcohol next={next} /></Step>
          <Step name="experience"><Step2Experience next={next} back={back} /></Step>
          <Step name="taste"><Step3Taste next={next} back={back} /></Step>
          <Step name="memo"><Step4Memo back={back} /></Step>
        </Funnel>
      </form>
    </FormProvider>
  )
}
