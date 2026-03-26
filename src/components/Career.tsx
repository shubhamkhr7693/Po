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
                <h4>Intermediate (12th), MPBSE</h4>
                <h5>Govt Boys Higher Secondary School, Madhya Pradesh</h5>
              </div>
              <h3>2018-2019</h3>
            </div>
            <p>
              Completed Intermediate with 71.0%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science (Computer Science)</h4>
                <h5>DAVV University, Indore</h5>
              </div>
              <h3>2019-2022</h3>
            </div>
            <p>
              Graduated with 74.36%. Focused on core CS concepts, algorithms and software development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master Of Computer Application (MCA)</h4>
                <h5>National Institute of Technology (NIT) Raipur</h5>
              </div>
              <h3>2023-2026</h3>
            </div>
            <p>
              Currently pursuing MCA. Skills include Django, React, Next.js, TensorFlow, SQL and data analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
