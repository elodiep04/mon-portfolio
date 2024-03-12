import React, { useState } from "react";
import "../styles/Projects.css";
import Modal from "./Modal";

const Projects = () => {
  const [modalInfos, setModalInfos] = useState([]);
  const [showModal, setShoModal] = useState(false);

  const projects = [
    {
      title: "MyMoviz",
      img: "./mymoviz.webp",
      description:
        "MyMoviz est un site qui va vous permettre d’afficher les films les plus populaires avec la possibilité de créer une wishlist, placer un compteur de vues et de donner une évaluation de chacun des films présentés ",
      skills: ["React", "Nodejs", "Express"],
      details: [
        "Création une interface graphique avec JSX.",
        "Découpage de l'application en composants React.",
        "Mise en œuvre des modules en ES6.",
        "Utilisation des concepts de propriété et d’état d’un composant React.",
        "Gestion des événements en React.",
        "Mise en place de l'API via un Backend.",
        "Communication entre le frontend React et le Backend.",
      ],
    },
    {
      title: "Morning News",
      img: "./morningnews.webp",
      description:
        "Morning News est une application web qui va vous permettre d’afficher les news récentes par source d’informations avec la possibilité de créer une wishlist pour les lire ultérieurement. ",
      skills: ["React", "Nodejs", "Express", "Redux"],
      details: [
        "Mise en place une navigation avec le système des routes dans React.",
        "Manipulation des champs de saisie dans React.",
        "Mise en place un système d’identification Sign in/Sign up.",
        "Utilisation de Redux pour faciliter l’échange de données.",
        "Mise en place une identification sécurisée.",
      ],
    },
    {
      title: "La Fraîche",
      img: "./lafraiche.webp",
      description:
        "La Fraîche est une application permettant de commander des produits frais et de localiser son point de retrait le plus proche de chez vous pour faciliter votre quotidien.",
      skills: ["React Native", "Nodejs", "Express", "Redux"],
      details: [
        "Utilisation l'environnement Expo pour déployer l'application sur les mobiles.",
        "Mise en place un système d’identification Sign in/Sign up.",
        "Mise en place une navigation pour mobile avec React Navigation.",
        "Intégration d'une Map interactive sous React Native.",
        "Mise en place un système de géolocalisation.",
        "Utilisation de Redux pour faciliter l’échange de données.",
        "Communication entre le frontend et le Backend via les APIs.",
      ],
    },
    {
      title: "Pokedex",
      img: "./pokemon.webp",
      description:
        "Pokédex est une application permettant de récupérer tous les pokémons répertoriés à ce jour.",
      skills: ["React"],
      details: [
        "Création une interface graphique avec JSX.",
        "Découpage une application en composants React.",
        "Mise en œuvre des modules en ES6.",
        "Utilisation des concepts de propriété et d’état d’un composant React.",
        "Gestion des événements en React.",
        "Gestion de l'API Pokemon",
      ],
    },
    {
      title: "Todolist",
      img: "./todolist.webp",
      description:
        "Todolist est une application qui vous aide à gérer votre quotidien en ajoutant, modifiant et supprimant toutes vos tâches à faire.",
      skills: ["React"],
      details: [
        "Création une interface graphique avec JSX.",
        "Découpage une application en composants React.",
        "Mise en œuvre des modules en ES6.",
        "Utilisation des concepts de propriété et d’état d’un composant React.",
      ],
    },
    {
      title: "Themis Advices",
      img: "./themis-advices.webp",
      description:
        "Themis Advices est un site vitrine pour une entreprise de conseils d'entreprises incluant un formulaire de contact.",
      skills: ["React", "Emailjs", "Firebase"],
      details: [
        "Conception de l'UI.",
        "Création d'une interface graphique avec JSX.",
        "Découpage une application en composants React.",
        "Utilisation des concepts de propriété et d’état d’un composant React.",
        "Mise en place d'un formulaire de contact grâce à EmailJS.",
        "Deploiement Firebse en CI.",
      ],
    },
    {
      title: "Quiz App",
      img: "./quiz.png",
      description:
        "Quiz App est une application mobile permettant de tester ses connaissances en français.",
      skills: ["React", "Nodejs", "Express", "Redux Toolkit"],
      details: [
        "Conception de l'UI.",
        "Utilisation l'environnement Expo pour déployer l'application sur les mobiles.",
        "Mettre en place une navigation pour mobile avec React Navigation.",
        "Utilisation de Redux Toolkit pour faciliter l’échange de données.",
        "Communication entre le frontend et le Backend grâce aux API.",
      ],
    },
  ];

  const handleClickParent = (infos) => {
    setModalInfos(infos);
    setShoModal(!showModal);
  };

  const hideModal = () => {
    setShoModal(!showModal);
  };
  return (
    <section className="section" id="projects">
      <h3>Mes projets</h3>
      <div className="row-card">
        {projects.map((project, i) => {
          return (
            <div className="card">
              <img src={project.img} alt="img" className="card-image" />
              <div className="card-container">
                {" "}
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="card-skills">
                  {project.skills.map((skill, i) => {
                    return <p>{skill}</p>;
                  })}
                </div>
                <button
                  className="card-button"
                  onClick={() => handleClickParent(project)}
                >
                  En savoir +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showModal ? (
        <Modal
          modalInfos={modalInfos}
          showModal={showModal}
          hideModal={hideModal}
        />
      ) : null}
    </section>
  );
};

export default Projects;
