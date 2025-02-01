import React from "react";

const Stats = () => {
  return (
    <div className="main_ctr flex items-center justify-center flex-col py-10 px-10 sm:px-20 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col">
        <div className="heading_ctr text-4xl font-semibold text-center">
          Spreading Joy, <br className="sm:hidden" />
          <span className="bg-[#111827] text-white px-2">
            One Gift at a Time
          </span>
        </div>
        <div className="subheading_ctr text-lg mt-1 text-center">
          Creating Memorable Moments with Thoughtfully Curated Gifts
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="w-full sm:w-4/12 bg-[#fef7c5] rounded-lg h-full p-6 py-10 flex flex-col items-center justify-center sm:gap-2 gap-1 relative">
          <div className="text-4xl font-bold">1000+</div>
          <div className="font-semibold text-xl text-center leading-6">
            Fast Delivery
          </div>
          <div className="text-center leading-5">
            Same-Day Delivery Available
          </div>
        </div>
        <div className="w-full sm:w-4/12 bg-[#f4f4f4] rounded-lg h-full p-6 py-10 flex flex-col items-center justify-center sm:gap-2 gap-1">
          <div className="text-4xl font-bold">200+</div>
          <div className="font-semibold text-xl text-center leading-6">
            Perfect Packaging
          </div>
          <div className="text-center leading-5">Beautifully wrapped gifts</div>
        </div>
        <div className="w-full sm:w-4/12 bg-[#fef7c5] rounded-lg h-full p-6 py-10 flex flex-col items-center justify-center sm:gap-2 gap-1">
          <div className="text-4xl font-bold">500+</div>
          <div className="font-semibold text-xl text-center leading-6">
            Satisfaction
          </div>
          <div className="text-center leading-5">100% happiness guaranteed</div>
        </div>
      </div>
      <div className="w-full hidden sm:flex items-center justify-center gap-4">
        <div className="w-full sm:w-4/12 bg-[#f4f4f4] rounded-lg h-full p-6 py-10 flex flex-col items-center justify-center sm:gap-2 gap-1 relative">
          <div className="text-4xl font-bold">1000+</div>
          <div className="font-semibold text-xl text-center leading-6">
            Fast Delivery
          </div>
          <div className="text-center leading-5">
            Same-Day Delivery Available
          </div>
        </div>
        <div className="w-full sm:w-4/12 bg-[#fef7c5] rounded-lg h-full p-6 py-10 flex flex-col items-center justify-center sm:gap-2 gap-1">
          <div className="text-4xl font-bold">200+</div>
          <div className="font-semibold text-xl text-center leading-6">
            Perfect Packaging
          </div>
          <div className="text-center leading-5">Beautifully wrapped gifts</div>
        </div>
        <div className="w-full sm:w-4/12 bg-[#f4f4f4] rounded-lg h-full p-6 py-10 flex flex-col items-center justify-center sm:gap-2 gap-1">
          <div className="text-4xl font-bold">500+</div>
          <div className="font-semibold text-xl text-center leading-6">
            Satisfaction
          </div>
          <div className="text-center leading-5">100% happiness guaranteed</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
