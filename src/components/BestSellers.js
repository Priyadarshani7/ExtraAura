import React from "react";
import items from "../data/allData";
import { Link } from "react-router-dom";

function BestSellers() {
  return (
    <div className="container mx-auto px-2 py-8">
      <h1 className="text-center text-2xl font-bold my-6">Best Sellers</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.bestSeller.map((bestseller) => (
          <Link to={`/product/info/${bestseller.id}`} key={bestseller.id}>
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-40 sm:h-64">
                <img
                  className="w-full h-full object-cover"
                  src={bestseller.image}
                  alt={bestseller.title}
                />
              </div>

              <div className="px-4 py-2 bg-gray-100 flex-1 flex flex-col justify-between">
                <div className="font-bold text-base sm:text-xl mb-1 sm:mb-2">
                  {bestseller.title}
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  ${bestseller.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
