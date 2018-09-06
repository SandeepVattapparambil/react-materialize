/**
 * Component - Breadcrumbs
 * MaterializeCSS static Breadcrumbs component
 * @see {@link https://materializecss.com/breadcrumbs.html | Breadcrumbs}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Breadcrumbs
 * @description MaterializeCSS Breadcrumbs Component.
 * @extends Component
 */
class Breadcrumbs extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <nav>
            <div className="nav-wrapper">
               {/* Currently fixed to full column width */}
               <div className="col s12">
                  {this.props.list.map((item, key) => {
                     return (
                        <a key={key} href={`${item.link}`} className="breadcrumb">
                           {item.name}
                        </a>
                     );
                  })}
               </div>
            </div>
         </nav>
      );
   }
}
export default Breadcrumbs;
