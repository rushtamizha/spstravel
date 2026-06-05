import AirportTaxiPricing from '@/components/Routes'
import FleetsSection from '@/components/FleetsSection'
import HeroSection from '@/components/Hero'
import React from 'react'
import RoutesSection from '@/components/Routes'
import Testimonials from '@/components/Testimonials'

const page = () => {
  return (
    <div className='bg-white'>
      <HeroSection/>
      <FleetsSection/>
      <RoutesSection/>
      <Testimonials/>
    </div>
  )
}

export default page