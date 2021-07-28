import { useContext, useEffect, useState } from "react";
import { AppContext, AppC } from "../../hook/app/AppContext";
import { API } from "../../helper/API";

const LoginCode = () => {
	const { dispatch } = useContext(AppContext);
	const [error, setError] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({
		username: "",
		password: "",
	});

	const validate = (data) => {
		let err = {};
		if (data.username === "") {
			err.username = "Username wajib diisi";
		}
		if (data.password === "") {
			err.password = "Password wajib diisi";
		}
		return err;
	};

	const handleSubmit = (e) => {
		setLoading(true);
		const datas = validate(data);
		setError(datas);
		setIsSubmit(true);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};

	useEffect(() => {
		const cekError = () => {
			if (isSubmit) {
				setLoading(true);
				if (Object.keys(error).length > 0) {
					// console.log("Login Gagal", Object.keys(error).length);
					setLoading(false);
				} else {
					const dataset = { username: data.username, key: data.password };
					API.post("/auth/login", dataset)
						.then((res) => {
							if (res.data.error) {
								// error true
								setError({ ...error, status: res.data.msg });
								setLoading(false);
							} else {
								// error false
								const user = {
									token: res.data.data.token,
									data: res.data.data.data,
								};
								// console.log(user);
								localStorage.setItem("user-info", JSON.stringify(user));

								dispatch({ type: AppC.APP_LOAD });
								dispatch({ type: AppC.APP_LOGIN });
								setLoading(false);
							}
						})
						.catch((err) => {
							setError({ ...error, status: "Server Error" });
							setLoading(false);
						});

					setTimeout(() => {
						dispatch({ type: AppC.APP_UNLOAD });
					}, 500);
				}
			}
		};
		cekError();
		setIsSubmit(false);
	}, [isSubmit, error, data, dispatch]);

	return { error, loading, handleChange, handleSubmit };
};

export default LoginCode;
