import React from "react";
import ReactDOM from "react-dom";
import Video from "./Video";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <Video
         input={{
            type: "embed",
            src: "//www.youtube.com/embed/Q8TXgCzxEnw?rel=0",
            height: "853",
            width: "480"
         }}
      />,
      div
   );

   ReactDOM.render(
      <Video
         input={{
            type: "video",
            src: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            format: "video/mp4"
         }}
      />,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
