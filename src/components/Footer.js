'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    Services: [
      { name: 'PAN Card Services', href: '#' },
      { name: 'Aadhaar Services', href: '#' },
      { name: 'Passport Assistance', href: '#' },
      { name: 'Government Form Applications', href: '#' },
      { name: 'Document Attestation', href: '#' }
    ],
    Solutions: [
      { name: 'Resume & CV Creation', href: '#' },
      { name: 'Online Form Filling', href: '#' },
      { name: 'Documentation Support', href: '#' },
      { name: 'Student Services', href: '#' },
      { name: 'Professional Documentation', href: '#' }
    ],
    Resources: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation Guide', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Service Process', href: '#' },
      { name: 'Updates & Announcements', href: '#' }
    ],
    Company: [
      { name: 'About Dastawez', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Customer Support', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' }
    ]
  };

  const socialLinks = [

    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'LinkedIn',
      icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.29297 5.93848C4.57791 5.93892 4.80878 6.17096 4.80859 6.45605V16.4561L4.79785 16.5605C4.74942 16.7956 4.5414 16.9728 4.29199 16.9727H0.958008C0.672852 16.9725 0.442194 16.7403 0.442383 16.4551V6.45508L0.452148 6.35059C0.50056 6.11547 0.709495 5.93831 0.958984 5.93848H4.29297ZM10.126 5.93848C10.4111 5.93875 10.6418 6.17085 10.6416 6.45605V6.69531C11.3454 6.20568 12.1816 5.93852 13.042 5.93848L13.2617 5.94434C15.5147 6.06112 17.3057 7.92374 17.3086 10.2051V16.4561L17.2979 16.5605C17.2494 16.7956 17.0414 16.9728 16.792 16.9727H13.458C13.1728 16.9724 12.9422 16.7403 12.9424 16.4551V11.8721C12.9423 11.2371 12.427 10.7227 11.792 10.7227C11.1569 10.7227 10.6417 11.237 10.6416 11.8721V16.4561L10.6318 16.5605C10.5834 16.7957 10.3745 16.9728 10.125 16.9727H6.79102C6.50599 16.9723 6.2752 16.7402 6.27539 16.4551V6.45508L6.28613 6.35059C6.33459 6.11553 6.54255 5.93831 6.79199 5.93848H10.126ZM7.30859 15.9385H9.6084V11.8721C9.6085 10.6663 10.5862 9.68848 11.792 9.68848C12.9977 9.68852 13.9755 10.6663 13.9756 11.8721V15.9385H16.2754V10.2051C16.2797 9.21488 15.828 8.27752 15.0508 7.66406C13.6551 6.56277 11.6305 6.80162 10.5293 8.19727C10.393 8.37022 10.1613 8.43684 9.9541 8.3623V8.36133C9.74735 8.28873 9.60846 8.0942 9.6084 7.875V6.97266H7.30859V15.9385ZM1.47559 15.9385H3.77539V6.97266H1.47559V15.9385ZM2.93848 0.107422C4.24891 0.199116 5.2372 1.33605 5.14551 2.64648C5.05378 3.95428 3.92147 4.94004 2.61426 4.85254V4.85352H2.58984V4.85254C2.53892 4.85541 2.48767 4.85691 2.43652 4.85645C1.13439 4.84498 0.0883114 3.78069 0.0996094 2.47852C0.0997286 2.42588 0.100893 2.37298 0.104492 2.32031C0.194106 1.01011 1.32715 0.0201068 2.63672 0.105469C2.73723 0.0996955 2.83803 0.100402 2.93848 0.107422ZM2.37598 1.13379C1.63443 1.19086 1.07985 1.83858 1.13672 2.58008C1.19373 3.32177 1.84131 3.87732 2.58301 3.82031L2.58984 3.81934H2.625L2.61426 3.91992L2.625 3.82031C2.71418 3.83002 2.80416 3.83046 2.89355 3.82227C3.63476 3.75399 4.18058 3.09766 4.1123 2.35645C4.04378 1.61549 3.38751 1.07041 2.64648 1.13867L2.63672 1.13965L2.62695 1.13867C2.54381 1.12953 2.45942 1.1274 2.37598 1.13379Z" fill="white" stroke="white" stroke-width="0.2"/>
      </svg>
      ),
      href: '#'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      href: 'https://wa.me/917898292349'
    }
  ];

  return (
    <footer className="w-full bg-[#455A64] text-gray-300">
      {/* Top Section - About - Full Width */}
      <div className=" mb-12 pt-20  pb-10 bg-[rgba(255,255,255,0.04)] border-b border-[#667A8A]">
        <div className="max-w-7xl mx-auto px-6  ">
              <h3 className="text-2xl font-bold text-white mb-3">Dastawez</h3>
              <p className="text-gray-400 max-w-2xl leading-relaxed">
                Your trusted partner for all document and government <br />
                service needs.
              </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.Solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.Resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-start gap-4 mb-8 pb-8 border-b border-gray-700">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[rgba(255,255,255,0.04)] border border-[#667A8A] rounded-lg flex items-center justify-center text-white hover:bg-[rgba(255,255,255,0.10)] hover:text-white transition-all duration-200"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
           
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>© 2025 Dastawez. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#34C759] hover:bg-[#00C0E8] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50 animate-fade-in"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
}
