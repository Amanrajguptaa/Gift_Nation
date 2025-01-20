import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import FeatureCardsSection from '../components/FeatureCardsSection.jsx'
import FeaturedCategoriesSection from '../components/FeaturedCategoriesSection.jsx'
import SectionByLabel from '../components/SectionByLabel/SectionByLabel.jsx'
import CtaBannerSection from '../components/CtaBannerSection.jsx'
import GiftFinder from '../components/GiftFinder.jsx'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureCardsSection />
      <FeaturedCategoriesSection />
      <SectionByLabel />
      <CtaBannerSection/>
      <SectionByLabel />
      <GiftFinder/>
      <SectionByLabel />
      <CtaBannerSection/>
      <SectionByLabel />
    </div>
  )
}

export default Home
