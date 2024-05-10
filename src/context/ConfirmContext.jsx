import React, { createContext, useState } from "react";

const ConfirmContext = createContext();

const ConfirmProvider = ({ children }) => {
	const [confirmation, setConfirmation] = useState(false);
	const [selected, setSelected] = useState(null);

	const handleOpenConfirmation = () => {
		if (!selected) {
			alert("please select a tag");
		} else {
			setConfirmation(true);
		}
	};
	const handleCloseConfirmation = () => {
		setConfirmation(false);
	};

	return (
		<ConfirmContext.Provider
			value={{
				confirmation,
				handleOpenConfirmation,
				handleCloseConfirmation,
				setSelected,
				selected
			}}
		>
			{children}
		</ConfirmContext.Provider>
	);
};
export { ConfirmProvider, ConfirmContext };
