// src/components/Banner.jsx
import React from 'react'
import ArrowIconD from '../assets/arrow-rightD.svg'
import BannerImg from '../assets/banner.jpg'

export default function Banner() {
    const scrollToFooter = () => {
    const footerEl = document.getElementById('footer')
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section
      id="contact"
      className="relative w-full bg-[#00CBA8] py-20"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Heading + CTA */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Let&apos;s Build<br />
            Digital Studio<br />
            Magic
          </h2>
          <button onClick={scrollToFooter} className="flex items-center justify-center w-32 h-32 bg-black text-white rounded-full transition hover:bg-gray-800 mx-auto lg:mx-0">
            <span className="text-base font-medium">Contact us</span>
            <img src={ArrowIconD} alt="arrow" className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Right: Rotated Image Card */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={BannerImg}
              alt="Digital Studio Magic"
              className="w-64 sm:w-80 md:w-96 rounded-xl transform -rotate-3 shadow-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
             
              <a
                href="mailto:thetagainers@gmail.com"
                className="text-sm font-medium underline"
              >
                thetagainers@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
