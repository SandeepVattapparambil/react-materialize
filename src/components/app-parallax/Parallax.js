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
            parallaxOptions: config.parallaxOptions || 0,
            imageUrl: config.imageUrl || "",
            componentId: "parallax" + this._generateComponentId()
         }
      };
      this.element;
      this.instance;
   }

   componentDidMount() {
      this._componentInit();
   }

   _componentInit = () => {
      this.element = document.querySelector(`.${this.state.options.componentId}`);
      let options = {
         responsiveThreshold: this.state.options.parallaxOptions.responsiveThreshold || 0
      };
      this.instance = M.Parallax.init(this.element, options);
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

   _getInstance = () => {
      return M.Parallax.getInstance(this.element);
   };

   _destroy = () => {
      this._getInstance().destroy();
   };

   render() {
      return (
         <div className="parallax-container">
            <div className={`${this.state.options.componentId} parallax`}>
               <img src={this.state.options.imageUrl} />
            </div>
         </div>
      );
   }
}
export default Parallax;
