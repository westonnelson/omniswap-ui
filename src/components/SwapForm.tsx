// src/components/SwapForm.tsx
import React from 'react';
import Image from 'next/image';

const SwapForm: React.FC = () => {
    return (
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-between mb-4">
          <button className="bg-secondary text-black py-2 px-4 rounded">Swap</button>
          <button className="bg-gray-700 text-white py-2 px-4 rounded">Limit</button>
        </div>
        <div className="bg-gray-700 p-4 rounded mb-4">
          <input
            type="number"
            placeholder="0"
            className="bg-transparent border-none w-full text-2xl text-white"
          />
          <div className="flex justify-between items-center mt-2">
            <span>Balance: 0</span>
            <span className="text-secondary">USDC</span>
          </div>
        </div>
        <div className="text-center text-2xl text-white my-4">↓</div>
        <div className="bg-gray-700 p-4 rounded mb-4">
          <input
            type="number"
            placeholder="0"
            className="bg-transparent border-none w-full text-2xl text-white"
          />
          <div className="flex justify-between items-center mt-2">
            <span>Balance: 0</span>
            <span className="text-secondary">OMNIS</span>
          </div>
        </div>
        <button className="bg-secondary text-black py-2 px-4 rounded w-full">Swap</button>
      </div>
    );
  };
  
  export default SwapForm;