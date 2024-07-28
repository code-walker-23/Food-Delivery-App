import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";

const TopRatedRestaurant = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const res1 =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(res1);
    setFilteredRestaurant(res1.filter((res) => res.info.avgRating >= 4.5));
    setLoading(false);
  };

  return (
    <div className="top-rated-res">
     
      <div class="top-rated"> <div className="filter-btn">Top Rated Restaurant</div></div>

      {loading ? (
        <Shimmer />
      ) : (
        <div className="restaurant-container">
          {filteredRestaurant.map((restaurant) => (
            <Link to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRatedRestaurant;
