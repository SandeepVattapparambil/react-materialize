/**
 * Component - Parallax
 * MaterializeCSS Parallax component
 * @see {@link https://materializecss.com/parallax.html | Parallax}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Parallax
 * @description MaterializeCSS Parallax Component
 * @extends Component
 */

class Parallax extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            imageUrl: config.imageUrl || "",
            componentId: "parallax"+this._generateComponentId()
         }
      };
      this.element;
      this.instance;
   }

   componentDidMount() {
      this.element = document.querySelector(`.${this.state.options.componentId}`);
      let options = {};
      this.instance = M.Parallax.init(element, options);
   }

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
         <div className="parallax-container">
            <div className={`${this.state.options.componentId} parallax`}>
               <img src="images/parallax1.jpg" />
            </div>
         </div>
      );
   }
}
export default Parallax;
