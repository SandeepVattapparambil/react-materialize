/**
 * Component - Collection - CollectionAvatar
 * MaterializeCSS CollectionAvatar component
 * @see {@link https://materializecss.com/collections.html | CollectionAvatar }
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
 * @name CollectionAvatar
 * @description MaterializeCSS CollectionAvatar Component.
 * @extends Component
 */
class CollectionAvatar extends Component {
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
                  <li key={key} className="collection-item avatar">
                     {item.avatar.type === "image" ? (
                        <img
                           src={item.avatar.imageSrc}
                           alt={item.avatar.alt}
                           className="circle"
                        />
                     ) : item.avatar.type === "icon" ? (
                        <i className={`material-icons circle ${item.avatar.color}`}>
                           {item.avatar.icon}
                        </i>
                     ) : (
                        ""
                     )}
                     <span className="title">{item.title}</span>
                     <p>
                        {item.firstLine} <br />
                        {item.secondLine}
                     </p>
                     <a
                        href={item.href}
                        className="secondary-content"
                        onClick={item.onClick ? item.onClick : () => {}}>
                        <Icon icon={item.icon} />
                     </a>
                  </li>
               );
            })}
         </Fragment>
      );
   }
}
export default CollectionAvatar;
