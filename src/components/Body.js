import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./shimmerUI";
import { Link } from "react-router-dom";

// useState should not declare outside the component function.
// Never use useState inside the loop or condition.

const Body = () => {
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
          {filteredRestaurant.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.info.id} target={"_blank"}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
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

/* 

as i write something in the search bar it will update the state of searchText and when i click on the search button it will console log the searchText.
and it will re-render on each alphabet typed in the search bar.and only update the search button part of the UI not the whole UI by comparing current virtual dom with the previous virtual dom.

This all is happing because new react fibre reconcilation and differntial rendering.that is why it is faster than the previous react version. 

For re-render the function component we have to use useEffect and useState hooks.

Routing in react is done by react-router-dom.

Routing : It is the process of determining the path of the URL and rendering the component based on the path.

Behind the scene Link is using anchor tag.This is special type of anchor tag which is provided by react-router-dom.

Link is wrapper over the anchor tag.

*/
