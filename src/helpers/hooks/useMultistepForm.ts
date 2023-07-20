import { useState } from 'react';

type useMultistepFormPorps = {
  steps: React.ReactNode[];
};

export const useMultistepForm = ({ steps }: useMultistepFormPorps) => {
  const [currentStep, setCurrentStep] = useState(1);

  return {
    currentStep,
    step: steps[currentStep],
  };
};