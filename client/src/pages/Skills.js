import React, { useState, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import Typist from "react-typist";

//MERN skills svgs
import reactjs from "../images/reactlogosvg.svg";
import nodejs from "../images/nodejs-icon.svg";
import expressjsfinal from "../images/exfinalfinal.svg";
import mongodbjs from "../images/mongodb-icon-1.svg";

//subskills svgs
import bootstrap1 from "../images/bootstrap1.svg";
import giticon from "../images/giticon.svg";
import animejslogo from "../images/animelogo.svg";
import webpacklogo from "../images/webpacklogo.svg";
import npmlogo from "../images/npmlogo.svg";

import { useGlobalContext } from "../context";

const Skills = (props) => {
	const [skillsAnimationPlaying, setSkillsAnimationPlaying] = useState(true);

	const { scrollPosition } = useGlobalContext();

	let skillsAnimationRef = useRef(null);

	//the useEffect to run the animation when the id is reset
	useEffect(() => {
		skillsAnimationRef.current = anime.timeline({
			easing: "easeInOutExpo",
		});
		skillsAnimationRef.current
			.add({
				targets: ".word-svg path",
				strokeDashoffset: [anime.setDashoffset, 0],
				delay: -700,
				duration: 4000,
			})
			.add(
				{
					targets: ".word-svg path",
					fill: "#FFFFFF",
					duration: 3500,
				},
				"-=4100"
			)
			.add(
				{
					targets: ".mernskill",
					opacity: 1,
					translateX: 200,
					duration: 2000,
					delay: anime.stagger(250),
					loop: 1,
				},
				"100"
			)
			.add(
				{
					targets: ".subskill",
					opacity: 1,
					translateX: -200,
					duration: 2000,
					delay: anime.stagger(250),
					loop: 1,
				},
				"1800"
			);
	}, [skillsAnimationPlaying]);

	// STATE
	// when skills button is clicked

	useEffect(() => {
		if (scrollPosition < 150) {
			setSkillsAnimationPlaying(false);
		}
		if (scrollPosition > window.innerHeight * 0.4) {
			setSkillsAnimationPlaying(true);
		}
		if (scrollPosition > window.innerHeight * 2 * 0.9) {
			setSkillsAnimationPlaying(false);
		}
	}, [scrollPosition]);

	return (
		<>
			<div className="main-bg" ref={props.refProp}>
				{skillsAnimationPlaying ? (
					<div>
						<div>
							<svg className="word-svg headerSVGShadow" height="54px">
								<path
									className="svg-path"
									onClick={() => skillsAnimationRef.current.play()}
									d="M7.792,51.7a39.559,39.559,0,0,0,7.308.651,34.17,34.17,0,0,0,7.113-.716,17.423,17.423,0,0,0,5.908-2.36,12.022,12.022,0,0,0,4.02-4.3,13.3,13.3,0,0,0,1.481-6.559,13.4,13.4,0,0,0-.846-4.964,11.619,11.619,0,0,0-2.441-3.792,17.893,17.893,0,0,0-3.825-2.979,41.015,41.015,0,0,0-5.029-2.49q-2.051-.846-3.678-1.644a18.608,18.608,0,0,1-2.767-1.628,7.085,7.085,0,0,1-1.758-1.758,3.7,3.7,0,0,1-.619-2.1,3.508,3.508,0,0,1,.553-1.937,4.781,4.781,0,0,1,1.563-1.481,8.356,8.356,0,0,1,2.474-.96A14.341,14.341,0,0,1,20.5,12.34a20.626,20.626,0,0,1,2.751.2,21.758,21.758,0,0,1,2.913.6,20.34,20.34,0,0,1,2.848,1.025,15.745,15.745,0,0,1,2.555,1.432V5.862A25.442,25.442,0,0,0,26.38,4.511a42.294,42.294,0,0,0-6.462-.439,30.032,30.032,0,0,0-7.031.8,17.891,17.891,0,0,0-5.843,2.49,12.443,12.443,0,0,0-3.988,4.313,12.651,12.651,0,0,0-1.465,6.266,12.152,12.152,0,0,0,2.686,7.943,20.429,20.429,0,0,0,8.154,5.566q2.148,0.879,4,1.725a22.355,22.355,0,0,1,3.206,1.758,8.415,8.415,0,0,1,2.132,1.986,4.046,4.046,0,0,1,.781,2.441,3.735,3.735,0,0,1-.488,1.872,4.33,4.33,0,0,1-1.481,1.5,8.124,8.124,0,0,1-2.474.993,14.86,14.86,0,0,1-3.467.358A19.767,19.767,0,0,1,7.939,42.89a20.01,20.01,0,0,1-6.152-3.564V49.742A22.048,22.048,0,0,0,7.792,51.7ZM60.9,33.857L72.848,18.2H60.641L50.712,33.6h-0.13V2.183H40.3V51.532H50.582V35h0.13L61.357,51.532H73.694ZM87.057,11.428A4.963,4.963,0,0,0,88.7,7.587a4.828,4.828,0,0,0-1.644-3.776,6.963,6.963,0,0,0-8.545,0,4.805,4.805,0,0,0-1.66,3.776,4.981,4.981,0,0,0,1.66,3.792,6.007,6.007,0,0,0,4.264,1.546A6.109,6.109,0,0,0,87.057,11.428Zm0.8,6.771H77.568V51.532H87.854V18.2ZM106.8,2.183H96.513V51.532H106.8V2.183Zm18.946,0H115.458V51.532h10.287V2.183Zm16.666,50.163a27.255,27.255,0,0,0,5.778-.6,15.5,15.5,0,0,0,4.916-1.921,10.305,10.305,0,0,0,3.418-3.418,9.511,9.511,0,0,0,1.286-5.062,9.492,9.492,0,0,0-.635-3.646,7.8,7.8,0,0,0-1.823-2.669,11.911,11.911,0,0,0-2.848-1.986,29.912,29.912,0,0,0-3.711-1.563q-1.14-.391-2.295-0.765a15,15,0,0,1-2.1-.846,5.073,5.073,0,0,1-1.53-1.123,2.257,2.257,0,0,1-.586-1.562,2.02,2.02,0,0,1,.391-1.221,2.894,2.894,0,0,1,1.074-.879,6.283,6.283,0,0,1,1.579-.521,9.717,9.717,0,0,1,1.9-.179,17.659,17.659,0,0,1,4.378.57,16.238,16.238,0,0,1,4.183,1.709V18.72a33.549,33.549,0,0,0-4.492-.993,30.252,30.252,0,0,0-4.492-.342,24.271,24.271,0,0,0-5.452.6,14.873,14.873,0,0,0-4.655,1.888,9.973,9.973,0,0,0-3.256,3.3A9.143,9.143,0,0,0,132.223,28a10.523,10.523,0,0,0,.537,3.548,7.872,7.872,0,0,0,1.562,2.637,10.109,10.109,0,0,0,2.539,2,24.6,24.6,0,0,0,3.5,1.611q1.236,0.488,2.571.879a20.881,20.881,0,0,1,2.458.879,6.65,6.65,0,0,1,1.839,1.139,2.11,2.11,0,0,1,.716,1.628,2.418,2.418,0,0,1-1.578,2.279,10.228,10.228,0,0,1-4.314.749,16.774,16.774,0,0,1-4.769-.749,21.856,21.856,0,0,1-5.061-2.279v8.333a29.793,29.793,0,0,0,10.188,1.693h0Z"
								></path>
							</svg>
							<Typist className="typist-mini" cursor={{ show: false }} avgTypingDelay={20}>
								<Typist.Delay ms={400} />
								<h4 className="typist-mini-text">Learning more JavaScript everyday.</h4>
							</Typist>
						</div>

						<div>
							<div className="mernskills">
								<img className="mernskill" src={mongodbjs} alt="" height="130pt" style={{ marginLeft: "10px" }} />

								<img className="mernskill" src={expressjsfinal} alt="" height="130pt" style={{ marginLeft: "10px" }} />
								<img className="mernskill" src={reactjs} alt="" height="130pt" style={{ marginLeft: "10px" }} />

								<img className="mernskill" src={nodejs} alt="" height="130pt" style={{ marginLeft: "10px" }} />
							</div>

							<Typist className="typist-mini-skills2" cursor={{ show: false }} avgTypingDelay={50}>
								<Typist.Delay ms={2000} />
								<h4 className="typist-mini-text">As well as..</h4>
							</Typist>

							<div className="subskills">
								<img className="subskill" src={animejslogo} alt="" height="60pt" style={{ marginLeft: "10px" }} />
								<img className="subskill" src={bootstrap1} alt="" height="60pt" style={{ marginLeft: "10px" }} />
								<img className="subskill" src={giticon} alt="" height="60pt" style={{ marginLeft: "10px" }} />

								<img className="subskill" src={webpacklogo} alt="" height="80pt" style={{ marginLeft: "10px" }} />
								<img className="subskill" src={npmlogo} alt="" height="80pt" style={{ marginLeft: "10px" }} />
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default Skills;
