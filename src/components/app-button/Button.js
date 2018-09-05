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
                disabled: config.disabled || false,
                color: config.color || " ",
                textColor: config.color || "white-text",
                wavesEffect: config.wavesEffect || true,
                wavesType: config.wavesType || " ",
                wavesColor: config.config || " "
            }
        };
    }
    render() {
        return (
            <a className={`waves-effect waves-light btn`}>
                {this.state.options.label} {this.props.children}
            </a>
        );
    }
}
export default Button;
