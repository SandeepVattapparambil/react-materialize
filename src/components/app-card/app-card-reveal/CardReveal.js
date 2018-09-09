/**
 * Component - Card - CardReveal
 * MaterializeCSS CardReveal component
 * @see {@link https://materializecss.com/cards.html | CardReveal}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

/**
 * Import components
 */
import Icon from "../../app-icon/Icon";

/**
 * @class
 * @name CardReveal
 * @description MaterializeCSS CardReveal Component.
 * @extends Component
 */
class CardReveal extends Component {
    constructor(props) {
        super(props);
        let config = {
            ...props
        };
        this.state = {
            options: {
                title: config.title || " ",
                titleColor: config.titleColor || " "
            }
        };
    }
    render() {
        return (
            <div className="card-reveal">
                <span className={`card-title ${this.state.options.titleColor}`}>
                    {this.state.options.title}
                    <Icon align="right" icon="close"/>
                </span>
                <p>
                   {this.props.children}
                </p>

            </div>
        );
    }
}
export default CardReveal;
