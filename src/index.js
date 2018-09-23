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
/**
 * Grid
 */
import Row from "./components/app-row/Row";
import Container from "./components/app-container/Container";
import Col from "./components/app-column/Column";

/**
 * Navigation
 */
import Navbar from "./components/app-navbar/Navbar";
import NavbarLinks from "./components/app-navbar-links/NavbarLinks";
import Breadcrumbs from "./components/app-breadcrumbs/Breadcrumbs";

/**
 * Static
 */
import Badge from "./components/app-badge/Badge";
import Divider from "./components/app-divider/Divider";
import Icon from "./components/app-icon/Icon";

/**
 * Collections
 */
import Collections from "./components/app-collection/Collection";
import CollectionBasic from "./components/app-collection/app-collection-basic/CollectionBasic";
import CollectionSecondary from "./components/app-collection/app-collection-secondary/CollectionSecondary";
import CollectionAvatar from "./components/app-collection/app-collection-avatar/CollectionAvatar";

/**
 * Buttons
 */
import Button from "./components/app-button/Button";
import Fab from "./components/app-floating-action-button/FloatingActionButton";

/**
 * Collapsible
 */
import Collapsible from "./components/app-collapsible/Collapsible";

/**
 * Footer
 */
import Footer from "./components/app-footer/Footer";
import FooterSection from "./components/app-footer/app-footer-sections/FooterSection";

/**
 * Loader
 */
import Preloader from "./components/app-preloader/Preloader";

/**
 * Cards
 */
import Card from "./components/app-card/Card";
import CardPanel from "./components/app-card/app-card-panel/CardPanel";
import CardHorizontal from "./components/app-card/app-card-horizontal/CardHorizontal";
import CardAction from "./components/app-card/app-card-action/CardAction";
import CardReveal from "./components/app-card/app-card-reveal/CardReveal";
import CardImage from "./components/app-card/app-card-image/CardImage";
import CardTabs from "./components/app-card/app-card-tabs/CardTabs";

/**
 * Carousel
 */
import Carousel from "./components/app-carousel/Carousel";

/**
 * Media
 */
import Image from "./components/app-image/Image";
import Video from "./components/app-video/Video";
import MaterialBox from "./components/app-material-box/MaterialBox";
import Slider from "./components/app-slider/Slider";

/**
 * Feature Discovery
 */
import FeatureDiscovery from "./components/app-feature-discovery/FeatureDiscovery";

/**
 * Dropdown
 */
import Dropdown from "./components/app-dropdown/Dropdown";

/**
 * Parallax
 */
import Parallax from "./components/app-parallax/Parallax";

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
      {/* <Breadcrumbs
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
      /> */}
      <br />
      <Row>
         {/* <Col
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
            <br />
            <Button
               type="floating"
               size="large"
               disabled={false}
               color="blue"
               textColor="white-text"
               wavesEffect={true}
               wavesType="regular"
               wavesColor="waves-red"
               pulse={true}>
               <Icon icon="edit" />
            </Button>
            <br />
            <Fab
               color="lime"
               icon="mode_edit"
               large={true}
               hoverEnabled={true}
               toolbarEnabled={false}
               pulse={true}
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

            <Image src="https://picsum.photos/100/100/?random" alt="test" circle={true} />

            <Video
               input={{
                  type: "embed",
                  src: "//www.youtube.com/embed/Q8TXgCzxEnw?rel=0",
                  height: "853",
                  width: "480"
               }}
            />

            <Video
               input={{
                  type: "video",
                  src: "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                  format: "video/mp4"
               }}
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
         </Col> */}

         {/* <Card
            bgColor="blue-grey darken-1"
            textColor="white-text"
            title="Hello"
            column={{
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
            cardActionSticky={true}
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
                  fab={{
                     size: "large",
                     color: "lime",
                     icon: "add",
                     onClick: () => {
                        alert("Hello");
                     }
                  }}
               />
            }>
            I am a very simple card. I am good at containing small bits of information. I
            am convenient because I require little markup to use effectively.
         </Card> */}

         {/* <CardPanel column={{ small: "s12", medium: "m5" }} panelColor="teal">
            I am a very simple card. I am good at containing small bits of information. I
            am convenient because I require little markup to use effectively. I am similar
            to what is called a panel in other frameworks.
         </CardPanel> */}

         {/* <CardHorizontal
            column={{
               small: "s12",
               medium: "m7"
            }}
            color="white"
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
                     }
                  ]}
               />
            }
            imageUrl="https://lorempixel.com/100/190/nature/6">
            <p>
               I am a very simple card. I am good at containing small bits of information.
            </p>
         </CardHorizontal> */}

         {/* <CardTabs>
            <p>
               I am a very simple card. I am good at containing small bits of information.
               I am convenient because I require little markup to use effectively.
            </p>
         </CardTabs> */}

         {/* <Collections
            header={{ text: "Header", textColor: "black-text", bgColor: "lime" }}>
            <CollectionBasic
               collectionData={[
                  { data: "Alvin", textColor: "black-text", bgColor: "white" }
               ]}
            />

            <CollectionSecondary
               collectionData={[
                  {
                     data: "Alvin",
                     href: "#!",
                     icon: "send",
                     iconColor: "lime-text",
                     textColor: "black-text",
                     bgColor: "white",
                     onClick: () => {
                        alert("Hello");
                     }
                  }
               ]}
            />

            <CollectionAvatar
               collectionData={[
                  {
                     title: "title",
                     firstLine: "First Line",
                     secondLine: "Second Line",
                     textColor: "black-text",
                     icon: "grade",
                     iconColor: "lime-text",
                     href: "#!",
                     avatar: {
                        type: "image",
                        imageSrc: "https://materializecss.com/images/yuna.jpg",
                        alt: "me"
                     },
                     onClick: () => {
                        alert("hello");
                     }
                  },
                  {
                     title: "title",
                     firstLine: "First Line",
                     secondLine: "Second Line",
                     textColor: "black-text",
                     icon: "grade",
                     iconColor: "lime-text",
                     href: "#!",
                     avatar: {
                        type: "icon",
                        icon: "menu",
                        color: "red"
                     }
                  }
               ]}
            />
         </Collections> */}

         {/* <Carousel
            type="carousel-slider"
            imageData={[
               "https://placeimg.com/640/480/any",
               "https://placeimg.com/640/480/any",
               "https://placeimg.com/640/480/any"
            ]}
         /> */}

         {/* <Carousel
            type="carousel-slider"
            textData={[
               {
                  title: "First Panel",
                  content: "This is the first panel",
                  titleColor: "black-text",
                  bgColor: "red"
               },
               {
                  title: "Second Panel",
                  content: "This is the second panel",
                  titleColor: "black-text",
                  bgColor: "green"
               },
               {
                  title: "Third Panel",
                  content: "This is the third panel",
                  titleColor: "black-text",
                  bgColor: "blue"
               },
               {
                  title: "Last Panel",
                  content: "This is the last panel",
                  titleColor: "black-text",
                  bgColor: "amber"
               }
            ]}
            button={
               <Button
                  type="raised"
                  size="normal"
                  disabled={false}
                  label="Click"
                  color="white"
                  textColor="grey-text"
                  wavesEffect={true}
                  wavesType="regular"
                  wavesColor="waves-red"
                  href="http://www.sandeepv.in"
                  onClick={() => {
                     alert("hello");
                  }}>
                  <Icon icon="cloud" align="left" />
               </Button>
            }
         /> */}

         {/* <Collapsible
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
         /> */}
         {/* <Collapsible
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
         /> */}
         {/* <Collapsible
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
         /> */}

         {/* <FeatureDiscovery
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
         </FeatureDiscovery> */}

         {/* <Dropdown
            dropdownOptions={{ coverTrigger: true }}
            buttonData={{
               buttonType: "btn",
               buttonSize: "large",
               buttonColor: "lime",
               label: "Drop Me!",
               labelColor: "white-text",
               icon: "menu",
               iconAlign: "left"
            }}
            listData={[
               {
                  label: "one",
                  color: "red-text",
                  link: "#!",
                  onClick: () => {
                     alert("hello");
                  }
               },
               {
                  divider: true
               },
               {
                  label: "two",
                  color: "amber-text",
                  link: "#!",
                  icon: "view_module",
                  onClick: () => {
                     alert("clicked two");
                  }
               }
            ]}
         /> */}
         {/* <MaterialBox
            imageAlt="test"
            dataCaption="Hello"
            imageWidth={650}
            imageSrc="https://images.unsplash.com/photo-1537123547273-e59f4f437f1b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6086121ab2201b250edd1054994522d3&auto=format&fit=crop&w=750&q=80"
         /> */}

         {/* <Slider
            sliderOptions={{indicators: true }}
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
         /> */}
         <Parallax/>
      </Row>
   </Container>,
   document.getElementById("container")
);

// ReactDOM.render(
//    <Footer
//       color="lime"
//       textColor="white-text"
//       subTextColor="grey-text text-lighten-4"
//       mainText="Footer Content"
//       subText="You can use rows and columns here to organize your footer content."
//       copyrightText="© 2014 Copyright Text"
//       moreLinks={[
//          {
//             name: "link1",
//             link: "#!"
//          },
//          {
//             name: "link2",
//             link: "#!"
//          },
//          {
//             name: "link3",
//             link: "#!"
//          },
//          {
//             name: "link4",
//             link: "#!"
//          }
//       ]}>
//       <Col large="l6" small="s12">
//          <FooterSection
//             type="textBlock"
//             data={{
//                title: "Footer Content",
//                titleColor: "white-text",
//                subText:
//                   "You can use rows and columns here to organize your footer content.",
//                subTtextColor: "grey-text text-lighten-4"
//             }}
//          />
//       </Col>
//       <Col large="l4" small="s12" offset={["l2"]}>
//          <FooterSection
//             type="linkBlock"
//             link="Links"
//             linkColor="white-text"
//             data={[
//                {
//                   name: "Link1",
//                   link: "#!",
//                   textColor: "grey-text text-lighten-3"
//                },
//                {
//                   name: "Link2",
//                   link: "#!",
//                   textColor: "grey-text text-lighten-3"
//                },
//                {
//                   name: "Link3",
//                   link: "#!",
//                   textColor: "grey-text text-lighten-3"
//                },
//                {
//                   name: "Link4",
//                   link: "#!",
//                   textColor: "grey-text text-lighten-3"
//                },
//                {
//                   name: "Link5",
//                   link: "#!",
//                   textColor: "grey-text text-lighten-3"
//                }
//             ]}
//          />
//       </Col>
//    </Footer>,
//    document.getElementById("footer")
// );

/**
 * Register service worker
 */
registerServiceWorker();
