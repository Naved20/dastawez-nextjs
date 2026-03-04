export default function ContactUs() {
  const contactMethods = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: 'Chat on WhatsApp',
      subtitle: 'Quick responses during business hours',
      action: 'Message Us',
      link: 'https://wa.me/917898292349'
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: 'Call Us',
      subtitle: 'Monday to Saturday 8AM-7PM',
      action: '+91-7898292349',
      link: 'tel:+917898292349'
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 6 10-6" />
        </svg>
      ),
      title: 'Email Us',
      subtitle: 'For detailed inquiries',
      action: 'Email us',
      link: 'mailto:info@dastawez.com'
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      title: 'Link Tree',
      subtitle: 'Visit Our more Social platforms',
      action: 'Linktree',
      link: '#'
    }
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#455A64]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Contact Us
          </h2>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Have Question Or need Assistance?
          </h3>
          <p className="text-gray-300 text-lg">
            We&apos;re here to help!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.link}
              target={method.id === 1 || method.id === 4 ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-8 bg-[rgba(255,255,255,0.04)] rounded-[17] shadow-lg shadow-black/20 hover:bg-[#667A8A] hover:shadow-2xl hover:shadow-black/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-[#D9D9D9] rounded-full flex items-center justify-center text-black text-sm mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {method.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-white mb-2">
                {method.title}
              </h4>

              {/* Subtitle */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {method.subtitle}
              </p>

              {/* Action Link */}
              <span className="text-gray-200 text-sm hover:text-white transition-colors">
                {method.action}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
