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
                textColor: config.textColor || "white-text",
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
        } else {
            console.error('ReactMaterial Error: Button attr - type is empty or invalid \nComponent will render abnormal ui.');
        }

        let btnSize;
        if (this.state.options.size === 'normal') {} else if (this.state.options.size === 'large') {
            btnSize = 'btn-large';
        } else if (this.state.options.size === 'small') {
            btnSize = 'btn-small';
        } else if(this.state.options.size !== ' '){
            console.warn('ReactMaterial Warning: Button attr - size is invalid \n Component will render abnormal ui.');
        }

        return (
            <a
                className={`waves-effect waves-light ${btnType} ${btnSize
                ? btnSize
                : ''} ${this.state.options.color} ${this.state.options.textColor}`}>
                {this.state.options.label}
                {this.props.children}
            </a>
        );
    }
}
export default Button;
