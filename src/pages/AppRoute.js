import Dashboard from "./dashboard/Dashboard";
import Register from "./register/Register";

export const routes = [
	{ key: 998, path: "/new-account", page: <Register /> },
	{ key: 999, path: "/", page: <Dashboard /> },
];
