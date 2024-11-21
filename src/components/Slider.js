import React, { useEffect, useState } from "react";
import items from "../data/allData";

const Slider = () => {
  const { products } = items;
  const [currentIndex, setCurrentIndex] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="overflow-hidden bg-white pt-20 ">
      <div className="flex animate-scroll gap-0">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="min-w-[100px] h-[100px] flex flex-col items-center justify-center "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover mb-2 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
