/**
 * Component - Carousel - CarouselText
 * MaterializeCSS CarouselText component
 * @see {@link https://materializecss.com/carousel.html | CarouselText}
 */

/**
 * Import react library
 */
import React, { Component, Fragement } from "react";

/**
 * Import components
 */
import Button from "../../app-button/Button";

/**
 * @class
 * @name CarouselText
 * @description MaterializeCSS CarouselText Component.
 * @extends Component
 */
class CarouselText extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Fragement>
            <div className="carousel-fixed-item center">
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
            </div>
            {this.props.textData.map((item, key) => {
               return (
                  <div
                     key={key}
                     className={`carousel-item ${item.textColor} ${item.bgColor}`}
                     href={`#${key}`}>
                     <h2> {item.title} </h2>
                     <p className={item.textColor}> {item.content} </p>
                  </div>
               );
            })}
         </Fragement>
      );
   }
}
export default CarouselText;
