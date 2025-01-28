import React, { useState } from "react";
import image from "/assets/GiftFinderLoader.png";

const GiftFinder = () => {
  const [message, setMessage] = useState("Start the Search");
  const [isSearching, setIsSearching] = useState(false);
  const [value, setValue] = useState(1500);

  const giftOptions = [
    "Birthday Bouquet",
    "Anniversary Necklace",
    "Personalized Mug",
    "Customized Phone Case",
    "Spa Day Gift Set",
  ];

  const handleSendClick = () => {
    if (isSearching) return;

    setIsSearching(true);
    const messages = [
      "Looking for the best gift 🎁",
      "Searching the inventory 🔍",
      "Almost there ⏳",
    ];

    let index = 0;

    const interval = setInterval(() => {
      setMessage(messages[index]);
      index++;

      if (index === messages.length) {
        clearInterval(interval);
        setMessage("Search Complete ✅");
        setIsSearching(false);
      }
    }, 1500);
  };

  return (
    <div className="main_ctr sm:min-h-[500px] min-h-lvh my-12 sm:mx-20 sm:px-16 sm:py-2 mx-4 px-6 py-8 bg-[#efefef] rounded-xl items-center justify-between gap-2 flex sm:flex-row flex-col">
      <div className="left_div sm:w-6/12 flex flex-col gap-6">
        <div className="title_ctr">
          <div className="font-bold text-2xl sm:text-3xl ">
            Find the Perfect Gift
          </div>
          <div className="sm:text-md text-sm mt-4 sm:mt-0">
            Answer a few questions and let our gift finder do the magic.
            Personalized recommendations based on your preferences.
          </div>
        </div>

        <div className="opts_ctr flex flex-col gap-6">
          <div>
            <div className="font-bold text-lg flex gap-2">
              Price Range
              <div className="mr-4 bg-[#111827] text-white px-2 rounded-sm text-sm flex items-center justify-center">{`₹${value}`}</div>
            </div>
            <div className="w-full max-w-md">
              <input
                type="range"
                min="500"
                max="2500"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-[90%] h-2 rounded-lg appearance-none cursor-pointer range-slider"
              />
              <div className="w-[90%] flex items-center justify-between">
                <div className="text-xs flex items-center justify-center">
                  ₹500
                </div>
                <div className="text-xs flex items-center justify-center">
                  ₹2500
                </div>
              </div>
            </div>
          </div>
          <div className="occasion_ctr flex flex-col gap-3">
            <div className="font-bold text-lg">Options</div>
            <div className="options flex items-center justify-start w-full gap-3 sm:gap-4 flex-wrap">
              {giftOptions.map((option, index) => (
                <div
                  key={index}
                  className="sm:text-sm text-xs text-center bg-[#E0E0E0] rounded-full w-fit p-2 cursor-pointer hover:bg-[#111827] hover:text-white duration-200 ease-in-out"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right_div sm:w-5/12 h-full flex items-center justify-center flex-col gap-4 sm:py-16 py-0 -mt-10 sm:mt-0">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md px-4 py-10 flex items-center justify-center"
            >
              <img
                src={image}
                alt="Gift Finder Loader"
                className={`max-w-[30%] ${isSearching ? "animate-pulse" : ""}`}
              />
            </div>
          ))}
        </div>
        <div className="btns_ctr flex items-center justify-between w-full gap-2">
          <div className="w-10/12 p-4 py-2 flex items-center justify-center text-sm border border-black rounded-md bg-white shadow-sm cursor-pointer">
            {message}
          </div>
          <div
            className={`w-2/12 p-4 py-2 flex items-center justify-center bg-[#111827] shadow-sm cursor-pointer rounded-md overflow-hidden ${
              isSearching ? "bg-green-600" : ""
            }`}
            onClick={handleSendClick}
          >
            <div
              className={`bi bi-send-fill text-white duration-1000 ${
                isSearching ? "translate-x-8 -translate-y-8" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftFinder;
