/**
 * Component - Video
 * MaterializeCSS Video component
 * @see {@link https://materializecss.com/media-css.html | Video}
 */

/**
 * Import react library
 */
import React, { Component } from "react";

/**
 * @class
 * @name Video
 * @description MaterializeCSS Video Component.
 * @extends Component
 */
class Video extends Component {
   render() {
      return (
         <div className="video-container">
            <iframe
               width="853"
               height="480"
               src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0"
               frameborder="0"
               allowfullscreen
            />
         </div>
      );
   }
}
export default Video;
