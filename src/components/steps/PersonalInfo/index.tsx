import React from 'react';

export const PersonalInfo = () => (
  <section className="flex flex-col h-full">
    <div className="mb-5">
      <h2 className="font-bold">Personal Info</h2>
      <h4 className="text-gray-400">
        Please provide your name, email addres, and phone number
      </h4>
    </div>
    <div className='flex flex-col h-60 justify-between'>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-600">
          Name
        </label>
        <input type="text" id="name" className="custom-text-input" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-600">
          Email Address
        </label>
        <input type="text" id="email" className="custom-text-input" />
      </div>
      <div className="flex flex-col">
        <div className='flex justify-between w-full'>
          <label htmlFor="phone" className="text-gray-600">
            Phone Number
          </label>
          <p>this field is required</p>
        </div>
        <input type="text" id="phone" className="custom-text-input" />
      </div>
    </div>
  </section>
);
