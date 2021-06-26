import * as api from "../api";

export const sendMail =
	({ message }) =>
	async () => {
		try {
			api.sendMail(message);
		} catch (error) {
			console.log(error);
		}
	};
