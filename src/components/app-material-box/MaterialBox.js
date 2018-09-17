/**
 * Component - Material Box
 * MaterializeCSS Material Box component
 * @see {@link https://materializecss.com/media.html | Media - Material Box}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name MaterialBox
 * @description MaterializeCSS Material Box Component.
 * @extends Component
 */
class MaterialBox extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            dataCaption: config.dataCaption || " ",
            imageSrc: config.imageSrc || " ",
            imageAlt: config.imageAlt || " ",
            imageWidth: config.imageWidth || " ",
            componentOptions: config.options || {},
            componentId: this._generateComponentId()
         }
      };
      this.element;
      this.instance;
   }

   componentDidMount() {
      this.element = document.querySelector(`.mBox${this.state.options.componentId}`);
      let options = {
         inDuration: this.state.options.componentOptions.inDuration || 275,
         outDuration: this.state.options.componentOptions.outDuration || 200,
         onOpenStart: this.state.options.componentOptions.onOpenStart || null,
         onOpenEnd: this.state.options.componentOptions.onOpenEnd || null,
         onCloseStart: this.state.options.componentOptions.onCloseStart || null,
         onCloseEnd: this.state.options.componentOptions.onCloseEnd || null
      };
      (this.instance = M.Materialbox.init(this.element)), options;
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

   _getInstance = () => {
      return this.instance;
   };

   _open = () => {
      this.instance.open();
   };

   _close = () => {
      this.instance.close();
   };

   _destroy = () => {
      this.instance.destroy();
   };

   render() {
      return (
         <img
            className={`mBox${this.state.options.componentId} materialboxed`}
            data-caption={this.state.options.dataCaption}
            width={this.state.options.imageWidth}
            alt={this.state.options.imageAlt}
            src={this.state.options.imageSrc}
         />
      );
   }
}

export default MaterialBox;
