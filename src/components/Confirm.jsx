// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { LockClosedOutline, ArrowForwardOutline } from "react-ionicons";
import { ConfirmContext } from "../context/ConfirmContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { useAddTransaction } from "../hooks/useAddTransaction";
const Confirm = ({ transactionAmount }) => {
	const { handleCloseConfirmation, selected } = useContext(ConfirmContext);
	const { darkMode } = useContext(DarkModeContext);
	const { addTransaction, description } = useAddTransaction;

	return (
		<section className="h-screen w-full -mt-60  dark:bg-black dark:bg-opacity-60 bg-opacity-60 backdrop-blur-lg bg-white transition ease-linear drop-shadow-2xl">
			<article className="absolute w-full bottom-24 pt-5 border-t border-t-zinc-200 rounded-2xl px-5 text-slate-400 dark:bg-black bg-white">
				<h3 className="text-3xl text-black font-bold dark:text-white">
					Confirm
				</h3>
				<div className="flex justify-between items-center space-x-5 py-5">
					<LockClosedOutline
						color="#4A5568"
						height="30px"
						width="30px"
						className="bg-slate-200 p-3 rounded-3xl hover:bg-slate-300 transition-all ease-in"
					/>
					<p className="leading-5 text-md ">
						Help us ensure accuracy by reviewing your expense before confirming
						because you can not edit transactions once made.
					</p>
				</div>
				<div className="text-black text-2xl flex justify-center items-center space-x-4 py-4">
					<span className="font-bold dark:text-white">
						${transactionAmount}
					</span>
					<ArrowForwardOutline
						color={darkMode ? "#fff" : "#000"}
						height="30px"
						width="30px"
						className={`${darkMode ? "dark ionicon-color" : "ionicon-color"}`}
					/>
					{selected && (
						<div className="flex flex-row space-x-3">
							<span>{selected.emoji}</span>
							<span>{selected.value}</span>
						</div>
					)}
				</div>
				<div className="flex justify-center items-center space-x-4 pb-8 pt-5">
					<button
						className="bg-red-200 dark:bg-red-400 px-8 py-2 rounded-md hover:tracking-wider transition-all hover:shadow-md text-black"
						onClick={handleCloseConfirmation}
					>
						Cancel
					</button>
					<button
						className="bg-black dark:bg-white text-white dark:text-black px-8 py-2 rounded-md hover:tracking-wider transition-all hover:shadow-md"
						onClick={addTransaction}
					>
						<span>Confirm</span>
					</button>
				</div>
			</article>
		</section>
	);
};

export default Confirm;
