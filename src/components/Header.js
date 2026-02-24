export default function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg">
      <div className="flex items-center gap-2">
        <img 
          src="/logo.png" 
          alt="Dastawez" 
          className="h-8"
        />
        <span className="text-xl font-bold text-green-500">Dastawez</span>
      </div>
      
      <div className="hidden md:flex items-center gap-12">
        <a href="#" className="text-gray-600 hover:text-green-500 hover:glow text-sm font-medium transition-colors">Home</a>
        <a href="#" className="text-gray-600 hover:text-green-500 text-sm font-medium transition-colors">Book Now</a>
        <a href="#" className="text-gray-600 hover:text-green-500 text-sm font-medium transition-colors">About Us</a>
        <a href="#" className="text-gray-600 hover:text-green-500 text-sm font-medium transition-colors">Our App</a>
        <a href="#" className="text-gray-600 hover:text-green-500 text-sm font-medium transition-colors">Contact</a>
      </div>

      <button className="bg-green-500 text-white px-6 py-2 rounded-2xl font-medium text-sm hover:bg-green-600 transition-colors">
        Get Started
      </button>
    </nav>
  );
}
