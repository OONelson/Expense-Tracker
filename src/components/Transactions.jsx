// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { useGetTransactions } from "../hooks/useGetTransactions";
import { TagContext } from "../context/TagContext";
import Spinner from "./Spinner";

const Transactions = () => {
	const { transactions, isTransactionAvailable } = useGetTransactions();

	const { isLoading } = useContext(TagContext);

	return (
		<div className="flex justify-center items-center pt-10">
			{!isTransactionAvailable && !isLoading ? (
				<div>
					<p className="text-slate-400 ">No expense records yet.</p>
				</div>
			) : (
				<ul>
					{isLoading ? (
						<Spinner />
					) : (
						<>
							{transactions.map((transaction) => {
								const { index, description, transactionAmount } = transaction;
								return (
									<li key={index}>
										<div>{description}</div>
										<span>-{transactionAmount}$</span>
									</li>
								);
							})}
						</>
					)}
				</ul>
			)}
		</div>
	);
};

export default Transactions;
