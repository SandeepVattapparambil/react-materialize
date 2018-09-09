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
import Button from "../../app-button/Button";
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
            imageUrl: config.imageUrl || " ",
            fab: config.fab || {}
         }
      };
   }
   render() {
      return (
         <div className="card-image">
            <img src={this.state.options.imageUrl} />
            <span className={`card-title ${this.state.options.titleColor}`}>
               {this.state.options.title}
            </span>
            <Button
               type="floating"
               size={this.state.options.fab.size}
               color={`${this.state.options.fab.color} halfway-fab`}
               onClick={this.state.options.fab.onClick}>
               <Icon icon="add" />
            </Button>
         </div>
      );
   }
}
export default CardImage;
