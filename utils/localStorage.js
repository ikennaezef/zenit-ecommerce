export const getFromStorage = (key) => {
	if (localStorage.getItem(key) && typeof key === "string") {
		try {
			return JSON.parse(localStorage.getItem(key));
		} catch {
			return localStorage.getItem(key);
		}
	} else {
		console.log("Invalid key");
		return null;
	}
};

export const setToStorage = (key, value) => {
	if (typeof key === "string") {
		typeof value === "object"
			? localStorage.setItem(key, JSON.stringify(value))
			: localStorage.setItem(key, value);
	}
};
