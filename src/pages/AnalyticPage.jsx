// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Summary = () => {
		return (
		<section>
		<div className=" bg-white h-screen  dark:bg-black dark:text-white transition ease-linear drop-shadow-xl sm:max-w-lg mx-auto">
			<Header />
			<div className="flex justify-center items-center flex-col">
				<h1>Analytics</h1>
        <p className="text-3xl">working on implementing the chart...</p>
			</div>
		</div>
			<Footer />
		</section>
	);
};

export default Summary;
