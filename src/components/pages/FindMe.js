import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shimmer } from '../../utils/Shimmer'; // Adjust the path if necessary
import RestaurantCard from '../../utils/RestaurantCard'; // Adjust the path if necessary

const FindMe = ({ latitude, longitude }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (latitude && longitude) {
      fetchRestaurants(latitude, longitude);
    }
  }, [latitude, longitude]);

  const fetchRestaurants = async (lat, lng) => {
    setLoading(true); // Start loading
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await response.json();
    const fetchedRestaurants =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setRestaurants(fetchedRestaurants);
    setLoading(false); // Stop loading
  };

  return (
    <div>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container">
          {restaurants.map((restaurant, index) => (
            <Link key={index} to={`/main/restaurants/${restaurant.info.id}`}>
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindMe;
