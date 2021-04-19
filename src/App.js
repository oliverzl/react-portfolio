import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import anime from "animejs/lib/anime.es.js";

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

function App() {
	const refs = {
		homeRef: useRef(null),
		aboutRef: useRef(null),
		skillsRef: useRef(null),
		projectsRef: useRef(null),
		contactRef: useRef(null),
	};

	const scrollRefs = {
		scrollHome: function () {
			return refs.homeRef.current.scrollIntoView();
		},
		scrollAbout: function () {
			return refs.aboutRef.current.scrollIntoView();
		},
		scrollSkills: function () {
			return refs.skillsRef.current.scrollIntoView();
		},
		scrollProjects: function () {
			return refs.projectsRef.current.scrollIntoView();
		},
		scrollContact: function () {
			return refs.contactRef.current.scrollIntoView();
		},
	};

	return (
		<>
			<Router>
				<div className="scroll-container">
					<Navbar {...scrollRefs} />
					<Sidebar />
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
