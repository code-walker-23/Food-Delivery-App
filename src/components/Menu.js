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
  }, [id]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + id);
      const json = await response.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { text } = resInfo?.cards[0]?.card?.card || {};
  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR || [];
  const { carousel } = cards[1]?.card?.card || [];
  const { title } = cards[1]?.card?.card;


  const {
    name,
    city,
    areaName,
    avgRating,
    logo,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const { deliveryTime } = sla || {};

  const img_id = cloudinaryImageId || logo;

  const handleAddonsClick = (addons) => {
    setSelectedAddons(addons);
  };

  const handleCloseAddons = () => {
    setSelectedAddons(null);
  };

  const renderItemCards = (items) => (
    <ul className="menu-items">
      {items.map((item, itemIndex) => {
        const {
          name,
          description,
          imageId,
          category,
          inStock,
          price,
          defaultPrice,
          addons,
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
  );

  const renderCategories = (categories) => (
    <div className="categories-section">
      {categories.map((category, categoryIndex) => {
        const { title, itemCards } = category;
        return (
          <div key={categoryIndex} className="category-section">
            <h4 className="category-title">{title}</h4>
            {renderItemCards(itemCards)}
          </div>
        );
      })}
    </div>
  );

  const renderMenuSections = (card) => {
    const { title, itemCards, categories } = card.card.card;

    if (categories) {
      // Case 2: Render categories
      return (
        <div className="menu-section">
          <h3 className="menu-section-title">{title}</h3>
          {renderCategories(categories)}
        </div>
      );
    } else if (itemCards) {
      // Case 1: Render itemCards directly
      return (
        <div className="menu-section">
          <h3 className="menu-section-title">{title}</h3>
          {renderItemCards(itemCards)}
        </div>
      );
    } else {
      // Handle unexpected structure
      return null;
    }
  };

  return (
    <div className="menu-container">
      <div className="restaurant-info">
        <img
          className="restaurant-logo"
          src={IMAGE_URL + img_id}
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

      {carousel && (
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
            } = item.dish.info;
            const value = price ?? defaultPrice;
            return (
              <div key={index} className="carousel-item">
                <h3 className="carousel-item-title">{title}</h3>
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
      {cards.map((card, index) => {
        if (index >= 2) {
          // Handle cards starting from index 2
          return renderMenuSections(card);
        } else {
          // Handle special cases for indices 0 and 1
          const { title, itemCards, categories } = card.card.card;
          if (categories) {
            return (
              <div key={index} className="menu-section">
                <h3 className="menu-section-title">{title}</h3>
                {renderCategories(categories)}
              </div>
            );
          } else if (itemCards) {
            return (
              <div key={index} className="menu-section">
                <h3 className="menu-section-title">{title}</h3>
                {renderItemCards(itemCards)}
              </div>
            );
          }
          // Handle unexpected structure
          return null;
        }
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
                      {choice.name}
                      {isNaN(choice.price)
                        ? " - Not Available"
                        : (" - ₹"+ choice.price / 100)}
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
