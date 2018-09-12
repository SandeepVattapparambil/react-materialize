/**
 * Component - Collapsible
 * MaterializeCSS Collapsible component
 * @see {@link https://materializecss.com/collapsible.html | Collapsible}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * Import Components
 */
import Icon from "../app-icon/Icon";

/**
 * @class
 * @name Collapsible
 * @description MaterializeCSS Collapsible Component
 * @extends Component
 */

class Collapsible extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <ul class="collapsible">
            <li>
               <div class="collapsible-header">
                  <i class="material-icons">filter_drama</i>
                  First
               </div>
               <div class="collapsible-body">
                  <span>Lorem ipsum dolor sit amet.</span>
               </div>
            </li>
         </ul>
      );
   }
}
export default Collapsible;
