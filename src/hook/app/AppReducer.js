export const AppReducer = (state, action) => {
	switch (action.type) {
		case AppCons.APP_LOGIN:
			return { ...state, isLogin: true };

		case AppCons.APP_LOGOUT:
			return { ...state, isLogin: false };

		case AppCons.APP_LOAD:
			return { ...state, isLoading: true };

		case AppCons.APP_UNLOAD:
			return { ...state, isLoading: false };

		default:
			return { ...state };
	}
};

export const AppCons = {
	APP_LOGIN: "APP_LOGIN",
	APP_LOGOUT: "APP_LOGOUT",
	APP_LOAD: "APP_LOAD",
	APP_UNLOAD: "APP_UNLOAD",
};
