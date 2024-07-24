import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    console.log("Rendered Header");
  }, [btnName]); // it will called only when the btnName is updated.

  return (
    <div className="header">
      <div className="logo-container">
        <a href="/"><div className="logo-text">Suman Food and Beverages</div></a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>Profile</li>
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

/* 


when setBtnName is called it will re render the whole UI again. and create a new variable btnName that's wht it's work even if it's const.

when the button is clicked, the button name should change to Logout and it will re render the whole header again and when it compare it with the previous virtual dom it will find the difference only in div where the button is placed and it will update only that part of the UI not load different parts of header except the button.

That's why it is reconcilation and differntial rendering.

useEffect is called whenever our component is rendered and it will run the function inside it.

useEffect is called after the first render and after every update.

useEffect takes two arguments first is the function that we want to run and the second is the array of dependencies.

array of dependencies is the list of variables that useEffect depends on.

if we pass an empty array of dependencies then it will run only once after the first render.

if we pass a variable in the array of dependencies then it will run whenever that variable is updated.

if we pass multiple variables in the array of dependencies then it will run whenever any of the variables is updated.

useEffect is used to run the side effects in the function component.

1. If there dependency array is not present then useEffect is called on every render as eg. login/logout button.

2. If there is an empty array of dependencies then useEffect is called only once after the first render.





*/
