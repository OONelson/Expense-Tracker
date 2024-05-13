// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router';
const AddExpenseContext = createContext();

const AddExpenseProvider = ({ children }) => {
	const [popupAddExpense, setPopupAddExpense] = useState(false);
	// const location= useLocation();
	// const navigate=useNavigate()
	const handleOpenPopup = () => {
		// if(location.pathname !== '/'){
		// 	navigate.push('/');
		// }
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
