import { useState } from "react";
import noteFinderImg from "../assets/Images/NoteFinderImg.png";
import antivirusImg from "../assets/Images/antivirusImg.jpg";
import imageEncImg from "../assets/Images/imageEnc.png";
import flowerModel from "../assets/Images/flowerModel.png";

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const projects = [
    {
      title: "Note Finder Website",
      description:
        "A Website designed to provide easy search access to study materials for VITC students.",
      technologies: ["HTML", "CSS", "JavaScript", "Django"],
      image: noteFinderImg,
      link: "https://github.com/ExPLICIT-27/NotesFinder",
    },
    {
      title: "YARA based AntiVirus Software",
      description:
        "A simple AntiVirus Software designed using YARA, C (for engine) and Python GUI",
      technologies: ["YARA", "C", "Python"],
      image: antivirusImg,
      link: "https://github.com/ExPLICIT-27/Antivirus-Software",
    },
    {
      title: "Image Encryptor Software",
      description:
        "Image Encryption software using Arnold's Cat Map algorithm with enhancements using divide and conquer techniques.",
      technologies: ["C++", "Python", "tkinter"],
      image: imageEncImg,
      link: "https://github.com/ExPLICIT-27/Image-Encryption",
    },
    {
      title: "Flower Classification Model",
      description:
        "Flower Classification model built for a deeper understanding of Convolutional Neural Networks.",
      technologies: ["PyTorch", "Python", "scikit-learn"],
      image: flowerModel,
      link: "https://github.com/ExPLICIT-27/Flower_Classification_Model",
    },
  ];

  const nextProject = () => {
    setSlideDirection("slide-left");
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setSlideDirection("");
    }, 300);
  };

  const prevProject = () => {
    setSlideDirection("slide-right");
    setTimeout(() => {
      setCurrentProject(
        (prev) => (prev - 1 + projects.length) % projects.length
      );
      setSlideDirection("");
    }, 300);
  };

  return (
    <section className="Projects" id="Projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevProject}>
          &#8249;
        </button>
        <div className={`project-card ${slideDirection}`}>
          <div className="project-content">
            <div
              className="project-image"
              style={{
                backgroundImage: `url(${projects[currentProject].image})`,
              }}
            ></div>
            <h3>{projects[currentProject].title}</h3>
            <p>{projects[currentProject].description}</p>
            <div className="tech-stack">
              {projects[currentProject].technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={projects[currentProject].link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <button className="carousel-button next" onClick={nextProject}>
          &#8250;
        </button>
      </div>
    </section>
  );
};
