import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";
import {M} from "../../vendor/materialize.min";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <Slider
         sliderOptions={{ indicators: true }}
         sliderData={[
            {
               imageUrl:
                  "https://images.unsplash.com/photo-1537152007401-34abcbf532ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=382802ab1e00f0cbdc23d7a6d678f5ad&auto=format&fit=crop&w=1510&q=80",
               title: "This is our big Tagline!",
               subtitle: "Here's our small slogan.",
               textAlign: "center-align"
            },
            {
               imageUrl:
                  "https://images.unsplash.com/photo-1537151377170-9c19a791bbea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43b83b0d2ac9fc3db2d9afd19de0bd6a&auto=format&fit=crop&w=750&q=80",
               title: "This is our big Tagline!",
               subtitle: "Here's our small slogan.",
               textAlign: "left-align"
            },
            {
               imageUrl:
                  "https://images.unsplash.com/photo-1537135086-ca6612c6550b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=600db5d4133321cad811ff2ceeffe885&auto=format&fit=crop&w=751&q=80",
               title: "This is our big Tagline!",
               subtitle: "Here's our small slogan.",
               textAlign: "right-align"
            }
         ]}
      />,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
