// src/components/FAQ.jsx
import React from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: "What services does KarsutraHQ provide?",
      answer: "We specialize in comprehensive tax filing, GST reconciliation, accounting & bookkeeping, business registration, and financial consultancy tailored for small to medium enterprises."
    },
    {
      question: "How do I start working with you?",
      answer: "Simply fill out our contact form or email us at karsutrahq@gmail.com. We’ll schedule an initial consultation within 24 hours to understand your needs and outline the next steps."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer both fixed-fee packages for standard services (like annual tax filing) and hourly rates for bespoke consultancy. A detailed quote follows our initial assessment."
    },
    {
      question: "Can you handle past-year tax filings?",
      answer: "Yes—our team can assist with filing returns for up to 2 previous years, ensuring compliance with current regulations and helping you claim any due refunds."
    },
    {
      question: "Do you offer ongoing support after filing?",
      answer: "Absolutely. We provide 6 months of post-filing support for any queries from income tax notices to GST audits, with optional extended support plans available."
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-100">
      {/* Heading */}
      <div className="container mx-auto px-6 lg:px-16 text-center mb-12">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Frequently Asked{' '}
          <span className="bg-[#FEEAD4]  text-gray-900 px-2 py-1 rounded">
            Questions
          </span>
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 gap-8">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 pb-6"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
