// I need a react functional component using arrow function that will be named MentorContainer and will render the component MentorPicture.js and a text passed as prop next to it

import React from "react";
import MentorPicture from "./MentorPicture/index";
import MentorNameTag from "./MentorNameTag/index";

import './index.css'

const MentorContainer = ({src, text, name, className, reverse}) => {
  return (
    <div className={`mentor_container_wrapper ${reverse}`}>
      <div className={`mentor_container ${className}`}>
        <MentorPicture src={src} />
        <p>
          {text}
        </p>
      </div>
      <MentorNameTag name={name} className={className} />
    </div>
  );
}

export default MentorContainer;