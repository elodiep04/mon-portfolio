import React from "react";
import "../styles/Projects.css";

const Modal = ({ modalInfos, hideModal }) => {
  console.log(modalInfos);
  /*  {modalInfos.map((info, i) => {
        return <p>{info}</p>;
      })}*/
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-title">
          <h4>{modalInfos.title}</h4>
        </div>
        <div className="modal-infos">
          {modalInfos.details.map((info, i) => {
            return <p>#{info}</p>;
          })}
          <button className="modal-button" onClick={() => hideModal()}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
