// src/components/Navbar.jsx
import React, { useState } from 'react'
import logo from '../assets/logo.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative z-40 bg-white shadow">
      <div className="container mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="KarsutraHQ Logo" className="h-10" />
        </a>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-gray-800 font-medium">
            <li><a href="/about"      className="hover:text-gray-600">About us</a></li>
            <li><a href="/services"   className="hover:text-gray-600">Services</a></li>
            <li><a href="/articles"   className="hover:text-gray-600">Recent Articles</a></li>
          </ul>
          <a
            href="#contact"
            className="bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-6 rounded-full transition"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            <li>
              <a
                href="/about"
                className="block text-gray-800 font-medium hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="block text-gray-800 font-medium hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/articles"
                className="block text-gray-800 font-medium hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Recent Articles
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block bg-green-400 hover:bg-green-500 text-white font-medium text-center py-2 px-6 rounded-full transition"
                onClick={() => setIsOpen(false)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
)
}
