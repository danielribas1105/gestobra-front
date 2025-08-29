import Link from "next/link"
import Image from "next/image"
import { IconCircleFilled } from "@tabler/icons-react"
import User from "@/data/models/User"

export interface UserCardProps {
	user: User
}

export default function UserCard({ user }: UserCardProps) {
	return (
		<Link href={`/obras/${user.id}`}>
			<article className="w-56 h-64 border-2 rounded-lg p-2 flex flex-col gap-2">
				<div className="relative w-full h-36 flex justify-center overflow-hidden">
					<Image src={user.imagemURL} alt="Avatar usuário" fill className="object-cover rounded-lg" />
				</div>
				<header>{user.nome}</header>
				<section>Código: {user.id}</section>
				<footer className="flex items-center gap-1">
					<IconCircleFilled size={16} color={user.status === "ativo" ? "#00FF00" : "#FF0000"} />
					<span className="text-sm uppercase">{user.status}</span>
				</footer>
			</article>
		</Link>
	)
}
