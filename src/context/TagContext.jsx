import React, { createContext, useState } from "react";
// import TagList from "../components/TagList";

const TagContext = createContext();

const TagProvider = ({ children }) => {
	const [isTagOpen, setIsTagOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const handleOpenTagList = () => {
		setIsTagOpen(true);
	};
	const handleCloseTagList = () => {
		setIsTagOpen(false);
	};
	return (
		<TagContext.Provider
			value={{
				isTagOpen,
				handleOpenTagList,
				handleCloseTagList,
				isLoading,
				setIsLoading
			}}
		>
			{children}
			{/* {isTagOpen && <TagList />} */}
		</TagContext.Provider>
	);
};
export { TagProvider, TagContext };
