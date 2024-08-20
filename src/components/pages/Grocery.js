import { useEffect, useState } from "react";
import { Shimmer } from "../../utils/Shimmer";
import cartData from "../../utils/cart.json"; // Import the JSON data
import { IMAGE_URL } from "../../utils/constants";

const Grocery = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      const json = cartData;
      console.log("Fetched JSON:", json);

      if (!json || !json.data || !json.data.widgets[1]?.data) {
        throw new Error("No data available");
      }

      const list = json.data.widgets[1]?.data || [];
      setGroceryList(list);
    } catch (err) {
      console.error("Error loading data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Shimmer />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="grocery-container">
        {groceryList.length > 0 ? (
          <div className="grocery-grid">
            {groceryList.map((item, index) => (
              <div key={index} className="grocery-card">
                <img
                  src={`${IMAGE_URL}${item.imageId}`} // Adjust based on your image URL structure
                  alt={item.displayName}
                  className="grocery-image"
                />
                <div className="grocery-details">
                  <h3 className="grocery-title">{item.displayName}</h3>
                  <p className="grocery-count">Count: {item.productCount}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No grocery data available</div>
        )}
      </div>
    </>
  );
};

export default Grocery;
