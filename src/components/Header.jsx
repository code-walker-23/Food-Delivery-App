import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  // When the button is clicked, the button name should change to Logout and it will re render the whole UI again.
  let [btnName, setBtnName] = useState("Login");

  // setBtnName("login"); it makes loop and not render the UI.

  /*
  it will called on every render(state variable changes).
  useEffect(() => {
    console.log("Rendered Header");
  }); 

*/

  /* 
  it will called only once after the first render(it will not called on re-render).
  useEffect(() => {
    console.log("Rendered Header");
  },[]);

*/

  useEffect(() => {
    // console.log("Rendered Header");
  }, [btnName]); // it will called only when the btnName is updated.

  const onlineStatus = useOnlineStatus();
  let statusString = "";
  let statusSymbol = "";
  if (onlineStatus) {
    statusString = "Online";
    statusSymbol = "🟢";
  } else {
    statusString = "Offline";
    statusSymbol = "🔴";
  }

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <div className="logo-text">Suman Food and Beverages</div>
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li class="online-status">
            <span class="status-indicator">{statusSymbol}</span>{ statusString}
          </li>

          <li>
            <Link to="/search">🔍Search</Link>
          </li>
          <li>
            <Link to="/top-rated-restaurants">⭐Top Rated</Link>
          </li>
          <li><Link to="/groceries">🛍️Grocery</Link></li>
          <li>🛒Cart</li>
          <li>
            <Link to="/profile">👤Profile</Link>
          </li>
          <button
            className="login-button"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;