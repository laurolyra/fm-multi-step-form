import React, { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormInfoContext } from '../../../context/FormInfoContext';

export const PersonalInfo = () => {
  const { user, step, setStep } = useContext(FormInfoContext);
  const {
    register,
    trigger,
    setError,
    formState: { errors },
  } = useFormContext();

  const handleTrigger = async () => {
    let isValid = false;
    isValid = await trigger(['name', 'email', 'phone']);
    if (isValid) {
      setStep(step + 1);
      return;
    }
    // TODO: check typescript error on line 45 (commented)
    setError('name', {
      type: 'manual',
      message: 'Please provide a valid name',
    });
  };

  return (
    <section className="flex flex-col h-full">
      <div className="mb-5">
        <h2 className="font-bold">Personal Info</h2>
        <h4 className="text-gray-400">
          Please provide your name, email addres, and phone number.
        </h4>
      </div>
      <div className="flex flex-col h-60 justify-between">
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
            <label htmlFor="name" className="text-gray-600">
              <h5>Name</h5>
            </label>
            {errors['name'] ? <p>{String(errors.name.message)}</p> : null}
          </div>
          <input
            type="text"
            id="name"
            className="custom-text-input"
            defaultValue={user.name}
            {...register('name', {
              required: true,
              pattern: /(([a-zA-Z]){2,})+/,
            })}
          />
          {/* Source of the "unknown" solution: https://github.com/react-hook-form/react-hook-form/issues/8653#issuecomment-1179460739 */}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="custom-text-input"
            // defaultValue={user.email}
            {...register('email', {
              required: true,
              pattern: /^[^._-]([\w\d._]+)@([a-zA-Z0-9]+).([a-zA-Z0-9]+)/,
            })}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
            <label htmlFor="phone" className="text-gray-600">
              Phone Number
            </label>
            <p>this field is required</p>
          </div>
          <input
            type="text"
            id="phone"
            className="custom-text-input"
            // defaultValue={user.phone}
            {...register('phone', {
              required: true,
              pattern: /^(?:[()\s#-]*\d){10,11}$/,
            })}
          />
        </div>
      </div>
      <button type="button" onClick={handleTrigger}>
        {' '}
        Next_Component
      </button>
    </section>
  );
};
