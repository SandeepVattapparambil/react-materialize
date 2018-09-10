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

            <li className="collection-item">Alvin</li>
            <li className="collection-item">
               <div>
                  Alvin
                  <a href="#!" className="secondary-content">
                     <i className="material-icons">send</i>
                  </a>
               </div>
            </li>
            <li className="collection-item avatar">
               <img
                  src="https://materializecss.com/images/yuna.jpg"
                  alt=""
                  className="circle"
               />
               <span className="title">Title</span>
               <p>
                  First Line <br />
                  Second Line
               </p>
               <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
               </a>
            </li>
            <li className="collection-item">Alvin</li>
            <li className="collection-item avatar">
               <i className="material-icons circle green">insert_chart</i>
               <span className="title">Title</span>
               <p>
                  First Line <br />
                  Second Line
               </p>
               <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
               </a>
            </li>
         </ul>
      );
   }
}
export default Collection;
