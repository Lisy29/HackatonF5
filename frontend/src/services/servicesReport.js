import axios from "axios";
const URL_API = "http://localhost:3000/report";

// GET
export const getReports = async () => {
	try {
		const response = await axios.get(URL_API);
		return response.data;
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
};

// POST
export const createReport = async (data) => {
	try {
		const response = await axios.post(URL_API, data);
		return response.data;
	} catch (error) {
		console.error("Error creating report:", error);
		return null;
	}
};

// PUT
export const updateReport = async (id, data) => {
	try {
		const response = await axios.put(`${URL_API}/${id}`, data);
		return response.data;
	} catch (error) {
		console.error(`Error updating report with id ${id}:`, error);
	}
};

// DELETE
export const deleteReport = async (id) => {
	try {
		// Hacemos una solicitud DELETE a la API
		await axios.delete(`${URL_API}/${id}`);
	} catch (error) {
		console.error("Error deleting report:", error);
	}
};