'use client';

import { useState, useEffect } from 'react';
import { diffLines } from 'diff';

export default function TextDiffViewer() {
  const [original, setOriginal] = useState('');
  const [modified, setModified] = useState('');
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // URL 파라미터에서 데이터 로드
    const params = new URLSearchParams(window.location.search);
    const originalParam = params.get('original');
    const modifiedParam = params.get('modified');

    if (originalParam && modifiedParam) {
      try {
        setOriginal(decodeURIComponent(atob(originalParam)));
        setModified(decodeURIComponent(atob(modifiedParam)));
      } catch (e) {
        console.error('Invalid URL parameters');
      }
    }
  }, []);

  const getDiff = () => {
    return diffLines(original, modified);
  };

  const generateShareUrl = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
      original: btoa(encodeURIComponent(original)),
      modified: btoa(encodeURIComponent(modified))
    });
    setShareUrl(`${baseUrl}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center overflow-auto px-4 py-12">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">📝 Text Diff Checker</h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-gray-400 text-sm">Powered by</span>
            <span className="text-black-500 font-semibold text-sm">Viram</span>
          </div>

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

          <div className="flex justify-center mb-4">
            <button
              onClick={generateShareUrl}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              공유 링크 생성
            </button>
          </div>

          {shareUrl && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">공유 링크:</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    alert('링크가 클립보드에 복사되었습니다!');
                  }}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  복사
                </button>
              </div>
            </div>
          )}

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
