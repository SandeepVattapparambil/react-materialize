/**
 * Component - FooterSection
 * MaterializeCSS static FooterSection component
 * @see {@link https://materializecss.com/footer.html | Footer}
 */

/**
 * Import react library
 */
import React, { Component, Fragment } from "react";

/**
 * @class
 * @name FooterSection
 * @description MaterializeCSS Footer - FooterSection Component.
 * @extends Component
 */
class FooterSection extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {
            type: config.type || " ",
            link: config.link || " ",
            linkColor: config.linkColor || " ",
            data: config.data || {}
         }
      };
   }
   render() {
      if (this.state.options.type === "textBlock") {
         return (
            <Fragment>
               <h5 className={`${this.state.options.data.titleColor}`}>
                  {this.state.options.data.title}
               </h5>
               <p className={`${this.state.options.data.subTextColor}`}>
                  {this.state.options.data.subText}
               </p>
            </Fragment>
         );
      } else if (this.state.options.type === "linkBlock") {
         return (
            <Fragment>
               <h5 className={`${this.state.options.linkColor}`}>
                  {this.state.options.link}
               </h5>
               <ul>
                  {this.state.options.data.map((item, key) => {
                     return (
                        <li key={key}>
                           <a className={`${item.textColor}`} href={`${item.link}`}>
                              {item.name}
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </Fragment>
         );
      }
   }
}
export default FooterSection;
