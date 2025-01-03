import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://gift-nation.onrender.com/api/product/list-product'
      );
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
      formData.append('name', editProduct.name);
      formData.append('productCode', editProduct.productCode);
      formData.append('description', editProduct.description);
      formData.append('price', editProduct.price);
      formData.append('category', editProduct.category);
      formData.append('subCategory', editProduct.subCategory);
      formData.append('subSubCategory', editProduct.subSubCategory);
      formData.append('bestSeller', editProduct.bestSeller);
      formData.append('discount', editProduct.discount);

      if (editProduct.image1) formData.append('image1', editProduct.image1);
      if (editProduct.image2) formData.append('image2', editProduct.image2);
      if (editProduct.image3) formData.append('image3', editProduct.image3);
      if (editProduct.image4) formData.append('image4', editProduct.image4);
      if (editProduct.image5) formData.append('image5', editProduct.image5);
      if(editProduct.tag1) formData.append('tag1', editProduct.tag1);
      if(editProduct.tag2) formData.append('tag2', editProduct.tag2);
      if(editProduct.tag3) formData.append('tag3', editProduct.tag3);

      const response = await axios.post(
        `https://gift-nation.onrender.com/api/product/edit-product/${editProduct._id}`,
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        alert('Product updated successfully!');
        setEditProduct(null);
        getData();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to update product.');
    }
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await axios.delete(
          `https://gift-nation.onrender.com/api/product/remove/${id}`,
          {
            headers: { token },
          }
        );

        if (response.data.success) {
          alert('Product deleted successfully!');
          getData();
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error(error);
        alert('Failed to delete product.');
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white shadow-lg py-8 px-6 border border-gray-200 rounded-lg mx-6 my-10 relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        All Products
      </h2>
      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No products available.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-gray-600 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Image</th>
                <th className="border border-gray-300 px-4 py-3 text-left">
                  Product Name
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left">
                  Product Code
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left">Category</th>
                <th className="border border-gray-300 px-4 py-3 text-left">
                  Sub Category
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left">
                  Sub Sub Category
                </th>
                <th className="border border-gray-300 px-4 py-3 text-left">Price</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-150">
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
                    {product.productCode || 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600">
                    {product.category || 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600">
                    {product.subCategory || 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600">
                    {product.subSubCategory || 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800 font-semibold">
                    ₹{product.price || 'N/A'}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <button
                      onClick={() => handleEditClick(product)}
                      className="text-blue-500 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(product._id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editProduct && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-w-md">
            <h3 className="text-xl font-bold mb-4">Edit Product</h3>
            <form onSubmit={handleEditSubmit}>
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
                <label className="block text-gray-700">Product Code:</label>
                <input
                  type="text"
                  name="productCode"
                  value={editProduct.productCode}
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
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditProduct(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
