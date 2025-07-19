// src/components/BannerSection.jsx
import React, { useState } from 'react'
import bannerImg from '../assets/banner.jpg'
import ContactFormModal from './ContactFormModal'

export default function BannerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const team = [
    'Quick Service – Fast and efficient delivery.',
    'High Accuracy – Error-free execution every time.',
    'Trusted Partner – Reliable and transparent processes.',
    'On-Time Compliance – Never miss a deadline.',
  ]

  const openModal = e => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <>
      {/* Modal */}
      {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}

      {/* Banner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Helping businesses and individuals for{' '}
                <span className="bg-[#FEEAD4] text-gray-900 px-2 py-1 rounded">
                  decades
                </span>
              </h2>
              <p className="text-gray-700 mb-6">
                With years of industry experience, we offer expert-driven solutions tailored to meet your business needs effectively and efficiently.
              </p>
              <div className="space-y-2 mb-6 text-gray-800">
                {team.map(member => (
                  <p key={member}>{member}</p>
                ))}
              </div>
              <a
                href="#contact"
                onClick={openModal}
                className="inline-block bg-[#FA9426] hover:bg-[#D97E0D] text-white font-medium py-3 px-6 rounded-xl transition"
              >
                Get in touch
              </a>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={bannerImg}
                alt="Experienced advisor"
                className="w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
