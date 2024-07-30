import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.tailwindtap.com/assets/components/hero/food-delivery/banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to{" "}
          <span className="text-orange-500">Suman Food and Beverages</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover the finest selection of food and drinks, crafted to
          perfection. Your culinary adventure starts here!
        </p>
        <div className="flex justify-center mb-8"></div>
        <Link to="/main">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
