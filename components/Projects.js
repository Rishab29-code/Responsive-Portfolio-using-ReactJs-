import React,{useState} from "react";
import image1 from '../images/sps.png';
import image2 from '../images/tic.png';
import image3 from '../images/pms.png';


function Projects() {
  const [projects] = useState([
    {
      title: "Smart Parking System",
      img: image1,
      gLink: "https://github.com/Rishab29-code"
    },
    {
      title: "Tic Tac toe",
      img: image2,
      gLink: "https://github.com/Rishab29-code"
    },
    {
      title: "Password Management System",
      img:  image3,
      gLink: "https://github.com/Rishab29-code"
    }
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Rishab29-code"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;