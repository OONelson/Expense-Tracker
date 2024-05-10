// eslint-disable-next-line no-unused-vars
import React from "react";

import Header from "../components/Header";
import AvailableBalance from "../components/AvailableBalance";
import Footer from "../components/Footer";
import Transactions from "../components/Transactions";

const HomePage = () => {
	// console.log(import.meta.env.VITE_FIREBASE_API_KEY)
	return (
		<div className="relative bg-white h-screen flex flex-col justify-between dark:bg-black dark:text-white transition ease-linear drop-shadow-xl sm:max-w-lg mx-auto">
			<div className=" h-full flex-1 ">
				<Header />
				<AvailableBalance />
				<Transactions />

			</div>
			<Footer />
		</div>
	);
};

export default HomePage;
