import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>User</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

/*   */