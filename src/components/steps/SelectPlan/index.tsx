import React from 'react';

export const SelectPlan = () => (
  <section className="container px-3">
    <div>
      <h1>Select your plan</h1>
      <h4 className="text-gray-400">
        you have the option of monthly or yearly billing
      </h4>
    </div>
    <div className="flex justify-around">
      <div>
        <p>Arcade</p>
      </div>
      <div>
        <p>Advanced</p>
      </div>
      <div>
        <p>Pro</p>
      </div>
    </div>
    {/* <label
      className="form-check-label inline-block text-gray-800"
      htmlFor="flexSwitchCheckDefault"
    >
      Default switch checkbox input
    </label>
    <input
      className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
    /> */}
    <div>
      <p>Monthly</p>
      <p>Yearly</p>
    </div>
    <div>
      <button>Go Back</button>
      <button>Next Step</button>
    </div>
  </section>
);
