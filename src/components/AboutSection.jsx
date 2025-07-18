// src/components/AboutSection.jsx
import React from 'react'
import aboutImg from '../assets/about.jpg'

export default function AboutSection() {
  const features = [
    'Tax Management Services',
    'Business Planning',
    'Accounting Services',
    'ROC Compliances',
  ]

  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Accounting Services for Business and Individuals
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              We offer tailored Financial services for diverse individual and business needs across multiple industries. With a focus on clarity, compliance, and growth, we guide our clients through today’s evolving financial and regulatory environment to help build a secure and successful future. </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#FEEAD4] text-gray-800 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8.293 12.293l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base text-gray-800">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={aboutImg}
              alt="Professional accounting"
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
