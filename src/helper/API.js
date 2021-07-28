import axios from "axios";
import { getToken } from "./MyFunc";

export const API = axios.create({
	baseURL: "http://192.168.1.101:2015/v1/",
	timeout: 1500,
	headers: {
		Authorization: "Blentek " + getToken(),
	},
});
