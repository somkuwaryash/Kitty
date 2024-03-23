// pages/DiscoverRestaurants.js
import React from 'react';

const DiscoverRestaurants = () => {
  return (
    <div className="w-full flex items-center justify-center my-4">
      <div className="w-1/2 flex flex-col items-center justify-center p-3">
        <p className="text-5xl font-bold">Discover the best<br/> restaurants near you</p>
        <p className="text-3xl text-secondary text-center">Dine Delights, Time Takes Flight: Book or Order, Your
            Culinary Journey Awaits! Unwind and Create
            Unforge table Moments</p>
      </div>
      <div className="w-1/2 flex items-center justify-center gap-5">
        <div className="flex flex-col gap-5">
          <button className="flex items-center justify-center border px-4 py-2 rounded-5 text-3xl">Book a table</button>
          <button className="flex items-center justify-center border px-4 py-2 rounded-5 text-3xl">Order Now</button>
          <button className="flex items-center justify-center border px-4 py-2 rounded-5 text-3xl">Vegetarian</button>
        </div>
        <div className="flex flex-col gap-5">
          <button className="flex items-center justify-center border px-4 py-2 rounded-5 text-3xl">Vegan</button>
          <button className="flex items-center justify-center border px-4 py-2 rounded-5 text-3xl">Non-Vegetarian</button>
          <button className="flex items-center justify-center border px-4 py-2 rounded-5 text-3xl">Desserts</button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverRestaurants;
