import React, { useEffect, useState } from "react";
import { Shimmer } from "./shimmerUI";
import { IMAGE_URL } from "../utils/constants";
import { renderStars } from "./star";

const Menu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=527591&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { text } = resInfo?.cards[0]?.card?.card;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);
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
  } = resInfo?.cards[2]?.card?.card?.info;
  const { deliveryTime } = sla;
  const { totalRatingString } = slugs;

  return (
    <div className="menu-container">
      <h1 className="menu-title">{text}</h1>
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
      <h2 className="menu-heading">Menu</h2>
      <ul className="menu-list">
        {itemCards.map((item, index) => (
          <li key={index} className="menu-item">
            <div className="menu-item-details">
              <h4 className="menu-item-name">{item.card.info.name}</h4>
              <p className="menu-item-description">
                {item.card.info.description}
              </p>
            </div>
            {item.card.info.imageId && (
              <img
                className="menu-item-image"
                src={IMAGE_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
