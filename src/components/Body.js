import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";




const Body = () => {
const arr = useState([]);
let [resFilter, setListOfRestaurant] = arr;
/* 

This Callback function in useEffect is called when the component is mounted or rendered for the first time.  
It will keep the callback function and called when the component is rendered.

*/
  useEffect(() => {
    fectchData(); // our browser will block the request because of CORS policy.
  },[]);

  console.log("Body Component is Rendered!");

  const fectchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(json.data.cards[1]?.card?.card?.gridElements
?.infoWithStyle?.restaurants);
    
  };

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
