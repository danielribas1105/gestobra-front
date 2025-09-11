import { User } from "@/schemas/user"


const users: User[] = [
	{
		id: "f5ed9bca-b60f-4f3d-a001-5b2da372d05f",
		name: "Vinicius Nogueira",
		cpf: "123.456.789-00",
		email: "vini@gmail.com",
		phone: "(21) 99999-9999",
		profile: "admin",
		active: true,
		image_url: "/user/caminhao-basculante-cacamba.jpg",
	},
	{
		id: "236453da-0ce2-4ab9-8e87-d14eac902ad0",
		name: "Daniel Ribas",
		cpf: "123.456.789-00",
		email: "daniel@gmail.com",
		phone: "(21) 12345-6789",
		profile: "admin",
		active: true,
		image_url: "/user/caminhao-basculante-cacamba.jpg",
	},
	{
		id: "bf5e567f-99bd-4ccc-89c5-119ef28a433b",
		name: "Verônica",
		cpf: "123.456.789-00",
		email: "veronica@gmail.com",
		phone: "(21) 45673-1298",
		profile: "user",
		active: true,
		image_url: "/user/caminhao-basculante-cacamba.jpg",
	},
	{
		id: "a08d1f59-eca7-476a-98f2-76e8737d2114",
		name: "João Silva",
		cpf: "123.456.789-00",
		email: "joaozinho@gmail.com",
		phone: "(11) 99999-9999",
		profile: "driver",
		active: true,
		image_url: "/user/caminhao-basculante-cacamba.jpg",
	},
]

export default users
