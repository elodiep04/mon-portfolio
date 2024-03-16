import React from "react";
import "../styles/Expertise.css";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const Expertise = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dj8uqrzqv",
    },
  });
  const myImage = [
    { image: cld.image("v1710607079/html_yptqg8.webp") },
    { image: cld.image("v1710607079/css_os58rj.webp") },
    { image: cld.image("v1710607079/react_ocxgu8.webp") },
    { image: cld.image("v1710607079/nodejs_bpxi55.webp") },
    { image: cld.image("v1710607079/mongodb_wrhixt.webp") },
  ];
  return (
    <section className="section" id="expertise">
      <h3>Mes compétences</h3>
      <div className="skills-row">
        <div className="skill">
          <div className="section-img">
            <AdvancedImage cldImg={myImage[0].image} alt="html" />
          </div>
          <p>Html</p>
        </div>
        <div className="skill">
          <div className="section-img">
            <AdvancedImage cldImg={myImage[1].image} alt="css" />
          </div>
          <p>Css</p>
        </div>
        <div className="skill">
          <div className="section-img">
            <AdvancedImage cldImg={myImage[2].image} alt="react" />
          </div>
          <p>React</p>
        </div>{" "}
        <div className="skill">
          <div className="section-img">
            <AdvancedImage cldImg={myImage[2].image} alt="react" />
          </div>
          <p>React Native</p>
        </div>{" "}
        <div className="skill">
          <div className="section-img">
            <AdvancedImage cldImg={myImage[3].image} alt="node" />
          </div>
          <p>NodeJs</p>
        </div>{" "}
        <div className="skill">
          <div className="section-img">
            <AdvancedImage cldImg={myImage[4].image} alt="mongodb" />
          </div>
          <p>Mongodb</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
