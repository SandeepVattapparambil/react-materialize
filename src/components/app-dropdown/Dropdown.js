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
      let config = { ...props };
      this.state = {
         options: {
            buttonData: config.buttonData || [],
            listData: config.listData || [],
            dropdownOptions: config.dropdownOptions || {},
            componentId: this._generateComponentId(),
            componentTarget: "dropdown" + this._generateComponentId()
         }
      };
      this.element;
      this.instance;
   }

   componentDidMount() {
      let element = document.querySelector(`.dropdown${this.state.options.componentId}`);
      let options = {
         alignment: this.state.options.dropdownOptions.alignment || "left",
         autoTrigger: this.state.options.dropdownOptions.autoTrigger,
         constrainWidth: this.state.options.dropdownOptions.constrainWidth,
         container: this.state.options.dropdownOptions.container || null,
         coverTrigger: this.state.options.dropdownOptions.coverTrigger,
         closeOnClick: this.state.options.dropdownOptions.closeOnClick,
         hover: this.state.options.dropdownOptions.hover,
         inDuration: this.state.options.dropdownOptions.inDuration || 150,
         outDuration: this.state.options.dropdownOptions.outDuration || 250,
         onOpenStart: this.state.options.dropdownOptions.onOpenStart || (() => {}),
         onOpenEnd: this.state.options.dropdownOptions.onOpenEnd || (() => {}),
         onCloseStart: this.state.options.dropdownOptions.onCloseStart || (() => {}),
         onCloseEnd: this.state.options.dropdownOptions.onCloseEnd || (() => {})
      };
      let instance = M.Dropdown.init(element, options);
      this.element = element;
      this.instance = instance;
   }

   _getInstance = () => {
      return M.Dropdown.getInstance(this.element);
   };

   _open = () => {
      this.instance.open();
   };

   _close = () => {
      this.instance.close();
   };

   _recalculateDimensions = () => {
      return this.instance.recalculateDimensions();
   };

   _destroy = () => {
      this.instance.destroy();
   };

   /**
    * @function
    * A helper function to generate a unique identifier for component
    * @name _generateComponentId
    * @returns {String} - A unique random string
    */
   _generateComponentId = () => {
      return Math.random()
         .toString()
         .substring(7);
   };

   render() {
      return (
         <Fragment>
            <a
               className={`dropdown${
                  this.state.options.componentId
               } dropdown-trigger btn`}
               href="javascript:void(0)"
               data-target={this.state.options.componentTarget}>
               Drop Me!
            </a>

            <ul id={this.state.options.componentTarget} className="dropdown-content">
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
