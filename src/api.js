import axios from "axios";

const SERVER_URL = "http://localhost:3000/api";

export const getCords = (data) => axios.get(`${SERVER_URL}/get_coordinates`, data);
export const getDistance = (data) => axios.get(`${SERVER_URL}/get_distance`, data);
export const getAddress = (data) => axios.get(`${SERVER_URL}/get_address`, data);