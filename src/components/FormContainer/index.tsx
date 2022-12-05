import React, { useContext } from 'react';
import { StepScreenManager } from '../StepScreenManager';
import { StepperBar } from '../StepperBar';
import { FormInfoContext } from '../../context/FormInfoContext';

export const FormContainer = () => {
  const {step, setStep} = useContext(FormInfoContext);
  // const [formDados, setFormDados] = useState({
  //   name: 'name',
  //   address: 'address',
  // });

  // const handleChangeDados = (key, value) =>
  //   setFormDados({ ...formDados, [key]: value });

  return (
    <div className="w-full py-6 px-4 container bg-white grid grid-cols-12 gap-1 max-w-4xl shadow-xl rounded-2xl">
      <StepperBar />
      <StepScreenManager />
      <button
        style={{ width: '20px', height: '20px', background: "aquamarine" }}
        onClick={() => setStep(step + 1)}
      />
    </div>
  );
};
