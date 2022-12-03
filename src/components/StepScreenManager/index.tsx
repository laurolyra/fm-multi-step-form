import React from 'react';
import { IStep } from '../../interfaces/iStep';

export const StepScreenManager: React.FC<IStep> = ({ step }) => (
  <div className="col-span-8">
    <p>Step Screen Manager {step}</p>
  </div>
);
