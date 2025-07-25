import { useState, useEffect } from "react";
export const Home = () => {
  const [currText, changeText] = useState("");
  const [Isdeleting, setdeleting] = useState(false);
  const [rate, setRate] = useState(300);
  const fullText = "Hello There :)";
  useEffect(() => {
    const interval = setInterval(() => {
      if (!Isdeleting && currText === fullText) {
        setdeleting(true);
        setRate(400);
      }
      if (!Isdeleting) {
        changeText(fullText.substring(0, currText.length + 1));
      }
      if (Isdeleting && currText === "") {
        setdeleting(false);
        setRate(300);
      }
      if (Isdeleting) {
        setRate((currRate) => currRate / 2);
      }
      if (Isdeleting) {
        changeText(fullText.substring(0, currText.length - 1));
      }
    }, rate);

    return () => clearInterval(interval);
  }, [currText, Isdeleting, rate]);
  return (
    <section className="Home" id="Home">
      <div className="WelcomeText">
        <h1>{currText}</h1>
      </div>
      <div className="nameAndDetails">
        <span className="myName">Nandu Mahesh</span>
        <div className="details">
          <span>Competitive Programming Enthusiast</span>
          <span>Machine Learning</span>
          <span>Algorithm Analysis and Development</span>
        </div>
          <a
          href="https://drive.google.com/file/d/1M_mkRAXtFupTDbawpfEMKNAEweGRkWRP/view?usp=drive_link"
          download
          className="resume-download"
          >
          Download Resume
          </a>
      </div>
    </section>
  );
};
