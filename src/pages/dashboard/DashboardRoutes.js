import Home from "../dashboardItem/Home";
import Tabkop from "../dashboardItem/Tabkop/Tabkop";

export const DashboardRoutes = [
	{ key: 1, path: "/tabkop", page: <Tabkop /> },
	{ key: 999, path: "/", page: <Home /> },
];
