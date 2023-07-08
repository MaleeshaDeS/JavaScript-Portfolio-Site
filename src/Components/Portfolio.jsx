/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/bigData_bg.jpg";

const imageAltText = "Big Data";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Data Warehousing and Business Intelligence Project for a Bicycle Rental System",
    description:
      "The project entailed building a data warehouse, creating an OLAP Cube, and generating reports to extract valuable insights for business purposes",
    url: "https://github.com/MaleeshaDeS/DWBI-Bicycle-Rental-System.git",
  },
  {
    title: "Machine Learning Model to Predict Future Stroke Condition in Patient",
    description:
      "An application built using Decision Tree algorithm to predict stroke conditions in patients by entering information about their health and living conditions.",
    url: "https://github.com/MaleeshaDeS/Stroke-Prediction-Application.git",
  },
  {
    title: "IOT Solution to Monitor Temperature and Humidity Changes in the Environment",
    description:
      "Tracks and analyzes temperature and humidity variations in an environment using a network of interconnected sensors. Real-time data collection and transmission to a cloud platform enable continuous monitoring.",
    url: "https://github.com/MaleeshaDeS/Temperature-Humidity-Monitoring-System.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
