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
 * Import Components
 */
import Icon from "../../app-icon/Icon";

/**
 * @class
 * @name CollectionSecondary
 * @description MaterializeCSS CollectionSecondary Component.
 * @extends Component
 */
class CollectionSecondary extends Component {
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
                  <li
                     key={key}
                     className={`collection-item ${item.bgColor} ${item.textColor}`}>
                     <div>
                        {item.data}
                        <a
                           href={item.href}
                           className={`secondary-content ${item.iconColor}`}
                           onClick={item.onClick ? item.onClick : () => {}}>
                           <Icon icon={item.icon} />
                        </a>
                     </div>
                  </li>
               );
            })}
         </Fragment>
      );
   }
}
export default CollectionSecondary;
