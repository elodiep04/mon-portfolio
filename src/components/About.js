import React from "react";
import "../styles/About.css";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const About = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dj8uqrzqv",
    },
  });
  const myImage = cld.image("v1710607080/icon_utsgvj.webp");
  /*<img
        src={require("../assets/icon.webp")}
        className="icon"
        alt="icon-about"
      />*/
  return (
    <section className="about-container section" id="about">
      <AdvancedImage cldImg={myImage} className="icon" alt="icon-about" />

      <p>
        {" "}
        <h1>Bienvenue, moi c'est Elodie ! </h1>
        Développeuse fullstack animée par l'envie de créer et de proposer des
        applications utiles pour la vie des utilisateurs. <br />
        De la conception à la réalisation, je suis tombée sous le charme du code
        où les possibilités sont infinies. J'aime à concevoir et à developper de
        façon simple, claire et efficace.
      </p>
    </section>
  );
};

export default About;
