import React from "react";
import ReactDOM from "react-dom";
import MaterialBox from "./MaterialBox";
import { M } from "../../vendor/materilize.min";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <MaterialBox
         imageAlt="test"
         imageWidth={650}
         imageSrc="https://images.unsplash.com/photo-1537123547273-e59f4f437f1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6086121ab2201b250edd1054994522d3&auto=format&fit=crop&w=750&q=80"
      />,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
