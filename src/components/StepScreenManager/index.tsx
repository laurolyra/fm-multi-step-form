import React, { useContext } from 'react';
import { FormInfoContext } from '../../context/FormInfoContext';
import { FinishingUp } from '../steps/FinishingUp';
import { PersonalInfo } from '../steps/PersonalInfo';
import { PickAddons } from '../steps/PickAddons';
import { SelectPlan } from '../steps/SelectPlan';
import { SuccessSignUp } from '../steps/SuccessSignUp';

export const StepScreenManager = () => {
  const { step, setStep } = useContext(FormInfoContext);

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
      case 4:
        return <SuccessSignUp />;
      default:
        return <p>not found</p>;
    }
  };

  return (
    <section className="flex flex-col justify-between col-span-8 min-h-[60vh] px-5">
      {changeScreen()}
      <div className="flex justify-between">
        {step > 0 && step < 4 ? (
          <button className={``} onClick={() => setStep(step - 1)}>Go Back</button>
        ) : null}
        {step <= 3 ? (
          <button type="button" onClick={() => setStep(step + 1)}>
            Next Step
          </button>
        ) : null}
      </div>
    </section>
  );
};
