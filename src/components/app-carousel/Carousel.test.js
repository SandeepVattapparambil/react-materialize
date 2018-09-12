import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel";
import Button from "../app-button/Button";
import Icon from "../app-icon/Icon";
import { M } from "../../vendor/materialize.min";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <Carousel
         type="carousel-slider"
         imageData={[
            "https://placeimg.com/640/480/any",
            "https://placeimg.com/640/480/any",
            "https://placeimg.com/640/480/any"
         ]}
      />,
      div
   );
   ReactDOM.unmountComponentAtNode(div);

   ReactDOM.render(
    <Carousel
            type="carousel-slider"
            textData={[
                {title: "First Panel", content: "This is the first panel", titleColor: "black-text", bgColor: "red"},
                {title: "Second Panel", content: "This is the second panel", titleColor: "black-text", bgColor: "green"},
                {title: "Third Panel", content: "This is the third panel", titleColor: "black-text", bgColor: "blue"},
                {title: "Last Panel", content: "This is the last panel", titleColor: "black-text", bgColor: "amber"}
            ]}
            button={
               <Button
                  type="raised"
                  size="normal"
                  disabled={false}
                  label="Click"
                  color="white"
                  textColor="grey-text"
                  wavesEffect={true}
                  wavesType="regular"
                  wavesColor="waves-red"
                  href="http://www.sandeepv.in"
                  onClick={() => {
                     alert("hello");
                  }}>
                  <Icon icon="cloud" align="left" />
               </Button>
            }
         />,
    div
 );
 ReactDOM.unmountComponentAtNode(div);


});
