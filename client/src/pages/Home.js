import React, { useState, useEffect } from "react";
import Typist from "react-typist";

import anime from "animejs/lib/anime.es.js";

import { useGlobalContext } from "../context";

const Home = (props) => {
	//pulseAnimateStates:
	const [animationIndex, setAnimationIndex] = useState(368);
	const [changingState, setChangingState] = useState(0);
	const [animationPlaying, setAnimationPlaying] = useState(false);

	let animation;

	const grid = [35, 20];
	var numberOfElements = grid[0] * grid[1];
	let index;

	const array1 = [];

	for (let j = 0; j <= numberOfElements - 1; j++) {
		array1.push(j);
	}

	useEffect(() => {
		if (animationPlaying === true) {
			console.log("animation is not not playing");
		} else if (animationPlaying === false) {
			function changeAnimation() {
				setAnimationPlaying(false);
			}
			setAnimationPlaying(true);
			// eslint-disable-next-line
			index = animationIndex;
			console.log(index);
			// eslint-disable-next-line
			animation = anime
				.timeline({
					easing: "easeInOutQuad",
					complete: changeAnimation,
				})
				.add({
					targets: ".stagger-visualizer .dot",
					scale: [
						{ value: 0.5, easing: "easeOutSine", duration: 45 },
						{ value: 1.4, easing: "easeOutSine", duration: 50 },
						{ value: 1, easing: "easeInOutQuad", duration: 80 },
					],

					delay: anime.stagger(25, { grid: grid, from: index }),
				});
		}
	}, [changingState]);

	return (
		<div className="main-bg scroll-section" ref={props.refProp}>
			<div className="hero">
				<div className="heroInfo">
					<Typist cursor={{ show: false }} avgTypingDelay={40}>
						<Typist.Delay ms={300} />
						<span className="typespan firstbodytag">&lt;body&gt;</span>
					</Typist>
					<div className="description">
						<Typist cursor={{ show: false }} avgTypingDelay={40}>
							<Typist.Delay ms={800} />
							<span className="typespan">&lt;h1&gt;</span>
							<h2 className="typespan-h2">
								Hi! <br />
								I'm Oliver, <br /> a MERN web developer.
							</h2>
							<span className="typespan">&lt;/h1&gt;</span>
						</Typist>
					</div>
					<Typist cursor={{ show: false }} avgTypingDelay={40} className="lastTypist">
						<Typist.Delay ms={2950} />
						<span className="typespan lastspan">&lt;/body&gt;</span>
					</Typist>
				</div>

				<div className="animation-wrapper">
					<div className="stagger-visualizer ">
						<div className="dots-wrapper">
							{array1.map((item, index) => {
								return (
									<div
										className={animationPlaying ? "dot1" : "dot"}
										key={index}
										onClick={() => {
											setAnimationIndex(item);
											setChangingState((prev) => {
												return prev + 1;
											});
										}}
									></div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
