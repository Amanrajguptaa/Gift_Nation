import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import FeatureCardsSection from "./Components/FeatureCardsSection/FeatureCardsSection";
import FeaturedCategoriesSection from "./Components/FeaturedCategoriesSection/FeaturedCategoriesSection";
import SectionByLabel from "./Components/SectionByLabel/SectionByLabel";
import CtaBannerSection from "./Components/CtaBannerSection/CtaBannerSection";
import GiftFinder from "./Components/GiftFinder/GiftFinder";
import HeroSection from "./Components/HeroSection/HeroSection";

const App = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default App;
