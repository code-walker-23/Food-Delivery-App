import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import Menu from "./components/Menu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path : "/restaurants/:id",
        element : <Menu />
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);

// The process that will tell browser router

// Children routes are the routes that are nested inside the parent route.
// The parent route is the route that is defined in the createBrowserRouter function.
// creating children routes is done by defining the children property in the parent route object.
// creating children routes and loading them is done by using the Outlet component from react-router-dom.
// outlet is replaced by the children routes that are defined in the parent route object.

// SPA : Single Page Application : It is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.

// React Router : It is a library that allows you to handle routing in a React application.

// BrowserRouter : It is a component that uses the HTML5 history API to keep UI in sync with the URL.

// Route : It is a component that renders some UI when its path matches the current URL.  

// Link : It is a component that allows you to navigate to a different URL.

// Outlet : It is a component that is used to render the children routes of the parent route.

// RouterProvider : It is a component that provides the router context to the children components.



