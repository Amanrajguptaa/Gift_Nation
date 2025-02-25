import React, { useState, useEffect, useContext } from "react";
import Card from "../components/Card/Card";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

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

const SubCategory = () => {
  const { products } = useContext(ShopContext);
  const { category } = useParams();
  const [subCategories, setSubCategories] = useState([]);
  const [curr, setCurr] = useState(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort Products By ...");
  const [showProducts, setShowProducts] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState([]);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState("");

  useEffect(() => {
    const categoryData = categoriesData.find(
      (cat) => cat.category === category
    );
    if (categoryData) {
      setSubCategories(categoryData.subCategories || []);
      const allSubSubCategories = categoryData.subCategories.flatMap(
        (subCat) => subCat.subSubCategories
      );
      setSubSubCategories(allSubSubCategories);
    }
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    setShowProducts(filteredProducts);
  }, [category, products]);

  const handleLoadMore = () => {
    setCurr((prevCurr) => prevCurr + 3);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    const sortedProducts = [...showProducts];
    if (option === "Price: High to Low")
      sortedProducts.sort((a, b) => b.price - a.price);
    else if (option === "Price: Low to High")
      sortedProducts.sort((a, b) => a.price - b.price);
    else if (option === "Name: A to Z")
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    else if (option === "Name: Z to A")
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    setShowProducts(sortedProducts);
  };

  const handleFilterBySubSubCategory = (value) => {
    setSelectedSubSubCategory(value);
    const filteredProducts = products.filter(
      (product) => product.subSubCategory === value
    );
    setShowProducts(filteredProducts);
  };

  return (
    <div className="my-10 flex items-center justify-center flex-col gap-8 px-6 sm:px-10">
      <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
        {subCategories.map((subCat, index) => {
          const firstProductImage =
            products.find(
              (product) => product.subCategory === subCat.subCategory
            )?.images[0] || "";
          return (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center cursor-pointer"
              onClick={() => handleFilterBySubSubCategory(subCat.subCategory)}
            >
              <img
                src={firstProductImage}
                alt={subCat.subCategory}
                className="rounded-full w-12 h-12"
              />
              <div className="text-sm">{subCat.subCategory}</div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex flex-col sm:flex-row gap-4">
        <select
          className="p-2 bg-gray-100 border rounded w-full"
          value={selectedSubSubCategory}
          onChange={(e) => handleFilterBySubSubCategory(e.target.value)}
        >
          {subSubCategories.map((subSub, index) => (
            <option key={index} value={subSub}>
              {subSub}
            </option>
          ))}
        </select>

        <div className="relative w-full z-10">
          <div
            className="p-2 bg-gray-100 border rounded cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedOption}
          </div>
          {isDropdownOpen && (
            <div className="absolute w-full bg-white border rounded mt-2">
              {[
                "Price: High to Low",
                "Price: Low to High",
                "Name: A to Z",
                "Name: Z to A",
              ].map((option) => (
                <div
                  key={option}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => selectOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        {showProducts.slice(0, curr).map((product, index) => (
          <Link to={`/product/${product._id}`} key={index}>
            <Card product={product} />
          </Link>
        ))}
      </div>

      <button
        className="bg-black text-white px-6 py-2 rounded mt-4"
        onClick={handleLoadMore}
        disabled={curr >= showProducts.length}
      >
        Load More
      </button>
    </div>
  );
};

export default SubCategory;
