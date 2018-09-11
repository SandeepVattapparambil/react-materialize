/**
 * Component - Collection
 * MaterializeCSS Collection component
 * @see {@link https://materializecss.com/collections.html | Collection }
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Collection
 * @description MaterializeCSS Collection Component.
 * @extends Component
 */
class Collection extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            header: config.header || {}
         }
      };
   }
   render() {
      let header = this.state.options.header !== {} ? this.state.options.header : null;
      return (
         <ul className={`collection ${header ? "with-header" : ""}`}>
            {header ? (
               <li className={`collection-header ${header.bgColor}`}>
                  <h4 className={header.textColor}>{header.text}</h4>
               </li>
            ) : (
               ""
            )}
            {this.props.children}
         </ul>
      );
   }
}
export default Collection;
