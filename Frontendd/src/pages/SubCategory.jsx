import React, { useState } from "react";
import Card from "../components/Card/Card";

const SubCategory = () => {
  const filters = ["Under ₹500", "Blue", "₹500 - ₹1000", "XL", "₹1000 - ₹2000", "₹2000 - ₹3000", "₹3000 - ₹4000", "₹4000 - ₹5000", "₹5000 - ₹6000", "₹6000 - ₹7000", "₹7000 - ₹8000",];

  const [curr, setCurr] = useState(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort Products By ...");

  const handleLoadMore = () => {
    setCurr(curr + 3);

    setTimeout(() => {
      const loadMoreButton = document.getElementById("load-more-btn");
      if (loadMoreButton) {
        loadMoreButton.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 0);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="my-10 flex items-center justify-center flex-col gap-8 px-6 sm:px-10 relative">
      <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <img
              src=""
              className="rounded-full bg-gray-400 w-[50px] h-[50px] cursor-pointer"
            />
            <div className="text-sm">Sub-Category {index + 1}</div>
          </div>
        ))}
      </div>

      <div className="sm:w-[75%] w-full flex sm:flex-row flex-col items-center justify-center gap-4 sm:gap-10">
        <div className="flex items-center justify-center rounded-lg sm:w-6/12 w-full">
          <input
            type="text"
            placeholder="Search Products Here"
            className="rounded-lg p-2 pl-4 pr-8 bg-[#e0e0e0]/25 placeholder:text-black/75 border border-black rounded-r-none border-r-0 w-full focus:outline-none active:outline-none"
          ></input>
          <div className="bi bi-search flex items-center justify-center px-4 bg-[#111827] py-[13px] text-white rounded-lg rounded-l-none cursor-pointer"></div>
        </div>
        <div className="flex items-center justify-center rounded-lg sm:w-6/12 w-full">
          <div className="relative w-full">
            <div
              className="rounded-lg px-4 py-2 bg-[#e0e0e0]/25 placeholder:text-black/75 border border-black w-full focus:outline-none active:outline-none text-black cursor-pointer flex items-center justify-between"
              onClick={toggleDropdown}
            >
              <span>{selectedOption}</span>
              <div className="bi bi-chevron-down flex items-center justify-center px-4 text-white bg-[#111827] rounded-lg py-3 rounded-l-none absolute right-0"></div>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-black rounded-lg mt-2 z-10">
                <div
                  className="px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => selectOption("Price: High to Low")}
                >
                  Price: High to Low
                </div>
                <div
                  className="px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => selectOption("Price: Low to High")}
                >
                  Price: Low to High
                </div>
                <div
                  className="px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => selectOption("Name: A to Z")}
                >
                  Name: A to Z
                </div>
                <div
                  className="px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => selectOption("Name: Z to A")}
                >
                  Name: Z to A
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="sm:w-[75%] w-full flex items-center justify-center gap-4 flex-wrap">
        {
            filters.slice(0,9).map((filter,index)=>(
                <div key={index} className="p-2 sm:px-6 px-4 shadow-sm rounded-lg w-fit bg-[#e0e0e0] cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out text-sm">{filter}</div>
            ))
        }
      </div>

      <div className="w-full flex flex-col gap-3 md:flex-row items-center justify-center flex-wrap">
        {[...Array(18)].slice(0, curr).map((_, index) => (
          <Card key={index} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <button
          id="load-more-btn"
          className="flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-xs sm:text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out disabled:opacity-50"
          onClick={handleLoadMore}
          disabled={curr == 18}
        >
          Load More Products
          <span className="bi bi-chevron-down ml-2 flex items-center justify-center"></span>
        </button>
      </div>
    </div>
  );
};

export default SubCategory;
