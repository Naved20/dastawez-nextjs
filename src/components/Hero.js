export default function Hero() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-16 md:py-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Illustration */}
        <div className="relative flex items-center justify-center">
          <img 
            src="/Illustration.svg" 
            alt="Documentation illustration" 
            className="w-full max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8 w-full">
          <div className="relative">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50] leading-tight">
              Your <span className="text-[#34C759]">Documentation</span>,
                  <img
                    src="/Click-Animation.svg"
                    alt="Click animation"
                    className="absolute w-6 h-6 md:w-25 md:h-25"
                    style={{ left: "305px", top: "23px" }}
                  />

              <br/>
              One Click Away
            </h1>
          </div>
          
          <p className="text-lg text-[#969696] max-w-lg">
            Easily book appointments, access your medical records, and consult with top healthcare providers - all in one place
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#00C0E8] text-white px-8 py-3 rounded-2xl font-medium hover:bg-cyan-500 transition-colors">
              Explore Features
            </button>
            <button className="flex items-center gap-2 text-[#00C0E8] font-medium hover:text-cyan-500 transition-colors">
              <img src="/Learn-More-icon.svg" alt="Play" className="w-15 h-15" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
