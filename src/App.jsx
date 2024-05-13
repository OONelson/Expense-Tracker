// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnalyticPage from "./pages/AnalyticPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { DarkModeProvider } from "./context/DarkModeContext";
import { AddExpenseProvider } from "./context/AddExpenseContext";
import { TagProvider } from "./context/TagContext";
import { CreateTagProvider } from "./context/CreateTagContext";
import { ConfirmProvider } from "./context/ConfirmContext";
import { TransactionProvider } from "./context/TransactionContext";

const App = () => {
	return (
		<DarkModeProvider>
			<AddExpenseProvider>
				<ConfirmProvider>
					<TagProvider>
						<CreateTagProvider>
							<TransactionProvider>
								<Router>
										<Routes>
											<Route exact path="/" element={<Login />} />
											<Route path="/home" element={<HomePage />} />
											<Route path="/analytics" element={<AnalyticPage />} />
											<Route path="/profile" element={<ProfilePage />} />
											<Route path="*" element={<Error />} />
										</Routes>
									</Router>
							</TransactionProvider>
						</CreateTagProvider>
					</TagProvider>
				</ConfirmProvider>
			</AddExpenseProvider>
		</DarkModeProvider>
	);
};

export default App;
