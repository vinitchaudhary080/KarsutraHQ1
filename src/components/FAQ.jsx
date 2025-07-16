// src/components/FAQ.jsx
import React from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide end-to-end solutions including UI/UX design, web development, digital marketing, and video production."
    },
    {
      question: "How can I request a quote?",
      answer: "Just reach out via our contact form or email us at thetagainers@gmail.com—we’ll get back to you within 24 hours."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, every project comes with 3 months of complimentary support and maintenance after launch."
    },
    {
      question: "What pricing models do you use?",
      answer: "We work on both fixed-price packages and hourly rates, whichever suits your project scope best."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start">
        {/* Left: Label + Heading */}
        <div className="lg:w-1/2">
          <span className="inline-flex items-center px-3 py-1 border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-4">
            <span className="text-xs mr-2">●</span>FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        {/* Right: FAQ list */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6 flex flex-col md:flex-row md:items-start md:justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-3 md:mt-0 text-gray-600 max-w-md">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
