import React, { useState } from "react";
import FindMe from "../components/pages/FindMe"; // Adjust the path if necessary
import "../styles/findme.css";

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="location-container">
      <h1 className="location-heading">Discover Restaurants Near You</h1>
      <button className="get-location-button" onClick={getLocation}>
        Find Nearby Restaurants
      </button>
      {location ? (
        <FindMe latitude={location.latitude} longitude={location.longitude} />
      ) : (
        error && <p className="error-message">{error}</p>
      )}
    </div>
  );
};

export default LocationComponent;
