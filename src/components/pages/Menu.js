import React, { useEffect, useState } from "react";
import { Shimmer } from "../../utils/Shimmer";
import { IMAGE_URL } from "../../utils/constants";
import { renderStars } from "../../utils/star";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import OfflineComponent from "../../utils/offlineComponent";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const Menu = () => {
  const [selectedAddons, setSelectedAddons] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showMenu, setShowMenu] = useState(true); // Track menu expansion
  const { id } = useParams();

  const resInfo = useRestaurantMenu(id);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <OfflineComponent />;
  }
  // useRestaurantMenu will return [] before fetching the data from the API.
  if (resInfo.length == 0) {
    return <Shimmer />;
  }

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
    aggregatedDiscountInfoV2,
    totalRatingsString,
    availability,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  const { deliveryTime } = sla || {};
  const { nextCloseTime, opened } = availability || {};
  const { header, descriptionList } = aggregatedDiscountInfoV2 || {};

  const img_id = cloudinaryImageId || logo;

  const handleAddonsClick = (addons) => {
    setSelectedAddons(addons);
  };

  const handleCloseAddons = () => {
    setSelectedAddons(null);
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleCategory = (sectionIndex, categoryIndex) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [sectionIndex]: {
        ...(prev[sectionIndex] || {}),
        [categoryIndex]: !prev[sectionIndex]?.[categoryIndex],
      },
    }));
  };

  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
    if (showMenu) {
      // Expand all sections when the menu is expanded
      const allSections = cards.reduce((acc, _, index) => {
        acc[index] = true;
        return acc;
      }, {});
      setExpandedSections(allSections);
    } else {
      // Collapse all sections when the menu is collapsed
      setExpandedSections({});
    }
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
              <p className="menu-item-price">₹{(value / 100).toFixed(2)}</p>
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

  const renderCategories = (categories, sectionIndex) => (
    <div className="categories-section">
      {categories.map((category, categoryIndex) => {
        const { title, itemCards } = category;
        return (
          itemCards.length > 0 && (
            <div key={categoryIndex} className="category-section">
              <h4
                className="category-title"
                onClick={() => toggleCategory(sectionIndex, categoryIndex)}
              >
                {title}{" "}
                {expandedCategories[sectionIndex]?.[categoryIndex] ? "▲" : "▼"}
              </h4>
              {expandedCategories[sectionIndex]?.[categoryIndex] &&
                renderItemCards(itemCards)}
            </div>
          )
        );
      })}
    </div>
  );

  const renderMenuSections = (card, index) => {
    const { title, itemCards, categories } = card.card.card;

    return (
      (itemCards?.length > 0 || categories?.length > 0) && (
        <div key={index} className="menu-section">
          <h3
            className="menu-section-title"
            onClick={() => toggleSection(index)}
          >
            {title} {expandedSections[index] ? "▲" : "▼"}
          </h3>
          {expandedSections[index] && (
            <>
              {categories
                ? renderCategories(categories, index)
                : renderItemCards(itemCards)}
            </>
          )}
        </div>
      )
    );
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
              <span className="restaurant-total-rating">{`(${totalRatingsString})`}</span>
            </div>
          </div>
          <h4 className="restaurant-delivery-time">
            Delivery in {deliveryTime} mins
          </h4>
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

      <h2 className="menu-heading" onClick={handleMenuToggle}>
        Menu {showMenu ? "▲" : "▼"}
      </h2>

      {showMenu && (
        <>{cards.flatMap((card, index) => renderMenuSections(card, index))}</>
      )}

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
                        : " - ₹" + choice.price / 100}
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

/* 

We will use custom hook to fetch tha data from the API.
And Menu card is only responsible to show the data on the UI.
useRestaurantMenu() -> custom hook to fetch the data from the API and return the data.
 It is only responsible to fetch the data.
Implementation of custom hook useRestaurantMenu(resId) is abstracted in the useRestaurantMenu.js file.



*/
