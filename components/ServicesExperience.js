import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Frontend Design",
      desc: "I have developed many types of Frontend design such as a responsive portfolio.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Backend Design",
      desc: "Mainly focuses on server side programming.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Database Management",
    desc: "Database Management can be done using SQL and MongoDB.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>2+</h3>
            <p>Web Devlopement Projects</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>Languages</h4>
              <p>Java,C++,C,NodeJs,MongoDB</p>
            </div>
            <div className="portfolio">
              <h4>123+</h4>
              <p>Leetcode </p>
            </div>
            <div className="portfolio">
              <h4>3+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>3</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;