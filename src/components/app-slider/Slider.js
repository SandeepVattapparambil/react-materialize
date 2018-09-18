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
            sliderOptions: config.sliderOptions || {},
            sliderData: config.sliderData || [],
            componentId: this._generateComponentId()
         }
      };
      this.element;
      this.instance;
   }

   /**
    * DOM Ready
    */
   componentDidMount() {
      this._componentInit();
   }

   /**
    * @function
    * @name _componentInit
    * Initialize Materialize Slider with options passed in 
    * @memberof Slider
    */
   _componentInit = () => {
      this.element = document.querySelector(`.slider${this.state.options.componentId}`);
      let options = {
         indicators: this.state.options.sliderOptions.indicators,
         height: this.state.options.sliderOptions.height || 400,
         duration: this.state.options.sliderOptions.duration || 500,
         interval: this.state.options.sliderOptions.interval || 6000
      };
      this.instance = M.Slider.init(this.element, options);
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
         <div className={`slider${this.state.options.componentId} slider`}>
            <ul className="slides">
               {this.state.options.sliderData.map((item, key) => {
                  return (
                     <li key={key}>
                        <img src={item.imageUrl} />
                        <div className={`caption ${item.textAlign}`}>
                           <h3>{item.title}</h3>
                           <h5 className="light grey-text text-lighten-3">
                              {item.subtitle}
                           </h5>
                        </div>
                     </li>
                  );
               })}
            </ul>
         </div>
      );
   }
}

export default Slider;
