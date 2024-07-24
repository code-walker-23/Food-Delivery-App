import { renderStars } from "./star";
import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
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
  if(aggregatedDiscountInfoV3 != null)
     console.log(aggregatedDiscountInfoV3);

  return (
    <a href={link} target="_blank">
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
          <h4 className="res-rating">{renderStars(avgRating)}</h4>
          <h4 className="res-delivery-time">Delivery in {deliveryTime} mins</h4>
          <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
          <h4 className="res-cost-for-two">{costForTwo}</h4>
          <h4 className="res-locality">{locality}</h4>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;
