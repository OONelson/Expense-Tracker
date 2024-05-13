// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, LogOutOutline, SunnyOutline } from "react-ionicons";
import { DarkModeContext } from "../context/DarkModeContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
const Header = () => {
	const { darkMode, handleToggleDarkMode } = useContext(DarkModeContext);

	const navigate= useNavigate();
	const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
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
