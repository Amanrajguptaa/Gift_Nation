import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get('https://gift-nation.onrender.com/api/product/list-product');
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", editProduct.name);
      formData.append("description", editProduct.description);
      formData.append("price", editProduct.price);
      formData.append("category", editProduct.category);
      formData.append("subCategory", editProduct.subCategory);
      formData.append("subSubCategory", editProduct.subSubCategory);
      formData.append("bestSeller", editProduct.bestSeller);
      formData.append("discount", editProduct.discount);

      if (editProduct.image1) formData.append("image1", editProduct.image1);
      if (editProduct.image2) formData.append("image2", editProduct.image2);
      if (editProduct.image3) formData.append("image3", editProduct.image3);
      if (editProduct.image4) formData.append("image4", editProduct.image4);
      if (editProduct.image5) formData.append("image5", editProduct.image5);


      const response = await axios.post(
        `https://gift-nation.onrender.com/api/product/edit-product/${editProduct._id}`,
        formData,
        {
          headers: {token},
        }
      );

      if (response.data.success) {
        alert("Product updated successfully!");
        setEditProduct(null);
        getData();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white shadow-lg py-8 px-6 border border-gray-200 rounded-lg mx-6 my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Products</h2>
      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No products available.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Edit</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Image</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Product Name</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Sub Category</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-150">
                  <td className="border border-gray-300 px-4 py-3 text-blue-500 cursor-pointer">
                    <button onClick={() => handleEditClick(product)}>Edit</button>
                  </td>
                  <td className="border border-gray-300 px-4 py-3 flex items-center justify-center">
                    <img
                      src={product.images[0]}
                      alt={`${product.name || 'Product'} image`}
                      className="w-16 h-16 object-cover rounded-md border border-gray-200"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                    {product.name || 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600">
                    {product.category || 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600">
                    {product.subCategory || 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">
                    ₹{product.price || 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editProduct && (
        <form
          onSubmit={handleEditSubmit}
          className="mt-6 bg-gray-100 p-4 rounded-md shadow-md"
        >
          <h3 className="text-xl font-bold mb-4">Edit Product</h3>
          <div className="mb-3">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={editProduct.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700">Description:</label>
            <textarea
              name="description"
              value={editProduct.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
              name="price"
              value={editProduct.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* Add other fields similarly */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductList;
