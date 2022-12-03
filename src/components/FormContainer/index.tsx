import React, { useState } from 'react';
import { StepScreenManager } from '../StepScreenManager';
import { StepperBar } from '../StepperBar';

export const FormContainer = () => {
  const [step, setStep] = useState<number>(0);
  // const [formDados, setFormDados] = useState({
  //   name: 'name',
  //   address: 'address',
  // });

  // const handleChangeDados = (key, value) =>
  //   setFormDados({ ...formDados, [key]: value });

  return (
    <div className="w-full py-6 px-4 container bg-white my-5 grid grid-cols-12 gap-1">
      <StepperBar step={step} />
      <StepScreenManager step={step} />
      <button
        style={{ width: '20px', height: '20px', background: "aquamarine" }}
        onClick={() => setStep(step + 1)}
      />
    </div>
  );
};
