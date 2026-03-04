'use client';
import { useState } from 'react';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('General');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = {
    General: [
      { id: 1, question: 'What is Dastawez?', answer: 'Dastawez is a comprehensive document service platform that helps individuals and organizations with various documentation needs, from government forms to professional documents.' },
      { id: 2, question: 'What services does Dastawez provide?', answer: 'We provide a wide range of services including government document assistance, form filling, document verification, attestation, and professional documentation services.' },
      { id: 3, question: 'Who can use Dastawez services?', answer: 'Anyone can use our services - students, professionals, businesses, and individuals who need assistance with documentation and form filling.' },
      { id: 4, question: 'How does the Dastawez service process work?', answer: 'Simply contact us through WhatsApp, phone, or email. Share your requirements, provide necessary documents, and our team will guide you through the entire process.' },
      { id: 5, question: 'Is Dastawez available for students and professionals?', answer: 'Yes, we cater to both students and professionals with specialized services for educational documents, professional certifications, and career-related documentation.' }
    ],
    Services: [
      { id: 6, question: 'What types of document services does Dastawez offer?', answer: 'We offer services including Aadhaar, PAN card, certificates, land records, scholarships, government forms, banking services, and much more.' },
      { id: 7, question: 'Can Dastawez help with filling out online forms?', answer: 'Yes, we provide complete assistance with filling out online forms for government applications, exams, scholarships, and other official purposes.' },
      { id: 8, question: 'Do you assist with resume creation and documentation?', answer: 'Yes, we help with professional documentation including resume creation, cover letters, and other career-related documents.' },
      { id: 9, question: 'Can Dastawez help with document verification or attestation?', answer: 'Yes, we provide document verification and attestation services for various official and legal purposes.' }
    ],
    'Government Documents': [
      { id: 10, question: 'Can Dastawez help with PAN card and Aadhaar related services?', answer: 'Yes, we provide complete assistance with PAN card applications, corrections, Aadhaar enrollment, updates, and linking services.' },
      { id: 11, question: 'What documents are required for government applications?', answer: 'Required documents vary by service. Our team will provide you with a complete list of documents needed for your specific application.' },
      { id: 12, question: 'Do you provide assistance with passport or other official applications?', answer: 'Yes, we assist with passport applications, renewals, and various other official government applications and forms.' },
      { id: 13, question: 'How long does it take to complete a document service request?', answer: 'Processing time varies depending on the service type and government processing times. We ensure timely completion and keep you updated throughout the process.' }
    ],
    Support: [
      { id: 14, question: 'How much do Dastawez services cost?', answer: 'Our pricing varies based on the service type and complexity. Contact us for specific pricing details for your requirements.' },
      { id: 15, question: 'What payment methods are accepted?', answer: 'We accept various payment methods including online transfers, UPI, and cash payments. Payment details will be shared during the service process.' },
      { id: 16, question: 'How can I contact Dastawez for assistance?', answer: 'You can reach us via WhatsApp at +91-7898292349, call us during business hours (Monday-Saturday, 8AM-7PM), or email us at info@dastawez.com.' },
      { id: 17, question: 'Do you provide services for organizations and institutions?', answer: 'Yes, we offer bulk services and customized solutions for organizations, educational institutions, and businesses.' }
    ]
  };

  const tabs = ['General', 'Services', 'Government Documents', 'Support'];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="w-full py-16 px-6 bg-[#455A64]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-regular text-white mb-2">
            Questions, meet
          </h2>
          <h3 className="text-4xl md:text-5xl text-[#B8DFF9] italic font-serif">
            answers.
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-[12] text-base transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-white text-black shadow-lg'
                  : 'border border-[#667A8A] bg-[rgba(255,255,255,0.04)] text-white hover:bg-[rgba(255,255,255,0.10)] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData[activeTab].map((item) => (
            <div
              key={item.id}
              className="bg-[rgba(255,255,255,0.04)] border border-[#667A8A] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[rgba(255,255,255,0.10)]"
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(item.id)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-medium text-white pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-white flex-shrink-0 transition-transform duration-300 ${
                    openQuestion === item.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openQuestion === item.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
