import React, { useEffect } from "react";
import CategoryCard from "../components/CategoryCard.jsx";
import CtaBannerSection from '../components/CtaBannerSection'
const emotes = [
  "👜",
  "💼",
  "🤖",
  "🎁",
  "🎀",
  "🛍️",
  "💝",
  "🎊",
  "🎉",
  "📦",
  "💳",
  "🎂",
  "🍫",
];


const AllCategoriesPage = () => {

  useEffect(()=>{
    console.log("heelo");
    
  },[])

  return (
    <div className="main_ctr flex items-center justify-center flex-col py-10 px-6 md:px-24 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col">
        <div className="heading_ctr text-4xl font-semibold text-center">
          Discover All Categories
        </div>
        <div className="subheading_ctr text-lg mt-1 text-center">
          There's no gift left-out
        </div>
      </div>
      <div className="cards_ctr w-full grid grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={`card py-6 px-4 rounded-lg flex gap-4 ${
              index % 2 == 0 ? "bg-[#efefef]" : "bg-[#fef7c5]"
            }`}
          >
            <div className="bg-white hidden sm:block h-full w-4/12 rounded-md shadow-md"></div>
            <div className="flex flex-col gap-3">
              <div className="font-semibold text-xl">{`Category ${
                index + 1
              }`}</div>
              <div className="text-md">FomoText</div>
              <div className="text-sm font-semibold cursor-pointer flex items-center">
                BtnCta
                <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCategoriesPage;

