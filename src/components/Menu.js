import React, { useEffect, useState } from "react";
import { Shimmer } from "./shimmerUI";
const Menu = () => {
  const[resInfo, setResInfo] = useState(null);

  useEffect(()=>{
    fetchMenu();
  },[])


  const fetchMenu = async () => {
    const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  }
if(resInfo === null){}

  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
};

/* const Menu = ({ menuItems }) => {
  return (
    <div className="menu-container">
      <h2 className="menu-heading">Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-details">
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <div className="menu-price-rating">
                <span className="menu-price">${item.price}</span>
                <div className="menu-rating">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={
                        i < item.rating
                          ? "fas fa-star filled-star"
                          : "fas fa-star empty-star"
                      }
                    />
                  ))}
                  <span className="rating-number">{item.rating}</span>
                </div>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; */

export default Menu;
