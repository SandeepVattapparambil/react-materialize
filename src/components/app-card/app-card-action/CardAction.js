/**
 * Component - Card - CardAction
 * MaterializeCSS CardAction component
 * @see {@link https://materializecss.com/cards.html | CardAction}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name CardAction
 * @description MaterializeCSS CardAction Component.
 * @extends Component
 */
class CardAction extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {}
      };
   }
   render() {
      return <div className="divider"> </div>;
   }
}
export default CardAction;
