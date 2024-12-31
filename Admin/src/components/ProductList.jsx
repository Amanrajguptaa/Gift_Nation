import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://gift-nation.onrender.com/api/product/list-product');
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
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
                <th className="border border-gray-300 px-4 py-3 text-left">
                  <input type="checkbox" className="form-checkbox rounded text-blue-600" />
                </th>
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
                  <td className="border border-gray-300 px-4 py-3">
                    <input type="checkbox" className="form-checkbox rounded text-blue-600" />
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
    </div>
  );
};

export default ProductList;
