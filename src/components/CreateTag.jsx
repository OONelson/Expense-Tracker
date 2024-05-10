// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { ArrowBackCircleOutline } from "react-ionicons";
import { db } from "../firebase/FirebaseConfig";
import { CreateTagContext } from "../context/CreateTagContext";
import { DarkModeContext } from "../context/DarkModeContext";
import { addDoc, collection } from "firebase/firestore";
import Spinner from "./Spinner";
import { TagContext } from "../context/TagContext";
const CreateTag = () => {
	const { handleCloseCreateTag } = useContext(CreateTagContext);
	const { darkMode } = useContext(DarkModeContext);
	const { isLoading, setIsLoading } = useContext(TagContext);
	const [tag, setTag] = useState({
		emoji: "",
		value: ""
	});
	const [isAdding, setIsAdding] = useState(false);
	// ADD TAG TO FIREBASE

	const addTag = (e) => {
		e.preventDefault();
		setIsLoading(false);
		setIsAdding(true);
		const newTag = {
			emoji: tag.emoji.trim(),
			value: tag.value.trim()
		};
		if (!tag.emoji || !tag.value) {
			setIsAdding(false);
			alert("emoji and name can not be empty");
			return;
		}
		setIsLoading(true);
		const colRef = collection(db, "tags");
		addDoc(colRef, newTag).then((docRef) => {
			const docId = docRef.id;
			console.log(docId);
			alert("tag created");
		});
		setIsLoading(false);
	};

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setTag((prev) => {
			return { ...prev, [name]: value };
		});
	};

	return (
		<section className="h-screen w-full -mt-60  dark:bg-black dark:bg-opacity-60 bg-opacity-60 backdrop-blur-lg bg-white transition ease-linear drop-shadow-2xl">
			<ArrowBackCircleOutline
				color={darkMode ? "#fff" : "#4A5568"}
				height="30px"
				width="30px"
				className={` cursor-pointer ml-8 ${
					darkMode ? "dark ionicon-color" : "ionicon-color"
				}`}
				onClick={handleCloseCreateTag}
			/>
			<div className="absolute w-full bottom-12 pt-5 border-t border-t-zinc-200 text-xl rounded-2xl pb-10 px-5 text-slate-400 dark:bg-black bg-white md:bottom-8">
				<form
					onSubmit={addTag}
					className="flex justify-center flex-col items-center"
				>
					<h4 className="my-8">new tag</h4>
					<input
						type="text"
						placeholder="🏠 (sticker)"
						name="emoji"
						value={tag.emoji}
						onChange={handleChange}
						className="border-b border-zinc-200 bg-transparent outline-none text-center my-8"
					/>
					<input
						type="text"
						placeholder="rent (name)"
						name="value"
						value={tag.value}
						onChange={handleChange}
						className="border-b border-zinc-200 bg-transparent outline-none text-center my-8"
					/>
					<button
						type="submit"
						className="flex justify-around space-x-3 items-center bg-black dark:bg-white text-white dark:text-black px-8 py-1.5 rounded-md hover:tracking-wider transition-all hover:shadow-md"
					>
						{isLoading && <Spinner />}
						<span>Confirm</span>
					</button>
				</form>
			</div>
		</section>
	);
};

export default CreateTag;
