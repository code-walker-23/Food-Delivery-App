import { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import { Shimmer } from "../../utils/Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../../utils/constants";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import OfflineComponent from "../../utils/offlineComponent";

const Search = () => {
  const [resFilter, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const res1 =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurant(res1);
    setFilteredRestaurant(res1);
    setLoading(false);
  };
  function handleSearch() {
    setFilteredRestaurant(
      resFilter.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }
  return (
    <div className="search">
      <div className="search-container">
        <div className="search-btn">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Prevent default Enter key behavior
                handleSearch(); // Call the search function
              }
            }}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <Shimmer />
      ) : filteredRestaurant.length === 0 ? (
        <div className="no-res">No Restaurant Found</div>
      ) : (
        <div className="restaurant-container">
          {filteredRestaurant.map((restaurant, index) => (
            <Link to={`/restaurants/${restaurant.info.id}`}>
              <RestaurantCard key={index} resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
