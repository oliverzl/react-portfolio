import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import anime from "animejs/lib/anime.es.js";
import { useGlobalContext } from "./context";

//import components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//import Pages
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";
import ScrollAnimation from "react-animate-on-scroll";

function App() {
	const {
		setTesting,
		setScrollAnimation,
		scrollPosition,
		setScrollPosition,
	} = useGlobalContext();

	const refs = {
		homeRef: useRef(null),
		aboutRef: useRef(null),
		skillsRef: useRef(null),
		projectsRef: useRef(null),
		contactRef: useRef(null),
	};

	// const handleScroll = () => {
	// 	setScrollPosition(window.scrollY);
	// 	console.log(scrollPosition);
	// };

	useEffect(() => {
		window.onscroll = () => {
			// console.log(window.scrollY);
			setScrollPosition(window.scrollY);
		};
	}, []);

	const scrollRefs = {
		scrollHome() {
			refs.homeRef.current.scrollIntoView();
		},
		scrollAbout() {
			return refs.aboutRef.current.scrollIntoView();
		},
		scrollSkills() {
			// refs.skillsRef.current.scrollIntoView();
			// setTesting((prev) => {
			// 	return prev + 1;
			// });

			refs.skillsRef.current.scrollIntoView();
			setScrollAnimation({ ...ScrollAnimation, skills: true });
		},
		scrollProjects() {
			return refs.projectsRef.current.scrollIntoView();
		},
		scrollContact() {
			return refs.contactRef.current.scrollIntoView();
		},
	};

	return (
		<>
			<Router>
				<div className="scroll-container">
					<Navbar {...scrollRefs} />

					<div className="scroll-section">
						<Home refProp={refs.homeRef} />
					</div>

					<div className="scroll-section">
						<Skills refProp={refs.skillsRef} />
					</div>

					<Projects refProp={refs.projectsRef} />
					<div className="scroll-section">
						<About refProp={refs.aboutRef} />
					</div>
					<Contact refProp={refs.contactRef} />
				</div>
			</Router>
		</>
	);
}

export default App;
