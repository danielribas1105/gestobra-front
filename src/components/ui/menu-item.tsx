import Link from "next/link"

interface MenuItemProps {
	href: string
	item: string
}

export default function MenuItem({ href, item }: MenuItemProps) {
	return (
		<Link
			href={href}
			className="text-lg uppercase hover:underline hover:decoration-4 hover:decoration-green-400 hover:underline-offset-8"
		>
			{item}
		</Link>
	)
}
