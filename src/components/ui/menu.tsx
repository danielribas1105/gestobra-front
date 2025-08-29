import MenuItem from "./menu-item"
import { menuLanding } from "@/data/constants/ItensMenu"

export default function Menu() {
	return (
		<nav className="flex gap-6 items-center text-zinc-800 dark:text-zinc-300 font-medium">
			{menuLanding.map((item, index) => (
				<MenuItem key={index} href={item.url} item={item.title} />
			))}
		</nav>
	)
}
