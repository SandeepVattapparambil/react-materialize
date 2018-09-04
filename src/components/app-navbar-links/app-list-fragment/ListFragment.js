/**
 * Component - NavbarLinksFragment
 * MaterializeCSS Navbar Links Fragment
 * @see {@link https://materializecss.com/navbar.html | Navbar}
 * @see {@link https://reactjs.org/docs/fragments.html | React Fragments}
 */

/**
 * Import react library
 */
import React, {Component, Fragment} from "react";

/**
 * @class
 * @name NavbarLinksFragment
 * @description MaterializeCSS Navbar Links Fragment component
 * @extends Component
 */
class NavbarLinksFragment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                {this.props.list.map((item, key) => {
                  return (
                     <li key={key} className={`${item.active ? "active" : ""}`}>
                        <a href={`${item.link}`}>{item.name}</a>
                     </li>
                  );
               })}
            </Fragment>
        );
    }
}
export default NavbarLinksFragment;
