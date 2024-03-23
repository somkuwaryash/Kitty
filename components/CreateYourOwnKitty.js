import React from 'react';

const CreateYourOwnKitty = () => {
  return (
    <div className="flex items-center justify-center py-4" style={{ backgroundColor: '#D3D3D3' }}>
      <div className="w-1/2 flex items-center justify-center">
        <span className="text-5xl font-bold px-3 py-4">Create your own<br/> kitty for people to<br/> join</span>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <a href="#" className="flex w-1/4 items-center justify-center border border-warning p-2 rounded-5 text-decoration-none font-bold text-dark gap-1 border-3">Create a Kitty</a>
      </div>
    </div>
  );
};

export default CreateYourOwnKitty;
