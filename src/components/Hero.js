export default function Hero() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Illustration */}
        <div className="relative flex items-center justify-center">
          <img 
            src="/illustration.svg" 
            alt="Documentation illustration" 
            className="w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8 w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight whitespace-nowrap">
            Your <span className="text-green-500">Documentation</span>,
            <br/>
            One Click Away
          </h1>
          
          <p className="text-lg text-gray-600 max-w-lg">
            Easily book appointments, access your medical records, and consult with top healthcare providers - all in one place
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-cyan-400 text-white px-8 py-3 rounded-lg font-medium hover:bg-cyan-500 transition-colors">
              Explore Features
            </button>
            <button className="flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-500 transition-colors">
              <img src="/Learn-More-icon.svg" alt="Play" className="w-15 h-15" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
