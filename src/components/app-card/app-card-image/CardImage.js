/**
 * Component - Card - CardImage
 * MaterializeCSS CardImage component
 * @see {@link https://materializecss.com/cards.html | CardImage}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * Import components
 */
import Icon from "../../app-icon/Icon";

/**
 * @class
 * @name CardImage
 * @description MaterializeCSS CardImage Component.
 * @extends Component
 */
class CardImage extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {
             title: config.title || " ",
             titleColor: config.titleColor || " ",
             imageUrl: config.imageUrl || " "
         }
      };
   }
   render() {
      return (
         <div className="card-image">
            <img src={this.state.options.imageUrl}/>
            <span className={`card-title ${this.state.options.titleColor}`}>{this.state.options.title}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
               <Icon icon="add" />
            </a>
         </div>
      );
   }
}
export default CardImage;
