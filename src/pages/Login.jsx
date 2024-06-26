// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const loginWithGoogle = async () => {
		const results =await signInWithPopup(auth, provider);
		const authInfo={
			userID: results.user.uid,
			name: results.user.displayName,
			profilePhoto:results.user.photoURL,
			isAuth: true,
		}
		localStorage.setItem("auth", JSON.stringify(authInfo))
		navigate('/home')
		
	};
	return (
				<section className="bg-stone-200 ">
					<div className="h-full px-5 bg-stone-100 drop-shadow-xl sm:max-w-lg mx-auto">
						<h1 className="text-2xl font-semibold py-2">
							Daily Expense Tracker
						</h1>
						<div className="h-screen flex justify-start items-center flex-col">
							<h3 className="pt-16 text-xl font-medium pb-10">
								Track and analyze your expense today.
							</h3>
							<p className="text-slate-400 pb-12">
								offer a way to keep track of your financial expenses in a
								convenient and organized way. It typically allows you to input
								information about your expenses and provides tools for analyzing
								and categorizing this information to help you better understand
								your spending habits.
							</p>
							<button
								className="border border-zinc-800 px-6 py-2 flex items-center justify-between space-x-5 "
								onClick={loginWithGoogle}
							>
								<svg
									stroke="currentColor"
									fill="currentColor"
									version="1.1"
									x="0px"
									y="0px"
									viewBox="0 0 48 48"
									className="h-8 w-8"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill="#FFC107"
										d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
									c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
									c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
									></path>
									<path
										fill="#FF3D00"
										d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
									C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
									></path>
									<path
										fill="#4CAF50"
										d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
									c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
									></path>
									<path
										fill="#1976D2"
										d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
									c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
									></path>
								</svg>
								<span className="hover:scale-110 transition-all ease-in">
									Login with Google
								</span>
							</button>
						</div>
					</div>
				</section>
	);
};

export default Login;
