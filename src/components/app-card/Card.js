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
            title: config.title || " "
         }
      };
   }

   render() {
      let cardContent;
      let cardAction;
      if (typeof this.props.children === "string") {
         cardContent = this.props.children;
      } else {
         cardContent = this.props.children[0];
         cardAction = this.props.children[1];
      }
      return (
         <Row>
            <Column small="12" medium="6">
               <div className={`card ${this.state.options.bgColor}`}>
                  <div className={`card-content ${this.state.options.textColor}`}>
                     <span className="card-title">
                        <Icon align="left" icon="menu" />
                        {this.state.options.title}
                     </span>
                     <p>{cardContent}</p>
                  </div>
                  {cardAction}
               </div>
            </Column>
         </Row>
      );
   }
}
export default Card;
