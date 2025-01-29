import React from "react";
import { Link } from "react-router-dom";

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

const Categorytest = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <h1 className="text-center font-bold text-5xl mb-10">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoriesData.map((category, index) => (
          <Link to={`/${category.category}/sub-category`}>
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-bold mb-2">{category.category}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categorytest;
