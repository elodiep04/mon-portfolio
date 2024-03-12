import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-container section" id="about">
      <img src="./icon.webp" className="icon" />
      <p>
        {" "}
        <h1>Bienvenue, moi c'est Elodie ! </h1>
        Développeuse fullstack animée par l'envie de créer et de proposer des
        applications utiles pour la vie des utilisateurs. <br />
        J'aime à concevoir et à coder de façon simple, claire et efficace.
      </p>
    </section>
  );
};

export default About;
