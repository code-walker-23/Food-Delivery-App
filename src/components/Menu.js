import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { IMAGE_URL } from "../utils/constants";
import { renderStars } from "./star";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { text } = resInfo?.cards[0]?.card?.card || {};
  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR || [];
  const { carousel } = cards[1]?.card?.card || [];

  const {
    name,
    city,
    areaName,
    avgRating,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    logo,
    sla,
    slugs,
    offerTags,
    ratings,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const { deliveryTime } = sla || {};

  const handleAddonsClick = (addons) => {
    setSelectedAddons(addons);
  };

  const handleCloseAddons = () => {
    setSelectedAddons(null);
  };

  const handleAddonSelection = (addon) => {
    // Implement logic to handle addon selection (e.g., add to cart)
    console.log("Selected Addon:", addon);
  };

  return (
    <div className="menu-container">
      <div className="restaurant-info">
        <img
          className="restaurant-logo"
          src={IMAGE_URL + logo}
          alt="Restaurant Logo"
        />
        <div className="restaurant-details">
          <h2 className="restaurant-name">{name}</h2>
          <h3 className="restaurant-city">{city}</h3>
          <h4 className="restaurant-area">{areaName}</h4>
          <div className="rating-and-delivery">
            <div className="restaurant-rating">
              <div className="star-rating">{renderStars(avgRating)}</div>
            </div>
            <h4 className="restaurant-delivery-time">
              Delivery in {deliveryTime} mins
            </h4>
          </div>
          <h4 className="restaurant-cost-for-two">{costForTwoMessage}</h4>
          <h4 className="restaurant-cuisines">{cuisines.join(", ")}</h4>
        </div>
      </div>
      {carousel != undefined && (
        <div className="carousel-container">
          {carousel.map((item, index) => {
            const {
              name,
              description,
              imageId,
              category,
              price,
              defaultPrice,
              addons,
              attributes,
            } = item.dish.info;
            const value = price ?? defaultPrice;
            return (
              <div key={index} className="carousel-item">
                <img
                  className="carousel-item-image"
                  src={IMAGE_URL + imageId}
                  alt={name}
                />
                <div className="carousel-item-details">
                  <h4 className="carousel-item-name">{name}</h4>
                  <p className="carousel-item-description">{description}</p>
                  <p className="carousel-item-category">{category}</p>
                  <p className="carousel-item-price">
                    ₹{(value / 100).toFixed(2)}
                  </p>
                  {addons?.length > 0 && (
                    <button
                      className="carousel-item-addons-button"
                      onClick={() => handleAddonsClick(addons)}
                    >
                      Add+
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      <h2 className="menu-heading">Menu</h2>
      {cards?.slice(2).map((card, index) => {
        const { title, itemCards } = card.card.card;
        return (
          <div key={index} className="menu-section">
            <h3 className="menu-section-title">{title}</h3>
            <ul className="menu-items">
              {itemCards?.map((item, itemIndex) => {
                const {
                  name,
                  description,
                  imageId,
                  category,
                  inStock,
                  price,
                  defaultPrice,
                  addons,
                  attributes,
                } = item.card.info;
                const value = price ?? defaultPrice;
                return (
                  <li
                    key={itemIndex}
                    className={`menu-item ${!inStock ? "out-of-stock" : ""}`}
                  >
                    <img
                      className="menu-item-image"
                      src={IMAGE_URL + imageId}
                      alt={name}
                    />
                    <div className="menu-item-details">
                      <h4 className="menu-item-name">{name}</h4>
                      <p className="menu-item-description">{description}</p>
                      <p className="menu-item-category">Category: {category}</p>
                      {!inStock ? (
                        <p className="menu-item-stock">Out of Stock</p>
                      ) : (
                        "Available"
                      )}
                      <p className="menu-item-price">
                        ₹{(value / 100).toFixed(2)}
                      </p>
                      {addons?.length > 0 && (
                        <button
                          className="menu-item-addons-button"
                          onClick={() => handleAddonsClick(addons)}
                        >
                          Add+
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      {selectedAddons && (
        <div className="addons-modal-overlay">
          <div className="addons-modal">
            <button className="close-addons-button" onClick={handleCloseAddons}>
              ✖
            </button>
            <h5 className="addons-title">Add-ons:</h5>
            {selectedAddons.map((addon, addonIndex) => (
              <div key={addonIndex} className="addon-group">
                <h6 className="addon-group-name">{addon.groupName}</h6>
                <ul className="addon-choices">
                  {addon.choices.map((choice, choiceIndex) => (
                    <li key={choiceIndex} className="addon-choice">
                      {choice.name} - ₹
                      {isNaN(choice.price)
                        ? "Not Available"
                        : (choice.price / 100).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
