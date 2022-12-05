import React from 'react';
import { StepScreenManager } from '../StepScreenManager';
import { StepperBar } from '../StepperBar';

export const FormContainer = () => {
  return (
    <div className="w-full py-6 px-4 container bg-white grid grid-cols-12 gap-1 max-w-4xl shadow-xl rounded-2xl">
      <StepperBar />
      <StepScreenManager />
    </div>
  );
};
