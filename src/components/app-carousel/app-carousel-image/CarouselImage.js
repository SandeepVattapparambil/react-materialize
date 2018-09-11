/**
 * Component - Carousel - CarouselImage
 * MaterializeCSS CarouselImage component
 * @see {@link https://materializecss.com/carousel.html | CarouselImage}
 */

/**
 * Import react library
 */
import React, { Component, Fragement } from "react";

/**
 * @class
 * @name CarouselImage
 * @description MaterializeCSS CarouselImage Component.
 * @extends Component
 */
class CarouselImage extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <Fragement>
            {this.props.imageData.map((item, key) => {
               return (
                  <a key={key} className="carousel-item" href={`#${key}`}>
                     <img src={item} />
                  </a>
               );
            })}
         </Fragement>
      );
   }
}
export default CarouselImage;
