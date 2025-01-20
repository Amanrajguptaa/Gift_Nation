import React, { useState } from "react";
import Card from "../Components/Card/Card";

const Product = () => {
  const [isHeart, setIsHeart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [currQty, setCurrQty] = useState(1);

  function handleMinusQty() {
    currQty == 1 ? null : setCurrQty(currQty - 1);
  }

  function handlePlusQty() {
    setCurrQty(currQty + 1);
  }

  function toggleHeart() {
    setIsHeart(!isHeart);
  }

  const handleAddToCart = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className="main_ctr w-full my-10 px-8 lg:px-20 flex flex-col gap-10">
      <div className="upper_ctr w-full lg:h-[375px] md:h-[500px] h-[800px] flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <div className="left_ctr w-full md:w-5/12 h-full flex flex-col gap-3">
          <div className="main_img h-[75%] lg:h-[75%] md:h-[50%] w-full rounded-lg">
            <img src="" className="bg-[#e0e0e0]/50 h-full rounded-lg w-full" />
          </div>
          <div className="carousel_img w-full h-[25%] lg:h-[25%] md:h-[15%] flex items-center justify-center gap-4">
            <div className="h-full rounded-lg w-4/12">
              <img
                src=""
                className="bg-[#e0e0e0]/50 w-full h-full rounded-lg"
              />
            </div>
            <div className="h-full rounded-lg w-4/12">
              <img
                src=""
                className="bg-[#e0e0e0]/50 w-full h-full rounded-lg"
              />
            </div>
            <div className="h-full rounded-lg w-4/12">
              <img
                src=""
                className="bg-[#e0e0e0]/50 w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="right_ctr w-full md:w-7/12 h-full md:p-4 md:px-8 flex flex-col justify-center">
          <div className="uppr_ctr w-full py-4 flex flex-col">
            <div className="text-4xl font-semibold">Product Name</div>
            <div className="text-lg">FOMO Text</div>
            <div className="short_desc text-md md:text-base md:w-[75%] md:mt-3 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiumdod tempor incididunt ut labore.
            </div>
          </div>
          <div className="mid_div border-y border-black py-4 flex flex-col md:flex-row items-start md:items-center justify-start gap-4 lg:gap-10">
            <div className="left_ctr flex items-end md:items-start md:flex-col w-full md:w-5/12 lg:w-4/12 md:border-r md:border-black gap-2">
              <div className="flex flex-col">
                <div className="line-through text-md">₹1,234</div>
                <div className="text-4xl font-semibold">₹1,234</div>
              </div>
              <div className="rounded-full flex items-center justify-center w-3/12 md:w-8/12 bg-[#111827] text-white px-2 py-2 text-xs font-bold md:mt-2 scale-[0.8] md:scale-[1]">
                50% Off
              </div>
            </div>
            <div className="right_ctr flex flex-col  w-full md:w-6/12 md:px-4 gap-3">
              <div className="flex items-start justify-between flex-col-reverse gap-2">
                <div className="units_ctr flex bg-white items-center justify-center w-6/12 md:w-full lg:w-6/12 rounded-md border border-black">
                  <div
                    className="bi bi-dash-circle w-full flex items-center justify-center h-full 4 cursor-pointer"
                    onClick={() => handleMinusQty()}
                  ></div>
                  <div className="w-full flex items-center justify-center border-x border-black">
                    {currQty}
                  </div>
                  <div
                    className="bi bi-plus-circle w-full flex items-center justify-center h-full 4 cursor-pointer"
                    onClick={() => handlePlusQty()}
                  ></div>
                </div>
                <div className="flex gap-2">
                  <div
                    className={`bi bi-heart-fill border border-black px-[6px] py-1 w-fit rounded-full text-xs cursor-pointer ${
                      isHeart ? "bg-red-600 text-white heart-bounce" : ""
                    }`}
                    onClick={toggleHeart}
                  ></div>
                  <div className={`${isHeart ? "hidden" : "block"}`}>
                    WishList?
                  </div>
                </div>
              </div>
              <div
                className={`btn_ctr flex items-center justify-center text-white rounded-full px-4 md:px-8 py-2 text-xs lg:text-sm md:text-xs cursor-pointer ${
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
          <div className="lower_ctr w-full flex py-6 items-center justify-center gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center justify-center"
              >
                <img
                  src=""
                  className="rounded-full bg-[#e0e0e0] w-[50px] h-[50px] cursor-pointer"
                />
                <div className="text-xs md:text-md text-center">
                  Sub-Category {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="desc_ctr w-full border-y border-black flex flex-col gap-2 py-10">
        <div className="text-2xl font-semibold">Description</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiumdod tempor incididunt ut labore. dolor sit amet, consectetur
          adipiscing elit, sed do eiumdod tempor incididunt ut labore. dolor sit
          amet orem ipsum, consectetur adipiscing elit, sed do eiumdod tempor
          incididunt ut labore. consectetur adipiscing elit, sed do eiumdod
          tempor incididunt ut labore Lorem ipsum dolor sit amet,{" "}
        </div>
      </div>
      <div className="suggested_ctr w-full flex flex-col gap-6 py-2">
        <div className="text-3xl font-semibold">Customers Also Buy....</div>
        <div className="w-full flex flex-wrap gap-10">
          {[...Array(3)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
