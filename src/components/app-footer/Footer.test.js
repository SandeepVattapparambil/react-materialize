import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Footer
        color="lime"
        textColor="white-text"
        subTextColor="grey-text text-lighten-4"
        mainText="Footer Content"
        subText="You can use rows and columns here to organize your footer content."
        copyrightText="© 2014 Copyright Text"
        moreLinks={[
           {
              name: "link1",
              link: "#!"
           },
           {
              name: "link2",
              link: "#!"
           },
           {
              name: "link3",
              link: "#!"
           },
           {
              name: "link4",
              link: "#!"
           }
        ]}>
     </Footer>, div);
    ReactDOM.unmountComponentAtNode(div);
});
