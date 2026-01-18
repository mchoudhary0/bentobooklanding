
import React from 'react';
import { Plus, Star, ArrowUpRight, BookOpen, Quote, Sparkles, ShoppingBag } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { WisdomTool } from './components/WisdomTool';
import { BOOK_DETAILS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F3F0] text-[#1A1A1B] selection:bg-[#E65100] selection:text-white p-6">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Nav */}
        <Navbar />

        {/* Mobile Header (Hidden on LG) */}
        <div className="lg:hidden flex items-center justify-between bg-[#1A1A1B] text-white p-6 rounded-[2rem] mb-2">
           <div className="w-8 h-8 rounded-full bg-[#E65100] flex items-center justify-center font-black text-[10px]">V.</div>
           <BookOpen size={20} />
        </div>

        {/* Main Bento Grid */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-12 grid-rows-auto gap-6">
          
          {/* HERO BLOCK (Row 1, Cols 1-8) */}
          <section className="md:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between border border-black/5 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-[#E65100]/10 text-[#E65100] px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Volume 01</span>
                <span className="text-[10px] font-bold text-black/30 tracking-widest uppercase">Philosophy of Momentum</span>
              </div>
              <h1 className="text-5xl md:text-[5rem] leading-[0.9] font-black tracking-tighter mb-8">
                INTENTIONAL <br />
                <span className="text-[#E65100]">FLOW</span> STATE.
              </h1>
              <p className="text-lg md:text-xl font-medium text-black/60 max-w-lg leading-relaxed">
                The architect's guide to effortless achievement. Sync your values with your daily velocity.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4 relative z-10">
              <button className="bg-[#1A1A1B] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-[#E65100] transition-all duration-300">
                Order Hardcover <Plus size={18} />
              </button>
              <button className="bg-[#F4F3F0] text-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition-all duration-300">
                Download PDF
              </button>
            </div>

            {/* Subtle Text Graphic */}
            <div className="absolute right-[-2%] top-[10%] opacity-[0.02] select-none rotate-90 origin-right">
              <span className="text-[12rem] font-black leading-none uppercase">Intent</span>
            </div>
          </section>

          {/* RATING BLOCK (Row 1, Cols 9-12) */}
          <section className="md:col-span-4 bg-[#E65100] text-white rounded-[2.5rem] p-10 flex flex-col justify-between border border-black/5 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Star size={24} fill="white" />
              </div>
              <div className="text-right">
                <p className="text-3xl font-black">{BOOK_DETAILS.rating}</p>
                <p className="text-[10px] font-bold opacity-60 tracking-widest uppercase">Avg Rating</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black leading-tight mb-2">Globally <br />Acclaimed.</h3>
              <p className="text-sm opacity-70">Over 2,400 readers have recalibrated their life's focus using the Vane Method.</p>
            </div>
          </section>

          {/* AUTHOR BLOCK (Row 2, Cols 1-3) */}
          <section className="md:col-span-3 bg-[#1A1A1B] text-white rounded-[2.5rem] p-8 flex flex-col items-center text-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#E65100] flex items-center justify-center mb-6 text-2xl font-black">AV</div>
            <p className="text-[10px] font-bold opacity-40 tracking-widest uppercase mb-1">Author</p>
            <h3 className="text-xl font-black mb-2">{BOOK_DETAILS.author}</h3>
            <p className="text-xs opacity-60 px-4 leading-relaxed">Behavioral scientist and architect of 'Frictionless Action'.</p>
          </section>

          {/* WISDOM TOOL (Row 2, Cols 4-9) */}
          <div className="md:col-span-6">
            <WisdomTool />
          </div>

          {/* CTA BUY BLOCK (Row 2, Cols 10-12) */}
          <section className="md:col-span-3 bg-white rounded-[2.5rem] p-8 flex flex-col justify-between border border-black/5 shadow-sm group cursor-pointer hover:border-[#E65100]/20 transition-all">
             <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-[#F4F3F0] rounded-2xl flex items-center justify-center text-[#E65100] group-hover:scale-110 transition-transform">
                   <ShoppingBag size={20} />
                </div>
                <ArrowUpRight className="text-black/20 group-hover:text-[#E65100] transition-colors" />
             </div>
             <div>
                <p className="text-[10px] font-black tracking-widest uppercase text-black/30 mb-1">Store</p>
                <h4 className="text-lg font-black group-hover:text-[#E65100] transition-colors">AMAZON BESTSELLER</h4>
             </div>
          </section>

          {/* TAKEAWAYS (Row 3, Cols 1-5) */}
          <section className="md:col-span-5 bg-white rounded-[2.5rem] p-10 border border-black/5 shadow-sm">
            <h3 className="text-[10px] font-black tracking-[0.3em] uppercase opacity-30 mb-8">The Core Architecture</h3>
            <ul className="space-y-5">
              {BOOK_DETAILS.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#E65100] font-black text-xs pt-1">0{idx + 1}</span>
                  <span className="text-md font-bold text-black/80">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* REVIEW BLOCK (Row 3, Cols 6-12) */}
          <section className="md:col-span-7 bg-[#FAF9F6] rounded-[2.5rem] p-10 border border-black/5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-6">
               <Quote size={24} className="text-[#E65100]" />
               <div className="h-px bg-black/5 flex-1"></div>
            </div>
            <p className="text-2xl font-medium leading-snug text-black/90 mb-8 italic">
              "The most profound shift in productivity I've experienced in a decade. Vane isn't teaching time management; he's teaching energy architecture."
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-black">Marcus Thorne</p>
                <p className="text-[10px] font-bold opacity-30 tracking-widest uppercase">CEO, Momentum Labs</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#E65100" strokeWidth={0} />)}
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* Simplified Footer */}
      <footer className="max-w-[1400px] mx-auto mt-12 mb-6 px-4 flex justify-between items-center text-[10px] font-bold tracking-[0.3em] text-black/20 uppercase">
        <span>© 2024 Vane Institute</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-black transition-colors">Manifesto</a>
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
