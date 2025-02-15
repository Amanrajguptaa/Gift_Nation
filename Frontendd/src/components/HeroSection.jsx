import React from "react";
import imgLeft from "/assets/headerLeft.png";
import imgRight from "/assets/headerRight.png";
import { Link } from "react-router-dom";

const HeroSection = () => {

  const handleClick = () => {
    document
      .getElementById("gift_finder")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="py-20 h-[60%] sm:h-[85%] my-4 flex items-center justify-center flex-col gap-8 px-10 relative">
      <img
        src={imgLeft}
        className="absolute w-[25%] hidden sm:block sm:-left-24 -bottom-16 animate-customBounce"
      />
      <img
        src={imgRight}
        className="absolute w-[25%]  hidden sm:block sm:-right-24 -bottom-16 animate-customBounce"
      />

      <div className="text_ctr flex items-center justify-center flex-col text-center z-10">
        <div className="heading_ctr text-4xl sm:text-5xl sm:w-[75%] font-semibold leading-tight">
          Thoughtful Gifting, Simplified
        </div>
        <div className="subheading_ctr text-md sm:text-lg mt-4 sm:w-[75%] text-gray-800">
          Discover unique gifts for every occasion, curated with care and
          delivered with love.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10">
        <Link to={'/categories'}>
        <div className="explore_btn flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out">
          Explore Collections
          <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
        </div>
        </Link>
        
        <button onClick={handleClick} className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out">
          View All Gifts
          <span className="bi bi-gift-fill ml-2 flex items-center justify-center"></span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
