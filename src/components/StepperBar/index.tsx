import React from 'react';
import { IStep } from '../../interfaces/iStep';
import { StepContainer } from '../StepContainer';

export const StepperBar: React.FC<IStep> = ({ step }) => (
  <div className="col-span-4 bg-cyan-400 rounded-lg p-3">
    <p>Stepper Bar {step}</p>
    <StepContainer number={1} subtitle="your info" />
    <StepContainer number={2} subtitle="select plan" />
    <StepContainer number={3} subtitle="add-ons" />
    <StepContainer number={4} subtitle="summary" />
  </div>
);
