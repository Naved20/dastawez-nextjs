export default function Hero() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-15 md:py-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Left Illustration */}
        <div className="relative flex items-center justify-center">
          <img 
            src="/home page/hero/Illustration.svg" 
            alt="Documentation illustration" 
            className="w-full max-w-sm"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6 w-full">
          <div className="relative">
            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-bold text-[#2C3E50] leading-tight">
              Your <span className="text-[#34C759]">Documentation</span>,
                  <img
                    src="/home page/hero/Click-Animation.svg"
                    alt="Click animation"
                    className="absolute w-5 h-5 md:w-22 md:h-22"
                    style={{ left: "275px", top: "20px" }}
                  />

              <br/>
              One Click Away
            </h1>
          </div>
          
          <p className="text-base text-[#969696] max-w-lg">
            Easily book appointments, access your document records, and consult with top mentor providers - all in one place
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <button className="bg-[#00C0E8] text-white px-7 py-2.5 rounded-2xl font-medium hover:bg-cyan-500 transition-colors">
              Explore Features
            </button>
            <button className="flex items-center gap-2 text-[#00C0E8] font-medium hover:text-cyan-500 transition-colors">
              <img src="/home page/hero/Learn-More-icon.svg" alt="Play" className="w-14 h-14" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
