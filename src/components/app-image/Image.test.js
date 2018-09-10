import React from "react";
import ReactDOM from "react-dom";
import Image from "./Image";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Image src="https://picsum.photos/100/100/?random" alt="test" circle={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
