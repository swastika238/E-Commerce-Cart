import React from 'react';
import { FaHeart, FaPlus } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 relative flex flex-col items-center hover:shadow-xl transition">
      <div className="absolute top-3 left-3 text-red-500 text-xl">
        {product.favorite ? <FaHeart /> : <FaHeart className="text-gray-300" />}
      </div>
      <div className="absolute top-3 right-3 text-white bg-orange-500 p-2 rounded-full hover:bg-orange-600 cursor-pointer">
        <FaPlus />
      </div>
      <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mt-4" />
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <p className="text-orange-500 font-bold mt-1">{product.price}</p>
      <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
        Shop Now
      </button>
    </div>
  );
};

export default ProductCard;
