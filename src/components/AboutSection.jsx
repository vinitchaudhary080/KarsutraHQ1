// src/components/AboutSection.jsx
import React from 'react'
import aboutImg from '../assets/about.jpg'  // apni image yahan daalo

export default function AboutSection() {
  const features = [
    'Tax Management Services',
    'Business Planning',
    'Accounting Services',
    'Estate Planning',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={aboutImg}
              alt="Professional accounting"
              className="w-full rounded-3xl object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Accounting Services for Business and Individuals
            </h2>
            <p className="text-gray-700 mb-6">
              GM Financial offers tailored services for diverse individual and business needs across multiple industries, dedicated to guiding you towards a prosperous future amidst the dynamic financial and regulatory landscape.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4"
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
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
