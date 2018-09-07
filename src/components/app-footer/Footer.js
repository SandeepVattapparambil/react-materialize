/**
 * Component - Footer
 * MaterializeCSS static Footer component
 * @see {@link https://materializecss.com/footer.html | Footer}
 */

/**
 * Import react library
 */
import React, {Component} from "react";

/**
 * Import components
 */
import Row from "../app-row/Row";
import Container from "../app-container/Container";
import Column from "../app-column/Column";

/**
 * @class
 * @name Footer
 * @description MaterializeCSS Footer Component.
 * @extends Component
 */
class Footer extends Component {
    constructor(props) {
        super(props);
        let config = {
            ...props
        };
        this.state = {
            options: {
                color: config.color || " ",
                mainTextColor: config.textColor || "white-text",
                subTextColor: config.subTextColor || "grey-text text-lighten-4",
                mainText: config.mainText || " ",
                subText: config.subText || " ",
                copyrightText: config.copyrightText || " "
            }
        };
    }
    render() {
        return (
            <footer className={`page-footer ${this.state.options.color}`}>
                <Container>
                    <Row>
                        <Column large="l6" small="s12">
                            <h5 className={`${this.state.options.mainTextColor}`}>{this.state.options.mainText}</h5>
                            <p className={`${this.state.options.subTextColor}`}>{this.state.options.subText}</p>
                        </Column>
                        <Column large="l4" small="s12" offset={["l2"]}>
                            <h5 className={`${this.state.options.mainTextColor}`}>Links</h5>
                            <ul>
                                <li>
                                    <a className={`${this.state.options.subTextColor}`} href="#!">Link 1</a>
                                </li>
                            </ul>
                        </Column>
                    </Row>
                </Container>
                <div className="footer-copyright">
                    <Container>
                        {this.state.options.copyrightText}
                        <a className={`${this.state.options.subTextColor} right`} href="#!">More Links</a>
                    </Container>
                </div>
            </footer>
        );
    }
}
export default Footer;
