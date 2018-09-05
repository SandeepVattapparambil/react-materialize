/**
 * Component - Button
 * MaterializeCSS Button component
 * @see {@link https://materializecss.com/buttons.html | Button}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

/**
 * @class
 * @name Button
 * @description MaterializeCSS Button Component.
 * @extends Component
 */
class Button extends Component {

    constructor(props) {
        super(props);
        let config = {
            ...props
        };
        this.state = {
            options: {
                type: config.type || "btn",
                size: config.size || " ",
                label: config.label || " ",
                disabled: config.disabled || false 
            }
        };
    }
    render() {
        return (
            <a class={`waves-effect waves-light btn`}>
                {this.props.children}
                {this.state.options.config.label}
            </a>
        );
    }
}
export default Button;
