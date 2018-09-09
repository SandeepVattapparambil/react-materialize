/**
 * React Material Library
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */

/**
 * Import react
 */
import React from "react";
import ReactDOM from "react-dom";

/**
 * Initialize styles
 */
import "./index.css";

/**
 * Import components
 */
import Navbar from "./components/app-navbar/Navbar";
import NavbarLinks from "./components/app-navbar-links/NavbarLinks";
import Row from "./components/app-row/Row";
import Container from "./components/app-container/Container";
import Badge from "./components/app-badge/Badge";
import Col from "./components/app-column/Column";
import Divider from "./components/app-divider/Divider";
import Icon from "./components/app-icon/Icon";
import Button from "./components/app-button/Button";
import Breadcrumbs from "./components/app-breadcrumbs/Breadcrumbs";
import Fab from "./components/app-floating-action-button/FloatingActionButton";
import Footer from "./components/app-footer/Footer";
import FooterSection from "./components/app-footer/app-footer-sections/FooterSection";
import Preloader from "./components/app-preloader/Preloader";
import Card from "./components/app-card/Card";
import CardAction from "./components/app-card/app-card-action/CardAction";
import CardReveal from "./components/app-card/app-card-reveal/CardReveal";
import CardImage from "./components/app-card/app-card-image/CardImage";

/**
 * Import service worker
 */
import registerServiceWorker from "./registerServiceWorker";

/**
 * Render component on to DOM
 */
ReactDOM.render(
   <Navbar
      logo="React Material"
      fixed="true"
      color="grey darken-3"
      textColor="red-text tex-lighten-1"
      centerLogo="false">
      <NavbarLinks
         align="right"
         list={[
            {
               name: "Sass",
               link: "sass.html",
               active: true
            },
            {
               name: "Badges",
               link: "badges.html"
            }
         ]}
      />
   </Navbar>,
   document.getElementById("header")
);

ReactDOM.render(
   <Container>
      <Breadcrumbs
         list={[
            {
               name: "First",
               link: "#!"
            },
            {
               name: "Second",
               link: "#!"
            },
            {
               name: "Third",
               link: "#!"
            }
         ]}
      />
      <br />
      <Row>
         <Col
            small="s6"
            medium="m6"
            large="l6"
            offset={["s2", "m3", "l1"]}
            push="s1"
            pull="s3">
            <Badge type="new" data="1" color="lime" />
            <Divider />
            <Button
               type="raised"
               size="large"
               disabled={false}
               label="Click"
               color="lime"
               textColor="white-text"
               wavesEffect={true}
               wavesType="regular"
               wavesColor="waves-red"
               href="http://www.sandeepv.in"
               onClick={() => {
                  alert("hello");
               }}>
               <Icon icon="cloud" align="left" />
            </Button>
            <Fab
               color="lime"
               icon="mode_edit"
               large={true}
               hoverEnabled={true}
               toolbarEnabled={false}
               buttons={[
                  {
                     color: "lime",
                     icon: "insert_chart",
                     link: "https://www.google.com"
                  },
                  {
                     color: "lime",
                     icon: "insert_chart",
                     onClick: () => {
                        alert("hello");
                     }
                  }
               ]}
            />
            <Preloader
               type="linear"
               val={60}
               barColor="lime"
               barBgColor="lime lighten-3"
            />
            <Preloader type="linear" barColor="red" barBgColor="red lighten-3" />

            <Preloader type="circular" size="big" />

            <Preloader type="flashing" />
         </Col>

         <Card
            bgColor="blue-grey darken-1"
            textColor="white-text"
            title="Hello"
            size={{
               small: "s12",
               medium: "m6",
               large: "l8"
            }}
            cardAction={
               <CardAction
                  actionList={[
                     {
                        name: "Link1",
                        link: "#!",
                        class: "",
                        onClick: () => {
                           alert("hello");
                        }
                     },
                     {
                        name: "Link2",
                        link: "#!",
                        class: ""
                     },
                     {
                        name: "Link3",
                        link: "#!",
                        class: "waves-effect lime white-text btn"
                     }
                  ]}
               />
            }
            cardReveal={
               <CardReveal title="Hello reveal" titleColor="red-text">
                  Here is some more information about this product that is only revealed
                  once clicked on.
               </CardReveal>
            }
            cardImage={
               <CardImage
                  title="Hello Img card"
                  titleColor="white-text"
                  imageUrl="https://picsum.photos/100/100/?random"
               />
            }>
            I am a very simple card. I am good at containing small bits of information. I
            am convenient because I require little markup to use effectively.
         </Card>
      </Row>
   </Container>,
   document.getElementById("container")
);

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
      <Col large="l6" small="s12">
         <FooterSection
            type="textBlock"
            data={{
               title: "Footer Content",
               titleColor: "white-text",
               subText:
                  "You can use rows and columns here to organize your footer content.",
               subTtextColor: "grey-text text-lighten-4"
            }}
         />
      </Col>
      <Col large="l4" small="s12" offset={["l2"]}>
         <FooterSection
            type="linkBlock"
            link="Links"
            linkColor="white-text"
            data={[
               {
                  name: "Link1",
                  link: "#!",
                  textColor: "grey-text text-lighten-3"
               },
               {
                  name: "Link2",
                  link: "#!",
                  textColor: "grey-text text-lighten-3"
               },
               {
                  name: "Link3",
                  link: "#!",
                  textColor: "grey-text text-lighten-3"
               },
               {
                  name: "Link4",
                  link: "#!",
                  textColor: "grey-text text-lighten-3"
               },
               {
                  name: "Link5",
                  link: "#!",
                  textColor: "grey-text text-lighten-3"
               }
            ]}
         />
      </Col>
   </Footer>,
   document.getElementById("footer")
);

/**
 * Register service worker
 */
registerServiceWorker();
