/**
 * Component - Collection - CollectionBasic
 * MaterializeCSS CollectionBasic component
 * @see {@link https://materializecss.com/collections.html | CollectionBasic }
 */

/**
 * Import react library
 */
import React, { Component, Fragment } from "react";

/**
 * @class
 * @name CollectionBasic
 * @description MaterializeCSS CollectionBasic Component.
 * @extends Component
 */
class CollectionBasic extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            collectionData: config.collectionData || []
         }
      };
   }
   render() {
      return (
         <Fragment>
            {this.state.options.collectionData.map((item, key) => {
               return (
                  <li key={key} className="collection-item">
                     {item.data}
                  </li>
               );
            })}
         </Fragment>
      );
   }
}
export default CollectionBasic;
