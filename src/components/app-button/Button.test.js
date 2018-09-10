import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Icon from "../app-icon/Icon";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <Button
         type="raised"
         size="large"
         disabled={false}
         label="Click"
         color="lime"
         textColor="white-text"
         wavesEffect={true}
         wavesType="regular"
         wavesColor="waves-red"
         href="http://www.sandeepv.in"
         onClick={() => {
            alert("hello");
         }}
      />,
      div
   );

   ReactDOM.render(
      <Button
         type="floating"
         size="large"
         disabled={false}
         color="blue"
         textColor="white-text"
         wavesEffect={true}
         wavesType="regular"
         wavesColor="waves-red"
         pulse={true}>
         <Icon icon="edit" />
      </Button>,
      div
   );

   ReactDOM.unmountComponentAtNode(div);
});
