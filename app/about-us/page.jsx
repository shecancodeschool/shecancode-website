import React from 'react'
import AboutUsBanner from '@/components/AboutUsBanner'
import WhoWeAre from '@/components/WhoWeAre'
import HistoricalBackground from '@/components/HistoricalBackground'
import VisionMission from '@/components/VisionMission'
import CoreValues from '@/components/CoreValues'


const page = () => {
  return (
   <>
   <AboutUsBanner />
   <WhoWeAre />
   <HistoricalBackground />
   <VisionMission />
   <CoreValues />
   </>
  )
}

export default page