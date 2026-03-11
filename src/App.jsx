import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import ActionCards from './components/ActionCards'
import TrustedBy from './components/TrustedBy'

export default function App() {
  return (
    <>
      {/* ADA: Skip navigation — keyboard users jump directly to content */}
      <a href="#main-content" className="skip-link">Sari la conținut principal</a>

      <Navbar />

      <main id="main-content" tabIndex={-1} style={{ paddingTop: '80px' }}>
        <Hero />
        <FeatureCards />
        <ActionCards />
        <TrustedBy />
      </main>
    </>
  )
}
