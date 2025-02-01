import React, { useContext } from "react";
import HeroSection from "../components/HeroSection.jsx";
import FeatureCardsSection from "../components/FeatureCardsSection.jsx";
import FeaturedCategoriesSection from "../components/FeaturedCategoriesSection.jsx";
import SectionByLabel from "../components/SectionByLabel/SectionByLabel.jsx";
import CtaBannerSection from "../components/CtaBannerSection.jsx";
import GiftFinder from "../components/GiftFinder.jsx";
import Testimonials from '../components/Testimonials.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import Stats from '../components/Stats.jsx'
import QueryForm from '../components/QueryForm.jsx'

import { ShopContext } from "../context/ShopContext.jsx";

const Home = () => {
  const { products } = useContext(ShopContext);

  const topProducts = products.slice(8, 11);
  const lowProducts = products.slice(28, 31);
  const midProducts = products.slice(52, 55);
  const randomProducts = products.slice(39, 42);

  return (
    <div>
      <HeroSection />
      <FeatureCardsSection />
      <FeaturedCategoriesSection />
      <SectionByLabel label="Trending Picks" products={topProducts} />
      <CtaBannerSection />
      <GiftFinder />
      <CtaBannerSection />
      <SectionByLabel label="Most Loved" products={randomProducts} />
      <Testimonials/>
      <NewsLetter/>
      <Stats/>
      <QueryForm/>
    </div>
  );
};

export default Home;
