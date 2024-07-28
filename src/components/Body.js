import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API, SWIGGY_API_AGRA, SWIGGY_API_HYD, SWIGGY_API_KOLKATA, SWIGGY_API_MUM } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCityAPI, setSelectedCityAPI] = useState(SWIGGY_API);

  useEffect(() => {
    fetchData(selectedCityAPI);
  }, [selectedCityAPI]);

  const fetchData = async (cityAPI) => {
    setLoading(true);
    try {
      const response = await fetch(cityAPI);
      const json = await response.json();

      const restaurants = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="body">
      <div className="city-buttons">
        <button onClick={() => setSelectedCityAPI(SWIGGY_API)}>All</button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_AGRA)}>Agra</button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_HYD)}>Hyderabad</button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_KOLKATA)}>Kolkata</button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_MUM)}>Mumbai</button>
      </div>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container">
          {listOfRestaurants.map((restaurant, index) => (
            <Link key={index} to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
