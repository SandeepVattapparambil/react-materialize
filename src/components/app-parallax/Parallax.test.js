import React from "react";
import ReactDOM from "react-dom";
import Parallax from "./Parallax";
import { M } from "../../vendor/materialize.min";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <Parallax
         parallaxOptions={{ responsiveThreshold: 0 }}
         imageUrl="https://images.unsplash.com/photo-1537705769289-46ea6988e28c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3c08588719bca1de9550d527044a4d2&auto=format&fit=crop&w=750&q=80"
      />,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
