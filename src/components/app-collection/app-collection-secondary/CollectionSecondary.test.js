import React from "react";
import ReactDOM from "react-dom";
import CollectionSecondary from "./CollectionSecondary";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <CollectionSecondary
         collectionData={[
            {
               data: "Alvin",
               href: "#!",
               icon: "send",
               iconColor: "lime-text",
               textColor: "black-text",
               bgColor: "white",
               onClick: () => {
                  alert("Hello");
               }
            }
         ]}
      />,
      div
   );

   ReactDOM.unmountComponentAtNode(div);
});
