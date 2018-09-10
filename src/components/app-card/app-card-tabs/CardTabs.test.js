import React from "react";
import ReactDOM from "react-dom";
import CardTabs from "./CardTabs";
import { M } from "../../../vendor/materialize.min";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <CardTabs>
         <p>
            I am a very simple card. I am good at containing small bits of information. I
            am convenient because I require little markup to use effectively.
         </p>
      </CardTabs>,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
