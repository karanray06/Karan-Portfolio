import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (1st Year)</h4>
                <h5>University Student</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Started my undergraduate degree in Computer Science and Engineering. 
              Currently exploring the fundamentals of programming, data structures, 
              and the core concepts of backend development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Backend Developer</h4>
                <h5>Self-Learning & Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively learning Node.js, Express, and databases. Building projects 
              to strengthen my understanding of server-side logic and API development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
