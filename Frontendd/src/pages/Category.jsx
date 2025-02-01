import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import video from "/assets/Video1.mp4";
import cardimg1 from "/assets/cardimg1.png";
import cardimg2 from "/assets/cardimg2.png";
import cardimg3 from "/assets/cardimg3.png";
import subcatbanner from "/assets/subcatbanner.png";
import Card from "../components/Card/Card.jsx";
import { ShopContext } from "../context/ShopContext.jsx";

const cardimgarr = [cardimg1, cardimg2, cardimg3];

const categoriesData = [
  {
    category: "Electronics and Gadgets",
    subCategories: [
      {
        subCategory: "Portable Electronics",
        subSubCategories: ["Power Banks", "Bluetooth Speakers", "Earphones"],
      },
      {
        subCategory: "Home Gadgets",
        subSubCategories: ["Smart Plugs", "Air Purifiers"],
      },
      {
        subCategory: "Tech Accessories",
        subSubCategories: [
          "Charging Cables",
          "Laptop Stands",
          "Wireless Chargers",
        ],
      },
    ],
  },
  {
    category: "Office Essentials",
    subCategories: [
      {
        subCategory: "Stationery",
        subSubCategories: ["Diaries", "Notebooks", "Sticky Notes"],
      },
      {
        subCategory: "Organizers",
        subSubCategories: ["Desk Organizers", "Calendars"],
      },
      {
        subCategory: "Writing Instruments",
        subSubCategories: ["Premium Pens", "Stylus Pens"],
      },
    ],
  },
  {
    category: "Drinkware",
    subCategories: [
      {
        subCategory: "Bottles",
        subSubCategories: [
          "Stainless Steel",
          "Vacuum Bottles",
          "Copper Bottles",
        ],
      },
      {
        subCategory: "Mugs and Tumblers",
        subSubCategories: ["Coffee Mugs", "Insulated Tumblers"],
      },
      {
        subCategory: "Gift Sets",
        subSubCategories: ["Bottle and Mug Combos"],
      },
    ],
  },
  {
    category: "Apparel",
    subCategories: [
      {
        subCategory: "T-Shirts",
        subSubCategories: ["Polo", "Round Neck", "Custom Printed"],
      },
      {
        subCategory: "Jackets",
        subSubCategories: ["Windcheaters", "Hoodies"],
      },
      {
        subCategory: "Uniforms",
        subSubCategories: ["Corporate Branding Uniforms"],
      },
    ],
  },
  {
    category: "Awards and Recognition",
    subCategories: [
      {
        subCategory: "Trophies",
        subSubCategories: ["Metal", "Crystal", "Wooden", "Acrylic"],
      },
      {
        subCategory: "Plaques",
        subSubCategories: ["Customized Engravings"],
      },
      {
        subCategory: "Certificates",
        subSubCategories: ["Certificate Frames"],
      },
    ],
  },
  {
    category: "Food and Beverages",
    subCategories: [
      {
        subCategory: "Gourmet",
        subSubCategories: ["Dry Fruits"],
      },
      {
        subCategory: "Sweets and Chocolates",
        subSubCategories: ["Chocolates", "Indian Sweets"],
      },
      {
        subCategory: "Gift Hampers",
        subSubCategories: ["Curated Sweets & Chocolate Hampers"],
      },
    ],
  },
  {
    category: "Eco-Friendly Products",
    subCategories: [
      {
        subCategory: "Reusable Items",
        subSubCategories: ["Bamboo Products", "Cloth Bags"],
      },
      {
        subCategory: "Sustainable Gifts",
        subSubCategories: ["Seed Paper Stationery", "Jute Items"],
      },
      {
        subCategory: "Green Hampers",
        subSubCategories: ["Planters", "Organic Kits"],
      },
    ],
  },
  {
    category: "Premium Gifts",
    subCategories: [
      {
        subCategory: "Luxury Items",
        subSubCategories: ["Branded Wallets", "Watches"],
      },
      {
        subCategory: "Designer Brands",
        subSubCategories: ["Premium Pens", "Leather Accessories"],
      },
      {
        subCategory: "High-End Combos",
        subSubCategories: ["Exclusive Hampers"],
      },
    ],
  },
  {
    category: "Bags & Luggage",
    subCategories: [
      {
        subCategory: "Duffle Bags",
        subSubCategories: [],
      },
      {
        subCategory: "Executive Trolley Bags",
        subSubCategories: [],
      },
      {
        subCategory: "Backpack Bags",
        subSubCategories: [],
      },
      {
        subCategory: "Laptop Bags",
        subSubCategories: [],
      },
      {
        subCategory: "Sling Bags",
        subSubCategories: [],
      },
      {
        subCategory: "Fanny Packs",
        subSubCategories: [],
      },
      {
        subCategory: "Gym Bags",
        subSubCategories: [],
      },
      {
        subCategory: "Waist Pouch",
        subSubCategories: [],
      },
    ],
  },
  {
    category: "Event and Seasonal Gifts",
    subCategories: [
      {
        subCategory: "Festival-Specific",
        subSubCategories: [
          "Diwali Diyas",
          "Christmas Ornaments",
          "Holi Colors",
        ],
      },
      {
        subCategory: "New Year Gifts",
        subSubCategories: ["Calendars", "Year Planners", "Desk Organizers"],
      },
      {
        subCategory: "Thank-You Gifts",
        subSubCategories: ["Greeting Cards", "Custom Hampers"],
      },
    ],
  },
];

const Category = () => {
  const { categoryName } = useParams();
  const [clickedCard, setClickedCard] = useState(false);
  const { products } = useContext(ShopContext);

  // Find the category based on the URL param
  const categoryData = categoriesData.find(
    (cat) => cat.category === decodeURIComponent(categoryName)
  );

  if (!categoryData) {
    return <div className="text-center text-xl mt-10">Category not found</div>;
  }

  const topPicks = products.filter((item) => item.category === categoryName);

  useEffect(() => {
    console.log(categoryData);
  }, []);

  return (
    <div className="my-10 flex items-center justify-center flex-col gap-12 px-6 sm:px-10 relative w-full text-[#111827]">
      {/* Dynamic Category Header */}
      <div className="text-4xl font-semibold text-center">
        {categoryData.category}
      </div>

      {/* Display Subcategories */}
      <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <div className="rounded-full bg-gray-400 w-[50px] h-[50px] cursor-pointer"></div>
            {/* <img
                src=""
              /> */}
            {/* <div className="text-sm">{sub.subCategory}</div> */}
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="header_section flex flex-col items-center justify-center gap-10 w-full">
        <div className="banner_section h-[400px] w-full rounded-xl border-2 border-[#111827]">
          <video
            src={video}
            autoPlay
            muted
            loop
            className="h-full w-full object-cover object-center rounded-xl"
          ></video>
        </div>
      </div>

      {/* Explore Collections */}
      <div className="explore_section flex flex-col items-center justify-center gap-10 w-full">
        <div className="text_ctr flex items-center justify-center flex-col text-center">
          <div className="heading_ctr text-4xl font-semibold">
            Explore {categoryData.category}
          </div>
          <div className="subheading_ctr text-lg mt-1">
            Find the best items in this category.
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap w-full px-20 h-[300px]">
          {categoryData.subCategories.slice(0, 3).map((sub, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-between h-full w-3/12 bg-[#EFEFEF] rounded-md border-2 border-black overflow-hidden relative"
            >
              <div className="text-ctr flex flex-col mt-8">
                <div className="text-center text-lg font-semibold">
                  {sub.subCategory}
                </div>
                <div className="text-center text-sm">
                  {sub.subSubCategories.join(", ") || "Various Products"}
                </div>
              </div>
              <div className="-mb-2 ">
                <img src={cardimgarr[index]} />
              </div>
              <div
                className="bi bi-plus-circle-fill bg-white text-[#111827] rounded-full px-2 py-1 absolute bottom-2 right-6 cursor-pointer"
                onClick={() => setClickedCard(true)}
              ></div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        <div
          className={`h-[35%] w-[80%] flex-col gap-6 items-center justify-center bg-[#111827] absolute rounded-xl opacity-[97.5%] py-20 ${
            clickedCard ? "flex" : "hidden"
          }`}
        >
          <div className="text_ctr flex items-center justify-center flex-col text-center text-white">
            <div className="heading_ctr text-4xl font-semibold">
              SubCategory Name
            </div>
            <div className="subheading_ctr text-lg mt-1">
              Curated gift sets for every occasion.
            </div>
          </div>
          <div
            className="bi bi-x-circle-fill text-white absolute top-10 right-10 text-3xl cursor-pointer"
            onClick={() => setClickedCard(false)}
          ></div>
          <div className="banner_section h-[300px] w-[75%] rounded-xl">
            <img
              src={subcatbanner}
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out">
            View All Gifts{" "}
            <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
          </div>
        </div>
      </div>

      {/* Top Gifts Section */}
      <div className="top_gifts flex items-center justify-center flex-col py-10 px-6 md:px-24 gap-6">
        <div className="text_ctr flex items-center justify-center flex-col">
          <div className="heading_ctr text-4xl font-semibold text-center">
            Top Gifts in {categoryData.category}
          </div>
          <div className="subheading_ctr text-lg mt-1 text-center">
            Discover what's trending
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-4 items-center justify-center">
          {topPicks.slice(0, 3).map((product, index) => (
          <Link to={`/product/${product._id}`}>
            <Card product={product} />
            </Link>
          ))}
        </div>
        <div className="explore_btn flex items-center justify-center bg-[#e0e0e0] rounded-full font-semibold px-8 py-4 text-sm cursor-pointer hover:bg-[#d4d4d4] duration-200 ease-in-out">
          <Link to={`/${categoryName}/sub-category`}>View All Gifts</Link>{" "}
          <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
        </div>
      </div>
    </div>
  );
};

export default Category;
