// src/components/Navbar.jsx
import React from 'react'
import logo from '../assets/logo.svg'  // apni GMFG (ya KarsutraHQ) logo yahan daalo

export default function Navbar() {
  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={logo} alt="KarsutraHQ Logo" className="h-10" />
        </a>

        {/* Nav Links */}
        <ul className="flex items-center space-x-8 text-gray-800 font-medium">
          <li>
            <a href="/about" className="hover:text-gray-600">
              About us
            </a>
          </li>
          <li className="relative group">
            <button className="flex items-center hover:text-gray-600 focus:outline-none">
              Services
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Agar dropdown chahiye to yahan add kar sakte ho */}
          </li>
          <li>
            <a href="/articles" className="hover:text-gray-600">
              Recent Articles
            </a>
          </li>
        </ul>

        {/* Get in touch button */}
        <a
          href="#contact"
          className="bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-6 rounded-full transition"
        >
          Get in touch
        </a>
      </div>
    </nav>
  )
}
