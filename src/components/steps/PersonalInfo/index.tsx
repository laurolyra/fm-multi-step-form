import React, { useContext } from 'react';
import { FormInfoContext } from '../../../context/FormInfoContext';

export const PersonalInfo = () => {
  const { step, setStep } = useContext(FormInfoContext);

  return (
    <section>
      <div>
        <h1>Personal Info</h1>
        <h4 className="text-gray-400">
          Please provide your name, email addres, and phone number
        </h4>
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border-2 border-gray-300 p-2 w-80"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-600">
          Email Address
        </label>
        <input type="text" id="name" className="w-80" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-600">
          Phone Number
        </label>
        <input type="text" id="name" className="w-80" />
      </div>
    </section>
  );
};
