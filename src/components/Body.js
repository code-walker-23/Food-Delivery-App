import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./shimmerUI";


const Body = () => {
  const [resFilter, setListOfRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(); // our browser will block the request because of CORS policy.
  }, []);

  console.log("Body Component is Rendered!");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false);
  };

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          //  find out the div update the UI.
          setListOfRestaurant(
            resFilter.filter((res) => res.info.avgRating > 4.4)
          );
        }}
      >
        Top Rated Restaurants
      </button>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container">
          {resFilter.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;























/* import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { TailSpin } from "react-loader-spinner"; // Import the spinner

const Body = () => {
  const [resFilter, setListOfRestaurant] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData();
  }, []);

  console.log("Body Component is Rendered!");

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setListOfRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false even if there is an error
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          setListOfRestaurant(
            resFilter.filter((res) => res.info.avgRating > 4.4)
          );
        }}
      >
        Top Rated Restaurants
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
 */