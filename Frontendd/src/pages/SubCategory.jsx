import React, { useState, useEffect, useContext } from "react";
import Card from "../components/Card/Card";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const categoriesData = [
  {
    category: 'Electronics and Gadgets',
    subCategories: [
      {
        subCategory: 'Portable Electronics',
        subSubCategories: ['Power Banks', 'Bluetooth Speakers', 'Earphones']
      },
      {
        subCategory: 'Home Gadgets',
        subSubCategories: ['Smart Plugs', 'Air Purifiers']
      },
      {
        subCategory: 'Tech Accessories',
        subSubCategories: ['Charging Cables', 'Laptop Stands', 'Wireless Chargers']
      }
    ]
  },
  {
    category: 'Office Essentials',
    subCategories: [
      {
        subCategory: 'Stationery',
        subSubCategories: ['Diaries', 'Notebooks', 'Sticky Notes']
      },
      {
        subCategory: 'Organizers',
        subSubCategories: ['Desk Organizers', 'Calendars']
      },
      {
        subCategory: 'Writing Instruments',
        subSubCategories: ['Premium Pens', 'Stylus Pens']
      }
    ]
  },
  {
    category: 'Drinkware',
    subCategories: [
      {
        subCategory: 'Bottles',
        subSubCategories: ['Stainless Steel', 'Vacuum Bottles', 'Copper Bottles']
      },
      {
        subCategory: 'Mugs and Tumblers',
        subSubCategories: ['Coffee Mugs', 'Insulated Tumblers']
      },
      {
        subCategory: 'Gift Sets',
        subSubCategories: ['Bottle and Mug Combos']
      }
    ]
  },
  {
    category: 'Apparel',
    subCategories: [
      {
        subCategory: 'T-Shirts',
        subSubCategories: ['Polo', 'Round Neck', 'Custom Printed']
      },
      {
        subCategory: 'Jackets',
        subSubCategories: ['Windcheaters', 'Hoodies']
      },
      {
        subCategory: 'Uniforms',
        subSubCategories: ['Corporate Branding Uniforms']
      }
    ]
  },
  {
    category: 'Awards and Recognition',
    subCategories: [
      {
        subCategory: 'Trophies',
        subSubCategories: ['Metal', 'Crystal', 'Wooden', 'Acrylic']
      },
      {
        subCategory: 'Plaques',
        subSubCategories: ['Customized Engravings']
      },
      {
        subCategory: 'Certificates',
        subSubCategories: ['Certificate Frames']
      }
    ]
  },
  {
    category: 'Food and Beverages',
    subCategories: [
      {
        subCategory: 'Gourmet',
        subSubCategories: ['Dry Fruits']
      },
      {
        subCategory: 'Sweets and Chocolates',
        subSubCategories: ['Chocolates', 'Indian Sweets']
      },
      {
        subCategory: 'Gift Hampers',
        subSubCategories: ['Curated Sweets & Chocolate Hampers']
      }
    ]
  },
  {
    category: 'Eco-Friendly Products',
    subCategories: [
      {
        subCategory: 'Reusable Items',
        subSubCategories: ['Bamboo Products', 'Cloth Bags']
      },
      {
        subCategory: 'Sustainable Gifts',
        subSubCategories: ['Seed Paper Stationery', 'Jute Items']
      },
      {
        subCategory: 'Green Hampers',
        subSubCategories: ['Planters', 'Organic Kits']
      }
    ]
  },
  {
    category: 'Premium Gifts',
    subCategories: [
      {
        subCategory: 'Luxury Items',
        subSubCategories: ['Branded Wallets', 'Watches']
      },
      {
        subCategory: 'Designer Brands',
        subSubCategories: ['Premium Pens', 'Leather Accessories']
      },
      {
        subCategory: 'High-End Combos',
        subSubCategories: ['Exclusive Hampers']
      }
    ]
  },
  {
    category: 'Bags & Luggage',
    subCategories: [
      {
        subCategory: 'Duffle Bags',
        subSubCategories: []
      },
      {
        subCategory: 'Executive Trolley Bags',
        subSubCategories: []
      },
      {
        subCategory: 'Backpack Bags',
        subSubCategories: []
      },
      {
        subCategory: 'Laptop Bags',
        subSubCategories: []
      },
      {
        subCategory: 'Sling Bags',
        subSubCategories: []
      },
      {
        subCategory: 'Fanny Packs',
        subSubCategories: []
      },
      {
        subCategory: 'Gym Bags',
        subSubCategories: []
      },
      {
        subCategory: 'Waist Pouch',
        subSubCategories: []
      }
    ]
  },
  {
    category: 'Event and Seasonal Gifts',
    subCategories: [
      {
        subCategory: 'Festival-Specific',
        subSubCategories: ['Diwali Diyas', 'Christmas Ornaments', 'Holi Colors']
      },
      {
        subCategory: 'New Year Gifts',
        subSubCategories: ['Calendars', 'Year Planners', 'Desk Organizers']
      },
      {
        subCategory: 'Thank-You Gifts',
        subSubCategories: ['Greeting Cards', 'Custom Hampers']
      }
    ]
  }
];

const SubCategory = () => {
  const { products } = useContext(ShopContext);
  const { category } = useParams();
  const [subCategories, setSubCategories] = useState([]);
  const [curr, setCurr] = useState(3);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort Products By ...");
  const [showProducts, setShowProducts] = useState([]);

  const handleLoadMore = () => {
    setCurr((prevCurr) => prevCurr + 3);
    setTimeout(() => {
      const loadMoreButton = document.getElementById("load-more-btn");
      loadMoreButton?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  const toggleDropdown = () => setIsDropdownOpen((prevState) => !prevState);
  const selectOption = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    const sortedProducts = [...showProducts];
    if (option === "Price: High to Low") sortedProducts.sort((a, b) => b.price - a.price);
    else if (option === "Price: Low to High") sortedProducts.sort((a, b) => a.price - b.price);
    else if (option === "Name: A to Z") sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    else if (option === "Name: Z to A") sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    setShowProducts(sortedProducts);
  };

  const handleDisplayProducts = (subCategory) => {
    const filteredProducts = products.filter(
      (product) => product.subCategory === subCategory.subCategory
    );
    setShowProducts(filteredProducts);
  };

  useEffect(() => {
    const filteredCategoryProducts = products.filter(
      (product) => product.category === category
    );
    setShowProducts(filteredCategoryProducts);
    const categoryData = categoriesData.find((cat) => cat.category === category);
    setSubCategories(categoryData?.subCategories || []);
  }, [category, products]);

  return (
    <div className="my-10 flex items-center justify-center flex-col gap-8 px-6 sm:px-10 relative">
      <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
        {subCategories.map((subCat, index) => {
          const firstProductImage =
            products.find((product) => product.subCategory === subCat.subCategory)?.images[0] || "";
          return (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center cursor-pointer"
              onClick={() => handleDisplayProducts(subCat)}
            >
              <img
                src={firstProductImage}
                alt={subCat.subCategory}
                className="rounded-full bg-gray-400 w-[50px] h-[50px]"
              />
              <div className="text-sm">{subCat.subCategory}</div>
            </div>
          );
        })}
      </div>

      <div className="sm:w-[75%] w-full flex sm:flex-row flex-col items-center justify-center gap-4 sm:gap-10">
        <div className="flex items-center justify-center rounded-lg sm:w-6/12 w-full">
          <input
            type="text"
            placeholder="Search Products Here"
            className="rounded-lg p-2 pl-4 pr-8 bg-[#e0e0e0]/25 placeholder:text-black/75 border border-black rounded-r-none border-r-0 w-full focus:outline-none active:outline-none"
          />
          <div className="bi bi-search flex items-center justify-center px-4 bg-[#111827] py-[13px] text-white rounded-lg rounded-l-none cursor-pointer"></div>
        </div>
        <div className="flex items-center justify-center rounded-lg sm:w-6/12 w-full">
          <div className="relative w-full">
            <div
              className="rounded-lg px-4 py-2 bg-[#e0e0e0]/25 placeholder:text-black/75 border border-black w-full flex items-center justify-between cursor-pointer"
              onClick={toggleDropdown}
            >
              <span>{selectedOption}</span>
              <div className="bi bi-chevron-down flex items-center justify-center px-4 text-white bg-[#111827] rounded-lg py-3 absolute right-0"></div>
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-black rounded-lg mt-2 z-10">
                {["Price: High to Low", "Price: Low to High", "Name: A to Z", "Name: Z to A"].map(
                  (option) => (
                    <div
                      key={option}
                      className="px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => selectOption(option)}
                    >
                      {option}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3 md:flex-row items-center justify-center flex-wrap">
        {showProducts.slice(0, curr).map((product, index) => (
          <Link to={`/product/${product._id}`}><Card key={index} product={product} /></Link>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <button
          id="load-more-btn"
          className="flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-xs sm:text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out disabled:opacity-50"
          onClick={handleLoadMore}
          disabled={curr >= showProducts.length}
        >
          Load More Products
          <span className="bi bi-chevron-down ml-2 flex items-center justify-center"></span>
        </button>
      </div>
    </div>
  );
};

export default SubCategory;
