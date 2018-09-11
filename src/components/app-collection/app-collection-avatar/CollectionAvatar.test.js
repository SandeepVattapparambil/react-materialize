import React from "react";
import ReactDOM from "react-dom";
import CollectionAvatar from "./CollectionAvatar";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <CollectionAvatar
         collectionData={[
            {
               title: "title",
               firstLine: "First Line",
               secondLine: "Second Line",
               textColor: "black-text",
               icon: "grade",
               iconColor: "lime-text",
               href: "#!",
               avatar: {
                  type: "image",
                  imageSrc: "https://materializecss.com/images/yuna.jpg",
                  alt: "me"
               },
               onClick: () => {
                  alert("hello");
               }
            },
            {
               title: "title",
               firstLine: "First Line",
               secondLine: "Second Line",
               textColor: "black-text",
               icon: "grade",
               iconColor: "lime-text",
               href: "#!",
               avatar: {
                  type: "icon",
                  icon: "menu",
                  color: "red"
               }
            }
         ]}
      />,
      div
   );

   ReactDOM.unmountComponentAtNode(div);
});
