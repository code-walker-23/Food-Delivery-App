import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  /* 
  Local state varibale.
  Array Destructuring.
  let [resFilter,setListOfRestaurant] = useState(resList); 

  const arr = useState(resList);
  const resFilter = arr[0]; // you can use const or let
  const setListOfRestaurant = arr[1];// you can use const or let 
  
  const arr = useState(resList);
  let [resFilter,setListOfRestaurant] = arr;

  */
  const arr = useState(resList);
  let [resFilter, setListOfRestaurant] = arr;
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          /*  resFilter = resFilter.filter((res) =>(res.info.avgRating > 4));
          for(let i = 0; i < resFilter.length; i++){
            console.log(resFilter[i].info.avgRating);
          } */
          //  find out the div update the UI.
          setListOfRestaurant(
            resFilter.filter((res) => res.info.avgRating > 4)
          );
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
