/**
 * Component - Column
 * MaterializeCSS static Column component
 * @see {@link https://materializecss.com/grid.html | Grid}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Column
 * @description MaterializeCSS Column.
 * @extends Component
 */

class Column extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {
            small: config.small || " ",
            medium: config.medium || " ",
            large: config.large || " ",
            offset: config.offset || [],
            push: config.push || " ",
            pull: config.pull || " "
         }
      };
   }

   componentDidMount() {
      if (this._reactInternalFiber.return.stateNode.className !== "row") {
         console.warn(
            "Remember when you are creating your layout that all columns must be contained in" +
               "side a row component."
         );
      }
   }

   render() {
      let stringArray = [];
      this.state.options.offset.map(col => {
         stringArray.push(`offset-${col}`);
      });
      let offsetString = stringArray.join(" ");
      return (
         <div className={`col ${this.state.options.small} ${offsetString} ${this.state.options.push} ${this.state.options.pull}`}>
            {this.props.children}
         </div>
      );
   }
}

export default Column;
