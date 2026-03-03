export default function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
      <div className="flex items-center gap-1.5">
        <img 
          src="/logo.png" 
          alt="Dastawez" 
          className="h-7"
        />
        <span className="text-lg font-bold text-green-500">Dastawez</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#" className="text-gray-600 hover:text-green-500 hover:glow text-sm font-medium transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-green-500 hover:glow text-sm font-medium transition-colors">About Us</a>
        <a href="#" className="text-gray-600 hover:text-green-500 hover:glow text-sm font-medium transition-colors">Contact</a>
      </div>

      <button className="bg-[#34C759] text-white px-5 py-1.5 rounded-2xl font-medium text-sm hover:bg-[#00C0E8] transition-colors">
        Book Now
      </button>
    </nav>
  );
}
