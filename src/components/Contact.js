import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h4 className="contact-title">
        Je suis toujours disponible pour échanger !
      </h4>
      <ul className="contact-list">
        <li>
          <FontAwesomeIcon icon={faEnvelope} className="icons" />
          phauv.elodie@gmail.com
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/elodie-phauv/"
            className="icon-linkedin"
            target="_blank"
            rel="noopener noreferrer"
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
