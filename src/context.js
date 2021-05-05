import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [scrollPosition, setScrollPosition] = useState(window.scrollY);

	const scrollFunction = () => {
		setScrollPosition(window.scrollY);
	};

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

				scrollPosition,
				setScrollPosition,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
