import React from "react";
import ReactDOM from "react-dom";
import Breadcrumbs from "./Breadcrumbs";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <Breadcrumbs
         list={[
            {
               name: "First",
               link: "#!"
            },
            {
               name: "Second",
               link: "#!"
            },
            {
               name: "Third",
               link: "#!"
            }
         ]}
      />,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
