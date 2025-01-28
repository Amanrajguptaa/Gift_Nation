import React from "react";

const FeatureCardsSection = () => {
  return (
    <div className="main_ctr flex items-center justify-between gap-4 px-10 md:px-16 py-10 text-[#111827] flex-wrap sm:flex-nowrap">
      <div className="w-full sm:w-4/12 bg-[#f4f4f4] rounded-lg h-full p-6 flex flex-col items-center justify-center sm:gap-2 gap-1">
        <div className="bi bi-truck text-4xl mb-2"></div>
        <div className="font-semibold text-xl text-center leading-6">
          Fast Delivery
        </div>
        <div className="text-center leading-5">Same-Day Delivery Available</div>
      </div>
      <div className="w-full sm:w-4/12 bg-[#f4f4f4] rounded-lg h-full p-6 flex flex-col items-center justify-center sm:gap-2 gap-1">
        <div className="bi bi-box-fill text-4xl mb-2"></div>
        <div className="font-semibold text-xl text-center leading-6">
          Perfect Packaging
        </div>
        <div className="text-center leading-5">Beautifully wrapped gifts</div>
      </div>
      <div className="w-full sm:w-4/12 bg-[#f4f4f4] rounded-lg h-full p-6 flex flex-col items-center justify-center sm:gap-2 gap-1">
        <div className="bi bi-heart-fill text-4xl mb-2"></div>
        <div className="font-semibold text-xl text-center leading-6">
          Satisfaction
        </div>
        <div className="text-center leading-5">100% happiness guaranteed</div>
      </div>
    </div>
  );
};

export default FeatureCardsSection;
