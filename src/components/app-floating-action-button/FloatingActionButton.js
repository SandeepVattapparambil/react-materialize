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
 * Import components
 */
import Icon from '../app-icon/Icon';

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
         options: {
             color: config.color || " ",
             icon: config.icon || " ",
             large: config.large || true,
             direction: config.direction || "top",
             hoverEnabled: config.hoverEnabled || true,
             toolbarEnabled: config.toolbarEnabled || false
         }
      };
   }
   componentDidMount() {
      let element = document.querySelectorAll(".fixed-action-btn");
      let options = {
         direction: this.state.options.direction,
         hoverEnabled: this.state.options.hoverEnabled,
         toolbarEnabled: this.state.options.toolbarEnabled
      };
      let instance = M.FloatingActionButton.init(element, options);
      //TODO: The following methods are available on instance
      /*
      instance.open();
      instance.close();
      instance.destroy();
      */
   }

   render() {
      return (
         <div className="fixed-action-btn">
            <a className={`btn-floating ${this.state.options.large ? 'btn-large' : ''} ${this.state.options.color}`}>
               <Icon icon={this.state.options.icon} size={this.state.options.large ? 'large' : ''}/>
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
