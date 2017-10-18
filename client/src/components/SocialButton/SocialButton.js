import React from 'react';
import { Icon } from 'react-fa';
import "./SocialButton.css"

const SocialButton = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button id={props.iconName} className="social-btn">
        <Icon name={props.iconName} size={props.size} />
      </button>
    </a>
  );
};

export default SocialButton;

/*
<SocialButton icon={} size={} className="social-btn" />
*/
