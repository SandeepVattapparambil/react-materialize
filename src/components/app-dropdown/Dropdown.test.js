import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./Dropdown";
import { M } from "../../vendor/materialize.min";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <Dropdown
         dropdownOptions={{ coverTrigger: true }}
         buttonData={{
            buttonType: "btn",
            buttonSize: "large",
            buttonColor: "lime",
            label: "Drop Me!",
            labelColor: "white-text",
            icon: "menu",
            iconAlign: "left"
         }}
         listData={[
            {
               label: "one",
               color: "red-text",
               link: "#!",
               onClick: () => {
                  alert("hello");
               }
            },
            {
               divider: true
            },
            {
               label: "two",
               color: "amber-text",
               link: "#!",
               icon: "view_module",
               onClick: () => {
                  alert("clicked two");
               }
            }
         ]}
      />,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
