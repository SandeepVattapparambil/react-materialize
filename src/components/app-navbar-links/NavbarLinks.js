/**
 * Component - NavbarLinks
 * MaterializeCSS Navbar Links component
 * @see {@link https://materializecss.com/navbar.html | Navbar}
 */

/**
 * Import react library
 */
import React, {Component, Fragment} from "react";
import "./NavbarLinks.css";

/**
 * Import component fragments
 */
import ListFragment from "./app-list-fragment/ListFragment";

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

    componentDidMount() {
        $(".sidenav").sidenav();
    }
    /**
    * Default render method
    */
    render() {
        return (
            <Fragment>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
                <ul
                    id="nav-mobile"
                    className={`${this.state.options.align} hide-on-med-and-down`}>
                    <ListFragment list={this.state.options.list}/>
                </ul>

                <ul className="sidenav" id="mobile-demo">
                    <ListFragment list={this.state.options.list}/>
                </ul>
            </Fragment>
        );
    }
}
export default NavbarLinks;
