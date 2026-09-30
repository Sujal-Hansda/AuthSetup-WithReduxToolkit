import ProductCard from '../components/ProductCard'
import ProductSkeletonCard from '../components/ProductSkeletonCard';
import { getProductsDataApi } from '../api/getProductsDataApi';
import { useQuery } from '@tanstack/react-query';
import { useProductApi } from '../hooks/productHooks';
import Filter from '../components/Filter';
import { useState } from 'react';


const ShopPage = () => {
  const [rerender, setRerender] = useState(false)
  let {isPending,error,data,filteredProduct} = useProductApi();

  if (error) return <h1>{error.message}</h1>

  return (
    <div className="grid grid-cols-4gap-6 p-6">
      <Filter setRerender={setRerender}/>
      {isPending ? (
  <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, index) => (
      <ProductSkeletonCard key={index} />
    ))}
  </div>
) : (
  <div className=" grid grid-cols-4 w-full gap-6">
    {data.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)}
    </div>
  );
};

export default ShopPage;