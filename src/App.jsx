import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureCards from './components/FeatureCards'
import ActionCards from './components/ActionCards'
import TrustedBy from './components/TrustedBy'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <FeatureCards />
        <ActionCards />
        <TrustedBy />
      </main>
    </>
  )
}
