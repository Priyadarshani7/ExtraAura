import React from "react";
import items from "../data/allData";
import { Link } from "react-router-dom";

const Product = () => {
  const { products } = items;

  return (
    <div className="container mx-auto px-2 py-8">
      <h1 className="text-center text-2xl font-bold my-6">All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/product/info/${product.id}`} key={product.id}>
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-40 sm:h-64">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="px-4 py-2 bg-gray-100 flex-1 flex flex-col justify-between">
                <div className="font-bold text-base sm:text-xl mb-1 sm:mb-2">
                  {product.title}
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  ${product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
