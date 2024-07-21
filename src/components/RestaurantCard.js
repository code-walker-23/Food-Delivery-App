const RestaurantCard = (props) => {
  const {resData} = props;
  const {name, cuisines,avgRating, locality,costForTwo} = resData?.info;
  const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="restaurant-card" >
      <div className="restaurant-image" style={{backgroundColor: "#f0f0f0"}}>
        <img className="res-image" alt="res-image" src="https://lh5.googleusercontent.com/p/AF1QipP0eUAms3T6iZD_d5bf8ivyJVzVKp9d4gZALh2S=w178-h178-n-k-no"></img>
        <h3 className="res-name">{name}</h3>
        <h4 className="res-rating">{avgRating} star</h4>
        <h4 className="res-delivery-time">{deliveryTime} hours</h4>
        <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
        <h4 className="res-loacality">{costForTwo}</h4>
        <h4 className="res-loacality">{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;