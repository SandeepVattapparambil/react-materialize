import React from "react";
import ReactDOM from "react-dom";
import CardImage from "./CardImage";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <CardImage
        title="Hello Img card"
        titleColor="white-text"
        imageUrl="https://picsum.photos/100/100/?random"
        fab={{
           size: "large",
           color: "lime",
           icon: "add",
           onClick: () => {
              alert("Hello");
           }
        }}
     />, div);
    ReactDOM.unmountComponentAtNode(div);
});
