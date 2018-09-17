/**
 * Component - Slider
 * MaterializeCSS Slider component
 * @see {@link https://materializecss.com/media.html | Media - Slider}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Slider
 * @description MaterializeCSS Slider.
 * @extends Component
 */
class Slider extends Component {
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
    this.element = document.querySelector(`.slider${this.state.options.componentId}`);
    let options = {
        indicators: this.state.options.indicators,
        height: this.state.options.height || 400,
        duration: this.state.options.duration || 500,
        interval:this.state.options.interval || 6000
    };
    this.instance = M.Slider.init(this.element, options);
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
         <div className={`slider${this.state.options.componentId} slider`}>
            <ul className="slides">
               <li>
                  <img src="https://images.unsplash.com/photo-1537152007401-34abcbf532ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=382802ab1e00f0cbdc23d7a6d678f5ad&auto=format&fit=crop&w=1510&q=80" />
                  <div className="caption center-align">
                     <h3>This is our big Tagline!</h3>
                     <h5 className="light grey-text text-lighten-3">
                        Here's our small slogan.
                     </h5>
                  </div>
               </li>
               <li>
                  <img src="https://images.unsplash.com/photo-1537151377170-9c19a791bbea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43b83b0d2ac9fc3db2d9afd19de0bd6a&auto=format&fit=crop&w=750&q=80" />
                  <div className="caption left-align">
                     <h3>Left Aligned Caption</h3>
                     <h5 className="light grey-text text-lighten-3">
                        Here's our small slogan.
                     </h5>
                  </div>
               </li>
               <li>
                  <img src="https://images.unsplash.com/photo-1537135086-ca6612c6550b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=600db5d4133321cad811ff2ceeffe885&auto=format&fit=crop&w=751&q=80" />
                  <div className="caption right-align">
                     <h3>Right Aligned Caption</h3>
                     <h5 className="light grey-text text-lighten-3">
                        Here's our small slogan.
                     </h5>
                  </div>
               </li>
               <li>
                  <img src="https://images.unsplash.com/photo-1537126747582-791955ffd1dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14891b91a081b2a9f487f379f5de6d2c&auto=format&fit=crop&w=750&q=80" />
                  <div className="caption center-align">
                     <h3>This is our big Tagline!</h3>
                     <h5 className="light grey-text text-lighten-3">
                        Here's our small slogan.
                     </h5>
                  </div>
               </li>
            </ul>
         </div>
      );
   }
}
export default Slider;
