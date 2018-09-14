/**
 * Component - Dropdown
 * MaterializeCSS Dropdown component
 * @see {@link https://materializecss.com/dropdown.html | Dropdown}
 */

/**
 * Import react library
 */
import React, { Component, Fragment } from "react";

/**
 * @class
 * @name Dropdown
 * @description MaterializeCSS Dropdown Component.
 * @extends Component
 */
class Dropdown extends Component {
    constructor(props) {
        super(props);
        let config = {...props};
        this.state = {
            options:{}
        };
        this.element;
        this.instance;
    }
   render() {
      return (
         <Fragment>
            <a className="dropdown-trigger btn" href="#" data-target="dropdown1">
               Drop Me!
            </a>

            <ul id="dropdown1" className="dropdown-content">
               <li>
                  <a href="#!">one</a>
               </li>
               <li>
                  <a href="#!">two</a>
               </li>
               <li className="divider" tabIndex="-1" />
               <li>
                  <a href="#!">three</a>
               </li>
               <li>
                  <a href="#!">
                     <i className="material-icons">view_module</i>
                     four
                  </a>
               </li>
               <li>
                  <a href="#!">
                     <i className="material-icons">cloud</i>
                     five
                  </a>
               </li>
            </ul>
         </Fragment>
      );
   }
}
export default Dropdown;
