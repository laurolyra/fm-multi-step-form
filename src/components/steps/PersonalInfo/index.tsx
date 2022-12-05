import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormInfoContext } from '../../../context/FormInfoContext';

export const PersonalInfo = () => {
  const { user } = useContext(FormInfoContext);
  const { register } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });
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
          <label htmlFor="name" className="text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="custom-text-input"
            defaultValue={user.name}
            {...register('name', { required: true, pattern: /[^a-zA-Z0-9]/ })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-600">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className="custom-text-input"
            defaultValue={user.email}
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
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
            defaultValue={user.phone}
            {...register('phone', {
              required: true,
              pattern: /^(\+|00)[1-9][0-9 \-().]{7,32}$/,
            })}
          />
        </div>
      </div>
    </section>
  );
};
