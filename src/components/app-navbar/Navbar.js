/**
 * Component - Navbar
 * MaterializeCSS Navbar component
 * @see {@link https://materializecss.com/navbar.html | Navbar}
 */

/**
 * Import react library
 */
import React, { Component } from "react";
import "./Navbar.css";

/**
 * @class
 * @name Navbar
 * @description MaterializeCSS Navbar component
 * @extends Component
 */
class Navbar extends Component {
   /**
    * Class constructor
    */
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {
            logo: config.logo || "Logo",
            centerLogo: config.centerLogo || "false",
            color: config.color || " ",
            fixed: config.fixed || "false",
            textColor: config.textColor || " "
         }
      };
   }

   /**
    * Default render method
    */
   render() {
      return (
         <div className={`${this.state.options.fixed === 'true' ? 'navbar-fixed' : ''}`}>
            <nav className={`${this.state.options.color}`}>
               <div className="nav-wrapper">
                  <a href="#!" className={`brand-logo ${this.state.options.centerLogo === "true" ? "center" : ""} ${this.state.options.textColor}`}>
                     {this.state.options.logo}
                  </a>
                  {this.props.children}
               </div>
            </nav>
         </div>
      );
   }
}

export default Navbar;
