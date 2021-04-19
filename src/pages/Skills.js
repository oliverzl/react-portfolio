import React, { useEffect } from "react";

//Skills icons
import { DiMongodb, DiReact, DiNodejsSmall } from "react-icons/di";

import express from "../images/express.png";
import { FaBootstrap } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";

const Skills = (props) => {
	return (
		<div className="main-bg" ref={props.refProp}>
			<h1 className="skills-h1">Skills</h1>

			<div className="skills-logos">
				<DiMongodb className="skills-logo" />
				<DiReact className="skills-logo" />
				<img src={express} alt="" className="express" />
				<DiNodejsSmall className="skills-logo nodelogo" />
			</div>
		</div>
	);
};

export default Skills;
