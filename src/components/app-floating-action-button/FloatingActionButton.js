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
import Icon from "../app-icon/Icon";

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
            hoverEnabled: config.hoverEnabled || false,
            toolbarEnabled: config.toolbarEnabled || false,
            buttons: config.buttons || []
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
      //https://stackoverflow.com/questions/37949981/call-child-method-from-parent
      //https://codesandbox.io/embed/kw5mn93wmr
      /*
      instance.open();
      instance.close();
      instance.destroy();
      */
   }

   render() {
      return (
         <div
            className={`fixed-action-btn ${
               this.state.options.toolbarEnabled ? "toolbar" : ""
            }`}
         >
            <a
               className={`btn-floating ${this.state.options.large ? "btn-large" : ""} ${
                  this.state.options.color
               }`}
            >
               <Icon
                  icon={this.state.options.icon}
                  size={this.state.options.large ? "large" : ""}
               />
            </a>
            <ul>
               {this.state.options.buttons.map((item, key) => {
                  return (
                     <li key={key}>
                        <a
                           className={`btn-floating ${item.color}`}
                           href={`${item.link ? item.link : "javascript:void(0)"}`}
                           onClick={item.onClick ? item.onClick : ()=>{}}
                        >
                           <i className="material-icons">{item.icon}</i>
                        </a>
                     </li>
                  );
               })}
            </ul>
         </div>
      );
   }
}
export default Fab;
