/**
 * Component - Floating Action Button
 * MaterializeCSS Floating Action Button component
 * @see {@link https://materializecss.com/floating-action-button.html | Floating Action Button }
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Fab
 * @description MaterializeCSS Floating Action Button Component.
 * @extends Component
 */
class Fab extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {}
      };
   }
   componentDidMount() {
      let element = document.querySelectorAll(".fixed-action-btn");
      let options = {
         direction: "top",
         hoverEnabled: false,
         toolbarEnabled: false
      };
      let instance = M.FloatingActionButton.init(element, options);
      //The following methods are available on instance
      /*
      instance.open();
      instance.close();
      instance.destroy();
      */
   }

   render() {
      return (
         <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
               <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
               <li>
                  <a className="btn-floating red">
                     <i className="material-icons">insert_chart</i>
                  </a>
               </li>
               <li>
                  <a className="btn-floating yellow darken-1">
                     <i className="material-icons">format_quote</i>
                  </a>
               </li>
               <li>
                  <a className="btn-floating green">
                     <i className="material-icons">publish</i>
                  </a>
               </li>
               <li>
                  <a className="btn-floating blue">
                     <i className="material-icons">attach_file</i>
                  </a>
               </li>
            </ul>
         </div>
      );
   }
}
export default Fab;
