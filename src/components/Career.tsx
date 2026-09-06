import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer</h4>
                <h5>Fresher · Open to Work</h5>
              </div>
              <h3>2026</h3>
            </div>

            <p>
              Strong foundation in Core Java, OOP, Collections, Exception
              Handling, Multithreading, SQL, JDBC, and REST APIs. Currently
              looking for an opportunity to begin my career as a Java Developer.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Projects</h4>
                <h5>Java & Full-Stack Development</h5>
              </div>
              <h3>2025–26</h3>
            </div>

            <p>
              Built practical projects using Java, Spring Boot, MySQL, REST
              APIs, HTML, CSS, JavaScript, and React, gaining hands-on
              experience in application development.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>Bachelor's Degree</h5>
              </div>
              <h3>2022–26</h3>
            </div>

            <p>
              Completed my academic journey with a focus on programming,
              software development, databases, and computer science fundamentals.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
