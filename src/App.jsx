// src/App.jsx

import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import BannerSection from './components/BannerSection'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import ContactFormModal from './components/ContactFormModal'

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>   <ScrollToTop />

       {isFormOpen && (
       <ContactFormModal onClose={() => setIsFormOpen(false)} />
    )}
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              
              <Navbar onGetInTouch={() => setIsFormOpen(true)} />
              <Hero />
              <AboutSection />
              <ServicesSection />
              <BannerSection />
              <Testimonials />
              <FAQ />
              <Footer />
            </>
          }
        />

        {/* Terms & Conditions */}
        <Route
          path="/terms"
          element={
            <>
              <Navbar />
              <Terms />
              <Footer />
            </>
          }
        />

        {/* Privacy Policy */}
        <Route
          path="/privacy"
          element={
            <>
              <Navbar />
              <Privacy />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}
