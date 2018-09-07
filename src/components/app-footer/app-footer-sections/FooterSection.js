/**
 * Component - FooterSection
 * MaterializeCSS static FooterSection component
 * @see {@link https://materializecss.com/footer.html | Footer}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

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
            <div className="divider"></div>
        );
    }
}
export default FooterSection;
