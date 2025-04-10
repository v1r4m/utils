'use client';

import { useState } from 'react';

function parseHexChunks(hexString: string) {
  const chunks: string[] = [];

  // 0x 제거, 소문자 통일, 64자리 패딩
  let cleaned = hexString.replace(/^0x/, '').toLowerCase().padStart(64, '0');

  for (let i = 0; i < cleaned.length; i += 8) {
    chunks.push(cleaned.slice(i, i + 8));
  }

  return chunks.map((chunk, index) => {
    const bytes = Buffer.from(chunk, 'hex');
    const littleBytes = Buffer.from(bytes).reverse();

    const result: any = {
      index: index + 1,
      chunk: `0x${chunk}`,
      bigEndian: {
        unsigned: BigInt('0x' + chunk).toString(),
        signed: bytes.readInt32BE(0),
        float: bytes.readFloatBE(0),
      },
      littleEndian: {
        unsigned: littleBytes.readUInt32LE(0),
        signed: littleBytes.readInt32LE(0),
        float: littleBytes.readFloatLE(0),
      },
      ascii: (() => {
        try {
          return bytes.toString('ascii');
        } catch {
          return '[non-ascii]';
        }
      })(),
    };

    return result;
  });
}

export default function HexDecoder() {
  const [hexInput, setHexInput] = useState('');
  const chunks = parseHexChunks(hexInput);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center overflow-auto px-4 py-12">
      <div className="w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">🔍 Hex Decoder (4-Byte)</h1>

          <textarea
            value={hexInput}
            onChange={(e) => setHexInput(e.target.value)}
            placeholder="64자리 hex 입력 (예: 0xc6b00000c6550000...)"
            className="w-full h-32 p-3 rounded-lg border border-gray-300 resize-y font-mono mb-6"
          />

          <div className="space-y-6">
            {chunks.map((c, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg shadow-inner text-sm font-mono">
                <div className="font-bold text-blue-800 mb-2">Chunk {c.index}: {c.chunk}</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold text-gray-700">Big Endian</div>
                    <div>Unsigned Int : {c.bigEndian.unsigned}</div>
                    <div>Signed Int   : {c.bigEndian.signed}</div>
                    <div>Float        : {c.bigEndian.float}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">Little Endian</div>
                    <div>Unsigned Int : {c.littleEndian.unsigned}</div>
                    <div>Signed Int   : {c.littleEndian.signed}</div>
                    <div>Float        : {c.littleEndian.float}</div>
                  </div>
                </div>

                <div className="mt-2 text-gray-600">
                  ASCII (raw): <span className="text-black">{c.ascii}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
