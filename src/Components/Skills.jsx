export const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  ];

  return (
    <section id="Skills" className="Skills">
      <div className="skills-box">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
