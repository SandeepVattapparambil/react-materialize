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
         options: {
            actionList: config.actionList || []
         }
      };
   }
   render() {
      return (
         <div className="card-action">
            {this.state.options.actionList.map((item, key) => {
               return (
                  <a key={key} href={`${item.link}`} className={`${item.class}`} onClick={item.onClick ? item.onClick : (()=>{})}>
                     {item.name}
                  </a>
               );
            })}
         </div>
      );
   }
}
export default CardAction;
