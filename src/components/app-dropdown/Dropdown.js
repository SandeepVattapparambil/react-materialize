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
 * Import components
 */
import Button from "../app-button/Button";

/**
 * @class
 * @name Dropdown
 * @description MaterializeCSS Dropdown Component.
 * @extends Component
 */
class Dropdown extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            componentId: this._generateComponentId()
         }
      };
      this.element;
      this.instance;
   }

   componentDidMount() {
      this.element = document.querySelector(".dropdown-content");
      let options = {
         alignment: this.state.options.alignment || "left",
         autoTrigger: this.state.options.autoTrigger || true,
         constrainWidth: this.state.options.constrainWidth || true,
         container: this.state.options.container || null,
         coverTrigger: this.state.options.coverTrigger || true,
         closeOnClick: this.state.options.closeOnClick || true,
         hover: this.state.options.hover || false,
         inDuration: this.state.options.inDuration || 150,
         outDuration: this.state.options.outDuration || 250,
         onOpenStart: this.state.options.onOpenStart || (() => {}),
         onOpenEnd: this.state.options.onOpenEnd || (() => {}),
         onCloseStart: this.state.options.onCloseStart || (() => {}),
         onCloseEnd: this.state.options.onCloseEnd || (() => {})
      };
      this.instance = M.Dropdown.init(this.element);
   }

   /**
    * @function
    * A helper function to generate a unique identifier for component
    * @name _generateComponentId
    * @returns {String} - A unique random string
    */
   _generateComponentId = () => {
      return Math.random()
         .toString(36)
         .substring(7);
   };

   render() {
      return (
         <Fragment>
            <Button
               type="raised"
               color="teal"
               href="#"
               trigger="dropdown-trigger"
               dataTarget="dropdown1"
               label="Drop Me!"
            />
            <ul id="dropdown1" className="dropdown-content">
               <li>
                  <a href="#!">one</a>
               </li>
               <li>
                  <a href="#!">two</a>
               </li>
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
