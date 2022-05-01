import React from "react";
import { image } from "../data/data";

export function About() {
  return <div id="about">About
  <h2>About Me</h2>
  <p>Test Content</p>
  <img src={image} alt="I made this" />
  </div>;
}

export default About;
