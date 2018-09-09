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
         options: {
            type: config.type || " ",
            val: config.val,
            barColor: config.barColor || " ",
            barBgColor: config.barBgColor || " ",
            size: config.size || " "
         }
      };
   }
   render() {
      if (this.state.options.type === "circular") {
         return (
            <div className={`preloader-wrapper ${this.state.options.size} active`}>
               <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                     <div className="circle" />
                  </div>
                  <div className="gap-patch">
                     <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                     <div className="circle" />
                  </div>
               </div>
            </div>
         );
      } else if (this.state.options.type === "flashing") {
         return (
            <div className={`preloader-wrapper ${this.state.options.size} active`}>
               <div className="spinner-layer spinner-blue">
                  <div className="circle-clipper left">
                     <div className="circle" />
                  </div>
                  <div className="gap-patch">
                     <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                     <div className="circle" />
                  </div>
               </div>

               <div className="spinner-layer spinner-red">
                  <div className="circle-clipper left">
                     <div className="circle" />
                  </div>
                  <div className="gap-patch">
                     <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                     <div className="circle" />
                  </div>
               </div>

               <div className="spinner-layer spinner-yellow">
                  <div className="circle-clipper left">
                     <div className="circle" />
                  </div>
                  <div className="gap-patch">
                     <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                     <div className="circle" />
                  </div>
               </div>

               <div className="spinner-layer spinner-green">
                  <div className="circle-clipper left">
                     <div className="circle" />
                  </div>
                  <div className="gap-patch">
                     <div className="circle" />
                  </div>
                  <div className="circle-clipper right">
                     <div className="circle" />
                  </div>
               </div>
            </div>
         );
      } else {
         return (
            <div className={`progress ${this.state.options.barBgColor}`}>
               <div
                  className={`${
                     this.state.options.val ? "determinate" : "indeterminate"
                  } ${this.state.options.barColor}`}
                  style={{ width: this.state.options.val + "%" }}
               />
            </div>
         );
      }
   }
}
export default Preloader;
