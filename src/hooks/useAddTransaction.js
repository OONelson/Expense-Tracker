import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
	const transactionCollectionRef = collection(db, "transactions");
	const { userID } = useGetUserInfo();
	const addTransaction = async ({ description, transactionAmount }) => {
		await addDoc(transactionCollectionRef, {
			userID,
			description,
			transactionAmount,

			createdAt: serverTimestamp()
		});
	};
	return { addTransaction };
};
