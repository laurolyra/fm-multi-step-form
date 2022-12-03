import React from 'react';

export const StepContainer = ({ number, subtitle }) => (
  <div className="flex items-center gap-4">
    <div className="rounded-full bg-white flex justify-center rounded-full h-12 w-12 m-2">
      <h4 className="my-auto">{number}</h4>
    </div>
    <div className="flex flex-col">
      <h4>STEP {number}</h4>
      <h5>{subtitle}</h5>
    </div>
  </div>
);
