import React, { useContext } from 'react'
import HeroSection from '../components/HeroSection.jsx'
import FeatureCardsSection from '../components/FeatureCardsSection.jsx'
import FeaturedCategoriesSection from '../components/FeaturedCategoriesSection.jsx'
import SectionByLabel from '../components/SectionByLabel/SectionByLabel.jsx'
import CtaBannerSection from '../components/CtaBannerSection.jsx'
import GiftFinder from '../components/GiftFinder.jsx'
import { ShopContext } from '../context/ShopContext.jsx'

const Home = () => {

  const {products} = useContext(ShopContext);

  const topProducts = products.slice(8,11);
  const lowProducts = products.slice(28,31)
  const midProducts = products.slice(52,55)
  const randomProducts = products.slice(39,42)

  return (
    <div>
      <HeroSection/>
      <FeatureCardsSection />
      <FeaturedCategoriesSection />
      <SectionByLabel label="Trending Picks" products={topProducts} />
      <CtaBannerSection/>
      <SectionByLabel label="Low Price" products={lowProducts} />
      <GiftFinder/>
      <SectionByLabel label="Mid Price" products={midProducts} />
      <CtaBannerSection/>
      <SectionByLabel label="Most Loved" products={randomProducts} />
    </div>
  )
}

export default Home
