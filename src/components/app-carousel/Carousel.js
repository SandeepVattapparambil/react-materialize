/**
 * Component - Carousel
 * MaterializeCSS Carousel component
 * @see {@link https://materializecss.com/carousel.html | Carousel}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Carousel
 * @description MaterializeCSS Carousel Row.
 * @extends Component
 */
class Carousel extends Component {
   constructor(props) {
      super(props);
      let config = {
         ...props
      };
      this.state = {
         options: {
            type: config.type || " ",
            carouselOptions: config.carouselOptions || {},
            imageData: config.imageData || []
         }
      };
      this.element;
      this.instances;
   }

   componentDidMount() {
      this.element = document.querySelector(".carousel");
      //Defaults
      let options = {
         duration: this.state.options.carouselOptions.duration || 200,
         dist: this.state.options.carouselOptions.dist || -100,
         shift: this.state.options.carouselOptions.shift || 0,
         padding: this.state.options.carouselOptions.padding || 0,
         numVisible: this.state.options.carouselOptions.numVisible || 5,
         fullWidth:
            (this.state.options.type === "carousel-slider"
               ? true
               : this.state.options.type === "carousel-fixed-item"
                  ? true
                  : false) ||
            this.state.options.carouselOptions.fullWidth ||
            false,
         indicators: this.state.options.carouselOptions.indicators || false,
         noWrap: this.state.options.carouselOptions.noWrap || false,
         onCycleTo: this.state.options.carouselOptions.onCycleTo || null
      };
      this.instance = M.Carousel.init(this.element, options);
   }

   /**
    * @function
    * Move carousel to next slide or go forward a given amount of slides.
    * @inner
    * @name _next
    * @memberof Carousel
    * @param {Number} n - How many times the carousel slides.
    */
   _next = n => {
      this.instance.next(n);
   };

   /**
    * @function
    * Move carousel to previous slide or go back a given amount of slides.
    * @inner
    * @name _prev
    * @memberof Carousel
    * @param {Number} n - How many times the carousel slides.
    */
   _prev = n => {
      this.instance.prev(n);
   };

   /**
    * @function
    * Move carousel to nth slide
    * @inner
    * @name _set
    * @memberof Carousel
    * @param {Number} i - Index of slide.
    */
   _set = i => {
       this.instance.set(i);
   };

   /**
    * @function
    * Destroy plugin instance and teardown.
    * @inner
    * @name _destroy
    * @memberof Carousel
    */
   _destroy = () => {
       this.instance.destroy();
   };

   /**
    * A helper function to get options the instance was initialized with.
    */
   _getInstanceOptions = () => {
      return this.element.options;
   };

   /**
    * A helper function to get the element on which the carousel is initialized
    */
   _getEl = () => {
      return this.element;
   };

   /**
    * A helper function to check whether the carousel is pressed
    */
   _isPressed = () => {
      return this.element.pressed;
   };

   /**
    * A helper function to check whether the carousel is dragged
    */
   _isDragged = () => {
      return this.element.dragged;
   };

   /**
    * A helper function to get the index of the current center item of the carousel
    */
   _getCenter = () => {
      return this.element.center;
   };

   /**
    * Render the carousel
    */
   render() {
      return (
         <div className={`carousel ${this.state.options.type}`}>
            {this.state.options.imageData.map((item, key) => {
               return (
                  <a key={key} className="carousel-item" href={`#${key}`}>
                     <img src={item} />
                  </a>
               );
            })}
         </div>
      );
   }
}
export default Carousel;
