/**
 * Component - Card
 * MaterializeCSS Card component
 * @see {@link https://materializecss.com/cards.html | Card}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * Import components
 */
import Row from "../app-row/Row";
import Column from "../app-column/Column";
import Icon from "../app-icon/Icon";

/**
 * @class
 * @name Card
 * @description MaterializeCSS Card Component.
 * @extends Component
 */
class Card extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            bgColor: config.bgColor || " ",
            textColor: config.textColor || " ",
            title: config.title || " ",
            size: config.size,
            column: config.column || {},
            cardImage: config.cardImage || null,
            cardAction: config.cardAction || null,
            cardActionSticky: config.cardActionSticky || false,
            cardReveal: config.cardReveal || null
         }
      };
   }

   render() {
      let cardContent = this.props.children;
      return (
         <Row>
            <Column
               small={this.state.options.column.small}
               medium={this.state.options.column.medium}
               large={this.state.options.column.large}>
               <div
                  className={`card ${this.state.options.size} ${
                     this.state.options.bgColor
                  } ${this.state.options.cardActionSticky ? "sticky-action" : ""}`}>
                  {this.state.options.cardImage}
                  <div className={`card-content ${this.state.options.textColor}`}>
                     <span
                        className={`card-title ${
                           this.state.options.cardReveal ? "activator" : ""
                        }`}>
                        <Icon align="left" icon="menu" />
                        {this.state.options.title}
                        <Icon align="right" icon="more_vert" />
                     </span>
                     <p>{cardContent}</p>
                  </div>
                  {this.state.options.cardAction}
                  {this.state.options.cardReveal}
               </div>
            </Column>
         </Row>
      );
   }
}
export default Card;
