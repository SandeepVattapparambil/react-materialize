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
import Col from "./components/app-column/Column";
import Divider from "./components/app-divider/Divider";
import Icon from "./components/app-icon/Icon";
import Button from "./components/app-button/Button";
import Breadcrumbs from "./components/app-breadcrumbs/Breadcrumbs";
import Fab from "./components/app-floating-action-button/FloatingActionButton";
import Footer from "./components/app-footer/Footer";

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
    <Breadcrumbs
        list={[
        {
            name: "First",
            link: "#!"
        }, {
            name: "Second",
            link: "#!"
        }, {
            name: "Third",
            link: "#!"
        }
    ]}/>
    <br/>
    <Row>
        <Col
            small="s6"
            medium="m6"
            large="l6"
            offset={["s2", "m3", "l1"]}
            push="s1"
            pull="s3">
            <Badge type="new" data="1" color="lime"/>
            <Divider/>
            <Button
                type="raised"
                size="large"
                disabled={false}
                label="Click"
                color="lime"
                textColor="white-text"
                wavesEffect={true}
                wavesType="regular"
                wavesColor="waves-red"
                href="http://www.sandeepv.in"
                onClick={() => {
                alert('hello');
            }}>
                <Icon icon="cloud" align="left"></Icon>
            </Button>
            <Fab
                color="lime"
                icon="mode_edit"
                large={true}
                hoverEnabled={true}
                toolbarEnabled={false}
                buttons={[
                {
                    color: "lime",
                    icon: "insert_chart",
                    link: "https://www.google.com"
                }, {
                    color: "lime",
                    icon: "insert_chart",
                    onClick: () => {
                        alert('hello')
                    }
                }
            ]}/>
        </Col>
    </Row>
</Container>, document.getElementById("container"));

ReactDOM.render(
    <Footer
    color="lime"
    textColor="white-text"
    subTextColor="grey-text text-lighten-4"
    mainText="Footer Content"
    subText="You can use rows and columns here to organize your footer content."
    copyrightText="© 2014 Copyright Text"
    moreLinks={[
    {
        name: "link1",
        link: "#!"
    }, {
        name: "link2",
        link: "#!"
    }, {
        name: "link3",
        link: "#!"
    }, {
        name: "link4",
        link: "#!"
    }
]}>
    <Col large="l6" small="s12">
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </Col>
    <Col large="l4" small="s12" offset={["l2"]}>
        <h5 className="white-text">Links</h5>
        <ul>
            <li>
                <a className="grey-text text-lighten-3" href="#!">Link 1</a>
            </li>
            <li>
                <a className="grey-text text-lighten-3" href="#!">Link 2</a>
            </li>
            <li>
                <a className="grey-text text-lighten-3" href="#!">Link 3</a>
            </li>
            <li>
                <a className="grey-text text-lighten-3" href="#!">Link 4</a>
            </li>
        </ul>
    </Col>
</Footer>, document.getElementById("footer"));

/**
 * Register service worker
 */
registerServiceWorker();
