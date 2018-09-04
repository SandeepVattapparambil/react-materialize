/**
 * React Material Library
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */

/**
 * Import react
 */
import React from "react";
import ReactDOM from "react-dom";

/**
 * Initialize styles
 */
import "./index.css";

/**
 * Import components
 */
import Navbar from "./components/app-navbar/Navbar";
import NavbarLinks from "./components/app-navbar-links/NavbarLinks";
import Row from "./components/app-row/Row";
import Container from "./components/app-container/Container";
import Badge from "./components/app-badge/Badge";

/**
 * Import service worker
 */
import registerServiceWorker from "./registerServiceWorker";

/**
 * Render component on to DOM
 */
ReactDOM.render(
    <Navbar
    logo="React Material"
    fixed="true"
    color="grey darken-3"
    textColor="red-text tex-lighten-1"
    centerLogo="false">
    <NavbarLinks
        align="right"
        list={[
        {
            name: "Sass",
            link: "sass.html",
            active: true
        }, {
            name: "Badges",
            link: "badges.html"
        }
    ]}/>
</Navbar>, document.getElementById("header"));

ReactDOM.render(
    <Container>
    <Row>
        <Badge type="new" data="1" color="lime"/>
    </Row>

</Container>, document.getElementById("container"));

/**
 * Register service worker
 */
registerServiceWorker();
