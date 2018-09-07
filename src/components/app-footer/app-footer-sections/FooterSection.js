/**
 * Component - FooterSection
 * MaterializeCSS static FooterSection component
 * @see {@link https://materializecss.com/footer.html | Footer}
 */

/**
 * Import react library
 */
import React, {Component, Fragment} from "react";

/**
 * @class
 * @name FooterSection
 * @description MaterializeCSS Footer - FooterSection Component.
 * @extends Component
 */
class FooterSection extends Component {

    constructor(props) {
        super(props);
        let config = {
            ...props
        };
        this.state = {
            options: {}
        };
    }
    render() {
        return (
            <Fragment>
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </Fragment>
        );
    }
}
export default FooterSection;
