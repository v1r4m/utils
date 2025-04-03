'use client';

import { useState } from "react";

export default function HexEncoder() {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");

  const encodeToHex = (text: string) => {
    return (
      "0x" +
      Array.from(text)
        .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
        .join("")
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setInput(text);
    setEncoded(encodeToHex(text));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">🔡 Hex Encoder</h1>
        
        <label htmlFor="input" className="block text-sm font-medium text-gray-700 mb-1">
          문자열을 입력하세요
        </label>
        <input
          id="input"
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="예: admin"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
        />

        <div>
          <h2 className="text-sm font-medium text-gray-700 mb-1">✨ Hex 결과</h2>
          <div className="bg-gray-100 text-sm font-mono p-3 rounded-md break-words">
            {encoded || <span className="text-gray-400">변환된 값이 여기에 나타나요</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
