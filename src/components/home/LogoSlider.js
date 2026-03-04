'use client';
import React from 'react';

export default function LogoSlider() {
  // Logo data
const logos = [
  { id: 1, name: "Income Certificate" },
  { id: 2, name: "Caste Certificate" },
  { id: 3, name: "Domicile Certificate" },
  { id: 4, name: "Birth Certificate" },
  { id: 5, name: "Death Certificate" },
  { id: 6, name: "Marriage Certificate" },
  { id: 7, name: "Character Certificate" },
  { id: 8, name: "OBC Certificate" },
  { id: 9, name: "EWS Certificate" },
  { id: 10, name: "Disability Certificate" },

  { id: 11, name: "Khasra/Khatauni Nakal" },
  { id: 12, name: "Land Record Verification" },
  { id: 13, name: "Naamantaran Mutation" },
  { id: 14, name: "Bhu Adhikar Pustika" },
  { id: 15, name: "Land Diversion" },
  { id: 16, name: "Register Copy" },
  { id: 17, name: "Stamp Duty Calculator" },
  { id: 18, name: "Property Valuation" },
  { id: 19, name: "ROR (Record of Right)" },

  { id: 20, name: "CM Rise Scholarship" },
  { id: 21, name: "Post Matric Scholarship" },
  { id: 22, name: "Pre Matric Scholarship" },
  { id: 23, name: "Gaon Ki Beti Yojna" },
  { id: 24, name: "Pratibha Kiran Yojna" },
  { id: 25, name: "Vikramaditya Scholarship" },

  { id: 26, name: "Board Marksheet Download" },
  { id: 27, name: "Board Certificate Verification" },
  { id: 28, name: "Migration Certificate" },
  { id: 29, name: "Transfer Certificate (TC)" },

  { id: 30, name: "MP Vyapam Form" },
  { id: 31, name: "MPPSC Form" },
  { id: 32, name: "Police Recruitment Form" },
  { id: 33, name: "Patwari Exam Form" },
  { id: 34, name: "TET/CTET Form" },
  { id: 35, name: "NHM Recruitment" },
  { id: 36, name: "Forest Guard Bharti" },
  { id: 37, name: "Anganwadi Bharti" },
  { id: 38, name: "Admit Card Download" },
  { id: 39, name: "Result Check" },

  { id: 40, name: "Ration Card Apply" },
  { id: 41, name: "Ration Card Update" },
  { id: 42, name: "Member Add/Remove" },
  { id: 43, name: "Ration Card Download" },
  { id: 44, name: "Beneficiary Status Check" },
  { id: 45, name: "NFSA Patrata Check" },

  { id: 46, name: "Electricity Bill Payment" },
  { id: 47, name: "Water Bill Payment" },
  { id: 48, name: "Property Tax Payment" },
  { id: 49, name: "Gas Connection Payment" },
  { id: 50, name: "Mobile Recharge" },
  { id: 51, name: "DTH Recharge" },
  { id: 52, name: "Insurance Premium Payment" },
  { id: 53, name: "LIC Premium Payment" },

  { id: 54, name: "Aadhaar Enabled Payment" },
  { id: 55, name: "Bank Account Opening" },
  { id: 56, name: "PM Jan Dhan Account" },
  { id: 57, name: "Money Transfer" },
  { id: 58, name: "Kisan Credit Card Apply" },
  { id: 59, name: "Mudra Loan Apply" },
  { id: 60, name: "PM Swanidhi Loan" },
  { id: 61, name: "Account Balance Check" },
  { id: 62, name: "Passbook Update" },
  { id: 63, name: "FD/RD Account Opening" },

  { id: 64, name: "Aadhaar Update" },
  { id: 65, name: "Aadhaar Download" },
  { id: 66, name: "Aadhaar Enrollment" },
  { id: 67, name: "Biometric Update" },
  { id: 68, name: "Aadhaar Mobile Linking" },
  { id: 69, name: "Aadhaar-PAN Linking" },

  { id: 70, name: "New PAN Card Apply" },
  { id: 71, name: "PAN Card Correction" },
  { id: 72, name: "PAN Card Reprint" },
  { id: 73, name: "PAN Verification" },

  { id: 74, name: "Vridhavastha Pension" },
  { id: 75, name: "Vidhwa Pension" },
  { id: 76, name: "Divyang Pension" },
  { id: 77, name: "Pension Status Check" },

  { id: 78, name: "PM Kisan Status" },
  { id: 79, name: "Ladli Behna Yojna" },
  { id: 80, name: "Ladli Laxmi Yojna" },

  { id: 81, name: "Ayushman Bharat Card" },
  { id: 82, name: "Ayushman Card Download" },
  { id: 83, name: "Ayushman Eligibility Check" },
  { id: 84, name: "Janani Suraksha Yojna" },
  { id: 85, name: "COVID Certificate Download" },
  { id: 86, name: "Online OPD Appointment" },
  { id: 87, name: "MP Nirogi App Registration" },

  { id: 88, name: "Driving License Apply" },
  { id: 89, name: "DL Renewal" },
  { id: 90, name: "Vehicle Registration" },
  { id: 91, name: "RC Transfer" },
  { id: 92, name: "Pollution Certificate (PUC)" },
  { id: 93, name: "Challan Payment" },
  { id: 94, name: "Vahan Details Check" },

  { id: 95, name: "Udyam Registration" },
  { id: 96, name: "GST Registration" },
  { id: 97, name: "GST Return Filing" },
  { id: 98, name: "Trade License Apply" },
  { id: 99, name: "Shop Act Registration" },

  { id: 100, name: "Kisan Registration" },
  { id: 101, name: "Fasal Bima Yojna" },
  { id: 102, name: "Soil Health Card" },
  { id: 103, name: "Kisan Mandi Registration" },
  { id: 104, name: "E-Uparjan" },
  { id: 105, name: "Kisan Credit Card (KCC)" },

  { id: 106, name: "FSSAI License Apply" },

  { id: 107, name: "Passport Apply" },
  { id: 108, name: "Passport Renewal" },
  { id: 109, name: "Passport Status Check" },

  { id: 110, name: "PM Jeevan Jyoti Bima" },
  { id: 111, name: "PM Suraksha Bima Yojna" },
  { id: 112, name: "PM Fasal Bima" },
  { id: 113, name: "Atal Pension Yojna" }
];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative w-full py-16 bg-[#455A64] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Services We Offer
          </h2>
          <p className="text-gray-300 text-lg">
            Comprehensive document and government service solutions
          </p>
        </div>

        {/* Logo Slider Container */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#455A64] to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#455A64] to-transparent z-10 pointer-events-none"></div>

          {/* First Row - Scrolling Left */}
          <div className="logo-slider-wrapper overflow-hidden mb-5">
            <div className="logo-slider flex items-center gap-5">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row1-${logo.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-5 py-4 min-w-[160px] h-20 bg-[rgba(255,255,255,0.04)] backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-white text-sm font-medium text-center leading-tight">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="logo-slider-wrapper overflow-hidden mb-5">
            <div className="logo-slider-reverse flex items-center gap-5">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row2-${logo.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-5 py-4 min-w-[160px] h-20 bg-[rgba(255,255,255,0.04)] backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-white text-sm font-medium text-center leading-tight">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Third Row - Scrolling Left */}
          <div className="logo-slider-wrapper overflow-hidden">
            <div className="logo-slider flex items-center gap-5">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row3-${logo.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-5 py-4 min-w-[160px] h-20 bg-[rgba(255,255,255,0.04)] backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-white text-sm font-medium text-center leading-tight">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .logo-slider {
          animation: scroll-left 200s linear infinite;
          width: max-content;
        }

        .logo-slider-reverse {
          animation: scroll-right 200s linear infinite;
          width: max-content;
        }

        .logo-slider-wrapper:hover .logo-slider,
        .logo-slider-wrapper:hover .logo-slider-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
