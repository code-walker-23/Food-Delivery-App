import { useState } from "react";
import { CitiesList } from "../utils/cities"; // Adjust the path if necessary
import RestaurantCard from "./RestaurantCard"; // Adjust the path if necessary
import { Shimmer } from "./Shimmer"; // Adjust the path if necessary
import { Link } from "react-router-dom";

const CityComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const cities = CitiesList();

  // Function to normalize strings
  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Remove diacritics (accents)
  };

  const filteredCities = cities.filter((city) =>
    normalizeString(city.city).includes(normalizeString(searchTerm))
  );

  const fetchRestaurants = async (lat, lng) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await response.json();
      const fetchedRestaurants =
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurants(fetchedRestaurants);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setLoading(false);
    }
  };

  const handleCityClick = (city) => {
    fetchRestaurants(city.lat, city.lng);
  };

  return (
    <div className="cities-container">
      <input
        type="text"
        placeholder="Search for a city..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="city-search-input"
      />
      <div className="city-list">
        {searchTerm &&
          filteredCities.map((city, index) => (
            <button key={index} onClick={() => handleCityClick(city)}>
              {city.city}
            </button>
          ))}
      </div>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container">
          {restaurants.map((restaurant, index) => (
            <Link key={index} to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityComponent;
