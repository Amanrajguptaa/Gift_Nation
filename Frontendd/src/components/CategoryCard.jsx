import React from "react";
// import image from "/assets/image.png";

const CategoryCard = () => {
  return (
    <div className="category_card w-[450px] rounded-lg flex flex-col items-center justify-start gap-4 p-6 shadow-md bg-[#ebebeb] relative">
      <div className="absolute bg-[#111827] bottom-0 right-0 w-16 h-16 rounded-br-xl rounded-tl-xl shadow-md text-2xl flex items-center justify-center cursor-pointer">
        <span className="hover:animate-bounce duration-200"></span>
      </div>
      {/* <img src={image} className="object-cover h-[150px] w-full rounded-md" /> */}
      <div
        className={`h-full w-full flex flex-col gap-2 py-2 
        }`}
      >
        <div className="heading_ctr text-2xl font-semibold">
          Categories Name
        </div>
        <div className="subheading_ctr text-md leading-snug w-[75%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </div>
        {/* <div
          className={`flex items-start flex-col gap-1 mt-2
          }`}
        >
          <div className="text-lg font-semibold leading-tight border">
            5+ Sub-Cateogries
          </div>
          <div className="text-lg font-semibold leading-tight">
            200+ Total Products
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryCard;
