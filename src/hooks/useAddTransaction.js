import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

export const useAddTransaction = () => {

	const transactionCollectionRef = collection(db, "transactions");
	const { userID } = useGetUserInfo();

	const addTransaction = async ({
		emoji,
		value,
		transactionAmount
	})=>{
	await addDoc(transactionCollectionRef, {
		userID,
		emoji,
		value,
		transactionAmount,
		
		createdAt: serverTimestamp()
	})

}
	return { addTransaction };
};
