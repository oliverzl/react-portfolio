import React, { useState, useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import Typist from "react-typist";
import { useGlobalContext } from "../context";

const Contact = (props) => {
	const [contactState, setContactState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [contactAnimationPlaying, setContactAnimationPlaying] = useState(false);

	const {
		testing,
		scrollAnimation,
		scrollPosition,
		scrollFunction,
	} = useGlobalContext();

	let contactAnimationRef = useRef(null);

	useEffect(() => {
		contactAnimationRef.current = anime.timeline({
			easing: "easeInOutExpo",
		});
		contactAnimationRef.current
			.add({
				targets: ".word-svg path",
				strokeDashoffset: [anime.setDashoffset, 0],
				delay: -700,
				duration: 4000,
			})
			.add(
				{
					targets: ".word-svg path",
					fill: "#C0C0C0",
					duration: 4000,
				},
				"-=4500"
			);
	}, [contactAnimationPlaying]);

	useEffect(() => {
		if (scrollPosition > 3 * window.innerHeight + 100) {
			setContactAnimationPlaying(true);
		} else setContactAnimationPlaying(false);
	}, [scrollPosition]);

	//Contact form state changes
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setContactState({ ...contactState, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (contactState.name && contactState.email && contactState.age) {
			const newcontactState = {
				...contactState,
				id: new Date().getTime().toString(),
			};

			setContactState({ name: "", email: "", message: "" });
		}
	};

	return (
		<div className="main-bg" ref={props.refProp}>
			{contactAnimationPlaying ? (
				<div>
					<svg className="word-svg headerShadow">
						<path
							className="svg-path"
							d="M8.413,49.679a39.515,39.515,0,0,0,7.311.736,34.13,34.13,0,0,0,7.131-.64,17.421,17.421,0,0,0,5.943-2.3A12.061,12.061,0,0,0,32.872,43.2a13.39,13.39,0,0,0,1.556-6.572,13.5,13.5,0,0,0-.792-5,11.673,11.673,0,0,0-2.4-3.836,17.926,17.926,0,0,0-3.8-3.034A41.039,41.039,0,0,0,22.428,22.2q-2.044-.873-3.665-1.692a18.634,18.634,0,0,1-2.753-1.666,7.106,7.106,0,0,1-1.741-1.785,3.723,3.723,0,0,1-.6-2.116,3.532,3.532,0,0,1,.576-1.939,4.792,4.792,0,0,1,1.581-1.47,8.354,8.354,0,0,1,2.488-.937,14.324,14.324,0,0,1,3.264-.307,20.593,20.593,0,0,1,2.752.227,21.743,21.743,0,0,1,2.911.637,20.337,20.337,0,0,1,2.841,1.062,15.761,15.761,0,0,1,2.543,1.467L32.738,3.91a25.422,25.422,0,0,0-5.184-1.415,42.237,42.237,0,0,0-6.466-.514,29.991,29.991,0,0,0-7.05.722A17.889,17.889,0,0,0,8.158,5.139,12.484,12.484,0,0,0,4.117,9.427,12.738,12.738,0,0,0,2.58,15.7a12.23,12.23,0,0,0,2.6,8.008,20.46,20.46,0,0,0,8.1,5.682q2.142,0.907,3.99,1.778a22.369,22.369,0,0,1,3.191,1.8,8.438,8.438,0,0,1,2.113,2.018,4.073,4.073,0,0,1,.755,2.461,3.761,3.761,0,0,1-.51,1.875,4.344,4.344,0,0,1-1.5,1.487,8.119,8.119,0,0,1-2.488.969,14.835,14.835,0,0,1-3.476.321,19.748,19.748,0,0,1-6.7-1.268,20.028,20.028,0,0,1-6.121-3.649L2.421,47.65A22.036,22.036,0,0,0,8.413,49.679Zm60.548-19.5q0.159-14.288-14.12-14.447a30.857,30.857,0,0,0-6.806.774,25.5,25.5,0,0,0-5.906,1.9l-0.087,7.782a20.211,20.211,0,0,1,11.384-3.437q5.933,0.066,5.872,5.559l-9.076,1.108Q38.7,30.79,38.591,40.533a9.916,9.916,0,0,0,2.705,7.4,10.381,10.381,0,0,0,7.614,2.848,10.873,10.873,0,0,0,10.005-5.512h0.13L58.992,50.08l9.747,0.109ZM57.327,41.543A6.091,6.091,0,0,1,52.577,43.5a4.689,4.689,0,0,1-3.3-1.165,3.762,3.762,0,0,1-1.19-2.907q0.043-3.89,5.071-4.488l6.072-.717L59.208,36.48A7.276,7.276,0,0,1,57.327,41.543Zm41.515-24.5L92.323,37.406a31.347,31.347,0,0,0-1.125,4.4l-0.13,0a26.555,26.555,0,0,0-.863-4.489l-6-20.439-11.41-.128,13.19,33.566-1.806,4.133a5.58,5.58,0,0,1-5.584,3.7,8.647,8.647,0,0,1-4.453-1.26l-0.091,8.239a18.833,18.833,0,0,0,6.152.919q9.844,0.11,14.88-12.881l13.963-36.009ZM173.217,4.465l-10.562-.118-0.207,18.7-19.364-.216,0.208-18.7-10.53-.118L132.242,50.9l10.529,0.118,0.212-19.094,19.364,0.216-0.212,19.094L172.7,51.351Zm19.112,6.819a4.994,4.994,0,0,0,1.689-3.84,4.855,4.855,0,0,0-1.6-3.811,6.957,6.957,0,0,0-8.557-.1,4.832,4.832,0,0,0-1.7,3.774,5.009,5.009,0,0,0,1.62,3.828,6.005,6.005,0,0,0,4.253,1.6A6.109,6.109,0,0,0,192.329,11.284Zm0.723,6.81-10.3-.115-0.371,33.48,10.3,0.115Zm9.961-13.3,0.847,32.317,8.345,0.093,1.631-32.289Zm9.251,46.21a5.09,5.09,0,0,0,1.689-3.872,4.979,4.979,0,0,0-1.619-3.86,6.087,6.087,0,0,0-4.254-1.568,6.259,6.259,0,0,0-4.3,1.456A4.907,4.907,0,0,0,202.022,47a5.069,5.069,0,0,0,1.653,3.861A6.689,6.689,0,0,0,212.264,51.008Z"
						></path>
					</svg>
					<Typist cursor={{ show: false }} avgTypingDelay={45}>
						<Typist.Delay ms={1500} />
						<h4 className="discuss">Let's discuss your next project.</h4>
					</Typist>
				</div>
			) : (
				""
			)}

			{/* <p className="contact-p">Let's discuss your next project!</p> */}

			{/* <div className="form-container">
				<form className="form-control">
					<div className="form-1">
						<label className="form-label">Name:</label>
						<input className="form-input" type="text" name="first" />
					</div>

					<div className="form-1">
						<label className="form-label">Email:</label>
						<input className="form-input" type="text" name="first" />
					</div>

					<div className="textarea-container">
						<label className="message-label">Message: </label>
						<textarea className="message-textarea" type="text" name="first" />
					</div>
				</form>
			</div> */}
		</div>
	);
};

export default Contact;
