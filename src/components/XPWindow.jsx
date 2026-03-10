import { ReactNode, useState } from "react";

export function XPWindow({ title, children, className = "" }) {
  const [showContent, setShowContent] = useState(true);
  const toggleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      className={`flex flex-col bg-[#0d0d0d] rounded overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8)] border border-[#1a1a1a] ${className}`}
    >
      {/* Title Bar - Zune style gradient */}
      <div className="bg-gradient-to-b from-[#ff6600] via-[#ff6600] to-[#e65c00] px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm bg-white/90 shadow-sm flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#ff6600]"></div>
          </div>
          <span className="text-white font-semibold text-sm drop-shadow-md">
            {title}
          </span>
        </div>
        <div className="flex gap-1.5">
          <button
            className="w-6 h-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all flex items-center justify-center text-white text-xs font-bold rounded-sm border border-white/20"
            onClick={toggleShowContent}
          >
            <span className="mb-1">_</span>
          </button>
          <button
            className="w-6 h-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all flex items-center justify-center text-white text-xs font-bold rounded-sm border border-white/20"
            onClick={toggleShowContent}
          >
            □
          </button>
          <button
            className="w-6 h-6 bg-white/10 hover:bg-red-500 transition-all flex items-center justify-center text-white text-xs font-bold rounded-sm border border-white/20"
            onClick={toggleShowContent}
          >
            ×
          </button>
        </div>
      </div>

      {/* Window border highlight */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff8833]/50 to-transparent"></div>

      {/* Content */}
      {showContent && (
        <div className="flex-1 bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-white overflow-auto">
          {children}
        </div>
      )}

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#333]/30 to-transparent"></div>
    </div>
  );
}
