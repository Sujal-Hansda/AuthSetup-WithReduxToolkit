import React from "react";

const ProductSkeletonCard = () => {
  return (
    <div className="w-full max-w-sm bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 animate-pulse">

      {/* Image Skeleton */}
      <div className="h-64 bg-zinc-800 flex items-center justify-center p-5">
        <div className="h-full w-full bg-zinc-700 rounded-lg"></div>
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <div className="h-3 w-20 bg-zinc-700 rounded mb-3"></div>

        {/* Title */}
        <div className="h-5 w-3/4 bg-zinc-700 rounded"></div>

        {/* Description */}
        <div className="mt-3 space-y-2">
          <div className="h-3 w-full bg-zinc-700 rounded"></div>
          <div className="h-3 w-5/6 bg-zinc-700 rounded"></div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-5">

          {/* Price */}
          <div className="h-6 w-16 bg-zinc-700 rounded"></div>

          {/* Button */}
          <div className="h-10 w-28 bg-zinc-700 rounded-lg"></div>

        </div>

      </div>
    </div>
  );
};

export default ProductSkeletonCard;
