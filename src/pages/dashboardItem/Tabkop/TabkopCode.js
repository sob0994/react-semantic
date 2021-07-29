import { useState, useEffect } from "react";
import { API } from "../../../helper/API";

const TabkopCode = () => {
	const [tabkopS, setTabkopS] = useState({
		items: 0,
		tabkop: [],
	});
	const [tabkopC, setTabkopC] = useState([]);
	const [paging, setPaging] = useState({
		active: 1,
		total: 0,
	});

	const getTabkop = () => {
		API.get("/tabkops")
			.then((data) => {
				console.log(data.data);
				setTabkopC(data.data.data.rows);
				setTabkopS({
					items: data.data.data.count || 0,
					tabkop: data.data.data.rows.slice(0, 25),
				});
				setPaging({
					...paging,
					total: Math.ceil(data.data.data.count / 25),
				});
			})
			.catch((err) => {
				console.log("Error: ", err);
			});
	};

	useEffect(() => {
		getTabkop();

		const interval = setInterval(() => {
			getTabkop();
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return { tabkopS, paging, tabkopC };
};

export default TabkopCode;
