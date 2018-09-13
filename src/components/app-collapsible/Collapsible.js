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
      let config = { ...props };
      this.state = {
         options: {
            collapsibleOptions: config.collapsibleOptions || {},
            type: config.type || " ",
            collapsibleData: config.collapsibleData || [],
            componentId: this._generateComponentId()
         }
      };
      this.element;
      this.instance;
   }

   /**
    * A helper function to generate a unique identifier for component
    */
   _generateComponentId = () => {
      return Math.random()
         .toString(36)
         .substring(7);
   };

   componentDidMount() {
      this.element = document.querySelector(`#${this.state.options.componentId}`);
      let options = {
         accordion:
            this.state.options.type === "expandable"
               ? false
               : this.state.options.type === "popout"
                  ? true
                  : this.state.options.collapsibleOptions.accordion
                     ? true
                     : false || true,
         onOpenStart: this.state.options.collapsibleOptions.onOpenStart || null,
         onOpenEnd: this.state.options.collapsibleOptions.onOpenEnd || null,
         onCloseStart: this.state.options.collapsibleOptions.onCloseStart || null,
         onCloseEnd: this.state.options.collapsibleOptions.onCloseEnd || null,
         inDuration: this.state.options.collapsibleOptions.inDuration || 300,
         outDuration: this.state.options.collapsibleOptions.outDuration || 300
      };
      this.instance = M.Collapsible.init(this.element, options);
   }
   render() {
      return (
         <ul
            id={this.state.options.componentId}
            className={`collapsible ${
               this.state.options.type === "accordion"
                  ? " "
                  : this.state.options.type === "expandable"
                     ? "expandable"
                     : this.state.options.type === "popout"
                        ? "popout"
                        : ""
            }`}>
            {this.state.options.collapsibleData.map((item, key) => {
               return (
                  <li key={key} className={item.active ? "active" : ""}>
                     <div
                        className={`collapsible-header ${item.headerTextColor} ${
                           item.headerBgColor
                        }`}>
                        <Icon icon={item.icon} />
                        {item.header}
                     </div>
                     <div
                        className={`collapsible-body ${item.bodyTextColor} ${
                           item.bodyBgColor
                        }`}>
                        <span>{item.body}</span>
                     </div>
                  </li>
               );
            })}
         </ul>
      );
   }
}
export default Collapsible;
