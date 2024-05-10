// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

const AddExpenseContext = createContext();

const AddExpenseProvider = ({ children }) => {
	const [popupAddExpense, setPopupAddExpense] = useState(false);

	const handleOpenPopup = () => {
		setPopupAddExpense(true);
	};
	const handleClosePopup = () => {
		setPopupAddExpense(false);
	};
	return (
		<AddExpenseContext.Provider
			value={{ popupAddExpense, handleOpenPopup, handleClosePopup }}
		>
			{children}
		</AddExpenseContext.Provider>
	);
};

export { AddExpenseProvider, AddExpenseContext };
