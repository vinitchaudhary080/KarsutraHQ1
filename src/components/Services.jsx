// src/components/Services.jsx
import React from 'react'
import BrandingIcon from '../assets/branding.svg'
import WebDevIcon from '../assets/web.svg'
import MarketingIcon from '../assets/marketing.svg'
import VideoIcon from '../assets/video.svg'
import BrandingBg from '../assets/Branding.jpg'
import WebBg from '../assets/Web.jpg'
import DigitalBg from '../assets/Digital.jpg'
import VideoBg from '../assets/Video.jpg'

export default function Services() {
  // Card data with icon, title and specific bg image
  const cards = [
    { icon: BrandingIcon, title: 'Branding & design', bg: BrandingBg },
    { icon: WebDevIcon, title: 'Web development', bg: WebBg },
    { icon: MarketingIcon, title: 'Digital marketing', bg: DigitalBg },
    { icon: VideoIcon, title: 'Video production', bg: VideoBg },
  ]

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div>
            <span className="inline-flex items-center px-3 py-1 border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-4">
              <span className="text-xs mr-2">●</span>Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-lg">
              Innovative digital solutions for your brand
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden h-64"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${card.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                <img src={card.icon} alt={card.title} className="self-end w-8 h-8" />
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
