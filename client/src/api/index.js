import axios from "axios";

const API = axios.create({ baseURL: "https://react-pf-oliver.herokuapp.com/" });

export const sendMail = (message) => {
	API.post("/email", message);
};
