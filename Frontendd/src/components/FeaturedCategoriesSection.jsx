import React from "react";
import { Link } from "react-router-dom";

const FeaturedCategoriesSection = () => {
  const cardsData = [
    {
      FomoText: "Hurry! Limited-time gifts.",
      BtnCta: "Shop Now",
    },
    {
      FomoText: "Trending gifts—don’t miss out!",
      BtnCta: "Explore Now",
    },
    {
      FomoText: "Perfect gifts, while they last!",
      BtnCta: "Discover More",
    },
    {
      FomoText: "Exclusive deals for you!",
      BtnCta: "Grab Yours",
    },
    {
      FomoText: "Loved by all—get yours!",
      BtnCta: "Check It Out",
    },
    {
      FomoText: "Unique finds, act fast!",
      BtnCta: "Browse Now",
    },
  ];

  return (
    <div className="main_ctr flex items-center justify-center flex-col py-10 px-10 sm:px-16 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col text-center">
        <div className="heading_ctr text-4xl font-semibold">
          Featured Collections
        </div>
        <div className="subheading_ctr text-lg mt-1">
          Curated gift sets for every occasion and person in your life.
        </div>
      </div>
      <div className="cards_ctr w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsData.map((cardData, index) => (
          <div
            key={index}
            className={`card py-8 px-8 rounded-lg sm:flex flex-col gap-3 ${
              index % 2 == 0 ? "bg-[#efefef]" : "bg-[#fef7c5]"
            } ${index > 2 ? "hidden" : "flex"}`}
          >
            <div className="font-semibold text-xl">{`Category ${
              index + 1
            }`}</div>
            <div className="text-md">{cardData.FomoText}</div>
            <div className="text-sm font-semibold cursor-pointer flex items-center">
              {cardData.BtnCta}
              <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
            </div>
          </div>
        ))}
      </div>
      <Link to={"/categories"}>
        <button className="explore_btn flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out">
          Explore Collections
          <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
        </button>
      </Link>
    </div>
  );
};

export default FeaturedCategoriesSection;
