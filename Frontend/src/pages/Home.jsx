import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection.jsx'
import FeatureCardsSection from '../Components/FeatureCardsSection/FeatureCardsSection.jsx'
import FeaturedCategoriesSection from '../Components/FeaturedCategoriesSection/FeaturedCategoriesSection.jsx'
import SectionByLabel from '../Components/SectionByLabel/SectionByLabel.jsx'
import CtaBannerSection from '../Components/CtaBannerSection/CtaBannerSection.jsx'
import GiftFinder from '../Components/GiftFinder/GiftFinder.jsx'

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
