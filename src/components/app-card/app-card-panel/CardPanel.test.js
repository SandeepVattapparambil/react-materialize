import React from "react";
import ReactDOM from "react-dom";
import CardPanel from "./CardPanel";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <CardPanel column={{ small: "s12", medium: "m5" }} panelColor="teal">
         I am a very simple card. I am good at containing small bits of information. I am
         convenient because I require little markup to use effectively. I am similar to
         what is called a panel in other frameworks.
      </CardPanel>,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
