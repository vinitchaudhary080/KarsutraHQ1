// src/components/HeroSection.jsx
import React, { useState } from 'react'
import heroImg from '../assets/hero.jpg'
import ContactFormModal from './ContactFormModal'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = e => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const scrollToServices = e => {
    e.preventDefault()
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}

      <div className="container mx-auto px-6 lg:px-16 mt-8">
        <div className="rounded-3xl overflow-hidden">
          <section className="relative h-[70vh] md:h-[60vh] lg:h-[500px]">
            {/* Background image */}
            <img
              src={heroImg}
              alt="Advisor at work"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/30 to-transparent" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center pl-6 lg:pl-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Service first.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                We're here to offer guidance in a wide range of financial, tax, and business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Get in touch button: full width on mobile, auto on sm+ */}
                <a
                  href="#contact"
                  onClick={openModal}
                  className="w-full sm:w-auto block text-center bg-[#FA9426] hover:bg-[#D97E0D] text-white font-normal sm:font-medium py-2 sm:py-3 px-6 rounded-xl transition"
                >
                  Get in touch
                </a>

                {/* Explore Services button */}
                <a
                  href="#services"
                  onClick={scrollToServices}
                  className="w-full sm:w-auto block text-center border-2 border-white text-white font-medium py-3 px-6 rounded-xl transition hover:bg-white hover:text-gray-900"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
