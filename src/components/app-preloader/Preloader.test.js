import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./Preloader";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <div>
         <Preloader type="linear" val={60} barColor="lime" barBgColor="lime lighten-3" />
         <Preloader type="linear" barColor="red" barBgColor="red lighten-3" />
         <Preloader type="circular" size="big" /> <Preloader type="flashing" />
      </div>,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
