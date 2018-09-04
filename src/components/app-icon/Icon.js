/**
 * Component - Icon
 * MaterializeCSS Icon component
 * @see {@link https://materializecss.com/icons.html | Icon}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

/**
 * @class
 * @name Icon
 * @description MaterializeCSS Icon component
 * @extends Component
 */
class Icon extends Component {
    /**
    * Class constructor
    */
    constructor(props) {
        super(props);
        let config = {
            ...props
        };
        this.state = {
            options: {
                align: config.align || " ",
                color: config.color || " ",
                size: config.size || " ",
                icon: config.icon || " "
            }
        };
    }

    /**
    * Default render method
    */
    render() {
        return (
            <i className={`${this.state.options.align} ${this.state.options.color} ${this.state.options.size} material-icons`}>{this.state.options.icon}</i>
        );
    }
}

export default Icon;
