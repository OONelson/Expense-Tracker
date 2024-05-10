// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
	const [transactionAmount, setTransactionAmount] = useState(0);
	return (
		<TransactionContext.Provider
			value={{ transactionAmount, setTransactionAmount }}
		>
			{children}
		</TransactionContext.Provider>
	);
};

export { TransactionProvider, TransactionContext };
