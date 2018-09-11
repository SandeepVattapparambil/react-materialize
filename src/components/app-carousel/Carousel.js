/**
 * Component - Carousel
 * MaterializeCSS Carousel component
 * @see {@link https://materializecss.com/carousel.html | Carousel}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

/**
 * @class
 * @name Carousel
 * @description MaterializeCSS Carousel Row.
 * @extends Component
 */

class Carousel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        )
    }
}
export default Carousel;
