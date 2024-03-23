import React from 'react';

const FoodieParadise = () => {
  return (
    <div className="w-full flex items-center justify-center my-4 py-5" style={{ backgroundColor: '#D3D3D3' }}>
      <div className="w-1/2 flex flex-col items-center justify-center p-3">
        <span className="text-7xl font-bold" style={{ fontFamily: "'Snell Roundhand', cursive", color: 'orange' }}>Foodie Paradise</span>
        <p className="text-4xl text-center"> For food lovers, where they can discover new recipes and cooking
            techniques while enjoying a sense of belonging.</p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src="/image_processing20191001-28305-gdm0ip.gif" className="rounded-3" style={{ width: '530px' }} />
      </div>
    </div>
  );
};

export default FoodieParadise;
