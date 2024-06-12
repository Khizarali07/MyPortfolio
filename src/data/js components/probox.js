import React from "react";
import "../css components/probox.css";

const ProBox = ({ title, img, description, demo, code }) => {
  return (
    <div className="project-box">
      <div className="project-box__image-container">
        <img src={img} alt={title} className="project-box__image" />
      </div>
      <div className="project-box__content">
        <h3 className="project-box__title">{title}</h3>
        <p className="project-box__description">{description}</p>
        <div className="project-box__links">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-box__link"
            >
              Demo
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="project-box__link"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProBox;
