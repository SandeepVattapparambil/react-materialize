/**
 * React Material Library
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */

/**
 * Import react
 */
import React from "react";
import ReactDOM from "react-dom";

/**
 * Initialize styles
 */
import "./index.css";

/**
 * Import components
 */
import Navbar from "./components/app-navbar/Navbar";
import Container from "./components/app-container/Container";

/**
 * Import service worker
 */
import registerServiceWorker from "./registerServiceWorker";

/**
 * Render component on to DOM
 */
ReactDOM.render(
   <Navbar
      logo="Hello"
      fixed="true"
      color="lime"
      textColor="white-text"
      centerLogo="false"
   ></Navbar>,
   document.getElementById("header")
);

ReactDOM.render(<Container />, document.getElementById("container"));

/**
 * Register service worker
 */
registerServiceWorker();
