import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from "../data/allData";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const ProductInfo = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    let foundProduct = null;

    if (productid.startsWith("product-")) {
      foundProduct = items.products.find((prod) => prod.id === productid);
    } else if (productid.startsWith("newarrival-")) {
      foundProduct = items.newArrivals.find((prod) => prod.id === productid);
    } else if (productid.startsWith("bestseller-")) {
      foundProduct = items.bestSeller.find((prod) => prod.id === productid);
    }

    setProduct(foundProduct);
  }, [productid]);

  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-8">
      {product ? (
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-10">
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              className="max-w-full h-auto object-cover "
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="md:w-1/2 w-full text-center md:text-left">
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-4">{product.description}</p>

            <div className="mt-4">
              <p className="text-2xl font-bold mb-4">Price: {product.price}</p>
              <div className="mt-4 flex justify-center md:justify-start gap-4">
                <button
                  onClick={() =>
                    dispatch(
                      addtoCart({
                        id: product.id,
                        title: product.title,
                        category: product.category,
                        description: product.description,
                        image: product.image,
                        price: product.price,
                      })
                    )
                  }
                  className="bg-blue-500 text-white px-6 py-2 rounded-md text-lg"
                >
                  Add to Cart
                </button>
                <button className="bg-green-500 text-white px-6 py-2 rounded-md text-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl">Product not found</p>
      )}
    </div>
  );
};

export default ProductInfo;
