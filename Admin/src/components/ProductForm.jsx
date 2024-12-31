import React, { useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

const categoriesData = [
  {
    category: "mobile-accessories",
    subCategories: ["Rope", "Stand", "Covers", "Cleaning Kit"],
  },
  {
    category: "watch-accessories",
    subCategories: ["Straps", "Dials"],
  },
  {
    category: "charger-accessories",
    subCategories: ["Wireless", "Wired", "Braid Cables", "USB Tips"],
  },
  {
    category: "earbud-accessories",
    subCategories: ["Case", "Rope", "Cleaning Kits"],
  },
  {
    category: "stand-accessories",
    subCategories: ["Mobile Stand", "Car Stand"],
  },
  {
    category: "car-related-accessories",
    subCategories: ["Mounts", "Chargers"],
  },
];

const ProductForm = ({ token }) => {
  const [images, setImages] = useState([null, null, null, null, null]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory("");
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("discount", discount);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      images.forEach((image, index) => {
        if (image) formData.append(`image${index + 1}`, image);
      });

      const response = await axios.post(
        "http://localhost:8000/api/product/add-product",
        formData,
        { headers: { token } }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSubCategories = () => {
    const selectedCategoryData = categoriesData.find(
      (cat) => cat.category === category
    );
    return selectedCategoryData ? selectedCategoryData.subCategories : [];
  };

  return (
    <div className=" bg-white shadow-lg p-8 border border-gray-200 rounded-lg my-8">
      <h2 className="text-3xl font-bold text-black mb-8 text-center  tracking-wide">
        Add New Product
      </h2>
      <form
        onSubmit={onSubmitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Discount %
            </label>
            <input
              type="number"
              name="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter discount percentage"
              className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={handleCategoryChange}
              className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              {categoriesData.map((cat, index) => (
                <option key={index} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Sub-Category
            </label>
            <select
              name="subCategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3"
              required
            >
              <option value="" disabled>
                Select Sub-Category
              </option>
              {getSubCategories().map((subCat, index) => (
                <option key={index} value={subCat}>
                  {subCat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Product Description
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description (max 250 characters)"
              maxLength={250}
              className="mt-1 block w-full rounded-lg border-gray-300 bg-white text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3 resize-none"
              rows="4"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 pb-1">
              Product Images
            </label>
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <label
                  key={index}
                  htmlFor={`image${index}`}
                  className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer flex items-center justify-center bg-gray-100 hover:bg-gray-200"
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Uploaded"
                      className="w-full h-full object-cover rounded-md"
                    />
                  ) : (
                    <div className="text-gray-500 text-sm flex flex-col items-center">
                      <i className="bi bi-cloud-upload-fill text-2xl"></i>
                      <span>Upload Image</span>
                    </div>
                  )}
                  <input
                    type="file"
                    id={`image${index}`}
                    className="hidden"
                    onChange={(e) => {
                      const newImages = [...images];
                      newImages[index] = e.target.files[0];
                      setImages(newImages);
                    }}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="bestSeller"
              checked={bestSeller}
              onChange={() => setBestSeller((prev) => !prev)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">
              Add to Best Seller
            </label>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className={`w-full text-white bg-gray-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2v4M12 18v4M6 6l2.5 2.5M6 18l2.5-2.5M18 6l-2.5 2.5M18 18l-2.5-2.5"
                  />
                </svg>
                <span className="ml-2">Saving...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
