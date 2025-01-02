import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../Card/Card.jsx";
import "./SectionByLabel.css";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute text-2xl top-1/2 right-0 md:right-5 transform -translate-y-1/2 bg-[#EFEFEF] text-black p-2 md:p-3 lg:p-4 rounded-full shadow-lg focus:outline-none z-10"
    onClick={onClick}
  >
    &#8250;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute text-2xl top-1/2 left-0 md:left-5 transform -translate-y-1/2 bg-[#EFEFEF] text-black p-2 md:p-3 lg:p-4 rounded-full shadow-lg focus:outline-none z-10"
    onClick={onClick}
  >
    &#8249;
  </button>
);

const SectionByLabel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: "unslick", 
      },
    ],
  };

  const products = [1, 2, 3]; 

  return (
    <div className="main_ctr flex items-center justify-center flex-col py-10 px-6 md:px-24 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col">
        <div className="heading_ctr text-4xl font-semibold text-center">
          Trending Now
        </div>
        <div className="subheading_ctr text-lg mt-1 text-center">
          Discover what's capturing hearts this season
        </div>
      </div>

      <Slider className="w-full mt-6" {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-2">
            <Card product={product} /> 
          </div>
        ))}
      </Slider>

      <div className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out mt-6">
        View All Gifts
        <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
      </div>
    </div>
  );
};

export default SectionByLabel;
