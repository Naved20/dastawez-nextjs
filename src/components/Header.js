'use client';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 py-3 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
      <div className="flex items-center gap-1.5">
        <img 
          src="/logo.png" 
          alt="Dastawez" 
          className="h-6 md:h-7"
        />
        <span className="text-base md:text-lg font-bold text-green-500">Dastawez</span>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-gray-600 hover:text-green-500 hover:glow text-sm font-medium transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-green-500 hover:glow text-sm font-medium transition-colors">About Us</a>
        <a href="#" className="text-gray-600 hover:text-green-500 hover:glow text-sm font-medium transition-colors">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-gray-600 p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <button className="hidden md:block bg-[#34C759] text-white px-5 py-1.5 rounded-2xl font-medium text-sm hover:bg-[#00C0E8] transition-colors">
        Book Now
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <a href="#" className="text-gray-600 hover:text-green-500 text-sm font-medium py-2 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-500 text-sm font-medium py-2 transition-colors">About Us</a>
            <a href="#" className="text-gray-600 hover:text-green-500 text-sm font-medium py-2 transition-colors">Contact</a>
            <button className="bg-[#34C759] text-white px-5 py-2 rounded-2xl font-medium text-sm hover:bg-[#00C0E8] transition-colors w-full">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
