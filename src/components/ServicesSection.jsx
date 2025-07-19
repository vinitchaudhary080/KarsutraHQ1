// src/components/ServicesSection.jsx
import React from 'react'
import documentIcon from '../assets/Document Text.svg'

const services = [
  {
    title: 'Company Incorporation',
    description:
      "We help you register your business hassle-free, from choosing the right structure to completing all legal formalities with the MCA.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'GST Registration Online',
    description:
      "We provide end-to-end assistance in obtaining GST registration, ensuring full compliance with all legal requirements and timely processing.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'Limited Liability Partnership',
    description:
      "We assist in seamless LLP formation, from name approval to filing incorporation documents, ensuring legal compliance and smooth setup.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'Income Tax Return Filing',
    description:
      "We offer accurate and timely Income Tax Return filing for individuals and businesses, ensuring maximum deductions and full compliance.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'GST Return Filing',
    description:
      "We ensure timely and accurate filing of all GST returns, helping you stay compliant and avoid penalties with expert support.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'MSME Registration',
    description:
      "We help businesses obtain MSME registration quickly, enabling access to government benefits, subsidies, and priority sector lending.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'Trademark Registration',
    description:
      'We assist in securing your brand identity through hassle-free trademark registration, from application to approval and legal protection.',
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'ROC Compliances',
    description:
      "We handle all mandatory ROC filings and annual compliances to keep your company legally compliant and avoid penalties under the Companies Act.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'Online Trust Registration',
    description:
      "We provide complete assistance in registering a trust online, from drafting the trust deed to obtaining registration certificates and legal approvals.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'Audit & Assurance Services',
    description:
      "We offer comprehensive audit and assurance services to ensure financial accuracy, regulatory compliance, and enhanced stakeholder confidence.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
    ),
  },
  {
    title: 'Accounting and Bookkeeping Services',
    description:
      "We provide accurate and timely recording of financial transactions, ensuring organized books, better decision-making, and compliance readiness.",
    icon: (
      <img
        src={documentIcon}
        alt="Document Icon"
        className="w-5 h-5"
      />
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
          <span className="bg-[#FEEAD4] text-gray-900 px-2 py-1 rounded">
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
              <div className="w-10 h-10 bg-[#FEEAD4] rounded-full flex items-center justify-center mb-4">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {svc.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
