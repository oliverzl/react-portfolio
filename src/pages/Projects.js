import React, { useState, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import Typist from "react-typist";
import { useGlobalContext } from "../context";

const Projects = (props) => {
	const [projectsAnimationPlaying, setProjectsAnimationPlaying] = useState(
		false
	);

	const { scrollPosition } = useGlobalContext();

	let projectsAnimationRef = useRef(null);

	// the useEffect to run the animation when the id is reset
	useEffect(() => {
		projectsAnimationRef.current = anime.timeline({
			easing: "easeInOutExpo",
		});
		projectsAnimationRef.current
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
					targets: ".firstProjectRow",
					opacity: 1,
					translateY: 200,
					duration: 2000,
					delay: anime.stagger(250),
					loop: 1,
				},
				"1000"
			)

			.add(
				{
					targets: ".secondProjectRow",
					opacity: 1,
					translateY: -200,

					duration: 2000,
					delay: anime.stagger(250, { direction: "reverse" }),
					loop: 1,
				},
				"1300"
			);
	}, [projectsAnimationPlaying]);

	useEffect(() => {
		if (scrollPosition < window.innerHeight * 1.1) {
			setProjectsAnimationPlaying(false);
		}
		if (scrollPosition > window.innerHeight * 0.4 + window.innerHeight) {
			setProjectsAnimationPlaying(true);
		}
		if (scrollPosition > window.innerHeight * 3 * 0.9) {
			setProjectsAnimationPlaying(false);
		}
	}, [scrollPosition]);

	return (
		<div className="main-bg" ref={props.refProp}>
			<div>
				{projectsAnimationPlaying ? (
					<div>
						<svg
							className="word-svg headerSVGShadow"
							height="1000px"
							width="500px"
						>
							<path
								className="svg-path"
								d="M18.8,35.443q8.463,0,13.525-4.346a14.275,14.275,0,0,0,5.062-11.377q0-14.876-17.643-14.876H3.274v46.68H13.788V35.443H18.8ZM17.922,12.917q8.4,0,8.4,7.194,0,7.357-8.4,7.357H13.788V12.917h4.134ZM64.96,18a6.625,6.625,0,0,0-2.539-.391q-6.348,0-8.789,6.771H53.5V18.191H43.215V51.524H53.5V35.606a10.722,10.722,0,0,1,1.888-6.689,6.237,6.237,0,0,1,5.241-2.458,8.927,8.927,0,0,1,4.329,1.009V18ZM98.7,47.52q4.866-4.817,4.866-13.118,0-7.682-4.72-12.354T85.826,17.377q-8.431,0-13.379,4.671T67.5,34.987q0,8.008,4.769,12.679t13.1,4.671Q93.833,52.338,98.7,47.52ZM93.085,34.6q0,9.863-7.389,9.863-7.748,0-7.747-9.6,0-4.59,2.018-7.1a6.861,6.861,0,0,1,5.664-2.506q7.454,0,7.454,9.342h0ZM119.6,11.42a4.961,4.961,0,0,0,1.644-3.841A4.826,4.826,0,0,0,119.6,3.8a6.963,6.963,0,0,0-8.545,0,4.807,4.807,0,0,0-1.66,3.776,4.984,4.984,0,0,0,1.66,3.792,6.008,6.008,0,0,0,4.265,1.546A6.108,6.108,0,0,0,119.6,11.42Zm0.8,6.771H110.109V51.719q0,7.617-4.85,7.617a8.011,8.011,0,0,1-3.808-1.2V66.2a14.4,14.4,0,0,0,4.915.977q6.8,0,10.417-4.427T120.4,50.938V18.191ZM159,33.457q0-7.422-3.988-11.751t-11.279-4.329a16.049,16.049,0,0,0-11.849,4.85q-4.818,4.851-4.818,13.151,0,8.008,4.46,12.484t12.532,4.476q7.389,0,12.012-2.474V42.442a17.858,17.858,0,0,1-9.668,2.6q-8.626,0-9.147-7.259H159V33.457Zm-21.81-1.986a9.309,9.309,0,0,1,2.2-5.111,5.531,5.531,0,0,1,4.281-2.051q5.793,0,5.794,7.161H137.193Zm53.19,10.58a13.577,13.577,0,0,1-7.52,2.409,9.091,9.091,0,0,1-6.8-2.523,9.5,9.5,0,0,1-2.474-6.95,9.657,9.657,0,0,1,2.588-7.145,9.478,9.478,0,0,1,7.015-2.588,11.729,11.729,0,0,1,7.194,2.409V18.939q-2.637-1.563-8.529-1.562-8.529,0-13.623,4.9t-5.094,13.4a16.078,16.078,0,0,0,4.752,12.012q4.753,4.655,12.435,4.655,6.576,0,10.059-2.018V42.051Zm26.888,1.465a6.969,6.969,0,0,1-3.353.944q-4.134,0-4.134-5.208V25.775h7.487V18.191h-7.487V8.067L199.53,11v7.194h-5.4v7.585h5.4V41.042q0,11.3,10.872,11.3a15.211,15.211,0,0,0,6.869-1.2V43.516Zm13.8,8.822a27.268,27.268,0,0,0,5.778-.6,15.5,15.5,0,0,0,4.915-1.921,10.3,10.3,0,0,0,3.418-3.418,9.512,9.512,0,0,0,1.286-5.062,9.492,9.492,0,0,0-.635-3.646,7.8,7.8,0,0,0-1.823-2.669,11.871,11.871,0,0,0-2.848-1.986,29.927,29.927,0,0,0-3.711-1.562q-1.14-.391-2.3-0.765a15.036,15.036,0,0,1-2.1-.846,5.062,5.062,0,0,1-1.53-1.123,2.253,2.253,0,0,1-.586-1.562,2.025,2.025,0,0,1,.39-1.221,2.9,2.9,0,0,1,1.075-.879,6.261,6.261,0,0,1,1.578-.521,9.734,9.734,0,0,1,1.905-.179,17.66,17.66,0,0,1,4.378.57,16.252,16.252,0,0,1,4.183,1.709V18.711a33.615,33.615,0,0,0-4.492-.993,30.266,30.266,0,0,0-4.493-.342,24.277,24.277,0,0,0-5.452.6,14.883,14.883,0,0,0-4.655,1.888,9.981,9.981,0,0,0-3.255,3.3,9.134,9.134,0,0,0-1.221,4.818,10.523,10.523,0,0,0,.537,3.548,7.859,7.859,0,0,0,1.563,2.637,10.089,10.089,0,0,0,2.539,2,24.568,24.568,0,0,0,3.5,1.611q1.238,0.488,2.572.879a20.846,20.846,0,0,1,2.457.879,6.669,6.669,0,0,1,1.84,1.139,2.11,2.11,0,0,1,.716,1.628,2.419,2.419,0,0,1-1.579,2.279,10.223,10.223,0,0,1-4.313.749,16.763,16.763,0,0,1-4.769-.749,21.88,21.88,0,0,1-5.062-2.279v8.333a29.8,29.8,0,0,0,10.189,1.693h0Z"
							></path>
						</svg>
						<Typist
							className="typist-mini"
							cursor={{ show: false }}
							avgTypingDelay={20}
						>
							<Typist.Delay ms={400} />
							<h4 className="typist-mini-text">Here's my best work so far!</h4>
						</Typist>
					</div>
				) : (
					""
				)}
			</div>

			{projectsAnimationPlaying ? (
				<div className="projectsGrid">
					<div className="singleProject firstProjectRow"></div>
					<div className="singleProject firstProjectRow"></div>
					<div className="singleProject firstProjectRow"></div>

					<div className="singleProject secondProjectRow"></div>
					<div className="singleProject secondProjectRow"></div>
					<div className="singleProject secondProjectRow"></div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Projects;
