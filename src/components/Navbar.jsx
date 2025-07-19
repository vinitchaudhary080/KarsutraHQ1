// src/components/Navbar.jsx
import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import logo from '../assets/karsutralogo.jpeg'

export default function Navbar({ onGetInTouch }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => setIsOpen(false)

  return (
    <nav className="relative z-50 bg-white shadow">
      <div className="container mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="KarsutraHQ Logo" className="h-10 transform scale-150 origin-left" />
        </Link>

        {/* Hamburger / Close */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            smooth
            to="/#about"
            className="text-gray-800 font-medium hover:text-gray-600"
          >
            About us
          </Link>
          <Link
            smooth
            to="/#services"
            className="text-gray-800 font-medium hover:text-gray-600"
          >
            Services
          </Link>
          <button
            onClick={onGetInTouch}
            className="bg-[#FA9426] hover:bg-[#D97E0D] text-white font-medium py-2 px-6 rounded-xl transition"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-white border-t z-50 shadow-lg">
          <ul className="flex flex-col px-6 pt-4 space-y-4">
            <li>
              <Link
                smooth
                to="/#about"
                onClick={handleNavClick}
                className="block text-gray-800 font-medium hover:text-gray-600"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                smooth
                to="/#services"
                onClick={handleNavClick}
                className="block text-gray-800 font-medium hover:text-gray-600"
              >
                Services
              </Link>
            </li>
          </ul>

          {/* Action Button */}
          <div className="px-6 py-4">
            <button
              onClick={() => { handleNavClick(); onGetInTouch() }}
              className="block w-full bg-[#FA9426] hover:bg-[#D97E0D] text-white font-medium text-center py-2 rounded-full transition"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
