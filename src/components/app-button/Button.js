/**
 * Component - Button
 * MaterializeCSS Button component
 * @see {@link https://materializecss.com/buttons.html | Button}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Button
 * @description MaterializeCSS Button Component.
 * @extends Component
 */
class Button extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {
            type: config.type || "raised",
            size: config.size || " ",
            label: config.label || " ",
            disabled: config.disabled || false,
            color: config.color || " ",
            textColor: config.textColor || "white-text",
            wavesEffect: config.wavesEffect || true,
            wavesType: config.wavesType || " ",
            wavesColor: config.wavesColor || " ",
            href: config.href || " ",
            onClick: config.onClick || (() => {})()
         }
      };
      this.availableWavesColors = [
         "waves-light",
         "waves-red",
         "waves-yellow",
         "waves-orange",
         "waves-purple",
         "waves-green",
         "waves-teal"
      ];
      this.availableSizes = ["normal", "small", "large"];
      this.availableTypes = ["raised", "floating", "flat"];
   }

   _wavesColorIsValid = color => {
      if (this.availableWavesColors.includes(color)) {
         return true;
      } else {
         console.warn(
            "ReactMaterial Warning: Button attr - wavesColor is empty or invalid"
         );
         return false;
      }
   };

   _sizeIsValid = size => {
      if (this.availableSizes.includes(size)) {
         return true;
      } else {
         console.warn(
            "ReactMaterial Error: Button attr - size is empty or invalid \n Component will re" +
               "nder abnormal ui."
         );
         return false;
      }
   };

   _typeIsInvalid = type => {
      if (this.availableTypes.includes(type)) {
         return true;
      } else {
         console.warn(
            "ReactMaterial Error: Button attr - type is empty or invalid \n Component will re" +
               "nder abnormal ui."
         );
         return false;
      }
   };

   render() {
      let btnType;
      if (this._typeIsInvalid(this.state.options.type)) {
         if (this.state.options.type === "raised") {
            btnType = "btn";
         } else if (this.state.options.type === "floating") {
            btnType = "btn-floating";
         } else if (this.state.options.type === "flat") {
            btnType = "btn-flat";
         }
      }

      let btnSize;
      if (this._sizeIsValid(this.state.options.size)) {
         if (this.state.options.size === "normal") {
            btnSize = "";
         } else if (this.state.options.size === "large") {
            btnSize = "btn-large";
         } else if (this.state.options.size === "small") {
            btnSize = "btn-small";
         }
      }

      return (
         <a
            className={` 
                ${this.state.options.wavesEffect ? "waves-effect" : ""} 
                ${
                   this._wavesColorIsValid(this.state.options.wavesColor)
                      ? this.state.options.wavesColor
                      : ""
                } 
                ${btnType} 
                ${btnSize} 
                ${this.state.options.color} 
                ${this.state.options.textColor}
                ${this.state.options.disabled ? "disabled" : ""}`}
            href={`${
               this.state.options.href ? this.state.options.href : "javascript:void(0)"
            }`}
            onClick={this.state.options.onClick}>
            {this.state.options.type === "floating" ? "" : this.state.options.label}
            {this.props.children}
         </a>
      );
   }
}
export default Button;
