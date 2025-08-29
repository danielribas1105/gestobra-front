import Link from "next/link"
import Image from "next/image"
import { IconCircleFilled } from "@tabler/icons-react"
import Work from "@/data/models/Work"

export interface WorkCardProps {
	work: Work
}

export default function WorkCard({ work }: WorkCardProps) {
	return (
		<Link href={`/obras/${work.id}`}>
			<article className="w-56 h-64 border-2 rounded-lg p-2 flex flex-col gap-2">
				<div className="relative w-full h-36 flex justify-center overflow-hidden">
					<Image src={work.imagemURL} alt="Foto da obra" fill className="object-cover rounded-lg" />
				</div>
				<header>{work.nome}</header>
				<section>Código: {work.id}</section>
				<footer className="flex items-center gap-1">
					<IconCircleFilled
						size={16}
						color={work.status === "ativa" ? "#00FF00" : work.status === "inativa" ? "#FF0000" : "#FF0"}
					/>
					<span className="text-sm uppercase">{work.status}</span>
				</footer>
			</article>
		</Link>
	)
}
