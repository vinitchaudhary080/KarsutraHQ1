// src/components/Footer.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import phoneIcon from '../assets/Phone Rounded.svg'
import letterIcon from '../assets/Letter.svg'
import buildingIcon from '../assets/Buildings.svg'
import ContactFormModal from './ContactFormModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const quickLinks = ['About Us', 'Services', 'Testimonials', 'FAQs', 'Contact Us']
  const services = [
    'Company Incorporation',
    'GST Registration Online',
    'Limited Liability Partnership',
    'ITR Filling',
    'MSME Registration',
    'Trademark Registration',
  ]
  const team = [
    {
      label: 'Phone',
      value: '+91-9413730750',
      icon: <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-2 object-contain" />
    },
    {
      label: 'Email',
      value: 'karsutrahq@gmail.com',
      icon: <img src={letterIcon} alt="Email" className="w-5 h-5 mr-2 object-contain" />
    },
    {
      label: 'Office',
      value:
        '4th Floor, ENKAY TOWER, Phase V, Udyog Vihar, Sector 19, Gurugram, Haryana 122001',
      icon: <img src={buildingIcon} alt="Office" className="w-5 h-5 mr-2 object-contain" />
    },
  ]

  const scrollToSection = id => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLinkClick = link => {
    if (link === 'Contact Us') {
      setIsModalOpen(true)
    } else {
      const map = {
        'About Us': 'about',
        'Services': 'services',
        'Testimonials': 'testimonials',
        'FAQs': 'faq'
      }
      const id = map[link]
      if (id) scrollToSection(id)
    }
  }

  return (
    <footer className="bg-white text-gray-800">
      {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}

      {/* CTA Banner */}
      <div className="border-b overflow-hidden py-12">
        <div className="inline-flex whitespace-nowrap animate-marquee">
          {Array(3).fill("LET'S TALK ↗").map((text, i) => (
            <span
              key={i}
              className="inline-block mx-8 text-6xl font-bold text-[#FA9426] uppercase"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Main Links */}
      <div className="container mx-auto px-6 lg:px-16 py-12 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold uppercase mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link}>
                <button
                  onClick={() => handleLinkClick(link)}
                  className="hover:underline text-left"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold uppercase mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map(svc => (
              <li key={svc}>
                <a href="#" className="hover:underline">{svc}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold uppercase mb-4">
            <button onClick={() => setIsModalOpen(true)} className="hover:underline">
              Contact
            </button>
          </h3>
          <ul className="space-y-4">
            {team.map(({ label, value, icon }) => (
              <li key={label} className="flex items-start">
                {icon}
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-sm">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="border-t">
        <div className="container mx-auto px-6 lg:px-16 py-4 flex flex-col md:flex-row items-center">
          <p className="text-sm text-gray-600 md:flex-1">
            KarSutraHQ © 2025. All Rights Reserved.
          </p>
          <div className="mt-2 md:mt-0 space-x-4">
            <Link to="/terms" className="text-sm text-gray-600 hover:underline">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
