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
                wavesColor="waves-red" onClick={() => {
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
                buttons={[{
                    color: "lime",
                    icon: "insert_chart",
                    link: "https://www.google.com"
                },
                {
                    color: "lime",
                    icon: "insert_chart",
                    onClick: {() => { alert('hello')}}
                }
            ]}/>
        </Col>
    </Row>
</Container>, document.getElementById("container"));

/**
 * Register service worker
 */
registerServiceWorker();
