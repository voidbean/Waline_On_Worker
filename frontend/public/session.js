// @waline/client uses this same record for authenticated comment requests.
export const USER_KEY = "WALINE_USER";
export function currentUser() {
	try {
		const user = JSON.parse(localStorage.getItem(USER_KEY));
		return typeof user?.token === "string" && user.token ? user : null;
	} catch {
		return null;
	}
}
