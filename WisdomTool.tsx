
import React, { useState } from 'react';
import { Sparkles, RefreshCcw } from 'lucide-react';
import { BOOK_DETAILS } from '../constants';

export const WisdomTool: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getNextInsight = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % BOOK_DETAILS.insights.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-10 flex flex-col h-full border border-black/5 shadow-sm group">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#E65100]/10 rounded-xl flex items-center justify-center">
            <Sparkles size={16} className="text-[#E65100]" />
          </div>
          <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-black/30">Insight Generator</h3>
        </div>
        <button 
          onClick={getNextInsight}
          className="p-2 hover:bg-[#F4F3F0] rounded-xl transition-colors text-black/30 hover:text-[#E65100]"
          title="Refresh Principle"
        >
          <RefreshCcw size={18} className={isAnimating ? 'animate-spin' : 'group-hover:rotate-45 transition-transform'} />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <p className="text-2xl font-black leading-tight mb-6">
            "{BOOK_DETAILS.insights[index]}"
          </p>
          <p className="text-[10px] font-black tracking-widest text-[#E65100] uppercase">Principle {index + 1} / Flow Architecture</p>
        </div>
      </div>
    </div>
  );
};
