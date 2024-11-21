import React from "react";
import { useSelector } from "react-redux";
import items from "../data/allData";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  console.log("Cart Items: ", cartItems);
  console.log("Items Data: ", items);

  const getProduct = (category, id) => {
    let product;

    if (category === "newarrival") {
      product = items.newArrivals.find((item) => item.id === id);
    } else if (category === "bestseller") {
      product = items.bestSeller.find((item) => item.id === id);
    } else {
      product = items.products.find(
        (item) => item.category === category && item.id === id
      );
    }

    return product;
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Checkout
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((cartItem, index) => {
              const { category, id } = cartItem;

              const product = getProduct(category, id);

              if (!product) {
                return (
                  <div
                    key={`${category}-${id}-${index}`}
                    className="p-4 bg-red-50 text-red-500 rounded-lg border border-red-200"
                  >
                    <p>Product not found in the selected category.</p>
                  </div>
                );
              }

              return (
                <div
                  key={`${category}-${id}-${index}`}
                  className="flex items-center gap-4 border-b p-4 bg-white shadow-md rounded-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-700">
                      {product.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <p className="text-lg font-bold text-gray-800">
                      {product.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
