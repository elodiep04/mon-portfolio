import React from "react";
import "../styles/Expertise.css";

const Expertise = () => {
  return (
    <section className="section" id="expertise">
      <h3>Mes compétences</h3>
      <div className="skills-row">
        <div className="skill">
          <div className="section-img">
            <img src={require("../assets/html.webp")} alt="html" />
          </div>
          <p>Html</p>
        </div>
        <div className="skill">
          <div className="section-img">
            <img src={require("../assets/css.webp")} alt="css" />
          </div>
          <p>Css</p>
        </div>
        <div className="skill">
          <div className="section-img">
            <img src={require("../assets/react.webp")} alt="react" />
          </div>
          <p>React</p>
        </div>{" "}
        <div className="skill">
          <div className="section-img">
            <img src={require("../assets/react.webp")} alt="react" />
          </div>
          <p>React Native</p>
        </div>{" "}
        <div className="skill">
          <div className="section-img">
            <img src={require("../assets/nodejs.webp")} alt="node" />
          </div>
          <p>NodeJs</p>
        </div>{" "}
        <div className="skill">
          <div className="section-img">
            <img src={require("../assets/mongodb.webp")} alt="mongodb" />
          </div>
          <p>Mongodb</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
