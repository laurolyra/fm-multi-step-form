import React from 'react';

export const FinishingUp = () => (
  <section className="container px-3">
    <div>
      <h1>Finishing up</h1>
      <h4 className="text-gray-400">
        Double-check everything looks OK before confirming.
      </h4>
    </div>
    <div className="flex flex-col">
      <div>
        <p>Service checked (yearly or monthly)</p>
        <a>Change</a>
        <p>price</p>
      </div>
      <hr />
      <div>
        <p>Other services</p>
        <p>price for each service</p>
      </div>
    </div>
    <div>
      <p>Total (per year/per month)</p>
      <p>Price (per year/per month)</p>
    </div>
  </section>
);
