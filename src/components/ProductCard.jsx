import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-lime-400 transition duration-300">
      
      {/* Product Image */}
      <div className="h-64 bg-zinc-800 flex items-center justify-center p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <p className="text-xs uppercase text-lime-400 font-semibold mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-white truncate">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-zinc-400 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">

          <span className="text-xl font-bold text-white">
            ${product.price}
          </span>

          <button className="bg-lime-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime-300 transition">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;