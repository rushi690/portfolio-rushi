import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/rushikesh-padamwar-11b104410/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — rushikeshpadamwar
              </a>
            </p>
            <h4>Education</h4>
           
            <p>
              B.E Computer Science, babasaheb Naik College of Engineering —
              2021–2025
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/rushi690"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/akashrmalhotra/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
           
            <a
              href="https://www.instagram.com/rushiii2722?igsi=MWF2ZTJxd2twYTdpNQ=="
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
             Software Developer <br /> by <span>Rushikesh Padamwar</span>
            </h2>
            <h5>
              <MdCopyright /> 
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
