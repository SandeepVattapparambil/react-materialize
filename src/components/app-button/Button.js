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
        let btnType;
        if (this.state.options.type === 'raised') {
            btnType = "btn";
        } else if (this.state.options.type === 'floating') {
            btnType = "btn-floating";
        } else if (this.state.options.type === 'flat') {
            btnType = "btn-flat";
        }
        return (
            <a
                className={`waves-effect waves-light ${btnType} ${this.state.options.color} ${this.state.options.textColor}`}>
                {this.state.options.label}
                {this.props.children}
            </a>
        );
    }
}
export default Button;
