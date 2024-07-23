import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-code">404</div>
        <div className="error-message">Oops! Page Not Found</div>
        <p className="error-description">
          Sorry, the page you are looking for does not exist. 
          You can go back to the <a href="/">homepage</a> or check out some other pages.
        </p>
        <button className="go-home-button" onClick={() => window.location.href = '/'}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
