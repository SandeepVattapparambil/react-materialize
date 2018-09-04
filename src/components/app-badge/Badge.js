/**
 * Component - Badge
 * MaterializeCSS static Badge component
 * @see {@link https://materializecss.com/grid.html | Grid}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

/**
 * @class
 * @name Badge
 * @description MaterializeCSS Badge.
 * @extends Component
 */

class Badge extends Component {
    constructor(props) {
        super(props);
        let config = {
            ...props
        };
        this.state = {
            options: {
                color: config.color || " ",
                type: config.type || " ",
                textColor: config.type === 'new'
                    ? 'white-text'
                    : (config.textColor || "grey-text"),
                data: config.data || " "
            }
        };
    }
    render() {
        return (
            <span
                className={`${this.state.options.color} ${this.state.options.type} ${this.state.options.textColor} badge`}>
                {this.state.options.data}</span>
        )
    }
}
export default Badge;
