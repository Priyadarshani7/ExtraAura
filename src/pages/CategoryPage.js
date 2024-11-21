import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import items from "../data/allData";

const CategoryPage = () => {
  const { category } = useParams();
  const [filterProducts, setFilterproducts] = useState([]);

  useEffect(() => {
    const filteredProducts = items.products.filter(
      (prod) => prod.category === category
    );
    setFilterproducts(filteredProducts);
  }, [category]);

  return (
    <div className="container mx-auto px-2 py-8">
      <h1 className="text-center text-2xl font-bold my-6 capitalize">
        {category}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterProducts.map((prod) => (
          <Link to={`/product/info/${prod.id}`} key={prod.id}>
            <div className="bg-white flex flex-col h-full">
              <div className="w-full h-40 sm:h-64">
                <img
                  className="w-full h-full object-cover"
                  src={prod.image}
                  alt={prod.title}
                />
              </div>

              <div className="px-4 py-2 bg-gray-100 flex-1 flex flex-col justify-between">
                <div className="font-bold text-base sm:text-xl mb-1 sm:mb-2">
                  {prod.title}
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  ${prod.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
