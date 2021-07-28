import { Menus } from "./DashboardMenus";
import { AppContext, AppC } from "../../hook/app/AppContext";
import { useContext, useState } from "react";
import { getToken } from "../../helper/MyFunc";
const DashboardCode = () => {
	const { dispatch } = useContext(AppContext);
	const [myMenu, setMenu] = useState({
		wide: false,
		side: false,
	});
	const handleLogOut = () => {
		localStorage.removeItem("user-info");
		dispatch({ type: AppC.APP_LOAD });
		dispatch({ type: AppC.APP_LOGOUT });
		setTimeout(() => {
			dispatch({ type: AppC.APP_UNLOAD });
		}, 500);
	};
	const myToken = () => {
		console.log(getToken());
	};
	const hideMenu = () => {
		setMenu({ ...myMenu, wide: false });
	};
	const showMenu = () => {
		setMenu({ ...myMenu, wide: true });
	};
	const hideSide = () => {
		setMenu({ ...myMenu, side: false });
	};
	const showSide = () => {
		setMenu({ ...myMenu, side: true });
	};

	return {
		Menus,
		myMenu,
		hideMenu,
		showMenu,
		showSide,
		hideSide,
		handleLogOut,
		myToken,
	};
};

export default DashboardCode;
