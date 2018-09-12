import React from "react";
import ReactDOM from "react-dom";
import Collapsible from "./Collapsible";
import { M } from "../../vendor/materialize.min";

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(
      <Collapsible
         type="accordion"
         collapsibleData={[
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text",
               active: true
            },
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text"
            },
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text"
            }
         ]}
      />,
      div
   );
   ReactDOM.render(
      <Collapsible
         type="popout"
         collapsibleData={[
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text"
            },
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text",
               active: true
            },
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text"
            }
         ]}
      />,
      div
   );
   ReactDOM.render(
      <Collapsible
         type="expandable"
         collapsibleData={[
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text"
            },
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text"
            },
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text"
            },
            {
               icon: "filter_drama",
               header: "First",
               headerBgColor: "white",
               headerTextColor: "black-text",
               body: "Lorem ipsum dolor sit amet.",
               bodyBgColor: "white",
               bodyTextColor: "black-text",
               active: true
            }
         ]}
      />,
      div
   );
   ReactDOM.unmountComponentAtNode(div);
});
