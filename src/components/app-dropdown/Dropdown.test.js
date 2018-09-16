import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./Dropdown";
import { M } from "../../vendor/materialize.min";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Dropdown dropdownOptions={{coverTrigger: true}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
