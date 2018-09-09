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
 * @class
 * @name Card
 * @description MaterializeCSS Card Component.
 * @extends Component
 */
class Card extends Component {
   render() {
      return (
         <div className="col s12 m6">
            <div className="card blue-grey darken-1">
               <div className="card-content white-text">
                  <span className="card-title">Card Title</span>
                  <p>
                     I am a very simple card. I am good at containing small bits of
                     information. I am convenient because I require little markup to use
                     effectively.
                  </p>
               </div>
               <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
               </div>
            </div>
         </div>
      );
   }
}
export default Card;
