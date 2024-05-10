// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePage = () => {
	return (
		<div className=" bg-white h-screen  dark:bg-black dark:text-white transition ease-linear drop-shadow-xl sm:max-w-lg mx-auto">
			<Header />
			<div className="flex justify-center items-center">
				<h1>profile</h1>
			</div>
			<Footer />
		</div>
	);
};

export default ProfilePage;
