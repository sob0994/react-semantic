export const getToken = () => {
	const storage = localStorage.getItem("user-info");
	if (storage) {
		const data = JSON.parse(storage);
		return data.token;
	} else {
		return null;
	}
};
export const getStorage = (nama) => {
	const storage = localStorage.getItem(nama);
	if (storage) {
		const data = JSON.parse(storage);
		return data;
	} else {
		return null;
	}
};
