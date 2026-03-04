export default function Hero() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-6 md:gap-6 items-center">
        {/* Left Illustration */}
        <div className="relative flex items-center justify-center order-2 md:order-1">
          <img 
            src="/home page/hero/Illustration.svg" 
            alt="Documentation illustration" 
            className="w-full max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4 md:space-y-6 w-full order-1 md:order-2">
          <div className="relative">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-bold text-[#2C3E50] leading-tight">
              Your <span className="text-[#34C759]">Documentation</span>,
     

              <br/>
              One Click Away
            </h1>
          </div>
          
          <p className="text-sm md:text-base text-[#969696] max-w-lg">
            Easily book appointments, access your document records, and consult with top mentor providers - all in one place
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 md:pt-3">
            <button className="bg-[#00C0E8] text-white px-6 md:px-7 py-2 md:py-2.5 rounded-2xl font-medium text-sm hover:bg-cyan-500 transition-colors w-full sm:w-auto">
              Explore Features
            </button>
            <button className="flex items-center justify-center gap-2 text-[#00C0E8] font-medium hover:text-cyan-500 transition-colors w-full sm:w-auto">
              <img src="/home page/hero/Learn-More-icon.svg" alt="Play" className="w-12 h-12 md:w-14 md:h-14" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
