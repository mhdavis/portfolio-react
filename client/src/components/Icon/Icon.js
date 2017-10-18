import React from 'react';
import Icons from "./icons.json";
import "./Icon.css";

const Icon = (props) => {
  return (
      <div className="developer-icon" dangerouslySetInnerHTML={
        { __html: Icons[props.name] }
      }>
      </div>
  );
}

export default Icon;
