import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import NewArrival from "../pages/NewArrival";
import BestSellers from "../components/BestSellers";
import Categories from "../pages/Categories";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <ImageCarousel />
      <Slider />
      <NewArrival />
      <div className="flex items-center justify-center h-full">
        <Link to="/newarrival">
          <button className="bg-black px-7 py-3 text-white ">View all</button>
        </Link>
      </div>
      <Categories />

      <BestSellers />
      <div className="flex items-center justify-center h-full">
        <Link to="/bestseller">
          <button className="bg-white px-7 py-3 text-black border border-black-30">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
