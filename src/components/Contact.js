import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h3 className="contact-title">Toujours prête pour échanger avec vous</h3>
      <ul className="contact-list">
        <li>
          <a href="mailto:phauv.elodie@gmail.com" className="icon-mail">
            <FontAwesomeIcon icon={faEnvelope} className="icons" />
            Mail
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/elodie-phauv/"
            className="icon-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
