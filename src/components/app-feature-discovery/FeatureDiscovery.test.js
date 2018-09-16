import React from "react";
import ReactDOM from "react-dom";
import FeatureDiscovery from "./FeatureDiscovery";
import { M } from "../../vendor/materialize.min";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <FeatureDiscovery
        buttonType="btn-floating"
        buttonSize="btn-large"
        buttonColor="lime"
        overlayColor="lime"
        icon="menu"
        label="hello"
        wavesEffect={true}
        wavesColor="waves-light">
        <h5 className="grey-text">Title</h5>
        <p className="grey-text">A bunch of text</p>
     </FeatureDiscovery>, div);
    ReactDOM.unmountComponentAtNode(div);
});
