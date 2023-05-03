import React from "react";
import cv from "../../assets/cv.pdf";

const CVD = () => {
  return (
    <div className="cvd">
      <a className="btn" href={cv} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Converse comigo!
      </a>
    </div>
  );
};

export default CVD;
