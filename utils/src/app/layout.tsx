// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '🔧 유틸 도구 모음',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-100 text-gray-800">
        <nav className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold">🛠 도구 모음</div>
            <div className="space-x-4 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/hex-encoder" className="hover:underline">Hex Encoder</Link>
              <Link href="/hex-decoder" className="hover:underline">Hex Decoder</Link>
              <Link href="/diff" className="hover:underline">Diff Checker</Link>
              {/* 필요시 더 추가 */}
            </div>
          </div>
        </nav>
        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
