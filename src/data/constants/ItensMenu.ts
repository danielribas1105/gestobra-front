import { IconLogout } from "@tabler/icons-react"
import { Construction, FileText, Home, Truck, UserCircle2 } from "lucide-react"

// Menu web application
export const itemsMenu = [
	{
		title: "Home",
		url: "/home",
		icon: Home,
	},
	{
		title: "Obras",
		url: "/works",
		icon: Construction,
	},
	{
		title: "Veículos",
		url: "/cars",
		icon: Truck,
	},
	{
		title: "Usuários",
		url: "/users",
		icon: UserCircle2,
	},
	{
		title: "Relatórios",
		url: "/reports",
		icon: FileText,
	},
	{
		title: "Logout",
		url: "/",
		icon: IconLogout,
	},
]

// Menu landing page
export const menuLanding = [
	{
		title: "HOME",
		url: "/",
	},
	{
		title: "SOBRE NÓS",
		url: "/sobre-nos",
	},
	{
		title: "CONTATO",
		url: "/contato",
	},
]
