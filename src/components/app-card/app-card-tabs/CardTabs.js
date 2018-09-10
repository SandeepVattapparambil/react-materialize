/**
 * Component - CardTabs
 * MaterializeCSS CardTabs component
 * @see {@link https://materializecss.com/cards.html | CardTabs }
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name CardTabs
 * @description MaterializeCSS CardTabs Component.
 * @extends Component
 */
class CardTabs extends Component {
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {}
      };
   }
   render() {
      return (
         <div className="card">
            <div className="card-content">
               <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup to use
                  effectively.
               </p>
            </div>
            <div className="card-tabs">
               <ul className="tabs tabs-fixed-width">
                  <li className="tab">
                     <a href="#test4">Test 1</a>
                  </li>
                  <li className="tab">
                     <a className="active" href="#test5">
                        Test 2
                     </a>
                  </li>
                  <li className="tab">
                     <a href="#test6">Test 3</a>
                  </li>
               </ul>
            </div>
            <div className="card-content grey lighten-4">
               <div id="test4">Test 1</div>
               <div id="test5">Test 2</div>
               <div id="test6">Test 3</div>
            </div>
         </div>
      );
   }
}
export default CardTabs;
