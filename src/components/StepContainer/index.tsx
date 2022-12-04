import React from 'react';
import { IStepContainerProps } from './iStepContainerProps';

export const StepContainer = ({ number, step, subtitle }: IStepContainerProps) => (
  <div className="flex items-center gap-4">
    <div
      className={`rounded-full ${
        number === step + 1 ? 'bg-white animate-grow-down' : 'border-solid border border-white'
      } flex justify-center rounded-full h-12 w-12 m-2`}
    >
      <h4 className="my-auto">{number}</h4>
    </div>
    <div className="flex flex-col">
      <h4>STEP {number}</h4>
      <h5>{subtitle}</h5>
    </div>
  </div>
);
