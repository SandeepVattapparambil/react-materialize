/**
 * Component - Footer
 * MaterializeCSS static Footer component
 * @see {@link https://materializecss.com/footer.html | Footer}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * Import components
 */
import Row from "../app-row/Row";
import Container from "../app-container/Container";
import Column from "../app-column/Column";

/**
 * @class
 * @name Footer
 * @description MaterializeCSS Footer Component.
 * @extends Component
 */
class Footer extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {
            color: config.color || " ",
            mainTextColor: config.textColor || "white-text",
            subTextColor: config.subTextColor || "grey-text text-lighten-4",
            mainText: config.mainText || " ",
            subText: config.subText || " ",
            copyrightText: config.copyrightText || " ",
            moreLinks: config.moreLinks || []
         }
      };
   }
   render() {
      return (
         <footer className={`page-footer ${this.state.options.color}`}>
            <Container>
               <Row>
                  {this.props.children}
               </Row>
            </Container>
            <div className="footer-copyright">
               <Container>
                  {this.state.options.copyrightText}
                  {this.state.options.moreLinks.map((item, key) => {
                     return (
                           <a
                              key={key}
                              className={`${this.state.options.subTextColor} right`}
                              href={`${item.link}`}
                           >{item.name}&nbsp;</a>
                     );
                  })}
               </Container>
            </div>
         </footer>
      );
   }
}
export default Footer;
