// src/components/ServicesSection.jsx
import React from 'react'

const services = [
  {
    title: 'Company Incorporation',
    description:
      "We help you register your business hassle-free, from choosing the right structure to completing all legal formalities with the MCA.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75a.75.75 0 01-.75-.75V9.75z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'GST Registration Online',
    description:
      "We provide end-to-end assistance in obtaining GST registration, ensuring full compliance with all legal requirements and timely processing.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75a.75.75 0 01-.75-.75V9.75z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Limited Liability Partnership',
    description:
      "We assist in seamless LLP formation, from name approval to filing incorporation documents, ensuring legal compliance and smooth setup.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75a.75.75 0 01-.75-.75V9.75z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Income Tax Return Filling',
    description:
      "We offer accurate and timely Income Tax Return filing for individuals and businesses, ensuring maximum deductions and full compliance.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75a.75.75 0 01-.75-.75V9.75z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'GST Return Filling',
    description:
      "We ensure timely and accurate filing of all GST returns, helping you stay compliant and avoid penalties with expert support.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75a.75.75 0 01-.75-.75V9.75z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'MSME Registration',
    description:
      "We help businesses obtain MSME registration quickly, enabling access to government benefits, subsidies, and priority sector lending.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-5.25v-6h-6v6H3.75a.75.75 0 01-.75-.75V9.75z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Trademark Registration',
    description:
      'We assist in securing your brand identity through hassle-free trademark registration, from application to approval and legal protection.',
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3m0 0v4m0-4v-4M12 4v2m-4 0h8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'ROC Compliances',
    description:
      "We handle all mandatory ROC filings and annual compliances to keep your company legally compliant and avoid penalties under the Companies Act.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 3v18h18M7 14l3-3 2 2 4-4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Online Trust Registration',
    description:
      "We provide complete assistance in registering a trust online, from drafting the trust deed to obtaining registration certificates and legal approvals.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 3v18h18M7 14l3-3 2 2 4-4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Audit & Assurance Services',
    description:
      "We offer comprehensive audit and assurance services to ensure financial accuracy, regulatory compliance, and enhanced stakeholder confidence.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 3v18h18M7 14l3-3 2 2 4-4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Accounting and Book Keeping Services',
    description:
      "We provide accurate and timely recording of financial transactions, ensuring organized books, better decision-making, and compliance readiness.",
    icon: (
      <svg
        className="w-5 h-5 text-[#FA9426]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 3v18h18M7 14l3-3 2 2 4-4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

]

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Our{' '}
          <span className="bg-[#FEEAD4]  text-gray-900 px-2 py-1 rounded">
            core services
          </span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-gray-100 rounded-3xl p-8 flex flex-col"
            >
              <div className="w-10 h-10 bg-[#FEEAD4]  rounded-full flex items-center justify-center mb-4">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {svc.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">{svc.description}</p>
              {/* <a
                href="#"
                className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
