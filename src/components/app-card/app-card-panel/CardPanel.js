/**
 * Component - CardPanel
 * MaterializeCSS CardPanel component
 * @see {@link https://materializecss.com/cards.html | CardPanel}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * Import Components
 */
import Row from "../../app-row/Row";
import Column from "../../app-column/Column";

/**
 * @class
 * @name CardPanel
 * @description MaterializeCSS CardPanel Component.
 * @extends Component
 */
class CardPanel extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            column: config.column || {},
            panelColor: config.panelColor || " ",
            textColor: config.textColor || " "
         }
      };
   }
   render() {
      return (
         <Row>
            <Column
               small={this.state.options.column.small}
               medium={this.state.options.column.medium}>
               <div className={`card-panel ${this.state.options.panelColor}`}>
                  <span className={`${this.state.options.textColor}`}>
                     {this.props.children}
                  </span>
               </div>
            </Column>
         </Row>
      );
   }
}
export default CardPanel;
