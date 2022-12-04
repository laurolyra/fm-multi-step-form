import React from 'react';

export const PickAddons = () => (
  <section className="container px-3">
    <div>
      <h1>Pick add-ons</h1>
      <h4 className="text-gray-400">
        Add-ons help enhance your gaming experience.
      </h4>
    </div>
    <div className="flex flex-col">
      <div>
        <p>Online service</p>
      </div>
      <div>
        <p>Larger storage</p>
      </div>
      <div>
        <p>Customizable profile</p>
      </div>
    </div>
    <div>
      <button>Go Back</button>
      <button>Next Step</button>
    </div>
  </section>
);
