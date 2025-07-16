// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  const quickLinks = ['About Us', 'Case Studies', 'Services', 'Blogs', 'Contact Us']
  const otherPages = ['Our Teams', 'Testimonials', 'FAQs', '404']
  const services = [
    'Budgeting Assistance',
    'Financial Planning',
    'Estate Planning',
    'Tax Optimization',
    'Investment Guidance',
    'Retirement Planning',
  ]
  const team = [
    {
      label: 'Phone', value: '+1 (555) 123-4567', icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l1 5-1 5H3m18-10h-2l-1 5 1 5h2M8 3h8l1 4H7L8 3z" />
        </svg>
      )
    },
    {
      label: 'Email', value: 'info@finania.com', icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6m-9 6v6" />
        </svg>
      )
    },
    {
      label: 'Office', value: '123 Financial Way, Suite 456, New York, NY 10001', icon: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 21V3h16v18M8 21V12h8v9" />
        </svg>
      )
    },
  ]

  return (
    <footer className="bg-white text-gray-800">
      {/* CTA Banner */}
      <div className="border-b overflow-hidden py-12">
        <div className="inline-flex whitespace-nowrap animate-marquee">
          {Array(3).fill("LET'S TALK ↗").map((text, i) => (
            <span
              key={i}
              className="inline-block mx-8 text-6xl font-bold text-gray-300 uppercase"
            >
              {text}
            </span>
          ))}
        </div>
      </div>



      {/* Main Links */}
      <div className="container mx-auto px-6 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Pages */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Other Pages</h3>
          <ul className="space-y-2">
            {otherPages.map((page) => (
              <li key={page}>
                <a href="#" className="hover:underline">
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((svc) => (
              <li key={svc}>
                <a href="#" className="hover:underline">
                  {svc}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Contact</h3>
          <ul className="space-y-4">
            {team.map(({ label, value, icon }) => (
              <li key={label} className="flex items-start">
                <div className="flex-shrink-0">{icon}</div>
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-sm">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Subscribe Newsletter</h3>
          <form className="flex space-x-2 mb-4">
            <input
              type="email"
              placeholder="your@gmail.com"
              className="flex-grow bg-gray-100 rounded-full px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white rounded-full px-4 py-2"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm">
            Subscribe to our newsletter for the latest financial tips and insights.
          </p>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="border-t">
        <div className="container mx-auto px-6 lg:px-16 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>
            Finania © 2025. All Rights Reserved.{' '}
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">Terms of Service</a>{' '}
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </p>

        </div>
      </div>
    </footer>
  )
}
