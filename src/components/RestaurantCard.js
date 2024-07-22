import { renderStars } from './star';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, locality, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img
          className="res-image"
          alt="Restaurant"
          src="https://lh5.googleusercontent.com/p/AF1QipP0eUAms3T6iZD_d5bf8ivyJVzVKp9d4gZALh2S=w178-h178-n-k-no"
        />
      </div>
      <div className="restaurant-details">
        <h3 className="res-name">{name}</h3>
        <h4 className="res-rating">{renderStars(avgRating)}</h4>
        <h4 className="res-delivery-time">Delivery in {deliveryTime} mins</h4>
        <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
        <h4 className="res-cost-for-two">Cost for Two: {costForTwo}</h4>
        <h4 className="res-locality">{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
