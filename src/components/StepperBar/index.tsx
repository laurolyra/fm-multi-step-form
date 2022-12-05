import React, { useContext } from 'react';
import { FormInfoContext } from '../../context/FormInfoContext';
// import { IStep } from '../../interfaces/iStep';
import { StepContainer } from '../StepContainer';

export const StepperBar = () => {
  const { step } = useContext(FormInfoContext);

  return (
    <div className="col-span-4 bg-cyan-400 rounded-lg p-3 max-w-[24rem]">
      <StepContainer number={1} step={step} subtitle="your info" />
      <StepContainer number={2} step={step} subtitle="select plan" />
      <StepContainer number={3} step={step} subtitle="add-ons" />
      <StepContainer number={4} step={step} subtitle="summary" />
    </div>
  );
};
