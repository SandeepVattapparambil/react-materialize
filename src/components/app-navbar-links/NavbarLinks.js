/**
 * Component - NavbarLinks
 * MaterializeCSS Navbar Links component
 * @see {@link https://materializecss.com/navbar.html | Navbar}
 */

/**
 * Import react library
 */
import React, {Component} from "react";
import "./NavbarLinks.css";

/**
 * @class
 * @name Navbar
 * @description MaterializeCSS Navbar Links component
 * @extends Component
 */
class NavbarLinks extends Component {
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
                align: config.align || "right"
            }
        };
    }
    /**
    * Default render method
    */
    render() {
        return (
            <ul id="nav-mobile" className={`${this.state.options.align} hide-on-med-and-down`}>
                <li>
                    <a href="sass.html">Sass</a>
                </li>
            </ul>
        );
    }
}
export default NavbarLinks;
