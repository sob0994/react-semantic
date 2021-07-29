import React from "react";
import MyLoader from "../components/loader/MyLoader";
import AppCode from "./AppCode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login/Login";

const App = () => {
	document.body.style.background = "#f0f0f0";
	const { app, routes } = AppCode();
	return (
		<Router>
			{app.isLoading ? (
				<MyLoader />
			) : !app.isLogin ? (
				<Login />
			) : (
				<Switch>
					{routes.map((data) => {
						return (
							<Route key={data.key} path={data.path}>
								{data.page}
							</Route>
						);
					})}
				</Switch>
			)}
		</Router>
	);
};

export default App;
