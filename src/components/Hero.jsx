// src/components/HeroSection.jsx
import React from 'react'
import heroImg from '../assets/hero.jpg' // apni image yahan import karo

export default function HeroSection() {
  return (
    <div className="rounded-3xl overflow-hidden">
      <section className="relative h-[70vh] md:h-[60vh] lg:h-[500px]">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Advisor at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/30 to-transparent" />

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-16 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Service first.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            We're here to offer guidance in a wide range of financial, tax, and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-green-400 hover:bg-green-500 text-white font-medium py-3 px-6 rounded-full transition"
            >
              Get in touch
            </a>
            <a
              href="/login"
              className="inline-block border-2 border-white text-white font-medium py-3 px-6 rounded-full transition hover:bg-white hover:text-gray-900"
            >
              Client Login
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
