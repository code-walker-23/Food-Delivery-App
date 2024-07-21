import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

let resFilter = resList;

const Body = () => {
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          resFilter = resFilter.filter((res) =>(res.info.avgRating > 4));
          for(let i = 0; i < resFilter.length; i++){
            console.log(resFilter[i].info.avgRating);
          }
        }}
      >
        Top Rated Reastaurants
      </button>
      <div className="restaurant-container">
        {resFilter.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

// Hook is a normal function that allows you to "hook into" React features. For example, useState is a Hook that lets you add React state to function components.

// we got all the utility function when we type command npm install react 

// Two very important hooks are useState and useEffect. useState is used to manage state in a functional component, and useEffect is used to perform side effects in a functional component.

// useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

// useEffect is a Hook that runs after the render is committed to the screen. It runs after the render function and is used for data fetching, manually changing the DOM, and more.



