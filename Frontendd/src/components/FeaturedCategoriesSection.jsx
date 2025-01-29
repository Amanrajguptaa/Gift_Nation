import React from "react";
import { Link } from "react-router-dom";

const FeaturedCategoriesSection = () => {
  const categoriesData = [
    {
      "category": "Electronics and Gadgets",
      "BtnCta": "Browse Now",
      "subCategories": [
        {
          "subCategory": "Portable Electronics",
          "subSubCategories": ["Power Banks", "Bluetooth Speakers", "Earphones"]
        },
        {
          "subCategory": "Home Gadgets",
          "subSubCategories": ["Smart Plugs", "Air Purifiers"]
        },
        {
          "subCategory": "Tech Accessories",
          "subSubCategories": ["Charging Cables", "Laptop Stands", "Wireless Chargers"]
        }
      ]
    },
    {
      "category": "Office Essentials",
      "BtnCta": "Shop Now",
      "subCategories": [
        {
          "subCategory": "Stationery",
          "subSubCategories": ["Diaries", "Notebooks", "Sticky Notes"]
        },
        {
          "subCategory": "Organizers",
          "subSubCategories": ["Desk Organizers", "Calendars"]
        },
        {
          "subCategory": "Writing Instruments",
          "subSubCategories": ["Premium Pens", "Stylus Pens"]
        }
      ]
    },
    {
      "category": "Drinkware",
      "BtnCta": "Grab Yours",
      "subCategories": [
        {
          "subCategory": "Bottles",
          "subSubCategories": ["Stainless Steel", "Vacuum Bottles", "Copper Bottles"]
        },
        {
          "subCategory": "Mugs and Tumblers",
          "subSubCategories": ["Coffee Mugs", "Insulated Tumblers"]
        },
        {
          "subCategory": "Gift Sets",
          "subSubCategories": ["Bottle and Mug Combos"]
        }
      ]
    },
    {
      "category": "Apparel",
      "BtnCta": "Check It Out",
      "subCategories": [
        {
          "subCategory": "T-Shirts",
          "subSubCategories": ["Polo", "Round Neck", "Custom Printed"]
        },
        {
          "subCategory": "Jackets",
          "subSubCategories": ["Windcheaters", "Hoodies"]
        },
        {
          "subCategory": "Uniforms",
          "subSubCategories": ["Corporate Branding Uniforms"]
        }
      ]
    },
    {
      "category": "Awards and Recognition",
      "BtnCta": "Discover More",
      "subCategories": [
        {
          "subCategory": "Trophies",
          "subSubCategories": ["Metal", "Crystal", "Wooden", "Acrylic"]
        },
        {
          "subCategory": "Plaques",
          "subSubCategories": ["Customized Engravings"]
        },
        {
          "subCategory": "Certificates",
          "subSubCategories": ["Certificate Frames"]
        }
      ]
    },
    {
      "category": "Food and Beverages",
      "BtnCta": "Explore Now",
      "subCategories": [
        {
          "subCategory": "Gourmet",
          "subSubCategories": ["Dry Fruits"]
        },
        {
          "subCategory": "Sweets and Chocolates",
          "subSubCategories": ["Chocolates", "Indian Sweets"]
        },
        {
          "subCategory": "Gift Hampers",
          "subSubCategories": ["Curated Sweets & Chocolate Hampers"]
        }
      ]
    },
    {
      "category": "Eco-Friendly Products",
      "BtnCta": "Hurry! Limited-time gifts.",
      "subCategories": [
        {
          "subCategory": "Reusable Items",
          "subSubCategories": ["Bamboo Products", "Cloth Bags"]
        },
        {
          "subCategory": "Sustainable Gifts",
          "subSubCategories": ["Seed Paper Stationery", "Jute Items"]
        },
        {
          "subCategory": "Green Hampers",
          "subSubCategories": ["Planters", "Organic Kits"]
        }
      ]
    },
    {
      "category": "Premium Gifts",
      "BtnCta": "Perfect gifts, while they last!",
      "subCategories": [
        {
          "subCategory": "Luxury Items",
          "subSubCategories": ["Branded Wallets", "Watches"]
        },
        {
          "subCategory": "Designer Brands",
          "subSubCategories": ["Premium Pens", "Leather Accessories"]
        },
        {
          "subCategory": "High-End Combos",
          "subSubCategories": ["Exclusive Hampers"]
        }
      ]
    },
    {
      "category": "Bags & Luggage",
      "BtnCta": "Trending gifts—don’t miss out!",
      "subCategories": [
        {
          "subCategory": "Duffle Bags",
          "subSubCategories": []
        },
        {
          "subCategory": "Executive Trolley Bags",
          "subSubCategories": []
        },
        {
          "subCategory": "Backpack Bags",
          "subSubCategories": []
        },
        {
          "subCategory": "Laptop Bags",
          "subSubCategories": []
        },
        {
          "subCategory": "Sling Bags",
          "subSubCategories": []
        },
        {
          "subCategory": "Fanny Packs",
          "subSubCategories": []
        },
        {
          "subCategory": "Gym Bags",
          "subSubCategories": []
        },
        {
          "subCategory": "Waist Pouch",
          "subSubCategories": []
        }
      ]
    },
    {
      "category": "Event and Seasonal Gifts",
      "BtnCta": "Exclusive deals for you!",
      "subCategories": [
        {
          "subCategory": "Festival-Specific",
          "subSubCategories": ["Diwali Diyas", "Christmas Ornaments", "Holi Colors"]
        },
        {
          "subCategory": "New Year Gifts",
          "subSubCategories": ["Calendars", "Year Planners", "Desk Organizers"]
        },
        {
          "subCategory": "Thank-You Gifts",
          "subSubCategories": ["Greeting Cards", "Custom Hampers"]
        }
      ]
    }
  ]
  

  return (
    <div className="main_ctr flex items-center justify-center flex-col py-10 px-10 sm:px-16 gap-6">
      <div className="text_ctr flex items-center justify-center flex-col text-center">
        <div className="heading_ctr text-4xl font-semibold">
          Featured Collections
        </div>
        <div className="subheading_ctr text-lg mt-1">
          Curated gift sets for every occasion and person in your life.
        </div>
      </div>
      <div className="cards_ctr w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categoriesData.slice(4,10).map((cardData, index) => (
          <Link to={`/category/${cardData.category}`}>
          <div
            key={index}
            className={`card py-8 px-8 rounded-lg sm:flex flex-col gap-3 ${
              index % 2 == 0 ? "bg-[#efefef]" : "bg-[#fef7c5]"
            } ${index > 2 ? "hidden" : "flex"}`}
          >
            <div className="font-semibold text-xl">{`Category ${
              index + 1
            }`}</div>
            <div className="text-md">{cardData.category}</div>
            <div className="text-sm font-semibold cursor-pointer flex items-center">
              {cardData.BtnCta}
              <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <Link to={"/categories"}>
        <button className="explore_btn flex items-center justify-center bg-[#111827] rounded-full text-white px-8 py-4 text-sm cursor-pointer hover:bg-[#1d283f] duration-200 ease-in-out">
          Explore Collections
          <span className="bi bi-arrow-right ml-2 flex items-center justify-center"></span>
        </button>
      </Link>
    </div>
  );
};

export default FeaturedCategoriesSection;
