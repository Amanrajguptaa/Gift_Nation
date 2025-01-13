import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import FeatureCardsSection from '../Components/FeatureCardsSection/FeatureCardsSection'
import FeaturedCategoriesSection from '../Components/FeaturedCategoriesSection/FeaturedCategoriesSection'
import SectionByLabel from '../Components/SectionByLabel/SectionByLabel'
import CtaBannerSection from '../Components/CtaBannerSection/CtaBannerSection'
import GiftFinder from '../Components/GiftFinder/GiftFinder'

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
