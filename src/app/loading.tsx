import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
        <p className="font-geist text-sm font-medium text-gray-500 uppercase tracking-widest animate-pulse">
          Memuat...
        </p>
      </div>
    </div>
  );
}
