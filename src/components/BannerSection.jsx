// src/components/BannerSection.jsx
import React from 'react'
import bannerImg from '../assets/banner.jpg'  // apni image yahan daalna

export default function BannerSection() {
  const team = [
    'Michael L. Cove, CPA with 35 years experience',
    'Philip D. Felson, CPA with 38 years experience',
    'Richard L. Skeen, JD, LL.M (Taxation) with 18 years experience',
    'Michael D. Felson, CPA with 12 years experience',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Helping businesses and individuals for{' '}
              <span className="bg-green-100 text-gray-900 px-2 py-1 rounded">
                decades
              </span>
            </h2>
            <p className="text-gray-700 mb-6">
              With years of experience in the industry, we have the expertise to provide you with the right solutions to meet your financial goals.
            </p>
            <div className="space-y-2 mb-6 text-gray-800">
              {team.map((member) => (
                <p key={member}>{member}</p>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block bg-green-400 hover:bg-green-500 text-white font-medium py-3 px-6 rounded-full transition"
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
  )
}
