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
   constructor(props) {
      super(props);
      let config = { ...props };
      this.state = {
         options: {
            input: config.input
         }
      };
   }
   render() {
      if (this.state.options.input.type === "embed") {
         return (
            <div className="video-container">
               <iframe
                  width={this.state.options.input.width}
                  height={this.state.options.input.height}
                  src={this.state.options.input.src}
                  frameBorder="0"
                  allowFullScreen
               />
            </div>
         );
      } else if (this.state.options.input.type === "video") {
         return (
            <video className="responsive-video" controls>
               <source
                  src={this.state.options.input.src}
                  type={this.state.options.input.format}
               />
            </video>
         );
      }
   }
}
export default Video;
