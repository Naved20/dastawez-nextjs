import Image from 'next/image';

export default function WhyChoose() {
  const features = [
    {
      id: 1,
      icon: 'home page/why choose dastawez/filecheck.svg',
      title: 'Hassle-Free Documentation',
      description: 'Get complete assistance for certificates, IDs, and government services without confusion or delays.',
    },
    {
      id: 2,
      icon: 'home page/why choose dastawez/zap.svg',
      title: 'Fast & Reliable Processing',
      description: 'We ensure accurate form filling, quick submissions, and timely updates for every service.',
    },
    {
      id: 3,
      icon: 'home page/why choose dastawez/layers.svg',
      title: 'All Services in One Place',
      description: 'From Aadhaar to loans and scholarships, everything is handled under one roof for your convenience.',
    }
  ];

  return (
    <section className="w-full py-20 px-15 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why choose Dastawez ?
            </h2>
            <p className="text-[#969696] text-base mb-12">
              A simple walk-through of how our service process works.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-5">
                  {/* Icon Box */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center`}>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#969696] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center">
            <Image
              src="home page/why choose dastawez/pana.svg"
              alt="Why choose Dastawez illustration"
              width={500}
              height={500}
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
