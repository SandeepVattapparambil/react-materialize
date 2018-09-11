import React from "react";
import ReactDOM from "react-dom";
import CollectionBasic from "./CollectionBasic";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <CollectionBasic
         collectionData={[{ data: "Alvin", textColor: "black-text", bgColor: "white" }]}
      />,
      div
   );

   ReactDOM.unmountComponentAtNode(div);
});
