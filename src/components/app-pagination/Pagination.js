/**
 * Component - Pagination
 * MaterializeCSS Pagination component
 * @see {@link https://materializecss.com/pagination.html | Pagination}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Pagination
 * @description MaterializeCSS Pagination Component.
 * @extends Component
 */
class Pagination extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {
            totalItems: config.totalItems || 0,
            initialPage: config.initialPage || 0,
            maxItems: config.maxItems || 0,
            buttonColor: config.buttonColor || " "
         }
      };
   }
   render() {
      let buttonArray = [];
      for (let i = 1; i < this.state.options.totalItems; i++) {
         buttonArray.push(
            <li
               key={i}
               className={`waves-effect ${
                  i == this.state.options.initialPage
                     ? `${this.state.options.buttonColor} active`
                     : ""
               }`}>
               <a href="#!">{i}</a>
            </li>
         );
      }
      return (
         <ul className="pagination">
            <li className="disabled">
               <a href="#!">
                  <i className="material-icons">chevron_left</i>
               </a>
            </li>
            {buttonArray}
            <li className="waves-effect">
               <a href="#!">
                  <i className="material-icons">chevron_right</i>
               </a>
            </li>
         </ul>
      );
   }
}
export default Pagination;
