<<<<<<< HEAD:src/components/RestaurantCard.js
import { Star } from "./star";
import { IMAGE_URL } from "../utils/constants";
=======
import { renderStars } from "./star";
import { IMAGE_URL } from "./constants";
>>>>>>> ee90e66169b69f7fbe74adb1b2a38a6c69fb0809:src/utils/RestaurantCard.js

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    id,
    cuisines,
    avgRating,
    locality,
    costForTwo,
    cloudinaryImageId,
    sla,
    availability,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  const { deliveryTime } = sla;
  const { link } = resData?.cta;
  const { nextClosedTime, opened } = availability;

  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img
          className="res-image"
          alt="Restaurant"
          src={IMAGE_URL + cloudinaryImageId}
        />
      </div>
      <div className="restaurant-details">
        <h3 className="res-name">{name}</h3>
        <h4 className="res-rating">{Star(avgRating)}</h4>
        <h4 className="res-delivery-time">Delivery in {deliveryTime} mins</h4>
        <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
        <h4 className="res-cost-for-two">{costForTwo}</h4>
        <h4 className="res-locality">{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
