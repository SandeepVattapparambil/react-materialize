import React from "react";
import ReactDOM from "react-dom";
import CardHorizontal from "./CardHorizontal";
import CardAction from "../app-card-action/CardAction";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <CardHorizontal
         column={{
            small: "s12",
            medium: "m7"
         }}
         color="white"
         cardAction={
            <CardAction
               actionList={[
                  {
                     name: "Link1",
                     link: "#!",
                     class: "",
                     onClick: () => {
                        alert("hello");
                     }
                  }
               ]}
            />
         }
         imageUrl="https://lorempixel.com/100/190/nature/6">
         <p>
            I am a very simple card. I am good at containing small bits of information.
         </p>
      </CardHorizontal>,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
