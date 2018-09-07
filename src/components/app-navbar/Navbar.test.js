import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Navbar
      logo="React Material"
      fixed="true"
      color="grey darken-3"
      textColor="red-text tex-lighten-1"
      centerLogo="false">
   </Navbar>, div);
    ReactDOM.unmountComponentAtNode(div);
});
