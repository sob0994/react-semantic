import { useContext, useEffect } from "react";
import { AppContext, AppC } from "../hook/app/AppContext";
import { routes } from "./AppRoute";

const AppCode = () => {
	const { app, dispatch } = useContext(AppContext);

	useEffect(() => {
		const cekStorage = () => {
			const userStore = localStorage.getItem("user-info");
			if (userStore) {
				console.log(JSON.parse(userStore));
				dispatch({ type: AppC.APP_LOAD });
				dispatch({ type: AppC.APP_LOGIN });
			} else {
				dispatch({ type: AppC.APP_LOAD });
				dispatch({ type: AppC.APP_LOGOUT });
			}
		};

		cekStorage();
		setTimeout(() => {
			dispatch({ type: AppC.APP_UNLOAD });
		}, 500);
	}, [dispatch]);

	return { app, routes };
};

export default AppCode;
