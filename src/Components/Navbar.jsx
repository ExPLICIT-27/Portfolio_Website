import { useState, useEffect } from "react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="logo">
        <span className="logo-text">N</span>
        <span className="logo-dot">•</span>
        <span className="logo-text">M</span>
      </div>
      <div className="nav-items">
        <span>
          <a
            href="#Home"
            onClick={(e) => scrollToSection("Home", e)}
            className={activeSection === "Home" ? "active" : ""}
          >
            Home
          </a>
        </span>
        <span>
          <a
            href="#About"
            onClick={(e) => scrollToSection("About", e)}
            className={activeSection === "About" ? "active" : ""}
          >
            About
          </a>
        </span>
        <span>
          <a
            href="#Skills"
            onClick={(e) => scrollToSection("Skills", e)}
            className={activeSection === "Skills" ? "active" : ""}
          >
            Skills
          </a>
        </span>
        <span>
          <a
            href="#Projects"
            onClick={(e) => scrollToSection("Projects", e)}
            className={activeSection === "Projects" ? "active" : ""}
          >
            Projects
          </a>
        </span>
        <span>
          <a
            href="#Contact"
            onClick={(e) => scrollToSection("Contact", e)}
            className={activeSection === "Contact" ? "active" : ""}
          >
            Contact Me
          </a>
        </span>
      </div>
    </div>
  );
};
