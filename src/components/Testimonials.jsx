// src/components/Testimonials.jsx
import React from 'react'
import QuoteIcon from '../assets/quote.svg'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Label + Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-4">
            <span className="text-xs mr-2">●</span>Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Hear from our happy clients
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-900 mb-6">
              “Working with Thetagainer was a game-changer for our product launch. Their UX redesign increased our conversion rate by 30% within the first month. The team was proactive, responsive, and truly understood our vision.”
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Arjun Mehta</h3>
              <p className="text-sm text-gray-500">Product Lead, FinTech Solutions</p>
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
              “Thetagainer’s branding overhaul brought our identity to life. We saw a 50% uplift in social engagement and received countless compliments on our new look. Communication was seamless throughout the project.”
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Sneha Kapoor</h3>
              <p className="text-sm text-gray-500">Brand Strategist, Creative Co.</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="w-12 h-12 bg-[#00CBA8] rounded-full flex items-center justify-center">
                <img src={QuoteIcon} alt="quote" className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-900 mb-6">
              “Their digital marketing campaign drove a 3x increase in qualified leads for our SaaS platform. Thetagainer’s data-driven approach and creative ad designs delivered measurable results we couldn’t achieve before.”
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Radhika Sharma</h3>
              <p className="text-sm text-gray-500">Marketing Manager, SaaSify</p>
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
