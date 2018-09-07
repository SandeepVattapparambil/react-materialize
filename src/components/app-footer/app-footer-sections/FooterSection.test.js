import React from "react";
import ReactDOM from "react-dom";
import FooterSection from "./FooterSection";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <FooterSection
        type="textBlock"
        data={{
        title: "Footer Content",
        titleColor: "white-text",
        subText: "You can use rows and columns here to organize your footer content.",
        subTtextColor: "grey-text text-lighten-4"
    }}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
