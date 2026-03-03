'use client';
import Image from 'next/image';
import React from 'react';

// Reusable ServiceCard Component
function ServiceCard({ title, description, icon = "/home page/service card/arrow.svg", hoverIcon = "/home page/service card/arrow2.svg" }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className={`flex flex-col w-full border-[2.5px] border-[#5A6C7D] rounded-[28px] p-6 transition-colors duration-300 cursor-pointer
      ${isHovered 
      ? 'bg-[#455A64] border-white' 
      : 'bg-white border-[#5A6C7D]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className="flex justify-between items-start gap-3 mb-3">
        <h3 className={`text-[30px] font-medium leading-[1] flex-1 transition-colors duration-300 whitespace-pre-line ${isHovered ? 'text-white' : 'text-black'}`}>
          {title}
        </h3>
        <div className="">
          <Image
            src={isHovered ? hoverIcon : icon}
            alt=""
            width={60}
            height={60}
          />
        </div>
      </div>

      {/* Divider */}
      <div className={`w-full h-[2.5px] mb-0 transition-colors duration-300 ${isHovered ? 'bg-white' : 'bg-[#455A64]'}`}></div>

      {/* Description */}
      <p className={`text-[18px] mt-4 leading-tight mb-5 whitespace-pre-line transition-colors duration-300 ${isHovered ? 'text-white' : 'text-black'}`}>
        {description}
      </p>

      {/* Content Placeholder */}
      <div className={`w-full border-[2px] border-[#5A6C7D] rounded-[20px] h-[170px] transition-colors duration-300 ${isHovered ? 'bg-white' : 'bg-white'}`}></div>
    </div>
  );
}

// Main Services Section Component
export default function ServicesSection() {
const services = [
  {
    id: 1,
    title: "Aadhaar\nServices",
    description: "Enrollment, updates\nand corrections"
  },
  {
    id: 2,
    title: "PAN Card\nServices",
    description: "New application and\ncard corrections"
  },
  {
    id: 3,
    title: "Banking &\nFinancial",
    description: "Account, AEPS and\nfinancial services"
  },
  {
    id: 4,
    title: "Utility Bill\nPayment",
    description: "Electricity, water\nand recharge payments"
  },
  {
    id: 5,
    title: "Ration Card\nServices",
    description: "New applications and\ncard updates"
  },
  {
    id: 6,
    title: "Certificate\nServices",
    description: "Birth, domicile and\nincome certificates"
  },
  {
    id: 7,
    title: "Passport &\nTravel",
    description: "Passport and travel\ndocument support"
  },
  {
    id: 8,
    title: "Pension &\nSocial Security",
    description: "Pension and welfare\nscheme assistance"
  },
  {
    id: 9,
    title: "Government\nExams",
    description: "Recruitment and\nform filling support"
  },
  {
    id: 10,
    title: "Education\nServices",
    description: "Admission and\nscholarship support"
  },
  {
    id: 11,
    title: "Land &\nRevenue",
    description: "Property and land\nrecord services"
  },
  {
    id: 12,
    title: "Driving &\nTransport",
    description: "License and vehicle\ndocument services"
  },
  {
    id: 13,
    title: "Health\nServices",
    description: "Health scheme and\nmedical documentation"
  },
  {
    id: 14,
    title: "Insurance\nServices",
    description: "Policy applications\nand claim support"
  },
  {
    id: 15,
    title: "Business &\nTrade",
    description: "Business registration\nand trade services"
  },
  {
    id: 16,
    title: "Agriculture\nServices",
    description: "Farmer schemes and\nagri documentation"
  }
];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const scrollContainerRef = React.useRef(null);
  
  const totalCards = services.length;
  const visibleCards = 3;
  const maxIndex = totalCards - visibleCards;

  // Auto-slide effect
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 1500); // change this value to adjust speed

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  // Handle scroll
  const handleScroll = (e) => {
    e.preventDefault();
    const delta = e.deltaY || e.deltaX;
    
    if (Math.abs(delta) > 10) {
      setIsAutoPlaying(false);
      
      if (delta > 0 && currentIndex < maxIndex) {
        setCurrentIndex(prev => prev + 1);
      } else if (delta < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
      
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="w-full py-20 px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <h2 className="text-[50px] font-bold text-black leading-tight mb-3 lg:mb-0">
            Our Services
          </h2>
          <p className="text-[24px] italic text-[#969696] lg:mt-4">
            if it isn&apos;t documented, it doesn&apos;t exist.
          </p>
        </div>

        {/* Services Carousel */}
        <div 
          ref={scrollContainerRef}
          onWheel={handleScroll}
          className="relative px-4 mb-10 overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * (24 / visibleCards)}px))` 
            }}
          >
            {services.map((service) => (
              <div key={service.id} className="min-w-[calc(33.333%-16px)] flex-shrink-0">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'bg-[#455A64] w-[22px] h-[5px]' 
                  : 'bg-[#5A6C7D] hover:bg-[#455A64] w-[5px] h-[5px]'
              }`}
              aria-label={`Go to position ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
