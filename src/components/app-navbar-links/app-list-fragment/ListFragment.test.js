import React from "react";
import ReactDOM from "react-dom";
import ListFragment from "./ListFragment";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <ListFragment list={[
            {
               name: "Sass",
               link: "sass.html",
               active: true
            },
            {
               name: "Badges",
               link: "badges.html"
            }
         ]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
