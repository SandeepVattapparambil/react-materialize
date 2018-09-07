import React from "react";
import ReactDOM from "react-dom";
import Fab from "./FloatingActionButton";
import { M } from "../../vendor/materialize.min";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Fab
        color="lime"
        icon="mode_edit"
        large={true}
        hoverEnabled={true}
        toolbarEnabled={false}
        buttons={[
           {
              color: "lime",
              icon: "insert_chart",
              link: "https://www.google.com"
           },
           {
              color: "lime",
              icon: "insert_chart",
              onClick: () => {
                 alert("hello");
              }
           }
        ]}
     />, div);
    ReactDOM.unmountComponentAtNode(div);
});
