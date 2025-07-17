// src/components/Testimonials.jsx
import React from 'react'
import QuoteIcon from '../assets/quote.svg'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Label + Heading */}
         <div className="text-center mb-12">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
           Hear what our{' '}
            <span className="bg-[#FEEAD4]  text-gray-900 px-2 py-1 rounded">
              clients say
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-900 mb-6">
              “KarsutraHQ made tax filing completely stress-free. Their expert team spotted deductions I never knew existed—saving me over ₹50,000 this year.”
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Rahul Verma</h3>
              <p className="text-sm text-gray-500">Owner, Verma Textiles</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <img src={QuoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <p className="text-gray-900 mb-6">
              “Their accounting guidance streamlined our financial processes and ensured full compliance. We now feel confident before every audit, thanks to KarsutraHQ.”
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Priya Sharma</h3>
              <p className="text-sm text-gray-500">Founder, GreenLeaf Startups</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <img src={QuoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-900 mb-6">
              “As a freelancer, I used to dread tax season. KarsutraHQ not only organized my records but also optimized my tax strategy—my returns have never been smoother.”
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Aman Gupta</h3>
              <p className="text-sm text-gray-500">Freelance Designer</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <img src={QuoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
