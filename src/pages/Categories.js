import React from "react";
import items from "../data/allData";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:max-w-7xl">
      <h1 className="text-center text-2xl font-bold my-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.categories.map((category) => (
          <Link to={`/product/${category.slug}`} key={category.slug}>
            <div className="flex flex-col h-full max-w-sm mx-auto lg:max-w-md overflow-hidden bg-white">
              {/* Image Section */}
              <div className="w-full h-48 sm:h-56 lg:h-80">
                <img
                  className="w-full h-full object-cover"
                  src={category.img}
                  alt={category.name}
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow px-6 py-4 bg-gray-100">
                <div className="font-bold text-xl mb-2 text-center">
                  {category.name}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
