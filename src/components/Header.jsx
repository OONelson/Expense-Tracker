// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Moon, LogOutOutline, SunnyOutline } from "react-ionicons";
import { DarkModeContext } from "../context/DarkModeContext";
// import { useContext } from "react";

const Header = () => {
	const { darkMode, handleToggleDarkMode } = useContext(DarkModeContext);
	const logout = () => {
		localStorage.clear();
		window.location.reload();
	};
	return (
		<header className="flex items-center justify-between flex-row px-2  sm:pt-12 pb-10 ">
			<div
				className="flex items-center justify-center cursor-pointer"
				onClick={handleToggleDarkMode}
			>
				{darkMode ? (
					<SunnyOutline color={"#00000"} height="26px" width="26px" />
				) : (
					<Moon color={"#00000"} height="26px" width="26px" />
				)}
			</div>

			<h2 className="text-lg font-semibold">EXPENSES</h2>
			<LogOutOutline
				className="cursor-pointer"
				color={"#00000"}
				height="26px"
				width="26px"
				onClick={logout}
			/>
		</header>
	);
};

export default Header;
