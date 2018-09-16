/**
 * Component - FeatureDiscovery
 * MaterializeCSS FeatureDiscovery component
 * @see {@link https://materializecss.com/feature-discovery.html | FeatureDiscovery }
 */

/**
 * Import react library
 */
import React, { Component, Fragment } from "react";

/**
 * Import Components
 */
import Icon from "../app-icon/Icon";

/**
 * @class
 * @name FeatureDiscovery
 * @description MaterializeCSS FeatureDiscovery Component.
 * @extends Component
 */
class FeatureDiscovery extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            buttonType: config.buttonType || " ",
            buttonSize: config.buttonSize || " ",
            buttonColor: config.buttonColor || " ",
            wavesEffect: config.wavesEffect || true,
            wavesColor: config.wavesColor || " ",
            overlayColor: config.overlayColor || " ",
            icon: config.icon || " ",
            label: config.label || " ",
            componentId: this._generateComponentId()
         }
      };
      this.element;
      this.instance;
   }

   componentDidMount() {
      this.element = document.querySelector(
         `.tapTarget${this.state.options.componentId}`
      );
      this.instance = M.TapTarget.init(this.element);
   }

   _open = () => {
      this.instance.open();
   };

   _close = () => {
      this.instance.close();
   };

   _destroy = () => {
      this.instance.destroy();
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
         <Fragment>
            <a
               id="menu"
               className={`
               ${this.state.options.buttonColor} 
               ${this.state.options.buttonSize} 
               ${this.state.options.buttonType} 
               ${this.state.options.wavesEffect} 
               ${this.state.options.wavesColor}
              `}
               onClick={this._open}>
               <Icon icon={this.state.options.icon} />
               {this.state.options.label}
            </a>
            <div
               className={`tapTarget${this.state.options.componentId} tap-target 
               ${this.state.options.overlayColor}
               `}
               data-target="menu">
               <div className="tap-target-content">{this.props.children}</div>
            </div>
         </Fragment>
      );
   }
}
export default FeatureDiscovery;
