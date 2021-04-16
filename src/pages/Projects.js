import React, { useRef } from "react";

const Projects = (props) => {
  return (
    <div className='main-bg projects-h1' ref={props.refProp}>
      <h1>Projects</h1>
    </div>
  );
};

export default Projects;
