import React from 'react';
import { IStep } from '../../interfaces/iStep';

export const StepperBar: React.FC<IStep> = ({ step }) => (
  <div className="col-span-4">
    <p>Stepper Bar {step}</p>
  </div>
);
