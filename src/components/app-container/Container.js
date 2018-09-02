/**
 * Component - Container
 * A basic static grid component
 */

/**
 * Import react library
 */
import React, { Component } from "react";
import "./Container.css";

/**
 * @name Container
 * @function
 * @returns {String} - An HTML dom element
 * Functional component structure is used because of its atomic nature.
 */
let Container = () => {
   return <div className="container" />;
};

export default Container;
