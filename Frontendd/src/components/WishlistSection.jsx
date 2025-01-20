import React, { useState } from "react";
import Card from "./Card/Card";

const WishlistSection = () => {
  const [curr, setCurr] = useState(3);

  const handleLoadMore = () => {
    setCurr(curr + 3);

    setTimeout(() => {
      const loadMoreButton = document.getElementById("load-more-btn");
      if (loadMoreButton) {
        loadMoreButton.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 0);
  };

  return (
    <>
      <div className="my-10 flex items-center justify-center flex-col gap-8 px-10 relative">
        <div className="text_ctr flex items-center justify-center flex-col text-center z-10 sm:w-[50%]">
          <div className="heading_ctr text-4xl sm:text-5xl font-semibold leading-tight">
            Your Wishlist, Just a Click Away
          </div>
          <div className="subheading_ctr text-md sm:text-lg mt-4 text-gray-800">
            Keep track of your dream items and make them yours whenever you're
            ready. Your perfect picks are waiting for you!
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 md:flex-row items-center justify-center flex-wrap">
          {[...Array(18)].slice(0, curr).map((_, index) => (
            <Card key={index}/>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <button
            id="load-more-btn"
            className="flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-xs sm:text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out disabled:opacity-50"
            onClick={handleLoadMore}
            disabled={curr==18}
          >
            Load More
            <span className="bi bi-heart-fill ml-2 flex items-center justify-center"></span>
          </button>

          <button className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-xs sm:text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out">
            Explore Products
            <span className="bi bi-cart ml-2 flex items-center justify-center"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WishlistSection;
