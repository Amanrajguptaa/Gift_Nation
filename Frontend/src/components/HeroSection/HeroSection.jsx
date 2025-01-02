import React from "react";
import fl01 from "../../../public/assets/FloatingImgs/FloatingImg(1).png";
import fl02 from "../../../public/assets/FloatingImgs/FloatingImg(2).png";
import fl03 from "../../../public/assets/FloatingImgs/FloatingImg(3).png";
import fl04 from "../../../public/assets/FloatingImgs/FloatingImg(4).png";
import fl05 from "../../../public/assets/FloatingImgs/FloatingImg(5).png";
import fl06 from "../../../public/assets/FloatingImgs/FloatingImg(6).png";
import fl07 from "../../../public/assets/FloatingImgs/FloatingImg(7).png";
import fl08 from "../../../public/assets/FloatingImgs/FloatingImg(8).png";

const HeroSection = () => {
  return (
    <div className="h-[85%] my-10 flex items-center justify-center flex-col gap-8 px-10 relative">
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
        <div className="explore_btn flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out">
          Explore Collections
          <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
        </div>
        <div className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out">
          View All Gifts
          <span className="bi bi-gift-fill ml-2 flex items-center justify-center"></span>
        </div>
      </div>
      <div className="floating_img absolute hidden sm:block sm:top-40 sm:-right-32">
        <img src={fl01} className="w-[25%]" />
      </div>
      <div className="floating_img absolute hidden sm:block sm:top-10 sm:left-10">
        <img src={fl02} className="w-[25%]" />
      </div>
      <div className="floating_img absolute hidden sm:block sm:top-48 sm:left-52">
        <img src={fl03} className="w-[25%]" />
      </div>
      <div className="floating_img absolute hidden sm:block sm:bottom-24 sm:left-8">
        <img src={fl04} className="w-[25%]" />
      </div>
      <div className="floating_img absolute hidden sm:block sm:bottom-4 sm:left-64">
        <img src={fl05} className="w-[25%]" />
      </div>
      <div className="floating_img absolute hidden sm:block sm:top-16 sm:right-20">
        <img src={fl06} className="w-[25%]" />
      </div>
      <div className="floating_img absolute hidden sm:block sm:bottom-10 sm:-right-24">
        <img src={fl07} className="w-[25%]" />
      </div>
      <div className="floating_img absolute hidden sm:block sm:bottom-44 sm:right-8">
        <img src={fl08} className="w-[25%]" />
      </div>

      <div className="floating_img absolute block sm:hidden top-16 -left-4">
        <img src={fl01} width={"60px"} />
      </div>
      <div className="floating_img absolute block sm:hidden top-16 -right-4">
        <img src={fl02} width={"60px"} />
      </div>
      <div className="floating_img absolute block sm:hidden bottom-60 -left-8">
        <img src={fl03} width={"60px"} />
      </div>
      <div className="floating_img absolute block sm:hidden bottom-48 -right-8">
        <img src={fl04} width={"60px"} />
      </div>
      <div className="floating_img absolute block sm:hidden bottom-10 left-8">
        <img src={fl05} width={"60px"} />
      </div>
      <div className="floating_img absolute block sm:hidden bottom-12 right-8">
        <img src={fl06} width={"60px"} />
      </div>
      <div className="floating_img absolute block sm:hidden -bottom-2">
        <img src={fl07} width={"60px"} />
      </div>
      <div className="floating_img absolute block sm:hidden top-2">
        <img src={fl08} width={"60px"} />
      </div>
    </div>
  );
};

export default HeroSection;
