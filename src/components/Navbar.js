import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import Contact from "../pages/Contact";

const Navbar = ({
	scrollHome,
	scrollAbout,
	scrollSkills,
	scrollProjects,
	scrollContact,
}) => {
	const { openSidebar, openMainbar } = useGlobalContext();

	return (
		<>
			<nav className="nav">
				<div onClick={scrollHome}>
					<Link className="nav-link" to="/">
						<img src={logo} alt="" className="navlogo" />
					</Link>
					<div className="whiteline"></div>
				</div>
				<ul className="nav-ul">
					<li onClick={scrollSkills} className="btn1">
						<Link className="nav-link" to="/skills">
							Skills
						</Link>
						<div className="whiteline"></div>
					</li>
					<li onClick={scrollProjects} className="btn1">
						<Link className="nav-link" to="/projects">
							Projects
						</Link>
						<div className="whiteline"></div>
					</li>

					<li onClick={scrollAbout} className="btn1">
						<Link className="nav-link" to="/about">
							About
						</Link>
						<div className="whiteline"></div>
					</li>
					<li onClick={scrollContact} className="btn1">
						<Link className="nav-link" to="/contact">
							Contact
						</Link>
						<div className="whiteline"></div>
					</li>
				</ul>
				<div className="nav-logo"></div>
				<FaBars onClick={openSidebar} className="mobile-menu" />
			</nav>
		</>
	);
};

export default Navbar;
