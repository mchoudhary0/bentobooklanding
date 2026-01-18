
import React from 'react';
import { Search, Home, Book, User, Mail, Instagram, Twitter } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="hidden lg:flex flex-col w-24 h-[calc(100vh-3rem)] sticky top-6 bg-[#1A1A1B] text-white rounded-[2.5rem] py-12 items-center justify-between shrink-0">
      <div className="flex flex-col items-center gap-12">
        <div className="w-10 h-10 rounded-full bg-[#E65100] flex items-center justify-center font-black text-xs tracking-tighter">
          V.
        </div>
        
        <div className="flex flex-col gap-8 text-white/40">
          <a href="#" className="hover:text-[#E65100] transition-colors"><Home size={22} /></a>
          <a href="#" className="hover:text-[#E65100] transition-colors"><Book size={22} /></a>
          <a href="#" className="hover:text-[#E65100] transition-colors"><User size={22} /></a>
          <a href="#" className="hover:text-[#E65100] transition-colors"><Mail size={22} /></a>
        </div>
      </div>

      <div className="flex flex-col gap-6 text-white/20 items-center">
        <button className="hover:text-white transition-colors"><Search size={20} /></button>
        <div className="w-px h-12 bg-white/10"></div>
        <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
        <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
      </div>
    </nav>
  );
};
