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
                align: config.align || "right",
                list: config.list || []
            }
        };
    }
    /**
    * Default render method
    */
    render() {
        console.log(this.state.options.list);
        return (
            <ul id="nav-mobile" className={`${this.state.options.align} hide-on-med-and-down`}>
            {this.state.options.list.map((item) => {
                <li>
                    <a href={`${item.}`}>item</a>
                </li>
            })}
                
            </ul>
        );
    }
}
export default NavbarLinks;
