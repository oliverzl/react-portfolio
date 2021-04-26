import anime from "animejs/lib/anime.es";
import React, { useState, useContext } from "react";
import App from "./App";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [testing, setTesting] = useState(false);

	const [scrollPosition, setScrollPosition] = useState(window.scrollY);

	const scrollFunction = () => {
		setScrollPosition(window.scrollY);
	};

	const [scrollAnimation, setScrollAnimation] = useState({
		skills: false,
		projects: false,
		about: false,
		contact: false,
	});
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isMainbarOpen, setIsMainbarOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const openMainbar = () => {
		setIsMainbarOpen(true);
	};

	const closeMainbar = () => {
		setIsMainbarOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				openSidebar,
				closeSidebar,
				openMainbar,
				closeMainbar,
				testing,
				setTesting,
				scrollAnimation,
				setScrollAnimation,

				scrollPosition,
				setScrollPosition,
				scrollFunction,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
