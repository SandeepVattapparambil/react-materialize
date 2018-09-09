import React from "react";
import ReactDOM from "react-dom";
import CardAction from "./CardAction";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <CardAction
               actionList={[
                  { name: "Link1", link: "#!", class: "", onClick: (()=>{alert('hello')}) },
                  { name: "Link2", link: "#!", class: "" },
                  { name: "Link3", link: "#!", class: "waves-effect lime white-text btn" }
               ]}
            />, div);
    ReactDOM.unmountComponentAtNode(div);
});
