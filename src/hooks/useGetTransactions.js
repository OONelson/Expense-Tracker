import { useContext, useEffect, useState } from "react";
import {
	query,
	collection,
	where,
	orderBy,
	onSnapshot
} from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";
import { TagContext } from "../context/TagContext";
// import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
	const [transactions, setTransactions] = useState([]);
	const [transactionTotal, setTransactionTotal] = useState({
		expenses: 0.0
	});
	const [isTransactionAvailable, setIsTransactionAvailable] = useState(false);
	const { setIsLoading } = useContext(TagContext);

	const transactionCollectionRef = collection(db, "transactions");
	// const { userID } = useGetUserInfo();

	const getTransactions = async () => {
		let unsubscribe;
		try {
			const queryTransactions = query(
				transactionCollectionRef
				// where("userID", "==", userID),
				// orderBy("createdAt")
			);

			unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
				let docs = [];
				let totalExpenses = 0;

				snapshot.forEach((doc) => {
					const data = doc.data();
					const id = doc.id;

					docs.push({ ...data, id });

					if (data.transactionType === "expense") {
						totalExpenses += Number(data.transactionAmount);
					}
					console.log(totalExpenses);
				});

				setTransactions(docs);
				setIsTransactionAvailable(transactions);
				setIsLoading(false);
				setTransactionTotal({
					expenses: totalExpenses
				});
			});
		} catch (err) {
			console.error(err);
		}
		return () => unsubscribe();
	};

	useEffect(() => {
		getTransactions();
	}, []);

	return { transactions, transactionTotal, isTransactionAvailable };
};
