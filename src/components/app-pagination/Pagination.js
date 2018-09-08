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
 * Import components
 */
import Icon from "../app-icon/Icon";

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
         },
         prevButton: "disabled",
         nextButton: " ",
         selected: config.initialPage
      };
   }

   _prev = () => {
      alert("prev clicked");
   };

   _next = () => {
      alert("next clicked");
   };

   _select = () => {
      alert("selected");
   };

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
               <a href="#!" onClick={this._select}>{i}</a>
            </li>
         );
      }
      return (
         <ul className="pagination">
            <li className="disabled">
               <a href="#!" onClick={this._prev}>
                  <Icon icon="chevron_left" />
               </a>
            </li>
            {buttonArray}
            <li className="waves-effect">
               <a href="#!" onClick={this._next}>
                  <Icon icon="chevron_right" />
               </a>
            </li>
         </ul>
      );
   }
}
export default Pagination;
