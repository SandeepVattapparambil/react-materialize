import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Card bgColor="blue-grey darken-1" textColor="white-text" title="Hello">
            I am a very simple card. I am good at containing small bits of information. I
            am convenient because I require little markup to use effectively.
         </Card>, div);
    ReactDOM.unmountComponentAtNode(div);
});
