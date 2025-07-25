export const About = () => {
  return (
    <section className="About" id="About">
      <div className="About-Box">
        <div className="content-wrapper">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I am a passionate software developer with a keen interest in
            creating efficient and elegant solutions. My journey in programming
            started with competitive programming, which helped me develop strong
            problem-solving skills and algorithmic thinking.
          </p>
          <p className="about-text">
            I have developed significant interest in Artificial
            Intelligence and Machine Learning and hope to make significant
            progress in the same over the next few months. I have completed 
            and received certifications for supervised learning, advanced learning 
            algorithms and unsupervised learning and intend to utilize my newly 
            acquired knowledge to build scalable applications.
          </p>
          <div className="highlight-box">
            <div className="highlight-item">
              <span className="highlight-number">450+</span>
              <span className="highlight-label">
                Problems Solved (Leetcode)
              </span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">1500+</span>
              <span className="highlight-label">Rating (CodeChef)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
