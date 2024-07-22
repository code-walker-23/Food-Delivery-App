import React from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const AppLayout = () => {
  return (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
  );
};

const Footer = () => {};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);