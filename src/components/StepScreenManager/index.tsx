import React from 'react';
import { IStep } from '../../interfaces/iStep';
import { FinishingUp } from '../steps/FinishingUp';
import { PersonalInfo } from '../steps/PersonalInfo';
import { PickAddons } from '../steps/PickAddons';
import { SelectPlan } from '../steps/SelectPlan';

export const StepScreenManager: React.FC<IStep> = ({ step }) => {
  const changeScreen = () => {
    switch (step) {
      case 0:
        return <PersonalInfo />;
      case 1:
        return <SelectPlan />;
      case 2:
        return <PickAddons />;
      case 3:
        return <FinishingUp />;
      default:
        return <p>not found</p>;
    }
  };

  return (
    <section className="flex flex-col border-solid border border-green-500 col-span-8">
      {changeScreen()}
    </section>
  );
};
