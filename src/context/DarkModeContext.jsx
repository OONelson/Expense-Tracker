import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	const handleToggleDarkMode = () => {
		setDarkMode(!darkMode);
		document.documentElement.classList.toggle("dark");
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, handleToggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export { DarkModeProvider, DarkModeContext };
