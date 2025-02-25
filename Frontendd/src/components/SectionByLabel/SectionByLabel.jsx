import React from "react";
import Card from "../Card/Card.jsx";
import "./Sectionstyle.css";
import { Link } from "react-router-dom";

const SectionByLabel = ({ label, products }) => {
  return (
    <div className="main_ctr flex items-center justify-center flex-col py-10 px-6 md:px-24 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col">
        <div className="heading_ctr text-4xl font-semibold text-center">
          {label}
        </div>
        <div className="subheading_ctr text-lg mt-1 text-center">
          Discover what's capturing hearts this season
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 md:flex-row items-center justify-center">
        {products.map((product, index) => {
          return (
            
            <Link onClick={() => scrollTo(0, 0)} to={`/product/${product._id}`}>
              <Card product={product} />
            </Link>
          );
        })}

      </div>
      <Link to={`/${label}`}>
      <div className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out">
        View All Gifts
        <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
      </div>
      </Link>
    </div>
  );
};

export default SectionByLabel;
