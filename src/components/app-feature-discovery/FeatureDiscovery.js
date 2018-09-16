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
         options: {}
      };
      this.element;
      this.instance;
   }

   componentDidMount() {
      this.element = document.querySelector(".tap-target");
      this.instance = M.TapTarget.init(this.element);
   }

   open = () => {
      this.instance.open();
   };

   close = () => {
      this.instance.close();
   };

   render() {
      return (
         <Fragment>
            <a
               id="menu"
               className="waves-effect waves-light btn-floating btn-large lime"
               onClick={this.open}>
               <Icon icon="menu" />
            </a>
            <div className="tap-target lime" data-target="menu">
               <div className="tap-target-content">
                  <h5>Title</h5>
                  <p>A bunch of text</p>
               </div>
            </div>
         </Fragment>
      );
   }
}
export default FeatureDiscovery;
