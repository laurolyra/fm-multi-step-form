import React from 'react';
import { IStep } from '../../interfaces/iStep';

export const StepScreenManager: React.FC<IStep> = ({ step }) => {
  console.log('step', step)
  switch (step) {
    case 0:
      return <p>step 1</p>;
    case 1:
      return <p>step 2</p>;
    case 2:
      return <p>step 3</p>;
    default:
      return <p>not found</p>
  }
};
