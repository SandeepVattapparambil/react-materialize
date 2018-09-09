import React from "react";
import ReactDOM from "react-dom";
import CardImage from "./CardImage";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <CardReveal title="Hello reveal" titleColor="red-text">
        Here is some more information about this product that is only revealed
        once clicked on.
     </CardReveal>, div);
    ReactDOM.unmountComponentAtNode(div);
});
