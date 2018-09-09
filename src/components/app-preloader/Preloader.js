/**
 * Component - Preloader
 * MaterializeCSS Preloader component
 * @see {@link https://materializecss.com/preloader.html | Preloader}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Preloader
 * @description MaterializeCSS Preloader Component.
 * @extends Component
 */
class Preloader extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {}
      };
   }
   render() {
      return (
         <div className="progress">
            <div className="determinate" style={{ width: 70 + "%" }} />
         </div>
      );
   }
}
export default Preloader;
