// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { CloseCircleOutline } from "react-ionicons";
import { TagContext } from "../context/TagContext";
import { CreateTagContext } from "../context/CreateTagContext";
import CreateTag from "./CreateTag";

import { db } from "../firebase/FirebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import Spinner from "./Spinner";
const TagList = ({ onSelect }) => {
	const [tags, setTags] = useState([]);
	const { isLoading, setIsLoading } = useContext(TagContext);
	useEffect(() => {
		setIsLoading(true);
		const timer = setTimeout(() => {
			onSnapshot(collection(db, "tags"), (snapshot) => {
				setTags(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
				setIsLoading(false);
			});
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const { handleCloseTagList } = useContext(TagContext);
	const { handleOpenCreateTag, openCreateTag } = useContext(CreateTagContext);
	const handleSelect = (item) => {
		onSelect(item);
	};

	if (openCreateTag)
		return (
			<>
				<CreateTag />
			</>
		);
	return (
		<section className="h-screen w-full -mt-60  dark:bg-black dark:bg-opacity-60 bg-opacity-60 backdrop-blur-lg bg-white transition ease-linear drop-shadow-2xl">
			<div className="absolute w-full bottom-24 py-5 border-t border-t-zinc-200 rounded-2xl px-5 text-slate-400 dark:bg-black bg-white">
				<div className="flex justify-between items-center">
					<h4 className="uppercase">expenses</h4>
					<span className="cursor-pointer hover:scale-110 ease-in transition-all">
						<CloseCircleOutline
							color="#4A5568"
							height="30px"
							width="30px"
							onClick={handleCloseTagList}
						/>
					</span>
				</div>
				<ul className="grid grid-cols-3 gap-x-5 sm:grid-cols-5 sm:grid-rows-3">
					<li
						onClick={handleOpenCreateTag}
						className=" h-max w-max py-2 px-4 rounded-3xl font-bold text-xl border  cursor-pointer hover:scale-110 transition-all ease-in hover:bg-slate-100"
					>
						+
					</li>
					{isLoading && <Spinner />}
					{!isLoading && (
						<>
							{tags.map((tag) => (
								<li
									key={tag.id}
									onClick={() => handleSelect(tag)}
									className=" hover:scale-110 transition-all ease-in flex justify-center items-center flex-col cursor-pointer "
								>
									<span>{tag.emoji}</span>
									<p>{tag.value}</p>
								</li>
							))}
						</>
					)}
				</ul>
			</div>
		</section>
	);
};

export default TagList;
