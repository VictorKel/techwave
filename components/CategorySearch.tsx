import React from "react";
import CategoryProductCard from "./CategoryProductCard";
import { products } from "../data/products";

const CategorySearch = () => {
  const cablingProducts = products.filter(
    (product) => product.category === "Cabling"
  );

  return (
    <div className="p-2 w-[90%] md:w-[90%] mx-auto">
      <div className="flex justify-end items-center px-4 mb-2">
        <select className="outline-none p-2 mr-4">
          <option>Default</option>
        </select>
        <select className="outline-none p-2">
          <option>15</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 space-y-6">
      {cablingProducts.map((product) => (
          <CategoryProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center my-6">
        <button className="bg-[#7D0101] text-white px-6 py-2 rounded">
          Load more
        </button>
      </div>
    </div>
  );
};

export default CategorySearch;
