'use client';
import React, { useState } from 'react';

const curlPython = () => {
  const [input, setInput] = useState('');
  const [converted, setConverted] = useState('');

  const handleConvert = () => {
    setConverted(input.toUpperCase());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Curl Python</h1>
      <p className="mb-4">This is the curl python page.</p>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="border border-gray-200 p-2 rounded mb-4"
      />
      <button 
        onClick={handleConvert} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Convert
      </button>
      <textarea 
        readOnly 
        value={converted} 
        className="border border-gray-200 p-2 rounded w-full h-32"
      />
    </div>
  );
};

export default curlPython;