import React, { useState } from "react";
import "./Cardstyle.css";

const Card = () => {
  const [isHeart, setIsHeart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  function toggleHeart() {
    setIsHeart(!isHeart);
  }

  const handleAddToCart = () => {
    setIsAdded(!isAdded);
  };

  return (
    <>
      <div className="card p-4 rounded-lg bg-[#e0e0e0]  sm:h-[325px] sm:w-[90%] md:h-[375px] md:w-[300px] h-[180px] flex md:flex-col gap-4 w-full">
        <div className="img_ctr bg-white rounded-lg h-full md:h-[60%] relative w-6/12 md:w-full">
          <div
            className={`bi bi-heart-fill border border-black px-[6px] py-1 sm:scale-[1.2] w-fit rounded-full text-xs absolute right-2 top-2 cursor-pointer ${
              isHeart ? "bg-red-600 text-white heart-bounce" : ""
            }`}
            onClick={toggleHeart}
          ></div>
        </div>

        <div className="w-6/12 md:w-full flex flex-col sm:gap-6 md:gap-0 justify-between sm:justify-center md:mt-2">
          <div className="desc_ctr w-full flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between md:mb-6">
            <div className="right_ctr flex flex-col gap-1 md:gap-2 w-full">
              <div className="text-xs sm:text-xl md:text-xs">Category Name</div>
              <div className="font-semibold text-xl w-full sm:text-3xl md:text-lg md:-mt-1 leading-5 md:leading-none">
                Product Name 
              </div>
            </div>
            <div className="left_ctr flex flex-col items-start md:items-end">
              <div className="text-xs sm:text-xl md:text-xs line-through">₹1500</div>
              <div className="font-semibold text-lg sm:text-3xl md:text-lg -mt-1">₹1,234</div>
            </div>
          </div>

          <div
            className={`btn_ctr flex items-center justify-center text-white rounded-full px-4 md:px-8 py-2 text-xs sm:text-lg md:text-sm cursor-pointer ${
              isAdded
                ? "bg-green-600"
                : "bg-[#111827] hover:bg-[#1d283f] duration-200 ease-in-out"
            }`}
            onClick={handleAddToCart}
          >
            {isAdded ? (
              <div className="flex items-center gap-2 animate-fade-in">
                <i className="bi bi-cart-check"></i> Added
              </div>
            ) : (
              "Add to Cart"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

