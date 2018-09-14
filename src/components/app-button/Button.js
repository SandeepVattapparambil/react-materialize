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
            pulse: config.pulse || false,
            href: config.href,
            dataTarget: config.dataTarget || " ",
            trigger: config.trigger || " ",
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
      } else if (!color || color == null || color == undefined || color === " ") {
         return false;
      } else {
         console.warn("ReactMaterial Warning: Button attr - wavesColor is invalid");
         return false;
      }
   };

   _sizeIsValid = size => {
      if (this.availableSizes.includes(size)) {
         return true;
      } else if (!size || size == null || size == undefined || size === " ") {
         return false;
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
      } else if (!type || type == null || type == undefined || type === " ") {
         return false;
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
                ${this.state.options.disabled ? "disabled" : ""}
                ${this.state.options.type === "floating" && this.state.options.pulse ? "pulse" : "" }
                ${this.state.options.trigger ? this.state.options.trigger : ""}`
            }
            href={`${
               this.state.options.href ? this.state.options.href : "javascript:void(0)"
            }`}
            onClick={this.state.options.onClick}
            data-target={
               this.state.options.dataTarget ? this.state.options.dataTarget : ""
            }>
            {this.state.options.type === "floating" ? "" : this.state.options.label}
            {this.props.children}
         </a>
      );
   }
}
export default Button;
