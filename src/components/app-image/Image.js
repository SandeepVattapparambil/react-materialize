/**
 * Component - Image
 * MaterializeCSS static Image component
 * @see {@link https://materializecss.com/media-css.html | Image}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Image
 * @description MaterializeCSS Image Component.
 * @extends Component
 */
class Image extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            src: config.src || " ",
            alt: config.alt || " ",
            circle: config.circle || false
         }
      };
   }
   render() {
      return (
         <img
            className={`responsive-img ${this.state.options.circle ? "circle" : ""}`}
            src={this.state.options.src}
            alt={this.state.options.alt}
         />
      );
   }
}

export default Image;
