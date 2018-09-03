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
      this.state = {
         options: {
            align: " ",
            centerLogo: " ",
            color: " ",
            fixed: " ",
            textColor: " "
         }
      };
   }

   /**
    * Lifecycle method to trigger on mount
    */
   componentDidMount() {
      let self = this;
      let config = { ...self.props };
      self.setState({
         options: {
            align: config.align || "right",
            centerLogo: config.centerLogo || "false",
            color: config.color || " ",
            fixed: config.fixed || "false",
            textColor: config.textColor || " "
         }
      });
   }

   componentDidUpdate() {
      console.log(this.state);
   }
   
   /**
    * Default render method
    */
   render() {
      return (
         <div className="navbar-fixed">
            <nav className="">
               <div className="nav-wrapper">
                  <a href="#!" className="brand-logo">
                     Logo
                  </a>
                  <ul className="right hide-on-med-and-down">
                     <li>
                        <a href="sass.html"> Sass </a>
                     </li>
                     <li>
                        <a href="badges.html"> Components </a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      );
   }
}

export default Navbar;
