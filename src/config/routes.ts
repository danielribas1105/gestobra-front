import { UUID } from "crypto";

export const apiRoutes = {
	auth: {
		login: "/home",
		refresh: "/",
	},
	user: {
		getAll: "/user"
	},
	car: {
		getAll: "/car",
		getByID: (params: UUID) => `/car/${params}`
	},
	work: {
		getAll: "/work",
		getByID: (params: UUID) => `/work/${params}`
	},
	job: {
		getAll: "/job",
		getByID: (params: UUID) => `/job/${params}`
	},
}
