import React from "react";
import index from "/assets/CtaBannerImg.png";

const CtaBannerSection = () => {
  return (
    <div className="my-8 mx-4 sm:mx-8 lg:mx-20">
      <div className="main_ctr bg-[#111827] max-h-[250px] sm:h-[200px] lg:h-[300px] px-8 sm:px-12 lg:px-20 text-white py-16 lg:py-36 w-auto rounded-xl flex items-center justify-between gap-6">
        <div className="left_ctr w-7/12">
          <div className="heading font-semibold text-2xl md:text-3xl lg:text-5xl leading-6">
            Find the Perfect Gift
          </div>
          <div className="sub_heading text-sm sm:text-md lg:text-xl text-white/75 mt-1">
            Curated gift sets for every occasion and person in your life.
          </div>
          <div className="explore_btn flex items-center justify-center border border-white/50 rounded-full sm:w-7/12 lg:w-6/12 text-white px-4 py-3 text-xs md:text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out mt-3">
          Find Out Now
          <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
        </div>
        </div>
        <div className="right_ctr w-5/12 flex items-center justify-center">
          <img
            src={index} 
            className="max-w-[90%] sm:w-[75%] md:w-[60%] mt-8 animate-customBounce"
          />
        </div>
        
      </div>
    </div>
  );
};

export default CtaBannerSection;
