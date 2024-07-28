// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import Menu from "./components/Menu";
import ScrollToTop from "./components/ScrollToTop";
import TopRatedRestaurant from "./components/TopRatedRestaurant";
import Search from "./components/Search";
import Profile from "./components/Profile";

const AppLayout = () => {
  return (
    <div className="app">
      <ScrollToTop />
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
      },{
        path : "/top-rated-restaurants",
        element : <TopRatedRestaurant />
      },{
        path : "/search",
        element : <Search />
      },{
        path : "/profile",
        element : <Profile />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

// console.log(appRouter); // it return the object of the router. 

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);






/* 


In this application, you are setting up routing using React Router with a structure that involves nested routes. Here's a breakdown of how routing is configured and how it works in this application:

### Components
1. **AppLayout**: 
   - This component acts as a layout wrapper for the entire application. It includes the `Header`, a placeholder for nested components (`<Outlet />`), and the `Footer`.

2. **Other Components**:
   - `Header`: Represents the header of the application.
   - `Body`: Represents the main content for the home page.
   - `Footer`: Represents the footer of the application.
   - `About`: Represents the about page.
   - `Contact`: Represents the contact page.
   - `Menu`: Represents the menu page for a specific restaurant (with a dynamic `id` parameter).
   - `ErrorPage`: Represents the error page to display for unmatched routes.

### Routing Setup
1. **createBrowserRouter**:
   - You use `createBrowserRouter` from React Router to define the routes for the application. This function creates a router instance that listens to URL changes and renders the appropriate components.

2. **Router Configuration**:
   - The `appRouter` is configured with the `createBrowserRouter` function, defining the routes as an array of objects.
   - **Main Route (`/`)**:
     - The main route's `path` is `/`, and it uses `AppLayout` as the main component.
     - `AppLayout` includes nested routes defined in the `children` array.
   - **Nested Routes**:
     - The nested routes are defined within the `children` array under the main route:
       - `{ path: "/", element: <Body /> }`: Maps the root path to the `Body` component.
       - `{ path: "/about", element: <About /> }`: Maps `/about` to the `About` component.
       - `{ path: "/contact", element: <Contact /> }`: Maps `/contact` to the `Contact` component.
       - `{ path: "/restaurants/:id", element: <Menu /> }`: Maps dynamic paths like `/restaurants/123` to the `Menu` component, where `:id` is a URL parameter that can be accessed in the `Menu` component.
   - **Error Route**:
     - `errorElement: <ErrorPage />`: Specifies that the `ErrorPage` component should be rendered when no route matches the current URL.

### Rendering
1. **RouterProvider**:
   - `RouterProvider` is used to render the configured router. It takes the `appRouter` instance as a prop.
   - The `RouterProvider` component is rendered to the DOM using `root.render(<RouterProvider router={appRouter} />)`.

### How It Works
1. **Navigation**:
   - When the application is loaded at the root URL (`/`), the `AppLayout` component is rendered, which includes the `Header`, `Footer`, and the `Body` component (since it matches the root path).
   - When the URL changes to `/about`, the `AppLayout` component still renders the `Header` and `Footer`, but now the `Outlet` is replaced with the `About` component.
   - When the URL changes to `/contact`, the `Contact` component is rendered in place of the `Outlet`.
   - When the URL changes to `/restaurants/:id` (e.g., `/restaurants/123`), the `Menu` component is rendered, and it can access the `id` parameter from the URL.
   - If a URL does not match any of the defined routes, the `ErrorPage` component is rendered.

### Example URL Mappings
- `/` renders `AppLayout` with `Body` in the `Outlet`.
- `/about` renders `AppLayout` with `About` in the `Outlet`.
- `/contact` renders `AppLayout` with `Contact` in the `Outlet`.
- `/restaurants/123` renders `AppLayout` with `Menu` in the `Outlet`, where `id` is `123`.
- Any undefined URL (e.g., `/random`) renders the `ErrorPage`.

This setup ensures a consistent layout with a header and footer while dynamically loading different components based on the current URL. The use of `createBrowserRouter` and nested routes helps manage this efficiently.







*/




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



