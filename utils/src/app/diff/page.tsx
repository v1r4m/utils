'use client';

import { useState } from 'react';
import { diffLines } from 'diff';

export default function TextDiffViewer() {
  const [original, setOriginal] = useState('');
  const [modified, setModified] = useState('');

  const getDiff = () => {
    return diffLines(original, modified);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center overflow-auto px-4 py-12">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📝 Text Diff Checker</h1>

          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <textarea
              value={original}
              onChange={(e) => setOriginal(e.target.value)}
              placeholder="원본 텍스트"
              className="w-full lg:w-1/2 h-64 lg:h-80 p-3 rounded-lg border border-gray-300 resize-y font-mono"
            />
            <textarea
              value={modified}
              onChange={(e) => setModified(e.target.value)}
              placeholder="변경된 텍스트"
              className="w-full lg:w-1/2 h-64 lg:h-80 p-3 rounded-lg border border-gray-300 resize-y font-mono"
            />
          </div>

          <div className="w-full bg-gray-50 p-6 rounded-lg shadow-inner font-mono text-sm whitespace-pre-wrap overflow-auto max-h-[60vh]">
            {getDiff().map((part, index) => {
              const className = part.added
                ? 'bg-green-100 text-green-800'
                : part.removed
                ? 'bg-red-100 text-red-800'
                : '';
              return (
                <span key={index} className={className}>
                  {part.value}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
