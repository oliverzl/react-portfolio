import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

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

function App() {
	const { setScrollPosition } = useGlobalContext();

	const refs = {
		homeRef: useRef(null),
		aboutRef: useRef(null),
		skillsRef: useRef(null),
		projectsRef: useRef(null),
		contactRef: useRef(null),
	};

	useEffect(() => {
		window.onscroll = () => {
			setScrollPosition(window.scrollY);
		};
	}, []);

	const scrollRefs = {
		scrollHome() {
			refs.homeRef.current.scrollIntoView();
		},
		scrollAbout() {
			refs.aboutRef.current.scrollIntoView();
		},
		scrollSkills() {
			refs.skillsRef.current.scrollIntoView();
		},
		scrollProjects() {
			refs.projectsRef.current.scrollIntoView();
		},
		scrollContact() {
			refs.contactRef.current.scrollIntoView();
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
