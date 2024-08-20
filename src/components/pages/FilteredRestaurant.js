import { useState, useEffect } from "react";
import RestaurantCard from "../../utils/RestaurantCard";
import { Shimmer } from "../../utils/Shimmer";
import { Link } from "react-router-dom";

// useState should not declare outside the component function.
// Never use useState inside the loop or condition.

const FilteredRestaurant = () => {
  const [resFilter, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  // whenever the state varibale changes, react triggers the reconciliation and re-render the UI.

  useEffect(() => {
    fetchData(); // our browser will block the request because of CORS policy.
  }, []);

  console.log("Body Component is Rendered!");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const res1 =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(json);
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
  return (
    <div className="body">
      <div className="button-container">
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurant(
              resFilter.filter((res) => res.info.avgRating >= 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>

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
            <Link to={`/main/restaurants/${restaurant.info.id}`}>
              <RestaurantCard key={index} resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredRestaurant;
