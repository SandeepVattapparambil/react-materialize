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
            {this.props.imageData.map((item, key) => {
               return (
                  <div
                     key={key}
                     class={`carousel-item ${item.textColor} ${item.bgColor}`}
                     href={`#${key}`}>
                     <h2> {item.title} </h2>
                     <p class={item.textColor}> {item.content} </p>
                  </div>
               );
            })}
         </Fragement>
      );
   }
}
export default CarouselText;
