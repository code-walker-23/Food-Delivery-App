import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import {
  SWIGGY_API,
  SWIGGY_API_AGRA,
  SWIGGY_API_HYD,
  SWIGGY_API_KOLKATA,
  SWIGGY_API_MUM,
  SWIGGY_API_DELHI,
} from "../utils/constants";
import OfflineComponent from "../utils/offlineComponent";

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

      const restaurants =
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <OfflineComponent />;
  }

  return (
    <div className="body">
      <div className="city-buttons">
        <Link to="/cities">
          <button className="city-search-button">Search Cities</button>
        </Link>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API)}>All</button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_AGRA)}>
          Agra
        </button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_HYD)}>
          Hyderabad
        </button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_KOLKATA)}>
          Kolkata
        </button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_MUM)}>
          Mumbai
        </button>
        <button onClick={() => setSelectedCityAPI(SWIGGY_API_DELHI)}>
          Delhi
        </button>
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
