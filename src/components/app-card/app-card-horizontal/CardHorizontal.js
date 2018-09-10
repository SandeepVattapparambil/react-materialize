/**
 * Component - Horizontal Card
 * MaterializeCSS Horizontal Card component
 * @see {@link https://materializecss.com/cards.html | Horizontal Card}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * Import components
 */
import Row from "../../app-row/Row";
import Column from "../../app-column/Column";
import CardImage from "../app-card-image/CardImage";

/**
 * @class
 * @name CardHorizontal
 * @description MaterializeCSS CardHorizontal Component.
 * @extends Component
 */
class CardHorizontal extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            column: config.column || {},
            color: config.color || " ",
            imageUrl: config.imageUrl || "",
            cardAction: config.cardAction || null
         }
      };
   }
   render() {
      return (
         <Row>
            <Column
               small={this.state.options.column.small}
               medium={this.state.options.column.medium}>
               <div className={`card horizontal ${this.state.options.color}`}>
                  <CardImage imageUrl={this.state.options.imageUrl} />
                  <div className="card-stacked">
                     <div className="card-content">{this.props.children}</div>
                     {this.state.options.cardAction}
                  </div>
               </div>
            </Column>
         </Row>
      );
   }
}
export default CardHorizontal;
