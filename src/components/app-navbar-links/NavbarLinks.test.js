import React from "react";
import ReactDOM from "react-dom";
import NavbarLinks from "./NavbarLinks";
import {M} from "../../vendor/materialize.min";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
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
    ]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
