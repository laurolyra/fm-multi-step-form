import React, { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInfoContext } from '../../context/FormInfoContext';
import { FinishingUp } from '../steps/FinishingUp';
import { PersonalInfo } from '../steps/PersonalInfo';
import { PickAddons } from '../steps/PickAddons';
import { SelectPlan } from '../steps/SelectPlan';
import { SuccessSignUp } from '../steps/SuccessSignUp';
import { DevTool } from '@hookform/devtools';

export const StepScreenManager = () => {
  const { step, user, setStep } = useContext(FormInfoContext);
  const methods = useForm({
    defaultValues: {
      name: user.name,
    },
  });
  const onSubmit = (data: object) => console.log(data);

  const handleStep = async () => {
    // const stepValidation = {
    //   0: ['name', 'email', 'phone'],
    // }
    // const isValid = await trigger(['name', 'email', 'phone']);
    // console.log('isValid', isValid);
    // if (isValid) {
    setStep(step + 1);
    // }
    console.log('handle');
  };

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
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col justify-between col-span-8 h-[64vh] px-[4rem]"
      >
        {changeScreen()}
        <div className="flex justify-between">
          {step > 0 && step < 4 ? (
            <button className={``} onClick={() => setStep(step - 1)}>
              Go Back
            </button>
          ) : null}
          {step < 3 ? (
            <button type="button" onClick={handleStep}>
              Next Step
            </button>
          ) : null}
          {step === 3 ? <button type="submit">Confirm</button> : null}
        </div>
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};
